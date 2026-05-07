'use client';

/**
 * Componente: TestSelector
 * Muestra lista de tests disponibles para seleccionar
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Test } from '@/lib/types';

export default function TestSelector() {
  const router = useRouter();
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetchTests();
  }, []);

  async function fetchTests() {
    try {
      const response = await fetch('/api/tests');
      const result = await response.json();

      if (result.success) {
        setTests(result.tests);
      } else {
        setError('Error al cargar tests');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleSelectTest = (testId: number) => {
    if (!userName.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }
    router.push(`/tests/${testId}?userName=${encodeURIComponent(userName)}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">Cargando tests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎓 TESTS JAVA</h1>
          <p className="text-gray-600">Elige un tema y responde 30 preguntas</p>
        </div>

        {/* Input nombre */}
        <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tu nombre:
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Escribe tu nombre aquí"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && tests.length > 0) {
                handleSelectTest(tests[0].id);
              }
            }}
          />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Tests por categoría */}
        <div className="space-y-6">
          {/* BaseDatos */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">📚 BASES DE DATOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tests
                .filter((t) => t.category === 'BaseDatos')
                .map((test) => (
                  <button
                    key={test.id}
                    onClick={() => handleSelectTest(test.id)}
                    className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-400 transition cursor-pointer text-left"
                  >
                    <div className="font-bold text-gray-800">{test.name}</div>
                    <div className="text-sm text-gray-600">{test.totalQuestions} preguntas</div>
                  </button>
                ))}
            </div>
          </section>

          {/* Programación - Teoría */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              💻 PROGRAMACIÓN - TEORÍA Y CONCEPTOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tests
                .filter((t) => t.category === 'Programación/Teoría')
                .map((test) => (
                  <button
                    key={test.id}
                    onClick={() => handleSelectTest(test.id)}
                    className="p-4 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 hover:border-green-400 transition cursor-pointer text-left"
                  >
                    <div className="font-bold text-gray-800">{test.name}</div>
                    <div className="text-sm text-gray-600">{test.totalQuestions} preguntas</div>
                  </button>
                ))}
            </div>
          </section>

          {/* Programación - EACs */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              🎯 PROGRAMACIÓN - TRABAJO CON EACs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tests
                .filter((t) => t.category === 'Programación/EACs')
                .map((test) => (
                  <button
                    key={test.id}
                    onClick={() => handleSelectTest(test.id)}
                    className="p-4 bg-purple-50 border-2 border-purple-200 rounded-lg hover:bg-purple-100 hover:border-purple-400 transition cursor-pointer text-left"
                  >
                    <div className="font-bold text-gray-800">{test.name}</div>
                    <div className="text-sm text-gray-600">{test.totalQuestions} preguntas</div>
                  </button>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
