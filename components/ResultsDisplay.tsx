'use client';

/**
 * Componente: ResultsDisplay
 * Muestra resultados finales del test
 */

import { useEffect, useState } from 'react';
import { TestResult } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface Tema {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
}

interface ResultsDisplayProps {
  results: TestResult;
  currentTema?: Tema | null;
}

interface Answer {
  text: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
  options: Record<string, string>;
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

export default function ResultsDisplay({ results, currentTema }: ResultsDisplayProps) {
  const router = useRouter();
  const [fontColor, setFontColor] = useState<ColorOption>('white');
  const [mounted, setMounted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [explicaciones, setExplicaciones] = useState<Record<string, Record<string, string>>>({});

  useEffect(() => {
    const savedColor = (localStorage.getItem('terminalFontColor') as ColorOption) || 'white';
    setFontColor(savedColor);
    setMounted(true);

    // Recuperar respuestas desde localStorage
    const answersData = JSON.parse(localStorage.getItem(`results_${results.sessionId}`) || '{}');
    setAnswers(answersData);

    // Cargar explicaciones
    const loadExplicaciones = async () => {
      try {
        const response = await fetch('/data/explicaciones.json');
        const data = await response.json();
        setExplicaciones(data);
      } catch (err) {
        console.error('Error cargando explicaciones:', err);
      }
    };
    loadExplicaciones();
  }, [results.sessionId]);

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
      <div className="flex gap-4">
        <div className="flex-1 max-w-2xl">
        {/* Header */}
        <div className="mb-1">$ java -jar tests.jar --results</div>
        <div className={`mb-4 pb-2 border-b ${getBorderClass(fontColor)}`}></div>

        {/* Resultados */}
        <div className="mb-4">
          {/* Puntuación y Gráfico */}
          <div className="flex items-center gap-6 mb-4">
            <div>
              <div className="font-bold text-yellow-600 mb-1">{results.percentage}% Acierto</div>
              <div className="text-xs text-gray-400">{results.score}/{results.totalQuestions} respuestas</div>
            </div>

            {/* Pie Chart SVG */}
            <svg width="120" height="120" viewBox="0 0 120 120" className="flex-shrink-0">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#4b5563" strokeWidth="2" />
              {(() => {
                const total = results.totalQuestions;
                const correct = results.score;
                const correctPercent = (correct / total) * 100;
                const correctAngle = (correct / total) * 360;

                const startX = 60 + 50 * Math.cos(-Math.PI / 2);
                const startY = 60 + 50 * Math.sin(-Math.PI / 2);

                const angle = (correctAngle * Math.PI) / 180;
                const endX = 60 + 50 * Math.cos(angle - Math.PI / 2);
                const endY = 60 + 50 * Math.sin(angle - Math.PI / 2);

                const largeArc = correctAngle > 180 ? 1 : 0;

                const correctColor = correctPercent >= 70 ? '#10b981' : correctPercent >= 50 ? '#f59e0b' : '#ef4444';
                const incorrectColor = '#6b7280';

                return (
                  <>
                    {/* Correct arc */}
                    <path
                      d={`M ${startX} ${startY} A 50 50 0 ${largeArc} 1 ${endX} ${endY}`}
                      fill="none"
                      stroke={correctColor}
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    {/* Incorrect arc */}
                    <path
                      d={`M ${endX} ${endY} A 50 50 0 ${1 - largeArc} 1 ${startX} ${startY}`}
                      fill="none"
                      stroke={incorrectColor}
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </>
                );
              })()}
              {/* Center circle */}
              <circle cx="60" cy="60" r="30" fill="#000" />
              <text x="60" y="65" textAnchor="middle" fill="#10b981" fontSize="20" fontWeight="bold">
                {results.percentage}%
              </text>
            </svg>
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

        </div>

        {/* Información */}
        <div className={`text-xs mb-4 pb-2 border-b ${getBorderClass(fontColor)}`}>
          <div>${results.userName}</div>
          <div>{new Date(results.completedAt).toLocaleString()}</div>
        </div>

        {/* Detalle de respuestas */}
        {Object.keys(answers).length > 0 && (
          <div className="mb-4">
            <div className={`${colorMap[fontColor]} font-bold mb-2`}>[ DETALLES ]</div>
            <div className="space-y-1 text-xs ml-2 mb-4">
              {Object.entries(answers).map(([questionId, answer]) => (
                <div key={questionId} className={`p-2 border-l-2 cursor-pointer transition hover:opacity-80 ${answer.isCorrect ? 'border-green-500 bg-green-950 bg-opacity-30' : 'border-red-500 bg-red-950 bg-opacity-30'}`} onClick={() => { setSelectedQuestion(Number(questionId)); setShowFeedbackModal(true); }}>
                  <div className={answer.isCorrect ? 'text-green-400' : 'text-red-400'}>
                    Q{questionId}. {answer.isCorrect ? '✓' : '✗'} {answer.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Botón FEEDBACK */}
            <button
              onClick={() => { setSelectedQuestion(null); setShowFeedbackModal(true); }}
              className={`w-full px-3 py-2 border ${getBorderClass(fontColor)} text-xs font-bold transition hover:opacity-80`}
            >
              [ FEEDBACK ]
            </button>
          </div>
        )}

        {/* Modal FEEDBACK */}
        {showFeedbackModal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
            <div className={`bg-black border ${getBorderClass(fontColor)} p-4 max-w-2xl max-h-96 overflow-y-auto`}>
              <div className={`${colorMap[fontColor]} font-bold mb-2`}>[ FEEDBACK ]</div>
              {selectedQuestion !== null ? (
                <div className="text-xs text-gray-300 space-y-3">
                  <div>
                    <div className="text-yellow-400 font-bold mb-2">
                      Q{selectedQuestion}. {answers[selectedQuestion]?.text}
                    </div>
                  </div>

                  {/* Todas las opciones */}
                  <div className="border-t border-gray-600 pt-2">
                    <div className="space-y-2">
                      {answers[selectedQuestion] && (
                        <>
                          {Object.entries(answers[selectedQuestion].options).map(([key, text]) => {
                            const isCorrectAnswer = key === answers[selectedQuestion]?.correctAnswer;
                            return (
                              <div key={key} className={`p-2 rounded border-l-2 ${isCorrectAnswer ? 'border-green-500 bg-green-950 bg-opacity-30 text-green-400' : 'border-red-500 bg-red-950 bg-opacity-30 text-red-400'}`}>
                                <div className="font-bold">
                                  {key.toUpperCase()}. {text}
                                </div>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Explicación */}
                  <div className="border-t border-gray-600 pt-2">
                    <div className="text-yellow-400 mb-2 font-bold">Explicación teórica:</div>
                    <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {explicaciones[results.testId.toString()]?.[selectedQuestion] || 'Explicación no disponible aún'}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-gray-300">
                  <div className="text-yellow-400 mb-2">Selecciona una pregunta para ver el feedback detallado</div>
                  <div className="space-y-1">
                    {Object.entries(answers).map(([questionId, answer]) => (
                      <button
                        key={questionId}
                        onClick={() => setSelectedQuestion(Number(questionId))}
                        className={`w-full text-left px-2 py-1 border-l-2 transition hover:opacity-80 ${answer.isCorrect ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400'}`}
                      >
                        Q{questionId}. {answer.isCorrect ? '✓' : '✗'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <button
                onClick={() => setShowFeedbackModal(false)}
                className={`w-full mt-4 px-3 py-2 border ${getBorderClass(fontColor)} text-xs font-bold transition hover:opacity-80`}
              >
                [ CERRAR ]
              </button>
            </div>
          </div>
        )}

        {/* Botones */}
        <div className="flex gap-2 mb-4">
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

        {/* Footer con tema */}
        {currentTema && (
          <div className={`text-xs border-t ${getBorderClass(fontColor)} pt-2 ${colorMap[fontColor]}`}>
            $ {currentTema.icono} {currentTema.nombre} - {currentTema.descripcion}
          </div>
        )}
        </div>

        {/* Panel derecho con cuadrícula de respuestas */}
        <div className={`w-56 border-l ${getBorderClass(fontColor)} pl-4`}>
          <div className="text-xs font-bold mb-3">RESPUESTAS</div>
          <div className="grid grid-cols-6 gap-1">
            {Array.from({ length: results.totalQuestions }).map((_, idx) => {
              const questionId = idx + 1;
              const answer = answers[questionId];
              const isAnswered = !!answer;
              const isCorrect = answer?.isCorrect || false;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnswered) {
                      setSelectedQuestion(questionId);
                      setShowFeedbackModal(true);
                    }
                  }}
                  disabled={!isAnswered}
                  className={`w-7 h-7 flex items-center justify-center text-xs font-bold border transition ${
                    isAnswered
                      ? isCorrect
                        ? 'border-green-400 bg-green-900 bg-opacity-50 text-green-400 cursor-pointer hover:opacity-80'
                        : 'border-red-400 bg-red-900 bg-opacity-50 text-red-400 cursor-pointer hover:opacity-80'
                      : 'border-gray-500 bg-gray-900 bg-opacity-30 text-gray-500 cursor-not-allowed opacity-50'
                  }`}
                  title={`Pregunta ${questionId}${isAnswered ? isCorrect ? ' - Correcta' : ' - Incorrecta' : ' - No respondida'}`}
                >
                  {questionId}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
