'use client';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface LoyaltyContextValue {
  points: number;
  addPoints: (pts: number) => Promise<void>;
  redeemPoints: (pts: number) => Promise<void>;
}

const LoyaltyContext = createContext<LoyaltyContextValue | undefined>(undefined);

export function LoyaltyProvider({ children }: { children: ReactNode }) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    async function fetchStatus() {
      const res = await fetch('/api/loyalty/status');
      const data = await res.json();
      setPoints(data.points);
    }
    fetchStatus();
  }, []);

  async function addPoints(pts: number) {
    const res = await fetch('/api/loyalty/add-points', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ points: pts })
    });
    const data = await res.json();
    setPoints(data.points);
  }

  async function redeemPoints(pts: number) {
    const res = await fetch('/api/loyalty/redeem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ points: pts })
    });
    const data = await res.json();
    setPoints(data.points);
  }

  return (
    <LoyaltyContext.Provider value={{ points, addPoints, redeemPoints }}>
      {children}
    </LoyaltyContext.Provider>
  );
}

export function useLoyalty() {
  const context = useContext(LoyaltyContext);
  if (!context) {
    throw new Error('useLoyalty must be used within LoyaltyProvider');
  }
  return context;
}
