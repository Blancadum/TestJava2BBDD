'use client';

/**
 * Componente: ResultsDisplay
 * Muestra resultados finales del test
 */

import { TestResult } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface ResultsDisplayProps {
  results: TestResult;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎉 ¡Completado!</h1>
          <p className="text-gray-600">Aquí están tus resultados</p>
        </div>

        {/* Tarjeta de resultados */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Puntuación principal */}
          <div className="text-center mb-8">
            <div className={`inline-block px-8 py-4 rounded-full mb-4 ${getPercentageColor(results.percentage)}`}>
              <div className="text-4xl font-bold">{results.percentage}%</div>
              <div className="text-sm font-semibold">
                {results.score} de {results.totalQuestions} correctas
              </div>
            </div>
          </div>

          {/* Evaluación */}
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold ${getEvaluationColor(results.evaluation)}`}>
              {results.evaluation}
            </h2>
          </div>

          <hr className="my-8" />

          {/* Conceptos débiles */}
          {results.weakConcepts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📚 Conceptos a reforzar:</h3>
              <div className="space-y-3">
                {results.weakConcepts.map((concept) => (
                  <div
                    key={concept}
                    className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded"
                  >
                    <h4 className="font-semibold text-gray-800">{concept}</h4>
                    {results.suggestions[concept] && (
                      <p className="text-sm text-gray-600 mt-2">{results.suggestions[concept]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.weakConcepts.length === 0 && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mb-8">
              <p className="text-green-800 font-semibold">
                ✅ ¡Excelente! No tienes conceptos débiles identificados.
              </p>
            </div>
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            📋 Volver al menú
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition"
          >
            🖨️ Imprimir resultados
          </button>
        </div>

        {/* Información de sesión */}
        <div className="mt-8 bg-gray-100 rounded-lg p-4 text-center text-sm text-gray-600">
          <p>Nombre: <span className="font-semibold">{results.userName}</span></p>
          <p>
            Fecha: <span className="font-semibold">{new Date(results.completedAt).toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
