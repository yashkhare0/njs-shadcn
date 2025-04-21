/**
 * Data service for retrieving users and products
 * Conditionally uses mock data or API calls based on environment
 */

import { mockApi, shouldUseMockData } from '@/lib/mockData';
import apiClient from '@/lib/apiClient';
import type { User, Product } from '@/types';

// User-related services
export const userService = {
  getUsers: async (): Promise<User[]> => {
    if (shouldUseMockData()) {
      console.log('Using mock data for users');
      return mockApi.getUsers();
    }
    return apiClient.get('/users');
  },

  getUserById: async (id: string): Promise<User | null> => {
    if (shouldUseMockData()) {
      console.log(`Using mock data for user ${id}`);
      return mockApi.getUserById(id);
    }
    return apiClient.get(`/users/${id}`);
  },
};

// Product-related services
export const productService = {
  getProducts: async (): Promise<Product[]> => {
    if (shouldUseMockData()) {
      console.log('Using mock data for products');
      return mockApi.getProducts();
    }
    return apiClient.get('/products');
  },

  getProductById: async (id: string): Promise<Product | null> => {
    if (shouldUseMockData()) {
      console.log(`Using mock data for product ${id}`);
      return mockApi.getProductById(id);
    }
    return apiClient.get(`/products/${id}`);
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    if (shouldUseMockData()) {
      console.log(`Using mock data for ${category} products`);
      return mockApi.getProductsByCategory(category);
    }
    return apiClient.get(`/products/category/${category}`);
  },
};
