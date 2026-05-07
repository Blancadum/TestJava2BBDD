'use client';

/**
 * Página: results/[testId]/[sessionId]/page.tsx
 * Muestra los resultados finales de una sesión completada
 */

import { useEffect, useState } from 'react';
import { TestResult } from '@/lib/types';
import ResultsDisplay from '@/components/ResultsDisplay';

export default function ResultsPage({
  params,
}: {
  params: Promise<{ testId: string; sessionId: string }>;
}) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [testId, setTestId] = useState<string | null>(null);

  useEffect(() => {
    params.then((p) => {
      setSessionId(p.sessionId);
      setTestId(p.testId);
    });
  }, [params]);

  const [results, setResults] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Obtener resultados del servidor
    const fetchResults = async () => {
      if (!sessionId || !testId) return;

      try {
        const response = await fetch(`http://localhost:8080/api/tests/${testId}/resultados`);
        const result = await response.json();

        if (result.puntuacion !== undefined) {
          // Transformar respuesta del backend al formato esperado
          const evaluation = result.porcentaje >= 90 ? 'EXCELENTE' :
                           result.porcentaje >= 80 ? 'BIEN' :
                           result.porcentaje >= 60 ? 'REGULAR' : 'NECESITA_MEJORA';

          const transformedResult: TestResult = {
            sessionId: sessionId || '',
            testId: parseInt(testId || '0'),
            userName: 'Usuario',
            score: result.puntuacion,
            totalQuestions: result.totalPreguntas,
            percentage: result.porcentaje,
            evaluation: evaluation,
            weakConcepts: result.conceptosDebiles || [],
            suggestions: {},
            completedAt: Date.now(),
          };
          setResults(transformedResult);
        } else {
          setError('Error al cargar resultados');
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Error al conectar con el servidor');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [sessionId, testId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <p className="text-lg text-gray-600">Cargando resultados...</p>
          <div className="inline-block animate-spin mt-4 text-3xl">⏳</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-red-600 mb-4">❌ {error}</p>
          <button
            onClick={() => (window.location.href = '/')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <p className="text-lg text-gray-600">No se encontraron resultados</p>
        </div>
      </div>
    );
  }

  return <ResultsDisplay results={results} />;
}
