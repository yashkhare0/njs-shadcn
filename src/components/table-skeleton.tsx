'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface TableSkeletonProps {
  columns?: number;
  rows?: number;
  showHeader?: boolean;
  showToolbar?: boolean;
  showPagination?: boolean;
  className?: string;
}

export function TableSkeleton({
  columns = 4,
  rows = 5,
  showHeader = true,
  showToolbar = true,
  showPagination = true,
  className,
}: TableSkeletonProps) {
  // Generate unique row ids to prevent key warnings
  const rowIds = Array.from({ length: rows }, (_, i) => `row-${i}`);
  const columnIds = Array.from({ length: columns }, (_, i) => `col-${i}`);

  return (
    <div className={cn('w-full', className)}>
      {showToolbar && (
        <div className="flex items-center justify-between py-4">
          <Skeleton className="h-9 w-64" />
          <div className="flex space-x-2">
            <Skeleton className="h-9 w-24" />
          </div>
        </div>
      )}

      <div className="rounded-md border">
        {showHeader && (
          <div className="h-10 border-b px-4 flex items-center">
            {columnIds.map((id) => (
              <div key={id} className="flex-1 px-2">
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
            <div className="w-14 flex justify-end">
              <Skeleton className="h-4 w-8" />
            </div>
          </div>
        )}

        {rowIds.map((rowId) => (
          <div key={rowId} className="flex items-center border-b p-4 last:border-0">
            {columnIds.map((colId) => (
              <div key={`${rowId}-${colId}`} className="flex-1 px-2">
                <Skeleton className="h-4 w-full max-w-[120px]" />
              </div>
            ))}
            <div className="w-14 flex justify-end">
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {showPagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      )}
    </div>
  );
}
