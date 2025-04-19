'use client';
import { useState } from 'react';
import { useLoyalty } from '../../contexts/LoyaltyContext';

export default function TriviaQuiz() {
  const { addPoints } = useLoyalty();
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const question = { q: 'What city is known as the Big Apple?', a: 'New York' };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === question.a.toLowerCase()) {
      addPoints(20);
      setFeedback('Correct! You earned 20 points.');
    } else {
      setFeedback('Incorrect. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <p className="mb-2">{question.q}</p>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          className="border rounded p-2 bg-gray-700 text-white flex-grow"
          placeholder="Your answer"
        />
        <button type="submit" className="btn-primary">Submit</button>
      </form>
      {feedback && <p className="mt-4">{feedback}</p>}
    </div>
  );
}
