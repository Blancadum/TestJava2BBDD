'use client';

/**
 * Página: results/[sessionId]/page.tsx
 * Muestra los resultados finales de una sesión completada
 */

import { useEffect, useState } from 'react';
import { TestResult } from '@/lib/types';
import ResultsDisplay from '@/components/ResultsDisplay';

export default function ResultsPage({
  params,
}: {
  params: { sessionId: string };
}) {
  const { sessionId } = params;

  const [results, setResults] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Obtener resultados del servidor
    const fetchResults = async () => {
      try {
        // Nota: La URL real depende del testId, que debería estar en la sesión
        // Por simplicidad, enviamos solo el sessionId
        const response = await fetch(`/api/tests/11/${sessionId}/results`);
        const result = await response.json();

        if (result.success) {
          setResults(result.data);
        } else {
          setError(result.error || 'Error al cargar resultados');
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Error al conectar con el servidor');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [sessionId]);

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
