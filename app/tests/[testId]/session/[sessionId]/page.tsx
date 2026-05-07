'use client';

/**
 * Página: tests/[testId]/session/[sessionId]/page.tsx
 * Muestra el test activo con preguntas
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pregunta, TestSession } from '@/lib/types';
import QuestionDisplay from '@/components/QuestionDisplay';

export default function TestSessionPage({
  params,
}: {
  params: { testId: string; sessionId: string };
}) {
  const router = useRouter();
  const { sessionId } = params;

  const [sessionData, setSessionData] = useState<TestSession | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answering, setAnswering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos de la sesión (en producción, obtendría del servidor)
  useEffect(() => {
    // Por ahora, asumimos que la sesión fue creada en la página anterior
    // En un caso real, cargarías los datos desde una BD
    const initialData = {
      sessionId,
      testId: parseInt(params.testId),
      userName: 'Usuario',
      difficulty: 'MEDIA',
      startTime: Date.now(),
      totalQuestions: 30,
      currentQuestion: 1,
      answers: [],
      questions: [],
      completed: false,
    } as TestSession;

    // Simulamos cargar preguntas (en producción vendrían de la API)
    setSessionData(initialData);
    setLoading(false);
  }, [sessionId, params]);

  const handleAnswer = async (answer: 'a' | 's' | 'd' | 'f') => {
    if (!sessionData) return;

    const currentQuestion = sessionData.questions[currentQuestionIndex];
    if (!currentQuestion) return;

    setAnswering(true);

    try {
      const response = await fetch(
        `/api/tests/${params.testId}/${sessionId}/answer`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            questionId: currentQuestion.questionId,
            answer,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        const data = result.data;

        // Mostrar feedback por 2 segundos
        setTimeout(() => {
          if (data.nextQuestion > sessionData.totalQuestions) {
            // Test completado
            router.push(`/results/${sessionId}`);
          } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }
        }, 2000);
      } else {
        setError('Error al responder: ' + result.error);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error al conectar con el servidor');
    } finally {
      setAnswering(false);
    }
  };

  // Teclado (asdf)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['a', 's', 'd', 'f'].includes(key) && !answering) {
        handleAnswer(key as 'a' | 's' | 'd' | 'f');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentQuestionIndex, answering, sessionData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">Cargando test...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  if (!sessionData || sessionData.questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">No se pudieron cargar las preguntas</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = sessionData.questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">Test completado</p>
        </div>
      </div>
    );
  }

  return (
    <QuestionDisplay
      question={currentQuestion}
      progress={{
        current: currentQuestionIndex + 1,
        total: sessionData.totalQuestions,
      }}
      onAnswer={handleAnswer}
      isLoading={answering}
    />
  );
}
