'use client';

import { Card } from '@/components/ui/card';
import users from '@/models/dummy/users.json';
import products from '@/models/dummy/products.json';
import Link from 'next/link';
import { ArrowRight, Users, Package, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    users: typeof users;
    products: typeof products;
  }>({ users: [], products: [] });

  // Simulate loading data
  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setData({ users, products });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const totalUsers = data.users.length;
  const totalProducts = data.products.length;
  const totalRevenue = data.products.reduce((sum, product) => sum + product.price, 0);

  const stats = [
    {
      name: 'Total Users',
      value: totalUsers,
      icon: <Users className="h-4 w-4" />,
      href: '/dashboard/users',
    },
    {
      name: 'Total Products',
      value: totalProducts,
      icon: <Package className="h-4 w-4" />,
      href: '/dashboard/products',
    },
    {
      name: 'Total Revenue',
      value: `$${totalRevenue.toFixed(2)}`,
      icon: <DollarSign className="h-4 w-4" />,
      href: '#',
    },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <Skeleton className="h-10 w-64" />
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <Card key={`stat-skeleton-${i}`} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-8 w-16 mt-2" />
                </div>
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
              <div className="mt-4">
                <Skeleton className="h-4 w-24" />
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Activity Skeleton */}
        <div className="mb-4">
          <Skeleton className="h-6 w-40" />
        </div>
        <Card className="p-6">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={`user-skeleton-${i}`}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center">
                  <Skeleton className="h-8 w-8 rounded-full mr-3" />
                  <div>
                    <Skeleton className="h-4 w-32 mb-2" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
                <Skeleton className="h-5 w-16 rounded-md" />
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <Skeleton className="h-4 w-32" />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">{stat.icon}</div>
            </div>
            <div className="mt-4">
              <Link
                href={stat.href}
                className="text-sm flex items-center text-primary hover:underline"
              >
                View details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <Card className="p-6">
        <div className="space-y-6">
          {data.users.slice(0, 3).map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <span className="text-xs bg-muted px-2 py-1 rounded">{user.role}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <Link
            href="/dashboard/users"
            className="text-sm flex items-center text-primary hover:underline"
          >
            View all users
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </Card>
    </div>
  );
}
