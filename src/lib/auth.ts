/**
 * Authentication utilities
 */

// Simulated authentication state
let isAuthenticated = false;

// Mock user type
export type User = {
  id: string;
  name: string;
  email: string;
};

// Mock authentication functions
export const auth = {
  login: async (email: string, password: string): Promise<User> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple validation
    if (email && password) {
      isAuthenticated = true;
      return {
        id: '1',
        name: 'John Doe',
        email,
      };
    }
    throw new Error('Invalid credentials');
  },

  logout: async (): Promise<void> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    isAuthenticated = false;
  },

  isAuthenticated: (): boolean => {
    return isAuthenticated;
  },
};
