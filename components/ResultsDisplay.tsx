'use client';

/**
 * Componente: ResultsDisplay
 * Muestra resultados finales del test
 */

import { useEffect, useState } from 'react';
import { TestResult } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface ResultsDisplayProps {
  results: TestResult;
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

const getHoverBgClass = (color: ColorOption): string => {
  const map: Record<ColorOption, string> = {
    green: 'hover:bg-green-300',
    white: 'hover:bg-white',
    yellow: 'hover:bg-yellow-300',
    cyan: 'hover:bg-cyan-300',
    red: 'hover:bg-red-300',
    purple: 'hover:bg-purple-300',
    fuchsia: 'hover:bg-fuchsia-300',
    gradient: 'hover:bg-pink-400',
  };
  return map[color];
};

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  const router = useRouter();
  const [fontColor, setFontColor] = useState<ColorOption>('green');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedColor = (localStorage.getItem('terminalFontColor') as ColorOption) || 'green';
    setFontColor(savedColor);
    setMounted(true);
  }, []);

  const getEvaluationColor = (evaluation: string) => {
    switch (evaluation) {
      case 'EXCELENTE':
        return 'text-green-600';
      case 'BIEN':
        return 'text-blue-600';
      case 'REGULAR':
        return 'text-yellow-600';
      case 'NECESITA_MEJORA':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-100 text-green-800';
    if (percentage >= 75) return 'bg-blue-100 text-blue-800';
    if (percentage >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  if (!mounted) return null;

  return (
    <div className={`min-h-screen bg-black p-4 font-mono text-sm ${colorMap[fontColor]}`}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-1">$ java -jar tests.jar --results</div>
        <div className={`mb-4 ${fontColor === 'gradient' ? colorMap[fontColor] : colorMap[fontColor]}`}>TEST COMPLETADO</div>

        {/* Resultados */}
        <div className="mb-4">
          {/* Puntuación */}
          <div className="mb-2">
            <div className="font-bold text-yellow-600">{results.percentage}% [{results.score}/{results.totalQuestions}]</div>
          </div>

          {/* Evaluación */}
          <div className={`mb-4 pb-2 border-b ${getBorderClass(fontColor)}`}>
            <h2 className={`font-bold ${getEvaluationColor(results.evaluation)}`}>
              {results.evaluation}
            </h2>
          </div>

          {/* Conceptos débiles */}
          {results.weakConcepts.length > 0 && (
            <div className="mb-4">
              <div className={`${colorMap[fontColor]} font-bold mb-2`}>[ POR MEJORAR ]</div>
              <div className="space-y-1 ml-2 text-sm">
                {results.weakConcepts.map((concept) => (
                  <div key={concept}>
                    - {concept}
                    {results.suggestions[concept] && (
                      <div className="text-xs text-yellow-600 ml-2">{results.suggestions[concept]}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.weakConcepts.length === 0 && (
            <div className={`mb-4 ${colorMap[fontColor]}`}>
              ✓ Dominas todos los conceptos
            </div>
          )}
        </div>

        {/* Información */}
        <div className={`text-xs mb-4 pb-2 border-b ${getBorderClass(fontColor)}`}>
          <div>{results.userName}</div>
          <div>{new Date(results.completedAt).toLocaleString()}</div>
        </div>

        {/* Botones */}
        <div className="flex gap-2">
          <button
            onClick={() => router.push('/')}
            className={`px-2 py-1 ${colorMap[fontColor]} ${getHoverBgClass(fontColor)} hover:text-black transition font-mono text-sm`}
          >
            [MENU]
          </button>
          <button
            onClick={() => window.print()}
            className={`px-2 py-1 ${colorMap[fontColor]} ${getHoverBgClass(fontColor)} hover:text-black transition font-mono text-sm`}
          >
            [IMPRIMIR]
          </button>
        </div>
      </div>
    </div>
  );
}
