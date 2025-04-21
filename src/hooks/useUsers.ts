'use client';

import { useQuery } from '@tanstack/react-query';
import { userService } from '@/lib/dataService';

export function useUsers() {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: userService.getUsers,
  });

  return {
    users: usersQuery.data || [],
    isLoading: usersQuery.isLoading,
    isError: usersQuery.isError,
    error: usersQuery.error,
  };
}

export function useUser(id: string) {
  const userQuery = useQuery({
    queryKey: ['user', id],
    queryFn: () => userService.getUserById(id),
    enabled: !!id, // Only run the query if ID is provided
  });

  return {
    user: userQuery.data,
    isLoading: userQuery.isLoading,
    isError: userQuery.isError,
    error: userQuery.error,
  };
}
