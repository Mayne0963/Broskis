'use client';
import { useState } from 'react';
import { useLoyalty } from '../../contexts/LoyaltyContext';

export default function SpinWheel() {
  const [result, setResult] = useState<number | null>(null);
  const { addPoints } = useLoyalty();

  const handleSpin = () => {
    const prizes = [10, 20, 30, 40, 50];
    const pts = prizes[Math.floor(Math.random() * prizes.length)];
    addPoints(pts);
    setResult(pts);
  };

  return (
    <div className="text-center">
      <button onClick={handleSpin} className="btn-primary">Spin the Wheel</button>
      {result !== null && (
        <p className="mt-4 text-lg">You won <span className="font-bold">{result}</span> points!</p>
      )}
    </div>
  );
}
