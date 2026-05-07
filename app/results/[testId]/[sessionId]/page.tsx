'use client';

/**
 * Página: results/[testId]/[sessionId]/page.tsx
 * Muestra los resultados finales de una sesión completada
 */

import { useEffect, useState } from 'react';
import { TestResult } from '@/lib/types';
import ResultsDisplay from '@/components/ResultsDisplay';

interface Tema {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
}

export default function ResultsPage({
  params,
}: {
  params: Promise<{ testId: string; sessionId: string }>;
}) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [testId, setTestId] = useState<string | null>(null);
  const [results, setResults] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTema, setCurrentTema] = useState<Tema | null>(null);

  useEffect(() => {
    params.then((p) => {
      setSessionId(p.sessionId);
      setTestId(p.testId);

      // Cargar tema actual
      const loadTema = async () => {
        try {
          const response = await fetch('/data/temas.json');
          const temas = await response.json();
          const tema = temas.find((t: Tema) => t.id === parseInt(p.testId));
          if (tema) setCurrentTema(tema);
        } catch (err) {
          console.error('Error cargando tema:', err);
        }
      };
      loadTema();
    });
  }, [params]);

  useEffect(() => {
    // Obtener resultados del servidor
    const fetchResults = async () => {
      if (!sessionId || !testId) return;

      try {
        // Obtener respuestas desde localStorage
        const testData = JSON.parse(localStorage.getItem(`test_${sessionId}`) || '{"answers":{}}');
        const answersData = testData.answers || {};
        const userName = testData.userName || 'Usuario';

        const correctAnswers = Object.values(answersData).filter((a: any) => a.isCorrect).length;
        const totalQuestions = Object.keys(answersData).length;
        const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

        const evaluation = percentage >= 90 ? 'EXCELENTE' :
                         percentage >= 80 ? 'BIEN' :
                         percentage >= 60 ? 'REGULAR' : 'NECESITA_MEJORA';

        const transformedResult: TestResult = {
          sessionId: sessionId || '',
          testId: parseInt(testId || '0'),
          userName: userName,
          score: correctAnswers,
          totalQuestions: totalQuestions,
          percentage: percentage,
          evaluation: evaluation,
          weakConcepts: [],
          suggestions: {},
          completedAt: Date.now(),
        };

        // Guardar también las respuestas para mostrarlas
        localStorage.setItem(`results_${sessionId}`, JSON.stringify(answersData));

        setResults(transformedResult);
      } catch (err) {
        console.error('Error:', err);
        setError('Error al cargar resultados');
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

  return <ResultsDisplay results={results} currentTema={currentTema} />;
}
