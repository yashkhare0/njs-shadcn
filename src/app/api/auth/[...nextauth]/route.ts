import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import apiClient from '@/lib/apiClient';
import { mockLogin } from '@/lib/mock-auth';

// Extend the default session and JWT types
declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    user?: {
      id: string;
      name?: string;
      email?: string;
    };
  }

  interface User {
    id: string;
    name?: string;
    email?: string;
    token?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    email?: string;
  }
}

// Type for the API response
interface AuthResponse {
  access_token: string;
  user_id?: string;
}

// Flag to use mock authentication for testing
const useMockAuth = process.env.USE_MOCK_AUTH === 'true' || true; // Default to mock auth for testing

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: { username: {}, password: {} },
      async authorize(credentials) {
        try {
          let data: AuthResponse | null = null;

          if (useMockAuth) {
            // Use mock authentication for testing
            data = await mockLogin(credentials?.username || '', credentials?.password || '');
          } else {
            // Use real API authentication
            data = await apiClient.post<AuthResponse, AuthResponse>('/auth/login', {
              username: credentials?.username,
              password: credentials?.password,
            });
          }

          if (data?.access_token) {
            // Return a user object that conforms to the User interface
            return {
              id: data.user_id || '1', // Use API user ID or fallback
              token: data.access_token,
              email: credentials?.username || '', // Include email for the user session with fallback
            };
          }
          return null;
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.sub = user.id;
        token.email = user.email;
      }
      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken;
      if (session.user) {
        session.user.id = token.sub || '';
        session.user.email = token.email || '';
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET || 'development-secret-do-not-use-in-production',
});

export { handler as GET, handler as POST };
