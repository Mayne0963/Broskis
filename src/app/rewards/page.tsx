'use client';
import { useLoyalty } from '../../contexts/LoyaltyContext';
import Link from 'next/link';

export default function RewardsPage() {
  const { points } = useLoyalty();
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Rewards</h1>
      <p className="text-lg mb-6">You have <span className="font-bold">{points}</span> points.</p>
      <Link href="/games">
        <button className="btn-primary">Play Games to Earn More Points</button>
      </Link>
    </div>
  );
}
