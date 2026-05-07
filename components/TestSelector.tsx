'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Test } from '@/lib/types';

type MenuLevel = 'fontColor' | 'emphasisColor' | 'nombre' | 'main' | 'category';
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

const colorNames: ColorOption[] = ['green', 'white', 'yellow', 'cyan', 'red', 'purple', 'fuchsia', 'gradient'];

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

export default function TestSelector() {
  const router = useRouter();
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [level, setLevel] = useState<MenuLevel>('fontColor');
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [selectedFontColor, setSelectedFontColor] = useState<ColorOption>('green');
  const [selectedEmphasisColor, setSelectedEmphasisColor] = useState<ColorOption>('green');

  const categories = [
    { id: 'BaseDatos', name: 'BBDD' },
    { id: 'Programación/Teoría', name: 'Java2' },
    { id: 'Programación/EACs', name: 'EACs Java2' },
  ];

  useEffect(() => {
    const savedFontColor = localStorage.getItem('terminalFontColor') as ColorOption | null;
    const savedEmphasisColor = localStorage.getItem('terminalEmphasisColor') as ColorOption | null;
    if (savedFontColor) setSelectedFontColor(savedFontColor);
    if (savedEmphasisColor) setSelectedEmphasisColor(savedEmphasisColor);
    fetchTests();
  }, []);

  async function fetchTests() {
    try {
      const response = await fetch('/data/temas.json');
      const temas = await response.json();

      // Transformar temas al formato esperado por el frontend
      const transformedTests: Test[] = temas.map((tema: any) => ({
        id: tema.id,
        name: tema.nombre,
        category: 'BaseDatos', // Todos los temas van a BaseDatos por ahora
        totalQuestions: 30,
      }));

      setTests(transformedTests);
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const getTestsInCategory = (catId: string) => {
    return tests.filter((t) => t.category === catId);
  };

  const currentTests = getTestsInCategory(currentCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (level === 'fontColor') {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % colorNames.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + colorNames.length) % colorNames.length);
        } else if (e.key === 'Enter') {
          setSelectedFontColor(colorNames[selectedIndex]);
          localStorage.setItem('terminalFontColor', colorNames[selectedIndex]);
          setLevel('emphasisColor');
          setSelectedIndex(0);
        }
      } else if (level === 'emphasisColor') {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % colorNames.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + colorNames.length) % colorNames.length);
        } else if (e.key === 'Enter') {
          setSelectedEmphasisColor(colorNames[selectedIndex]);
          localStorage.setItem('terminalEmphasisColor', colorNames[selectedIndex]);
          setLevel('nombre');
          setSelectedIndex(0);
        }
      } else if (level === 'nombre') {
        if (e.key === 'Enter') {
          if (userName.trim()) {
            setLevel('main');
            setSelectedIndex(0);
          }
        }
      } else if (level === 'main') {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % categories.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + categories.length) % categories.length);
        } else if (e.key === 'Enter') {
          setCurrentCategory(categories[selectedIndex].id);
          setLevel('category');
          setSelectedIndex(0);
        }
      } else if (level === 'category') {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (currentTests.length + 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + currentTests.length + 1) % (currentTests.length + 1));
        } else if (e.key === 'Enter') {
          if (selectedIndex < currentTests.length) {
            router.push(`/tests/${currentTests[selectedIndex].id}?userName=${encodeURIComponent(userName)}`);
          } else {
            setLevel('main');
            setSelectedIndex(0);
          }
        } else if (e.key === 'Escape') {
          setLevel('main');
          setSelectedIndex(0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [level, selectedIndex, categories, currentTests, userName, currentCategory]);

  if (loading) {
    return (
      <div className={`min-h-screen bg-black p-4 font-mono text-sm ${colorMap[selectedFontColor]} flex items-center justify-center`}>
        <div>$ cargando tests...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-black p-4 font-mono text-sm ${colorMap[selectedFontColor]}`}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-1">$ java -jar tests.jar</div>
        <div className={`mb-4 ${selectedFontColor === 'green' ? 'text-green-500' : selectedFontColor === 'white' ? 'text-gray-400' : selectedFontColor === 'yellow' ? 'text-yellow-500' : selectedFontColor === 'cyan' ? 'text-cyan-500' : selectedFontColor === 'red' ? 'text-red-500' : 'text-magenta-500'}`}>TESTS JAVA v1.0</div>

        {level === 'fontColor' && (
          <>
            <div className="mb-3">selecciona color de fuente:</div>
            <div className="space-y-1 mb-3 ml-2">
              {colorNames.map((color, idx) => {
                const label = color === 'gradient' ? 'GRADIENTE' : color.toUpperCase();
                const isSelected = selectedIndex === idx;
                let bgClass = '';
                if (isSelected) {
                  if (color === 'gradient') {
                    bgClass = 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400';
                  } else {
                    bgClass = 'bg-opacity-30 bg-gray-700';
                  }
                }
                return (
                  <div
                    key={color}
                    className={`${isSelected ? `${colorMap[color]} ${bgClass}` : colorMap[color]}`}
                  >
                    {isSelected ? '> ' : '  '}{label}
                  </div>
                );
              })}
            </div>
            <div className={`text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`}>
              ↑ ↓ (navegar) | ENTER (siguiente)
            </div>
          </>
        )}

        {level === 'emphasisColor' && (
          <>
            <div className="mb-3">selecciona color de énfasis:</div>
            <div className="space-y-1 mb-3 ml-2">
              {colorNames.map((color, idx) => {
                const label = color === 'gradient' ? 'GRADIENTE' : color.toUpperCase();
                const isSelected = selectedIndex === idx;
                let bgClass = '';
                if (isSelected) {
                  if (color === 'gradient') {
                    bgClass = 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400';
                  } else {
                    bgClass = 'bg-opacity-30 bg-gray-700';
                  }
                }
                return (
                  <div
                    key={color}
                    className={`${isSelected ? `${colorMap[color]} ${bgClass}` : colorMap[color]}`}
                  >
                    {isSelected ? '> ' : '  '}{label}
                  </div>
                );
              })}
            </div>
            <div className={`text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`}>
              ↑ ↓ (navegar) | ENTER (siguiente)
            </div>
          </>
        )}

        {level === 'nombre' && (
          <>
            <div className="mb-2">nombre: <input
              autoFocus
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={`bg-black ${colorMap[selectedFontColor]} outline-none ${getBorderClass(selectedFontColor)} border-b ml-1`}
            /></div>
            <div className="text-yellow-600 text-xs">&gt; ENTER (siguiente) | ← ATRÁS</div>
          </>
        )}

        {level === 'main' && (
          <>
            <div className="mb-3">usuario: {userName}</div>
            <div className={`mb-2 text-opacity-50 ${colorMap[selectedFontColor]}`}>[ CATEGORIAS ]</div>
            <div className="space-y-1 mb-3 ml-2">
              {categories.map((cat, idx) => (
                <div key={cat.id} className={selectedIndex === idx ? selectedEmphasisColor === 'gradient' ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-black' : `${bgColorMap[selectedEmphasisColor]} text-black` : ''}>
                  {selectedIndex === idx ? '> ' : '  '}{cat.name}
                </div>
              ))}
            </div>
            <div className={`text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`}>
              ↑ ↓ (navegar) | ENTER (seleccionar)
            </div>
          </>
        )}

        {level === 'category' && (
          <>
            <div className={`mb-2 text-opacity-50 ${colorMap[selectedFontColor]}`}>[ {categories.find(c => c.id === currentCategory)?.name} ]</div>
            <div className="space-y-1 mb-3 ml-2">
              {currentTests.map((test, idx) => (
                <div key={test.id} className={selectedIndex === idx ? `${bgColorMap[selectedEmphasisColor]} text-black` : ''}>
                  {selectedIndex === idx ? '> ' : '  '}{test.name}
                </div>
              ))}
              <div className={selectedIndex === currentTests.length ? `${bgColorMap[selectedEmphasisColor]} text-black` : ''}>
                {selectedIndex === currentTests.length ? '> ' : '  '}[ATRÁS]
              </div>
            </div>
            <div className={`text-xs ${colorMap[selectedFontColor]} text-opacity-50 mt-4`}>
              ↑ ↓ (navegar) | ENTER (seleccionar) | ← (volver)
            </div>
          </>
        )}

        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>
    </div>
  );
}
