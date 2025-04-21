import React, { Suspense } from 'react';
import { Card } from '@/components/ui/card';
import { TableSkeleton } from '@/components/table-skeleton';
import { UserTable, User } from './user-table';
import { Button } from '@/components/ui/button';

// This would be a real data fetching function in a production app
async function fetchUsers(): Promise<User[]> {
  // Simulate database or API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      role: 'admin',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
      role: 'user',
    },
    // More users would be here
  ];
}

export default function UsersPageExample() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button>Add User</Button>
      </div>

      <Card className="p-6">
        <Suspense fallback={<TableSkeleton columns={4} rows={5} showToolbar />}>
          <UserTableSection />
        </Suspense>
      </Card>
    </div>
  );
}

// This is a Server Component that can fetch data
async function UserTableSection() {
  // In a real app, you'd fetch from a database or API
  const users = await fetchUsers();

  return <UserTable data={users} />;
}
