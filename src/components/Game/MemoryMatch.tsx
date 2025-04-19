'use client';
import { useState } from 'react';
import { useLoyalty } from '../../contexts/LoyaltyContext';

export default function MemoryMatch() {
  const [result, setResult] = useState<number | null>(null);
  const { addPoints } = useLoyalty();

  const handlePlay = () => {
    const pts = Math.floor(Math.random() * 21) + 10; // 10-30 points
    addPoints(pts);
    setResult(pts);
  };

  return (
    <div className="text-center">
      <button onClick={handlePlay} className="btn-primary">Play Memory Match</button>
      {result !== null && (
        <p className="mt-4 text-lg">You won <span className="font-bold">{result}</span> points!</p>
      )}
    </div>
  );
}
