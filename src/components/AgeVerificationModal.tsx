'use client';
import { useState } from 'react';
import { useAgeVerificationContext } from '../contexts/AgeVerificationContext';

export default function AgeVerificationModal() {
  const { ageVerified, verifyAge } = useAgeVerificationContext();
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');

  if (ageVerified) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob) {
      setError('Please enter your date of birth');
      return;
    }
    const success = verifyAge(dob);
    if (!success) {
      setError('Sorry, you must be 21 or older to view this content.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-white">Verify Your Age</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="date"
            value={dob}
            onChange={e => { setDob(e.target.value); setError(''); }}
            className="p-2 mb-2 bg-gray-800 text-white rounded"
          />
          {error && <p className="text-secondary mb-2">{error}</p>}
          <button type="submit" className="btn-primary">Verify</button>
        </form>
      </div>
    </div>
  );
}
