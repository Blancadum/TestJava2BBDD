'use client';

interface AnswerButtonProps {
  label: 'a' | 's' | 'd' | 'f';
  text: string;
  onClick: () => void;
  disabled?: boolean;
  color?: string;
  isSelected?: boolean;
  isConfirmed?: boolean;
}

const getLabelColor = (label: 'a' | 's' | 'd' | 'f') => {
  switch (label) {
    case 'a': return 'text-red-400';
    case 's': return 'text-green-400';
    case 'd': return 'text-cyan-400';
    case 'f': return 'text-yellow-400';
  }
};

const getCircle = (label: 'a' | 's' | 'd' | 'f') => {
  const map = { a: '◯', s: '●', d: '◉', f: '◎' };
  return map[label];
};

export default function AnswerButton({
  label,
  text,
  onClick,
  disabled = false,
  color = 'text-green-300',
  isSelected = false,
  isConfirmed = false,
}: AnswerButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-3 py-1 text-left transition font-mono bg-black ${isConfirmed ? 'bg-gray-700 bg-opacity-40 border border-gray-600 border-opacity-50' : isSelected ? 'bg-gray-700 bg-opacity-40' : 'hover:bg-gray-700 hover:bg-opacity-20'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span className={`inline-block w-3 font-bold ${getLabelColor(label)}`}>
        {getCircle(label)}
      </span>
      <span className={`${color} ml-2 font-bold`}>{label.toUpperCase()}</span>
      <span className={`${color} ml-3`}>{text}</span>
      {isSelected && <span className={`ml-auto float-right ${color}`}>✓</span>}
    </button>
  );
}
