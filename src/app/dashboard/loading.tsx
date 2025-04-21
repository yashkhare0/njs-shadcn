'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { CardSkeleton } from '@/components/card-skeleton';

export default function DashboardLoading() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <Skeleton className="h-10 w-64" />
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map((i) => (
          <CardSkeleton key={`stat-${i}`} variant="stat" />
        ))}
      </div>

      {/* Recent Activity Skeleton */}
      <div className="mb-4">
        <Skeleton className="h-6 w-40" />
      </div>
      <CardSkeleton variant="activity" />
    </div>
  );
}
