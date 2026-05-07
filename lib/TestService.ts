/**
 * TestService.ts
 * Conversión de TestAdaptativo.java a TypeScript
 * Gestiona sesiones activas y lógica de tests adaptativo
 */

import {
  Pregunta,
  TestSession,
  Respuesta,
  TestResult,
  DificultadEnum,
  AnswerResponse,
} from './types';
import {
  evaluarDesempeño,
  identificarConceptosDebiles,
  obtenerSeccion,
  SUGERENCIAS_ESTUDIO,
} from './conceptMapping';
import { BetsEAC8Service } from './BetsEAC8Service';

// Almacenamiento en memoria de sesiones (en producción usar BD)
const sessionsStore: Map<string, TestSession> = new Map();
const resultsStore: Map<string, TestResult> = new Map();

export class TestService {
  /**
   * Listar todos los tests disponibles
   */
  static obtenerTests() {
    return [
      { id: 1, name: 'Conceptos SQL', category: 'BaseDatos', totalQuestions: 30 },
      {
        id: 2,
        name: 'PostgreSQL Básico',
        category: 'BaseDatos',
        totalQuestions: 30,
      },
      {
        id: 3,
        name: 'Consultas Avanzadas',
        category: 'BaseDatos',
        totalQuestions: 30,
      },
      { id: 4, name: 'Transacciones', category: 'BaseDatos', totalQuestions: 30 },
      { id: 5, name: 'Hibernate ORM', category: 'BaseDatos', totalQuestions: 30 },
      {
        id: 6,
        name: 'Básicos de Java',
        category: 'Programación/Teoría',
        totalQuestions: 30,
      },
      { id: 7, name: 'OOP', category: 'Programación/Teoría', totalQuestions: 30 },
      {
        id: 8,
        name: 'Excepciones',
        category: 'Programación/Teoría',
        totalQuestions: 30,
      },
      {
        id: 9,
        name: 'Colecciones',
        category: 'Programación/Teoría',
        totalQuestions: 30,
      },
      {
        id: 10,
        name: 'Hibernate en Programación',
        category: 'Programación/Teoría',
        totalQuestions: 30,
      },
      {
        id: 11,
        name: 'BetsEAC8 - Test Completo',
        category: 'Programación/EACs',
        totalQuestions: 30,
      },
    ];
  }

  /**
   * Iniciar nuevo test (crea sesión)
   */
  static iniciarTest(testId: number, userName: string, dificultad: DificultadEnum) {
    const sessionId = this.generarUUID();

    let preguntas: Pregunta[];

    // Para test 11 (BetsEAC8), usar el servicio específico
    if (testId === 11) {
      preguntas = BetsEAC8Service.obtener30PreguntasShuffled();
    } else {
      // Para otros tests, usar preguntas de ejemplo (en producción, cada test tendría sus preguntas)
      preguntas = this.obtenerPreguntasDeTest(testId, dificultad);
    }

    const session: TestSession = {
      sessionId,
      testId,
      userName,
      difficulty: dificultad,
      startTime: Date.now(),
      totalQuestions: preguntas.length,
      currentQuestion: 1,
      answers: [],
      questions: preguntas,
      completed: false,
    };

    sessionsStore.set(sessionId, session);

    return {
      sessionId,
      testId,
      userName,
      difficulty: dificultad,
      totalQuestions: preguntas.length,
      currentQuestion: 1,
      questions: preguntas,
    };
  }

  /**
   * Responder una pregunta
   */
  static responderPregunta(
    testId: number,
    sessionId: string,
    questionId: number,
    answer: 'a' | 's' | 'd' | 'f'
  ): AnswerResponse | null {
    const session = sessionsStore.get(sessionId);
    if (!session) return null;

    const pregunta = session.questions.find((p) => p.questionId === questionId);
    if (!pregunta) return null;

    const isCorrect = pregunta.correctAnswer === answer;

    // Registrar respuesta
    const respuesta: Respuesta = {
      sessionId,
      questionId,
      userAnswer: answer,
      isCorrect,
      timestamp: Date.now(),
    };

    session.answers.push(respuesta);
    session.currentQuestion = Math.min(session.currentQuestion + 1, session.totalQuestions + 1);

    // Verificar si completado
    if (session.currentQuestion > session.totalQuestions) {
      session.completed = true;
      this.generarResultados(sessionId);
    }

    return {
      correct: isCorrect,
      explanation: pregunta.explanation,
      concept: pregunta.concept,
      nextQuestion: session.currentQuestion,
      progress: {
        answered: session.answers.length,
        total: session.totalQuestions,
      },
    };
  }

