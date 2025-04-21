import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import apiClient from '@/lib/apiClient';

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
  }
}

// Type for the API response
interface AuthResponse {
  access_token: string;
  user_id?: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: { username: {}, password: {} },
      async authorize(credentials) {
        try {
          // Since our axios interceptor automatically returns response.data, we can directly get the AuthResponse
          const data = await apiClient.post<AuthResponse, AuthResponse>('/auth/login', {
            username: credentials?.username,
            password: credentials?.password,
          });

          if (data?.access_token) {
            // Return a user object that conforms to the User interface
            return {
              id: data.user_id || '1', // Use API user ID or fallback
              token: data.access_token,
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
      if (user) token.accessToken = user.token;
      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken;
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
