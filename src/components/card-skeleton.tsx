'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CardSkeletonProps {
  className?: string;
  variant?: 'default' | 'stat' | 'activity';
}

export function CardSkeleton({ className, variant = 'default' }: CardSkeletonProps) {
  if (variant === 'stat') {
    return (
      <Card className={cn('p-6', className)}>
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
    );
  }

  if (variant === 'activity') {
    return (
      <Card className={cn('p-6', className)}>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div
              key={`activity-${i}`}
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
    );
  }

  // Default card skeleton
  return (
    <Card className={cn('p-6', className)}>
      <Skeleton className="h-5 w-40 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </Card>
  );
}
