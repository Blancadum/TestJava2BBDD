'use client';

/**
 * Componente: AnswerButton
 * Botón para seleccionar una respuesta (a, s, d, f)
 */

interface AnswerButtonProps {
  label: 'a' | 's' | 'd' | 'f';
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function AnswerButton({
  label,
  text,
  onClick,
  disabled = false,
}: AnswerButtonProps) {
  const getLabelColor = () => {
    switch (label) {
      case 'a':
        return 'bg-red-100 text-red-800 border-red-300 hover:bg-red-200';
      case 's':
        return 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200';
      case 'd':
        return 'bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200';
      case 'f':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200';
      default:
        return '';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-4 border-2 rounded-lg font-semibold text-left transition ${getLabelColor()} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span className="font-mono mr-4 text-xl">[{label.toUpperCase()}]</span>
      <span>{text}</span>
    </button>
  );
}
