'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useSidebar } from '@/components/ui/sidebar';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useTheme } from '@/utils/use-theme';

export default function SettingsPage() {
  const { state, toggleSidebar } = useSidebar();
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    siteName: 'NJS-Shadcn Dashboard',
    siteDescription: 'A modern dashboard built with Next.js and Shadcn UI',
  });

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the settings
    console.log('Settings saved:', formData);
    alert('Settings saved successfully!');
  };

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-9 w-36" />
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            {/* General settings section */}
            <div>
              <Skeleton className="h-6 w-40 mb-4" />
              <Skeleton className="h-px w-full mb-4" />

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>

                <div className="grid gap-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>

            {/* Theme settings section */}
            <div>
              <Skeleton className="h-6 w-36 mb-4" />
              <Skeleton className="h-px w-full mb-4" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Skeleton className="h-24 w-full rounded-md" />
                <Skeleton className="h-24 w-full rounded-md" />
                <Skeleton className="h-24 w-full rounded-md" />
              </div>
            </div>

            {/* Sidebar settings section */}
            <div>
              <Skeleton className="h-6 w-40 mb-4" />
              <Skeleton className="h-px w-full mb-4" />

              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4 rounded-sm" />
                  <Skeleton className="h-4 w-48" />
                </div>

                <div>
                  <Skeleton className="h-4 w-28 mb-2" />
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Skeleton className="h-9 w-28" />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button variant="outline" onClick={toggleSidebar}>
          {state === 'expanded' ? 'Collapse Sidebar' : 'Expand Sidebar'}
        </Button>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">General Settings</h2>
              <Separator className="mb-4" />

              <div className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="siteName" className="text-sm font-medium">
                    Site Name
                  </label>
                  <Input
                    id="siteName"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="siteDescription" className="text-sm font-medium">
                    Site Description
                  </label>
                  <Input
                    id="siteDescription"
                    name="siteDescription"
                    value={formData.siteDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
              <Separator className="mb-4" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                  className={`p-4 cursor-pointer ${theme === 'light' ? 'border-2 border-primary' : 'border'}`}
                  onClick={() => setTheme('light')}
                >
                  <div className="mb-2 font-medium">Light Theme</div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 rounded-full bg-background border" />
                    <div className="w-6 h-6 rounded-full bg-primary" />
                    <div className="w-6 h-6 rounded-full bg-secondary" />
                  </div>
                </Card>

                <Card
                  className={`p-4 cursor-pointer ${theme === 'dark' ? 'border-2 border-primary' : 'border'}`}
                  onClick={() => setTheme('dark')}
                >
                  <div className="mb-2 font-medium">Dark Theme</div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-900" />
                    <div className="w-6 h-6 rounded-full bg-zinc-800" />
                    <div className="w-6 h-6 rounded-full bg-zinc-700" />
                  </div>
                </Card>

                <Card
                  className={`p-4 cursor-pointer ${theme === 'system' ? 'border-2 border-primary' : 'border'}`}
                  onClick={() => setTheme('system')}
                >
                  <div className="mb-2 font-medium">System Theme</div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-700" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-background to-zinc-300" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-foreground" />
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Sidebar Settings</h2>
              <Separator className="mb-4" />

              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sidebarCollapsible"
                    className="rounded text-primary"
                    defaultChecked
                  />
                  <label htmlFor="sidebarCollapsible" className="text-sm font-medium">
                    Allow sidebar to be collapsed
                  </label>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Sidebar Mode</div>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="mode-default"
                        name="sidebarMode"
                        value="default"
                        defaultChecked
                        className="text-primary"
                      />
                      <label htmlFor="mode-default">Default</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="mode-floating"
                        name="sidebarMode"
                        value="floating"
                        className="text-primary"
                      />
                      <label htmlFor="mode-floating">Floating</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button type="submit">Save Settings</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
