'use client';

/**
 * Página: tests/[testId]/page.tsx
 * Seleccionar nivel de dificultad antes de comenzar el test
 */

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { DificultadEnum } from '@/lib/types';

export default function SelectDifficultyPage({
  params,
}: {
  params: { testId: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userName = searchParams.get('userName') || 'Anónimo';
  const testId = params.testId;

  const [selectedDifficulty, setSelectedDifficulty] = useState<DificultadEnum | null>(null);
  const [loading, setLoading] = useState(false);

  const difficulties: Array<{ value: DificultadEnum; label: string; description: string }> = [
    {
      value: DificultadEnum.BAJA,
      label: 'Fácil',
      description: 'Conceptos fundamentales. Ideal para aprender los fundamentos.',
    },
    {
      value: DificultadEnum.MEDIA,
      label: 'Media',
      description: 'Comprensión profunda. Requiere conocimiento de los temas.',
    },
    {
      value: DificultadEnum.ALTA,
      label: 'Difícil',
      description: 'Síntesis y reflexión. Para usuarios avanzados.',
    },
  ];

  const handleStartTest = async (difficulty: DificultadEnum) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/tests/${testId}/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName,
          difficulty,
        }),
      });

      const result = await response.json();

      if (result.success) {
        const sessionId = result.data.sessionId;
        router.push(`/tests/${testId}/session/${sessionId}`);
      } else {
        alert('Error al iniciar test: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Elige un nivel de dificultad
          </h1>
          <p className="text-gray-600">Hola {userName}, selecciona la dificultad que prefieres</p>
        </div>

        {/* Opciones de dificultad */}
        <div className="space-y-4">
          {difficulties.map((diff) => (
            <button
              key={diff.value}
              onClick={() => {
                setSelectedDifficulty(diff.value);
                handleStartTest(diff.value);
              }}
              disabled={loading}
              className={`w-full p-6 rounded-lg border-2 text-left transition ${
                selectedDifficulty === diff.value
                  ? 'bg-blue-100 border-blue-500'
                  : 'bg-white border-gray-300 hover:border-blue-400'
              } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{diff.label}</h3>
              <p className="text-gray-600">{diff.description}</p>
              {selectedDifficulty === diff.value && loading && (
                <p className="mt-4 text-blue-600 font-semibold">Iniciando test...</p>
              )}
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 bg-blue-50 rounded-lg p-4 text-center text-sm text-gray-600">
          <p>
            Tendrás <span className="font-semibold">30 preguntas</span> para responder en este test.
          </p>
          <p>Puedes usar los botones o las teclas <span className="font-mono">A S D F</span> para responder.</p>
        </div>

        {/* Botón volver */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg"
          >
            ← Volver al menú
          </button>
        </div>
      </div>
    </div>
  );
}
