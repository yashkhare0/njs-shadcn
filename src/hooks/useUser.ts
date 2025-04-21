'use client';

import { useState, useEffect } from 'react';
import type { User } from '@/lib/auth';
import { auth } from '@/lib/auth';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // This would typically check for a session or token
    // and fetch the user data if authenticated
    const isAuthenticated = auth.isAuthenticated();

    if (isAuthenticated) {
      // Mock user data
      setUser({
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
      });
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const user = await auth.login(email, password);
      setUser(user);
      setError(null);
      return user;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await auth.logout();
      setUser(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Logout failed'));
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    login,
    logout,
  };
}
