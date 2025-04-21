'use client';

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Sign out the user and redirect to home page
    const performSignOut = async () => {
      try {
        await signOut({ redirect: false });
        router.push('/');
        router.refresh();
      } catch (error) {
        console.error('Logout error:', error);
        // Still redirect to home on error
        router.push('/');
      }
    };

    // Add a small delay to show the logout message
    const timer = setTimeout(() => {
      performSignOut();
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Logging Out</CardTitle>
          <CardDescription className="text-center">
            Please wait while we sign you out
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </CardContent>
      </Card>
    </div>
  );
}
