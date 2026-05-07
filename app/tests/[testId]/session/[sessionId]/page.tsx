'use client';

/**
 * Página: tests/[testId]/session/[sessionId]/page.tsx
 * Muestra el test activo con preguntas
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pregunta, TestSession } from '@/lib/types';
import QuestionDisplay from '@/components/QuestionDisplay';

interface Tema {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
}

export default function TestSessionPage({
  params,
}: {
  params: Promise<{ testId: string; sessionId: string }>;
}) {
  const router = useRouter();
  const [testIdState, setTestIdState] = useState<string | null>(null);
  const [sessionIdState, setSessionIdState] = useState<string | null>(null);
  const [sessionData, setSessionData] = useState<TestSession | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answering, setAnswering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, 'a' | 's' | 'd' | 'f'>>({});
  const [selectedOption, setSelectedOption] = useState<'a' | 's' | 'd' | 'f' | null>(null);
  const [confirmedAnswer, setConfirmedAnswer] = useState<'a' | 's' | 'd' | 'f' | null>(null);
  const [difficulty, setDifficulty] = useState<'BAJA' | 'MEDIA' | 'ALTA'>('MEDIA');
  const [showMenu, setShowMenu] = useState(false);
  const [menuMode, setMenuMode] = useState<'main' | 'difficulty' | 'other-test'>('main');
  const [temas, setTemas] = useState<Tema[]>([]);
  const [userName, setUserName] = useState<string>('');

  // Resolver params
  useEffect(() => {
    params.then((p) => {
      setTestIdState(p.testId);
      setSessionIdState(p.sessionId);

      // Recuperar userName desde localStorage
      const sessionData = JSON.parse(localStorage.getItem(`session_${p.sessionId}`) || '{}');
      if (sessionData.userName) {
        setUserName(sessionData.userName);
      }
    });
  }, [params]);

  // Limpiar confirmedAnswer y selectedOption cuando cambia de pregunta
  useEffect(() => {
    setSelectedOption(null);
    setConfirmedAnswer(null);
  }, [currentQuestionIndex]);

  // Resetear índice cuando se carga un nuevo test
  useEffect(() => {
    if (testIdState && sessionIdState) {
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setConfirmedAnswer(null);
    }
  }, [testIdState, sessionIdState]);

  // Cargar temas
  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const response = await fetch('/data/temas.json');
        if (!response.ok) throw new Error('Temas no encontrados');
        const data = await response.json();
        setTemas(data);
      } catch (err) {
        console.error('Error cargando temas:', err);
      }
    };
    fetchTemas();
  }, []);

  // Cargar datos de la sesión
  useEffect(() => {
    if (!testIdState || !sessionIdState) return;

    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/data/preguntas-${testIdState}.json`);
        if (!response.ok) throw new Error('Preguntas no encontradas');

        const data = await response.json();

        // Cargar todas las 30 preguntas sin filtrar por dificultad
        const filteredQuestions = data;

        // Transformar respuesta al formato esperado
        const sampleQuestions: Pregunta[] = filteredQuestions.map((q: any) => ({
          questionId: q.id,
          text: q.texto,
          difficulty: q.dificultad as 1 | 2 | 3,
          options: {
            a: q.opciones[0],
            s: q.opciones[1],
            d: q.opciones[2],
            f: q.opciones[3]
          },
          correctAnswer: q.respuestaCorrecta as 'a' | 's' | 'd' | 'f'
        }));

        const initialData = {
          sessionId: sessionIdState,
          testId: parseInt(testIdState),
          userName: 'Usuario',
          difficulty: difficulty,
          startTime: Date.now(),
          totalQuestions: sampleQuestions.length,
          currentQuestion: 1,
          answers: [],
          questions: sampleQuestions,
          completed: false,
        } as TestSession;

        setSessionData(initialData);
        setCurrentQuestionIndex(0);
        setAnswers({});
        setLoading(false);
      } catch (err) {
        console.error('Error cargando preguntas:', err);
        setError('Error al cargar las preguntas');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [testIdState, sessionIdState, difficulty]);

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleAnswer = async (answer: 'a' | 's' | 'd' | 'f', isConfirmed = false) => {
    if (!sessionData || !testIdState || !sessionIdState) return;

    const currentQuestion = sessionData.questions[currentQuestionIndex];
    if (!currentQuestion) return;

    // Si no está confirmada, solo preseleccionar
    if (!isConfirmed) {
      setSelectedOption(answer);
      return;
    }

    // Guardar respuesta localmente
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));

    setConfirmedAnswer(answer);
    setSelectedOption(null);
    setAnswering(true);

    try {
      // Verificar localmente si la respuesta es correcta
      const isCorrect = answer === currentQuestion.correctAnswer;

      // Guardar la respuesta en localStorage para los resultados
      const answersData = JSON.parse(localStorage.getItem(`test_${sessionIdState}`) || '{"answers":{}}');
      if (!answersData.answers) answersData.answers = {};
      answersData.answers[currentQuestion.questionId] = {
        answer,
        isCorrect,
        text: currentQuestion.text,
        options: currentQuestion.options,
        correctAnswer: currentQuestion.correctAnswer
      };
      if (!answersData.userName) answersData.userName = userName;
      localStorage.setItem(`test_${sessionIdState}`, JSON.stringify(answersData));

      // Mostrar feedback por 1 segundo, luego ir a resultados si es la última pregunta
      setTimeout(() => {
        if (currentQuestionIndex < sessionData.questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else if (currentQuestionIndex === sessionData.questions.length - 1) {
          // Si es la última pregunta, ir a resultados
          router.push(`/results/${testIdState}/${sessionIdState}`);
        }
      }, 1000);
    } catch (err) {
      console.error('Error:', err);
      setError('Error al procesar respuesta');
    } finally {
      setAnswering(false);
    }
  };

  // Teclado (asdf + navegación)
  useEffect(() => {
    const optionOrder: ('a' | 's' | 'd' | 'f')[] = ['a', 's', 'd', 'f'];

    const getNextOption = (current: 'a' | 's' | 'd' | 'f' | null, direction: 'up' | 'down') => {
      if (!current) return 'a';
      const currentIndex = optionOrder.indexOf(current);
      if (direction === 'up') {
        return optionOrder[(currentIndex - 1 + optionOrder.length) % optionOrder.length];
      } else {
        return optionOrder[(currentIndex + 1) % optionOrder.length];
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (showMenu) {
        // Navegación dentro del menú
        if (menuMode === 'main') {
          if (key === 'arrowup' || key === 'arrowdown') {
            e.preventDefault();
          } else if (key === '1') {
            setMenuMode('difficulty');
          } else if (key === '2') {
            setMenuMode('other-test');
          } else if (key === 'escape') {
            setShowMenu(false);
          }
        } else if (menuMode === 'difficulty') {
          if (key === '1') {
            setDifficulty('BAJA');
            setShowMenu(false);
          } else if (key === '2') {
            setDifficulty('MEDIA');
            setShowMenu(false);
          } else if (key === '3') {
            setDifficulty('ALTA');
            setShowMenu(false);
          } else if (key === 'escape') {
            setMenuMode('main');
          }
        } else if (menuMode === 'other-test') {
          if (key === 'escape') {
            setMenuMode('main');
          } else if (key >= '1' && key <= '9') {
            const index = parseInt(key) - 1;
            const tema = temas[index];
            if (tema && userName) {
              // Ir directamente a seleccionar dificultad del nuevo test, sin reiniciar configuración
              router.push(`/tests/${tema.id}?userName=${encodeURIComponent(userName)}`);
            }
          }
        }
        return;
      }

      if (['a', 's', 'd', 'f'].includes(key) && !answering) {
        // Preseleccionar opción
        handleAnswer(key as 'a' | 's' | 'd' | 'f', false);
      } else if (key === 'enter' && selectedOption && !answering) {
        // Confirmar selección con ENTER
        handleAnswer(selectedOption, true);
      } else if (key === 'arrowup' && !answering) {
        // Navegar arriba entre opciones
        e.preventDefault();
        setSelectedOption(getNextOption(selectedOption, 'up'));
      } else if (key === 'arrowdown' && !answering) {
        // Navegar abajo entre opciones
        e.preventDefault();
        setSelectedOption(getNextOption(selectedOption, 'down'));
      } else if (key === 'arrowleft') {
        e.preventDefault();
        // Siempre permitir ir atrás
        setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
      } else if (key === 'arrowright') {
        e.preventDefault();
        // Solo permitir ir adelante si ya respondió la pregunta actual
        if (currentQuestionIndex in answers) {
          if (sessionData && currentQuestionIndex < sessionData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else if (sessionData && currentQuestionIndex === sessionData.questions.length - 1 && Object.keys(answers).length === sessionData.questions.length) {
            // Si está en la última pregunta y ha respondido todas, enviar
            router.push(`/results/${testIdState}/${sessionIdState}`);
          }
        }
      } else if (key === 'm') {
        e.preventDefault();
        setShowMenu(true);
        setMenuMode('main');
      } else if (key === 'escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentQuestionIndex, sessionData, testIdState, sessionIdState, router, answers, selectedOption, showMenu, menuMode, temas]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">Cargando test...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  if (!sessionData || sessionData.questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">No se pudieron cargar las preguntas</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = sessionData.questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">Test completado</p>
        </div>
      </div>
    );
  }

  const currentTema = testIdState ? temas.find(t => t.id === parseInt(testIdState)) : undefined;

  return (
    <QuestionDisplay
      question={currentQuestion}
      progress={{
        current: currentQuestionIndex + 1,
        total: sessionData.totalQuestions,
      }}
      onAnswer={handleAnswer}
      isLoading={answering}
      currentAnswer={selectedOption}
      hasAnswered={currentQuestionIndex in answers}
      selectedOption={selectedOption}
      confirmedAnswer={confirmedAnswer}
      showMenu={showMenu}
      menuMode={menuMode}
      temas={temas}
      currentDifficulty={difficulty}
      answers={answers}
      onQuestionClick={handleQuestionClick}
      currentTema={currentTema}
    />
  );
}
