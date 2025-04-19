'use client';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AgeVerificationContextValue {
  ageVerified: boolean;
  verifyAge: (dob: string) => boolean;
}

const AgeVerificationContext = createContext<AgeVerificationContextValue | undefined>(undefined);

export function AgeVerificationProvider({ children }: { children: ReactNode }) {
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('ageVerified');
    setAgeVerified(stored === 'true');
  }, []);

  function verifyAge(dob: string) {
    const birth = new Date(dob);
    const diff = Date.now() - birth.getTime();
    const age = new Date(diff).getUTCFullYear() - 1970;
    const passes = age >= 21;
    setAgeVerified(passes);
    localStorage.setItem('ageVerified', passes.toString());
    return passes;
  }

  return (
    <AgeVerificationContext.Provider value={{ ageVerified, verifyAge }}>
      {children}
    </AgeVerificationContext.Provider>
  );
}

export function useAgeVerificationContext() {
  const context = useContext(AgeVerificationContext);
  if (!context) {
    throw new Error('useAgeVerificationContext must be used within AgeVerificationProvider');
  }
  return context;
}
