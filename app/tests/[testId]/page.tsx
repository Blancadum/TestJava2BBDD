'use client';

/**
 * Página: tests/[testId]/page.tsx
 * Seleccionar nivel de dificultad antes de comenzar el test
 */

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { DificultadEnum } from '@/lib/types';

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

const bgColorMap: Record<ColorOption, string> = {
  green: 'bg-green-300',
  white: 'bg-white',
  yellow: 'bg-yellow-300',
  cyan: 'bg-cyan-300',
  red: 'bg-red-300',
  purple: 'bg-purple-300',
  fuchsia: 'bg-fuchsia-300',
  gradient: 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400',
};

export default function SelectDifficultyPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userName = searchParams.get('userName') || 'Anónimo';
  const [testId, setTestId] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fontColor, setFontColor] = useState<ColorOption>('green');
  const [emphasisColor, setEmphasisColor] = useState<ColorOption>('green');

  useEffect(() => {
    params.then((p) => setTestId(p.testId));
  }, [params]);

  useEffect(() => {
    const savedFont = (localStorage.getItem('terminalFontColor') as ColorOption) || 'green';
    const savedEmphasis = (localStorage.getItem('terminalEmphasisColor') as ColorOption) || 'green';
    setFontColor(savedFont);
    setEmphasisColor(savedEmphasis);
  }, []);

  const [loading, setLoading] = useState(false);

  const difficulties: Array<{ value: DificultadEnum; label: string }> = [
    { value: DificultadEnum.BAJA, label: 'FACIL' },
    { value: DificultadEnum.MEDIA, label: 'MEDIA' },
    { value: DificultadEnum.ALTA, label: 'DIFICIL' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % difficulties.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + difficulties.length) % difficulties.length);
      } else if (e.key === 'Enter') {
        handleStartTest(difficulties[selectedIndex].value);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, difficulties, testId]);

  const handleStartTest = async (difficulty: DificultadEnum) => {
    if (!testId) return;
    setLoading(true);
    try {
      // Generar sessionId único localmente
      const sessionId = `${testId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      // Guardar datos de la sesión en localStorage
      localStorage.setItem(`session_${sessionId}`, JSON.stringify({
        testId: parseInt(testId),
        userName,
        difficulty,
        startTime: Date.now(),
      }));

      // Navegar al test
      router.push(`/tests/${testId}/session/${sessionId}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al iniciar test');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-black p-4 font-mono text-sm ${colorMap[fontColor]}`}>
      <div className="max-w-2xl">
        <div className="mb-1">$ java -jar tests.jar --difficulty</div>
        <div className={`mb-4 text-opacity-50 ${colorMap[fontColor]}`}>SELECCIONA DIFICULTAD</div>

        {!testId && (
          <div>$ cargando...</div>
        )}

        {testId && (
          <>
            <div className="mb-3">usuario: {userName}</div>
            <div className="space-y-1 mb-3 ml-2">
              {difficulties.map((diff, idx) => (
                <div
                  key={diff.value}
                  className={selectedIndex === idx ? `${bgColorMap[emphasisColor]} text-black` : ''}
                >
                  {selectedIndex === idx ? '> ' : '  '}{diff.label}
                  {selectedIndex === idx && loading && ' [iniciando...]'}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
