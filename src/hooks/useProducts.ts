'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/lib/dataService';
import type { Product } from '@/types';

// Update to use the data service instead of direct API calls
export function useProducts() {
  const queryClient = useQueryClient();

  // Query to fetch all products
  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,
  });

  // Mutation to create a product (this would be implemented in the data service)
  const createProductMutation = useMutation({
    mutationFn: (product: Omit<Product, 'id'>) => {
      // This would typically call the API or mock data
      return Promise.resolve({ id: Date.now().toString(), ...product } as Product);
    },
    onSuccess: () => {
      // Invalidate the products query to refetch data
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  // Return query and mutation
  return {
    products: productsQuery.data || [],
    isLoading: productsQuery.isLoading,
    isError: productsQuery.isError,
    error: productsQuery.error,
    createProduct: createProductMutation.mutate,
    isCreating: createProductMutation.isPending,
  };
}

export function useProduct(id: string) {
  // Query to fetch a single product
  const productQuery = useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id, // Only run the query if ID is provided
  });

  return {
    product: productQuery.data,
    isLoading: productQuery.isLoading,
    isError: productQuery.isError,
    error: productQuery.error,
  };
}

export function useProductsByCategory(category: string) {
  // Query to fetch products by category
  const productsQuery = useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => productService.getProductsByCategory(category),
    enabled: !!category, // Only run the query if category is provided
  });

  return {
    products: productsQuery.data || [],
    isLoading: productsQuery.isLoading,
    isError: productsQuery.isError,
    error: productsQuery.error,
  };
}
