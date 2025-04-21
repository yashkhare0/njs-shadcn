'use client';

import * as React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SafeImage from '@/components/ui/safe-image';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Next.js + Shadcn UI Template</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              A modern, feature-rich starter template for building beautiful web applications with
              Next.js, Shadcn UI, TypeScript, and more. Perfect for quickly bootstrapping admin
              dashboards, SaaS applications, or any modern web project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/yashkhare0/njs-shadcn" target="_blank">
                  View on GitHub
                </Link>
              </Button>
            </div>

            {/* Dashboard Screenshot */}
            <div className="rounded-lg overflow-hidden shadow-xl max-w-5xl mx-auto border bg-card">
              <div className="relative">
                <Image
                  src="/dashboard-screenshot.png"
                  alt="Dashboard Preview"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="dark:brightness-90"
                  priority
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <SafeImage
                      src="/globe.svg"
                      alt="Next.js"
                      width={24}
                      height={24}
                      fallbackSrc="/images/placeholder.svg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Next.js 14+ & React 19</h3>
                <p className="text-muted-foreground text-center">
                  Built with the latest Next.js features including App Router and Server Components,
                  powered by React 19
                </p>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <SafeImage
                      src="/window.svg"
                      alt="UI"
                      width={24}
                      height={24}
                      fallbackSrc="/images/placeholder.svg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Shadcn UI & Tailwind v4</h3>
                <p className="text-muted-foreground text-center">
                  Beautiful, accessible UI components built with Radix UI and Tailwind CSS v4
                </p>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <SafeImage
                      src="/file.svg"
                      alt="TypeScript"
                      width={24}
                      height={24}
                      fallbackSrc="/images/placeholder.svg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">TypeScript</h3>
                <p className="text-muted-foreground text-center">
                  Fully typed codebase for better developer experience and fewer bugs
                </p>
              </Card>
            </div>

            {/* Additional Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureItem
                title="Authentication"
                description="NextAuth.js integration with login, signup, and logout flows"
              />
              <FeatureItem
                title="State Management"
                description="React Query for server state management"
              />
              <FeatureItem
                title="Form Handling"
                description="React Hook Form with Zod validation"
              />
              <FeatureItem
                title="Dark Mode"
                description="Built-in dark mode support with next-themes"
              />
              <FeatureItem
                title="Data Tables"
                description="TanStack Table for powerful data grid functionality"
              />
              <FeatureItem
                title="API Integration"
                description="Axios with interceptors for API requests"
              />
              <FeatureItem
                title="Toast Notifications"
                description="Using Sonner for beautiful notifications"
              />
              <FeatureItem
                title="Responsive Design"
                description="Mobile-first approach for all layouts"
              />
            </div>
          </div>
        </section>

        {/* Dashboard Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Dashboard Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Admin Dashboard</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" /> Overview statistics cards
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" /> User management section
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" /> Products management section
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" /> Settings page
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">UX Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" /> Responsive sidebar
                    navigation
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" /> User profile dropdown
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" /> Theme toggle (light/dark
                    mode)
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" /> Loading states and skeletons
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Start</h2>
            <div className="max-w-2xl mx-auto bg-card p-6 rounded-lg border shadow-sm font-mono text-sm">
              <p className="mb-4">Clone the repository:</p>
              <div className="bg-muted p-3 rounded mb-4 overflow-x-auto">
                <code>git clone https://github.com/yashkhare0/njs-shadcn.git</code>
              </div>
              <p className="mb-4">Install dependencies:</p>
              <div className="bg-muted p-3 rounded mb-4 overflow-x-auto">
                <code>npm install</code>
              </div>
              <p className="mb-4">Create a .env.local file:</p>
              <div className="bg-muted p-3 rounded mb-4 overflow-x-auto">
                <code>
                  NEXTAUTH_SECRET=your-random-secret
                  <br />
                  NEXTAUTH_URL=http://localhost:3000
                  <br />
                  NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
                </code>
              </div>
              <p className="mb-4">Run the development server:</p>
              <div className="bg-muted p-3 rounded overflow-x-auto">
                <code>npm run dev</code>
              </div>
            </div>
          </div>
        </section>

        {/* Project Structure Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Project Structure</h2>
            <div className="max-w-3xl mx-auto bg-card p-6 rounded-lg border shadow-sm font-mono text-sm overflow-x-auto">
              <pre className="text-xs leading-relaxed">
                {`src/
├── app                     # Next.js App Router structure
│   ├── api                 # API routes
│   │   └── auth            # Authentication API endpoints
│   ├── (auth)              # Authentication pages
│   │   ├── login
│   │   ├── signup
│   │   └── logout
│   ├── dashboard           # Dashboard pages
│   │   ├── users           # User management
│   │   ├── products        # Product management
│   │   └── settings        # Settings page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components              # React components
│   ├── ui                  # Shadcn UI components
│   ├── shared              # Shared components
│   └── layouts             # Layout components
├── lib                     # Utility libraries
├── hooks                   # Custom React hooks
├── types                   # TypeScript type definitions
├── utils                   # Utility functions
├── models                  # Data models and mock data
├── styles                  # Global styles
└── tests                   # Test setup and configurations`}
              </pre>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Jump right in and start building your next awesome project with our template
            </p>
            <Button size="lg" asChild>
              <Link href="/login">Explore Template</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} NJS-Shadcn Template
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
              <Link
                href="https://github.com/yashkhare0/njs-shadcn"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                GitHub
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                License
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper components

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-lg border bg-card p-4">
    <h3 className="font-medium mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <title>Check mark</title>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
