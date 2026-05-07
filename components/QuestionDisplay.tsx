'use client';

/**
 * Componente: QuestionDisplay
 * Muestra una pregunta con sus 4 opciones (a, s, d, f)
 */

import { useEffect, useState } from 'react';
import { Pregunta } from '@/lib/types';
import AnswerButton from './AnswerButton';
import { useTestInfo } from '@/lib/TestContext';

interface QuestionDisplayProps {
  question: Pregunta;
  progress: {
    current: number;
    total: number;
  };
  onAnswer: (answer: 'a' | 's' | 'd' | 'f', isConfirmed?: boolean) => void;
  isLoading: boolean;
  currentAnswer?: 'a' | 's' | 'd' | 'f';
  hasAnswered?: boolean;
  selectedOption?: 'a' | 's' | 'd' | 'f' | null;
  confirmedAnswer?: 'a' | 's' | 'd' | 'f' | null;
}

type ColorOption = 'green' | 'white' | 'yellow' | 'cyan' | 'red' | 'purple' | 'fuchsia' | 'gradient';

const colorMap: Record<ColorOption, string> = {
  green: 'text-green-300',
  white: 'text-white',
  yellow: 'text-yellow-300',
  cyan: 'text-cyan-300',
  red: 'text-red-300',
  purple: 'text-purple-300',
  fuchsia: 'text-fuchsia-300',
  gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400',
};

const getBorderClass = (color: ColorOption): string => {
  const map: Record<ColorOption, string> = {
    green: 'border-green-300',
    white: 'border-white',
    yellow: 'border-yellow-300',
    cyan: 'border-cyan-300',
    red: 'border-red-300',
    purple: 'border-purple-300',
    fuchsia: 'border-fuchsia-300',
    gradient: 'border-pink-400',
  };
  return map[color];
};

const getFooterColorClass = (color: ColorOption): string => {
  const map: Record<ColorOption, string> = {
    green: 'text-green-300',
    white: 'text-white',
    yellow: 'text-yellow-300',
    cyan: 'text-cyan-300',
    red: 'text-red-300',
    purple: 'text-purple-300',
    fuchsia: 'text-fuchsia-300',
    gradient: 'text-pink-300',
  };
  return map[color];
};

export default function QuestionDisplay({
  question,
  progress,
  onAnswer,
  isLoading,
  currentAnswer,
  hasAnswered,
  selectedOption,
  confirmedAnswer,
}: QuestionDisplayProps) {
  const [fontColor, setFontColor] = useState<ColorOption>('green');
  const [mounted, setMounted] = useState(false);
  const { setTestInfo } = useTestInfo();

  useEffect(() => {
    const savedColor = (localStorage.getItem('terminalFontColor') as ColorOption) || 'green';
    setFontColor(savedColor);
    setMounted(true);
  }, []);

  useEffect(() => {
    setTestInfo({
      current: progress.current,
      total: progress.total,
    });
  }, [progress, setTestInfo]);
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

  if (!mounted) return null;

  return (
    <div className={`min-h-screen bg-black p-4 font-mono text-sm ${colorMap[fontColor]}`}>
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className={`flex justify-between items-center mb-3 pb-1 border-b ${getBorderClass(fontColor)} font-bold`}>
          <div className="flex items-center gap-3">
            <div>Q{progress.current.toString().padStart(2, '0')}/{progress.total}</div>
            <div className="text-xs text-yellow-600">{getDifficultyLabel(question.difficulty)}</div>
            {hasAnswered && <div className="text-xs text-green-400">✓ respondida</div>}
          </div>
          <div>{Math.round((progress.current / progress.total) * 100)}%</div>
        </div>

        {/* Barra de progreso */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-700 rounded h-2 overflow-hidden">
              <div
                className={`h-full ${fontColor === 'white' ? 'bg-white' : fontColor === 'yellow' ? 'bg-yellow-300' : fontColor === 'cyan' ? 'bg-cyan-300' : fontColor === 'red' ? 'bg-red-300' : fontColor === 'purple' ? 'bg-purple-300' : fontColor === 'fuchsia' ? 'bg-fuchsia-300' : fontColor === 'gradient' ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400' : 'bg-green-300'} transition-all`}
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 min-w-[3rem]">{Math.round((progress.current / progress.total) * 100)}%</span>
          </div>
        </div>

        {/* Pregunta */}
        <div className="mb-4">
          <div className="mb-4 leading-relaxed whitespace-pre-wrap text-white">
            {question.text}
          </div>

          {/* Opciones */}
          <div className="space-y-1 mb-4">
            <AnswerButton
              label="a"
              text={question.options.a}
              onClick={() => onAnswer('a')}
              disabled={isLoading}
              color={colorMap[fontColor]}
              isSelected={currentAnswer === 'a'}
              isConfirmed={confirmedAnswer === 'a'}
            />
            <AnswerButton
              label="s"
              text={question.options.s}
              onClick={() => onAnswer('s')}
              disabled={isLoading}
              color={colorMap[fontColor]}
              isSelected={currentAnswer === 's'}
              isConfirmed={confirmedAnswer === 's'}
            />
            <AnswerButton
              label="d"
              text={question.options.d}
              onClick={() => onAnswer('d')}
              disabled={isLoading}
              color={colorMap[fontColor]}
              isSelected={currentAnswer === 'd'}
              isConfirmed={confirmedAnswer === 'd'}
            />
            <AnswerButton
              label="f"
              text={question.options.f}
              onClick={() => onAnswer('f')}
              disabled={isLoading}
              color={colorMap[fontColor]}
              isSelected={currentAnswer === 'f'}
              isConfirmed={confirmedAnswer === 'f'}
            />
          </div>

          {isLoading && (
            <div className="text-yellow-600">$ verificando respuesta...</div>
          )}
        </div>

        {/* Footer */}
        <div className={`text-xs border-t ${getBorderClass(fontColor)} pt-2 ${getFooterColorClass(fontColor)}`}>
          {!selectedOption ? (
            <>
              <div>A | S | D | F (seleccionar)</div>
              <div className="mt-1">← ATRÁS | ADELANTE → | ESC (salir)</div>
            </>
          ) : (
            <>
              <div>↑ ↓ (cambiar) | ENTER (confirmar) | ESC (cancelar)</div>
              <div className="mt-1">← ATRÁS | ADELANTE → | ESC (salir)</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
