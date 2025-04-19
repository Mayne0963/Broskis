'use client';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { login as apiLogin, signup as apiSignup, getCurrentUser } from '../lib/auth';

interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const current = await getCurrentUser();
      setUser(current);
    }
    fetchUser();
  }, []);

  async function login(email: string, password: string) {
    const u = await apiLogin(email, password);
    setUser(u);
  }

  async function signup(name: string, email: string, password: string) {
    const u = await apiSignup(name, email, password);
    setUser(u);
  }

  function logout() {
    setUser(null);
    // Optionally notify backend or clear cookies
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
