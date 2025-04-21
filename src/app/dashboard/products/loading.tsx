'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { TableSkeleton } from '@/components/table-skeleton';
import { Card } from '@/components/ui/card';

export default function ProductsLoading() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-9 w-28" />
      </div>

      <Card className="p-6">
        <TableSkeleton
          columns={4}
          rows={6}
          showToolbar={true}
          showHeader={true}
          showPagination={true}
        />
      </Card>
    </div>
  );
}
