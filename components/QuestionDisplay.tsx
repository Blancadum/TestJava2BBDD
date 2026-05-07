'use client';

/**
 * Componente: QuestionDisplay
 * Muestra una pregunta con sus 4 opciones (a, s, d, f)
 */

import { Pregunta } from '@/lib/types';
import AnswerButton from './AnswerButton';

interface QuestionDisplayProps {
  question: Pregunta;
  progress: {
    current: number;
    total: number;
  };
  onAnswer: (answer: 'a' | 's' | 'd' | 'f') => void;
  isLoading: boolean;
}

export default function QuestionDisplay({
  question,
  progress,
  onAnswer,
  isLoading,
}: QuestionDisplayProps) {
  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return 'bg-green-100 text-green-800';
      case 2:
        return 'bg-yellow-100 text-yellow-800';
      case 3:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return 'BAJA';
      case 2:
        return 'MEDIA';
      case 3:
        return 'ALTA';
      default:
        return 'DESCONOCIDA';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Barra de progreso */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold text-gray-800">
              Pregunta {progress.current} de {progress.total}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(question.difficulty)}`}
            >
              Dificultad: {getDifficultyLabel(question.difficulty)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Pregunta */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
            {question.text}
          </h2>

          {/* Opciones */}
          <div className="space-y-4">
            <AnswerButton
              label="a"
              text={question.options.a}
              onClick={() => onAnswer('a')}
              disabled={isLoading}
            />
            <AnswerButton
              label="s"
              text={question.options.s}
              onClick={() => onAnswer('s')}
              disabled={isLoading}
            />
            <AnswerButton
              label="d"
              text={question.options.d}
              onClick={() => onAnswer('d')}
              disabled={isLoading}
            />
            <AnswerButton
              label="f"
              text={question.options.f}
              onClick={() => onAnswer('f')}
              disabled={isLoading}
            />
          </div>

          {isLoading && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">Verificando respuesta...</p>
              <div className="inline-block animate-spin mt-2">⏳</div>
            </div>
          )}
        </div>

        {/* Hint */}
        <div className="text-center text-gray-600 text-sm">
          💡 Presiona los botones o usa las teclas{' '}
          <span className="font-mono bg-gray-200 px-2 py-1 rounded">A S D F</span>
        </div>
      </div>
    </div>
  );
}
