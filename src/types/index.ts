// Common types used throughout the application

// Re-export User type from auth
export type { User } from '@/lib/auth';

// Product type
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
