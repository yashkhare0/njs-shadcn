'use client';

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type SkeletonProps = React.ComponentPropsWithoutRef<typeof Skeleton>;

interface LoadingSkeletonProps extends SkeletonProps {
  count?: number;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  lines?: boolean;
  variant?: 'default' | 'card' | 'avatar' | 'button' | 'input';
}

export function LoadingSkeleton({
  count = 1,
  className,
  containerClassName,
  as: Component = 'div',
  lines = false,
  variant = 'default',
  ...props
}: LoadingSkeletonProps) {
  const items = Array.from({ length: count }, (_, i) => i);

  const getVariantClasses = (variant: LoadingSkeletonProps['variant']) => {
    switch (variant) {
      case 'avatar':
        return 'h-10 w-10 rounded-full';
      case 'button':
        return 'h-9 w-20 rounded-md';
      case 'card':
        return 'h-40 w-full rounded-lg';
      case 'input':
        return 'h-10 w-full rounded-md';
      default:
        return 'h-4 w-full';
    }
  };

  const variantClasses = getVariantClasses(variant);

  if (lines) {
    return (
      <Component className={cn('space-y-2', containerClassName)}>
        {items.map((i) => (
          <div key={`skeleton-line-${i}`} className="flex items-center gap-2">
            <Skeleton className={cn(variantClasses, 'w-full', className)} {...props} />
          </div>
        ))}
      </Component>
    );
  }

  return (
    <Component className={cn('flex flex-wrap gap-2', containerClassName)}>
      {items.map((i) => (
        <Skeleton key={`skeleton-item-${i}`} className={cn(variantClasses, className)} {...props} />
      ))}
    </Component>
  );
}
