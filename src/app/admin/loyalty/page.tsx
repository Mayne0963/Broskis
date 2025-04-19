'use client';
import { useLoyalty } from '../../../contexts/LoyaltyContext';

export default function AdminLoyaltyPage() {
  const { points } = useLoyalty();
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Loyalty Program</h1>
      <p>Current total points: <strong>{points}</strong></p>
      <p>Configure loyalty rules here.</p>
    </div>
);
}
