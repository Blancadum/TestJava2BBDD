'use client';

'use client';

import { useEffect, useState } from 'react';
import { useTestInfo } from '@/lib/TestContext';

interface TerminalWindowProps {
  children: React.ReactNode;
}

const borderColorMap: Record<string, string> = {
  green: 'border-green-300',
  white: 'border-white',
  yellow: 'border-yellow-300',
  cyan: 'border-cyan-300',
  red: 'border-red-300',
  purple: 'border-purple-300',
  fuchsia: 'border-fuchsia-300',
  gradient: 'border-pink-400',
};

const bgColorMap: Record<string, string> = {
  green: 'bg-green-300',
  white: 'bg-white',
  yellow: 'bg-yellow-300',
  cyan: 'bg-cyan-300',
  red: 'bg-red-300',
  purple: 'bg-purple-300',
  fuchsia: 'bg-fuchsia-300',
  gradient: 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400',
};

const hoverColorMap: Record<string, string> = {
  green: 'hover:bg-green-400',
  white: 'hover:bg-gray-200',
  yellow: 'hover:bg-yellow-400',
  cyan: 'hover:bg-cyan-400',
  red: 'hover:bg-red-400',
  purple: 'hover:bg-purple-400',
  fuchsia: 'hover:bg-fuchsia-400',
  gradient: 'hover:opacity-80',
};

const footerColorMap: Record<string, string> = {
  green: 'border-green-300 text-green-500',
  white: 'border-white text-gray-300',
  yellow: 'border-yellow-300 text-yellow-500',
  cyan: 'border-cyan-300 text-cyan-500',
  red: 'border-red-300 text-red-500',
  purple: 'border-purple-300 text-purple-500',
  fuchsia: 'border-fuchsia-300 text-fuchsia-500',
  gradient: 'border-pink-400 text-pink-400',
};

export default function TerminalWindow({ children }: TerminalWindowProps) {
  const [fontColor, setFontColor] = useState<string>('green');
  const [mounted, setMounted] = useState(false);
  const { testInfo } = useTestInfo();

  useEffect(() => {
    const savedFont = localStorage.getItem('terminalFontColor') || 'green';
    setFontColor(savedFont);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-600 p-4 flex items-center justify-center">
      <div className="border-4 border-black bg-black" style={{ fontFamily: 'monospace', width: '680px', height: '320px', display: 'flex', flexDirection: 'column' }}>
        {/* Barra de título */}
        <div className={`${bgColorMap[fontColor]} text-black px-3 py-1 flex justify-between items-center text-xs font-bold flex-shrink-0`}>
          <span>terminal - /dev/tty</span>
          <div className="flex gap-2">
            <span className={`cursor-pointer ${hoverColorMap[fontColor]} px-2`}>_</span>
            <span className={`cursor-pointer ${hoverColorMap[fontColor]} px-2`}>□</span>
            <span className={`cursor-pointer ${hoverColorMap[fontColor]} px-2`}>×</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-4 bg-black bg-opacity-80 overflow-hidden flex-1 text-sm" style={{ minHeight: 0 }}>
          {children}
        </div>

        {/* Pie de página */}
        <div className={`${footerColorMap[fontColor]} border-t px-3 py-1 text-xs flex-shrink-0`}>
          $ {testInfo?.name && `${testInfo.name}`}
          {testInfo?.current && testInfo?.total && ` [Q${testInfo.current}/${testInfo.total}]`}
          <span className="text-lime-300 animate-pulse"> _</span>
        </div>
      </div>
    </div>
  );
}
