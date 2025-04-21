'use client';

import React, { Suspense } from 'react';
import { cn } from '@/lib/utils';

interface SuspenseBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  className?: string;
}

export function SuspenseBoundary({ children, fallback, className }: SuspenseBoundaryProps) {
  return (
    <div className={cn(className)}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </div>
  );
}

// Additional helper for data tables
interface TableBoundaryProps {
  children: React.ReactNode;
  columns?: number;
  rows?: number;
  className?: string;
}

export function TableBoundary({ children, columns = 4, rows = 5, className }: TableBoundaryProps) {
  // Dynamically import to avoid server component issues
  const TableSkeleton = React.lazy(() =>
    import('@/components/table-skeleton').then((mod) => ({
      default: mod.TableSkeleton,
    }))
  );

  return (
    <SuspenseBoundary
      className={className}
      fallback={
        <React.Suspense fallback={<div>Loading...</div>}>
          <TableSkeleton columns={columns} rows={rows} />
        </React.Suspense>
      }
    >
      {children}
    </SuspenseBoundary>
  );
}
