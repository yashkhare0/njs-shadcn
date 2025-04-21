'use client';

import type * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import SafeImage from './safe-image';

import { cn } from '@/lib/utils';

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  );
}

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image> & {
  nextImg?: boolean;
  alt?: string;
  fallbackSrc?: string;
};

function AvatarImage({
  className,
  nextImg,
  alt = '',
  fallbackSrc = '/images/placeholder.png',
  ...props
}: AvatarImageProps) {
  return nextImg ? (
    <div className={cn('aspect-square size-full relative', className)}>
      <SafeImage
        fill
        src={props.src as string}
        alt={alt}
        fallbackSrc={fallbackSrc}
        className="object-cover"
      />
    </div>
  ) : (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn('bg-muted flex size-full items-center justify-center rounded-full', className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
