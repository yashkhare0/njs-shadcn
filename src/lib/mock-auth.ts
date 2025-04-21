/**
 * This is a mock authentication service for testing purposes.
 * In a real application, you would replace this with actual API calls.
 */

interface User {
  id: string;
  name: string;
  email: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
  },
  {
    id: '2',
    name: 'Test User',
    email: 'test@example.com',
  },
];

export interface AuthResponse {
  access_token: string;
  user_id: string;
}

/**
 * Simulates a login API call
 */
export async function mockLogin(username: string, password: string): Promise<AuthResponse | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Demo login credentials (username: demo@example.com, password: password123)
  if (
    (username === 'demo@example.com' && password === 'password123') ||
    (username === 'test@example.com' && password === 'password123')
  ) {
    const user = mockUsers.find((u) => u.email === username);
    if (user) {
      return {
        access_token: `mock_token_${user.id}_${Date.now()}`,
        user_id: user.id,
      };
    }
  }

  return null;
}

/**
 * Simulates a user registration API call
 */
export async function mockRegister(
  name: string,
  email: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  password: string
): Promise<AuthResponse | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Check if user already exists
  const existingUser = mockUsers.find((u) => u.email === email);
  if (existingUser) {
    return null;
  }

  // Create new user (in a real app, this would be stored in a database)
  const newUserId = (mockUsers.length + 1).toString();
  const newUser: User = {
    id: newUserId,
    name,
    email,
    // In a real app, we would store the hashed password
  };

  // In a real application, you would add the user to your database
  // For this mock, we'll just add to our in-memory array
  mockUsers.push(newUser);

  return {
    access_token: `mock_token_${newUser.id}_${Date.now()}`,
    user_id: newUser.id,
  };
}

/**
 * Simulates getting the current user
 */
export async function mockGetUser(userId: string): Promise<User | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const user = mockUsers.find((u) => u.id === userId);
  return user || null;
}
