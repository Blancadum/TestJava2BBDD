'use client';

import { useEffect, useState } from 'react';

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

const colorNames: ColorOption[] = ['green', 'white', 'yellow', 'cyan', 'red', 'purple', 'fuchsia', 'gradient'];

interface StyleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StyleModal({ isOpen, onClose }: StyleModalProps) {
  const [fontColor, setFontColor] = useState<ColorOption>('green');
  const [emphasisColor, setEmphasisColor] = useState<ColorOption>('green');
  const [selectedFontIndex, setSelectedFontIndex] = useState(0);
  const [selectedEmphasisIndex, setSelectedEmphasisIndex] = useState(0);

  useEffect(() => {
    const savedFont = (localStorage.getItem('terminalFontColor') as ColorOption) || 'green';
    const savedEmphasis = (localStorage.getItem('terminalEmphasisColor') as ColorOption) || 'green';
    setFontColor(savedFont);
    setEmphasisColor(savedEmphasis);
    setSelectedFontIndex(colorNames.indexOf(savedFont));
    setSelectedEmphasisIndex(colorNames.indexOf(savedEmphasis));
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSaveFontColor = (color: ColorOption) => {
    setFontColor(color);
    localStorage.setItem('terminalFontColor', color);
    setSelectedFontIndex(colorNames.indexOf(color));
  };

  const handleSaveEmphasisColor = (color: ColorOption) => {
    setEmphasisColor(color);
    localStorage.setItem('terminalEmphasisColor', color);
    setSelectedEmphasisIndex(colorNames.indexOf(color));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-black border-4 border-gray-700 p-6 font-mono text-sm text-green-300 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: 'monospace' }}
      >
        <div className="mb-4 text-green-500 font-bold">⚙️ ESTILO</div>

        {/* Color de Fuente */}
        <div className="mb-6">
          <div className="mb-3 text-green-400">color de fuente:</div>
          <div className="space-y-1 ml-2">
            {colorNames.map((color, idx) => {
              const label = color === 'gradient' ? 'GRADIENTE' : color.toUpperCase();
              return (
                <button
                  key={color}
                  onClick={() => handleSaveFontColor(color)}
                  className={`w-full text-left px-2 py-1 transition ${selectedFontIndex === idx ? `${colorMap[color]} bg-opacity-30 bg-gray-700` : colorMap[color]}`}
                >
                  {selectedFontIndex === idx ? '> ' : '  '}{label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Color de Énfasis */}
        <div className="mb-6">
          <div className="mb-3 text-green-400">color de énfasis:</div>
          <div className="space-y-1 ml-2">
            {colorNames.map((color, idx) => {
              const label = color === 'gradient' ? 'GRADIENTE' : color.toUpperCase();
              return (
                <button
                  key={color}
                  onClick={() => handleSaveEmphasisColor(color)}
                  className={`w-full text-left px-2 py-1 transition ${selectedEmphasisIndex === idx ? `${colorMap[color]} bg-opacity-30 bg-gray-700` : colorMap[color]}`}
                >
                  {selectedEmphasisIndex === idx ? '> ' : '  '}{label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-xs text-green-600 border-t border-green-300 pt-3">
          ESC para cerrar
        </div>
      </div>
    </div>
  );
}
