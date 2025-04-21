'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useSession } from 'next-auth/react';
import SafeImage from '@/components/ui/safe-image';

export function Navbar() {
  const pathname = usePathname();
  const { status } = useSession();
  const isAuthenticated = status === 'authenticated';
  const isAuthPage =
    pathname?.includes('/login') || pathname?.includes('/signup') || pathname?.includes('/auth/');
  const isLoadingAuth = status === 'loading';

  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <SafeImage
              src="/logo.svg"
              alt="NJS Logo"
              width={32}
              height={32}
              className="dark:invert"
              fallbackSrc="/images/placeholder.svg"
            />
            <span className="text-xl">NJS-Shadcn</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              href="/examples"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Examples
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex">
            <Button variant="outline" size="sm" asChild className="mr-2">
              <Link href="https://github.com/your-username/njs-shadcn" target="_blank">
                GitHub
              </Link>
            </Button>

            {!isAuthPage &&
              (isLoadingAuth ? (
                <Skeleton className="h-9 w-24" />
              ) : isAuthenticated ? (
                <Button size="sm" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <Button size="sm" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