  /**
   * Obtener resultados de una sesión completada
   */
  static obtenerResultados(sessionId: string) {
    return resultsStore.get(sessionId) || null;
  }

  /**
   * Generar resultados finales
   */
  private static generarResultados(sessionId: string) {
    const session = sessionsStore.get(sessionId);
    if (!session) return;

    const correctas = session.answers.filter((a) => a.isCorrect).length;
    const total = session.totalQuestions;
    const porcentaje = Math.round((correctas / total) * 100);

    // Identificar respuestas incorrectas con sus conceptos
    const respuestasIncorrectas = session.answers
      .filter((a) => !a.isCorrect)
      .map((a) => {
        const pregunta = session.questions.find((p) => p.questionId === a.questionId);
        return { concept: pregunta?.concept || 'Desconocido' };
      });

    const conceptosDebiles = identificarConceptosDebiles(respuestasIncorrectas);
    const { evaluation } = evaluarDesempeño(porcentaje);

    // Generar sugerencias
    const suggestions: Record<string, string> = {};
    conceptosDebiles.forEach((concept) => {
      const sugerencia = SUGERENCIAS_ESTUDIO[concept];
      if (sugerencia) {
        suggestions[concept] = sugerencia;
      }
    });

    const resultado: TestResult = {
      sessionId,
      testId: session.testId,
      userName: session.userName,
      score: correctas,
      totalQuestions: total,
      percentage: porcentaje,
      evaluation,
      weakConcepts: conceptosDebiles,
      suggestions,
      completedAt: Date.now(),
    };

    resultsStore.set(sessionId, resultado);
  }

  /**
   * Obtener sección de EAC8-Conceptos.md
   */
  static obtenerSeccionEAC8(concept: string): string | null {
    return obtenerSeccion(concept);
  }

  /**
   * Obtener preguntas para un test específico (excepto BetsEAC8)
   * En producción, esto vendría de una BD o archivo
   */
  private static obtenerPreguntasDeTest(
    testId: number,
    dificultad: DificultadEnum
  ): Pregunta[] {
    // Preguntas de ejemplo para tests no-EAC8
    // En producción, cargarías desde BD o archivos JSON
    const preguntasEjemplo: Pregunta[] = [
      {
        questionId: 1,
        text: '¿Cuál es la sintaxis correcta para SELECT en SQL?',
        options: {
          a: 'SELECT * FROM tabla WHERE condición',
          s: 'GET EVERYTHING FROM tabla WHEN condición',
          d: 'FETCH * IN tabla FOR condición',
          f: 'RETRIEVE FROM tabla IF condición',
        },
        correctAnswer: 'a',
        messageOK: '✅ Correcto.',
        messageError: '❌ Incorrecto.',
        explanation: 'SELECT es la palabra clave en SQL para recuperar datos.',
        concept: 'SQL Básico',
        difficulty: 1,
      },
      {
        questionId: 2,
        text: '¿Qué es una clave primaria?',
        options: {
          a: 'Una contraseña de la base de datos',
          s: 'Un identificador único para cada fila en una tabla',
          d: 'Una permiso de acceso a la BD',
          f: 'Un backup de seguridad',
        },
        correctAnswer: 's',
        messageOK: '✅ Correcto.',
        messageError: '❌ Incorrecto.',
        explanation: 'La clave primaria (PRIMARY KEY) identifica unívocamente cada fila.',
        concept: 'Diseño de BD',
        difficulty: 1,
      },
    ];

    // Repetir para llegar a 30 preguntas
    const repetidas: Pregunta[] = [];
    for (let i = 0; i < 30; i++) {
      const pregunta = { ...preguntasEjemplo[i % preguntasEjemplo.length] };
      pregunta.questionId = i + 1;
      repetidas.push(pregunta);
    }

    return repetidas;
  }

  /**
   * Generar UUID v4
   */
  private static generarUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
