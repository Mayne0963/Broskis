export interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
}

export async function login(email: string, password: string): Promise<User> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
}

export async function signup(name: string, email: string, password: string): Promise<User> {
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error('Signup failed');
  return res.json();
}

export async function getCurrentUser(): Promise<User | null> {
  const res = await fetch('/api/auth/validate');
  if (!res.ok) return null;
  return res.json();
}
