'use client';

/**
 * Componente: QuestionDisplay
 * Muestra una pregunta con sus 4 opciones (a, s, d, f)
 */

import { useEffect, useState } from 'react';
import { Pregunta } from '@/lib/types';
import AnswerButton from './AnswerButton';
import { useTestInfo } from '@/lib/TestContext';

interface Tema {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
}

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
  showMenu?: boolean;
  menuMode?: 'main' | 'difficulty' | 'other-test';
  temas?: Tema[];
  currentDifficulty?: 'BAJA' | 'MEDIA' | 'ALTA';
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
  showMenu = false,
  menuMode = 'main',
  temas = [],
  currentDifficulty = 'MEDIA',
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

  if (showMenu) {
    return (
      <div className={`min-h-screen bg-black p-4 font-mono text-sm ${colorMap[fontColor]}`}>
        <div className="max-w-3xl mx-auto">
          <div className={`flex justify-between items-center mb-6 pb-2 border-b ${getBorderClass(fontColor)} font-bold`}>
            <div>MENÚ</div>
            <div className="text-xs text-yellow-600">ESC (volver)</div>
          </div>

          {menuMode === 'main' && (
            <div className="space-y-4">
              <div className="text-white mb-4">Selecciona una opción:</div>
              <div className="border border-gray-500 p-3 cursor-pointer hover:border-white">
                <div className="text-yellow-300">1. Dificultad</div>
                <div className="text-xs text-gray-400 mt-1">Cambiar nivel de dificultad (actual: {currentDifficulty})</div>
              </div>
              <div className="border border-gray-500 p-3 cursor-pointer hover:border-white">
                <div className="text-yellow-300">2. Otro Test</div>
                <div className="text-xs text-gray-400 mt-1">Cambiar de test/materia</div>
              </div>
            </div>
          )}

          {menuMode === 'difficulty' && (
            <div className="space-y-4">
              <div className="text-white mb-4">Selecciona dificultad:</div>
              <div className={`border p-3 cursor-pointer ${currentDifficulty === 'BAJA' ? 'border-green-300 bg-green-900 bg-opacity-20' : 'border-gray-500'}`}>
                <div className="text-green-300">1. BAJA</div>
              </div>
              <div className={`border p-3 cursor-pointer ${currentDifficulty === 'MEDIA' ? 'border-yellow-300 bg-yellow-900 bg-opacity-20' : 'border-gray-500'}`}>
                <div className="text-yellow-300">2. MEDIA</div>
              </div>
              <div className={`border p-3 cursor-pointer ${currentDifficulty === 'ALTA' ? 'border-red-300 bg-red-900 bg-opacity-20' : 'border-gray-500'}`}>
                <div className="text-red-300">3. ALTA</div>
              </div>
            </div>
          )}

          {menuMode === 'other-test' && (
            <div className="space-y-2">
              <div className="text-white mb-4">Selecciona otro test:</div>
              {temas.map((tema, index) => (
                <div key={tema.id} className="border border-gray-500 p-2 cursor-pointer hover:border-white hover:bg-gray-900">
                  <div className="text-cyan-300">{index + 1}. {tema.icono} {tema.nombre}</div>
                  <div className="text-xs text-gray-400">{tema.descripcion}</div>
                </div>
              ))}
            </div>
          )}

          <div className={`text-xs border-t ${getBorderClass(fontColor)} pt-2 mt-6 ${getFooterColorClass(fontColor)}`}>
            <div>ESC (volver al menú principal o test)</div>
          </div>
        </div>
      </div>
    );
  }

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
              <div className="mt-1">← ATRÁS | ADELANTE → | M (menú) | ESC (salir)</div>
            </>
          ) : (
            <>
              <div>↑ ↓ (cambiar) | ENTER (confirmar) | ESC (cancelar)</div>
              <div className="mt-1">← ATRÁS | ADELANTE → | M (menú) | ESC (salir)</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
