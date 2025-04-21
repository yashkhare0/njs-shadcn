'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { LoadingSkeleton } from '@/components/loading-skeleton';

export default function SettingsLoading() {
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
              <LoadingSkeleton
                variant="input"
                count={2}
                lines={true}
                containerClassName="space-y-6"
              />
            </div>
          </div>

          {/* Theme settings section */}
          <div>
            <Skeleton className="h-6 w-36 mb-4" />
            <Skeleton className="h-px w-full mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
