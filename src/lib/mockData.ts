/**
 * Mock data utilities for development environment
 */

import users from '@/models/dummy/users.json';
import products from '@/models/dummy/products.json';
import type { User } from '@/types';
import type { Product } from '@/types';

// Type assertions to ensure JSON data matches our type definitions
const typedUsers = users as User[];
const typedProducts = products as Product[];

// Mock API functions that simulate API calls but use local data
export const mockApi = {
  // User related mock functions
  getUsers: () => Promise.resolve(typedUsers),
  getUserById: (id: string) => Promise.resolve(typedUsers.find((user) => user.id === id) || null),

  // Product related mock functions
  getProducts: () => Promise.resolve(typedProducts),
  getProductById: (id: string) =>
    Promise.resolve(typedProducts.find((product) => product.id === id) || null),
  getProductsByCategory: (category: string) =>
    Promise.resolve(typedProducts.filter((product) => product.category === category)),
};

// Helper to determine if we should use mock data
// This allows you to conditionally use mock data based on environment
export const shouldUseMockData = () => {
  return (
    process.env.NODE_ENV === 'development' &&
    (process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true' || !process.env.NEXT_PUBLIC_API_BASE_URL)
  );
};

// Example usage in a data service:
// import { mockApi, shouldUseMockData } from '@/lib/mockData';
// import apiClient from '@/lib/apiClient';
//
// export const getProducts = async () => {
//   if (shouldUseMockData()) {
//     return mockApi.getProducts();
//   }
//   return apiClient.get('/products');
// };
