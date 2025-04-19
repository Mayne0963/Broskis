'use client';
import { useState } from 'react';
import SpinWheel from '../../components/Game/SpinWheel';
import MemoryMatch from '../../components/Game/MemoryMatch';
import TriviaQuiz from '../../components/Game/TriviaQuiz';

export default function GamesPage() {
  const [game, setGame] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Games</h1>
      {!game ? (
        <div className="space-x-4">
          <button onClick={() => setGame('spin')} className="btn-primary">Spin Wheel</button>
          <button onClick={() => setGame('memory')} className="btn-primary">Memory Match</button>
          <button onClick={() => setGame('trivia')} className="btn-primary">Trivia Quiz</button>
        </div>
      ) : (
        <div className="mt-6">
          {game === 'spin' && <SpinWheel />}
          {game === 'memory' && <MemoryMatch />}
          {game === 'trivia' && <TriviaQuiz />}
          <button className="btn-secondary mt-4" onClick={() => setGame(null)}>Back to Games</button>
        </div>
      )}
    </div>
  );
}
