'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import StyleModal from './StyleModal';

export default function SidebarMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(true);
  const [showStyleModal, setShowStyleModal] = useState(false);

  const isInTest = pathname.includes('/session/');
  const isSelectingDifficulty = pathname.includes('/tests/') && !isInTest;

  const handleChangeTest = () => {
    // Retroceder al menú anterior según el contexto
    if (isInTest) {
      // Si está en un test, volver al selector de dificultad
      const testId = pathname.split('/')[2];
      router.push(`/tests/${testId}`);
    } else if (isSelectingDifficulty) {
      // Si está seleccionando dificultad, volver al selector de tests
      router.push('/');
    } else {
      // Por defecto, volver al inicio
      router.push('/');
    }
  };

  const handleRestartTest = () => {
    // Recargar la página actual
    window.location.reload();
  };

  const handleBackQuestion = () => {
    // Simular presionar flecha izquierda
    const event = new KeyboardEvent('keydown', {
      key: 'ArrowLeft',
      code: 'ArrowLeft',
      keyCode: 37,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  const handleBackToTests = () => {
    router.push('/');
  };

  const handleOpenStyle = () => {
    setShowStyleModal(true);
  };

  if (!showMenu) {
    return (
      <button
        onClick={() => setShowMenu(true)}
        className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-1 py-2 text-xs font-mono rounded z-50 hover:bg-gray-600"
      >
        ›
      </button>
    );
  }

  return (
    <div className="fixed left-0 top-0 h-screen w-32 bg-gray-800 text-white p-3 font-mono text-xs z-50 flex flex-col">
      <button
        onClick={() => setShowMenu(false)}
        className="text-right mb-4 hover:text-gray-400"
      >
        ‹
      </button>

      <div className="flex-1 space-y-3">
        <div className="border-b border-gray-600 pb-2 text-gray-400">MENÚ</div>

        {isInTest && (
          <>
            <button
              onClick={handleBackQuestion}
              className="w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white"
            >
              ← Atrás
            </button>

            <button
              onClick={handleRestartTest}
              className="w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white"
            >
              ↻ Reiniciar
            </button>

            <button
              onClick={handleChangeTest}
              className="w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white"
            >
              ⟲ Cambiar
            </button>
          </>
        )}

        {!isInTest && isSelectingDifficulty && (
          <button
            onClick={handleChangeTest}
            className="w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white"
          >
            ⟲ Cambiar
          </button>
        )}

        <button
          onClick={handleBackToTests}
          className="w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white"
        >
          ⌂ Materia
        </button>
      </div>

      <button
        onClick={handleOpenStyle}
        className="w-full text-left px-2 py-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white border-t border-gray-600"
      >
        ⚙️ Estilo
      </button>

      <div className="text-gray-500 text-xs border-t border-gray-600 pt-2">
        v1.0
      </div>

      <StyleModal isOpen={showStyleModal} onClose={() => setShowStyleModal(false)} />
    </div>
  );
}
