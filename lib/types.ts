/**
 * Interfaces y tipos para TestJava2BBDD API
 * Conversión de clases Java a TypeScript
 */

// Enumeraciones
export enum DificultadEnum {
  BAJA = 'BAJA',
  MEDIA = 'MEDIA',
  ALTA = 'ALTA',
}

// Pregunta (conversión de Pregunta.java)
export interface Pregunta {
  questionId: number;
  text: string;
  options: {
    a: string;
    s: string;
    d: string;
    f: string;
  };
  correctAnswer: 'a' | 's' | 'd' | 'f';
  messageOK: string;
  messageError: string;
  explanation: string;
  concept: string;
  difficulty: 1 | 2 | 3; // 1 = BAJA, 2 = MEDIA, 3 = ALTA
}

// Respuesta del usuario
export interface Respuesta {
  sessionId: string;
  questionId: number;
  userAnswer: 'a' | 's' | 'd' | 'f';
  isCorrect: boolean;
  timestamp: number;
}

// Sesión activa de test
export interface TestSession {
  sessionId: string;
  testId: number;
  userName: string;
  difficulty: DificultadEnum;
  startTime: number;
  totalQuestions: number;
  currentQuestion: number;
  answers: Respuesta[];
  questions: Pregunta[];
  completed: boolean;
}

// Resultado final del test
export interface TestResult {
  sessionId: string;
  testId: number;
  userName: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  evaluation: string; // "EXCELENTE" | "BIEN" | "REGULAR" | "NECESITA_MEJORA"
  weakConcepts: string[];
  suggestions: Record<string, string>;
  completedAt: number;
}

// Test disponible
export interface Test {
  id: number;
  name: string;
  category: string;
  totalQuestions: number;
}

// API Request/Response types
export interface StartTestRequest {
  userName: string;
  difficulty: DificultadEnum;
}

export interface StartTestResponse {
  sessionId: string;
  testId: number;
  userName: string;
  difficulty: DificultadEnum;
  totalQuestions: number;
  currentQuestion: number;
  questions: Pregunta[];
}

export interface AnswerRequest {
  questionId: number;
  answer: 'a' | 's' | 'd' | 'f';
}

export interface AnswerResponse {
  correct: boolean;
  explanation: string;
  concept: string;
  nextQuestion: number;
  progress: {
    answered: number;
    total: number;
  };
}

export interface ResultsResponse {
  sessionId: string;
  userName: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  evaluation: string;
  weakConcepts: string[];
  suggestions: Record<string, string>;
}
