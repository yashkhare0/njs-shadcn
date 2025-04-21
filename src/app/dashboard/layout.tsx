import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import DashboardClient from './dashboard-client';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if user is authenticated
  const session = await getServerSession();

  // If no session exists, redirect to login
  if (!session) {
    redirect('/login');
  }

  // Get user info from session
  const user = {
    name: session.user?.name || 'User',
    email: session.user?.email || 'user@example.com',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  return <DashboardClient user={user}>{children}</DashboardClient>;
}
