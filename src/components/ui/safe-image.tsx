'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
  fallbackAlt?: string;
  containerClassName?: string;
}

export function SafeImage({
  src,
  alt = '',
  fallbackSrc = '/placeholder-image.png',
  fallbackAlt = 'Image not available',
  className,
  containerClassName,
  fill,
  style,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div
      className={cn(
        'relative',
        fill && 'aspect-square w-full', // Default aspect ratio if fill is used
        containerClassName
      )}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          className={cn(
            'object-contain', // Always contain the image
            'transition-opacity duration-300',
            loading ? 'opacity-0' : 'opacity-100',
            className
          )}
          onError={handleError}
          onLoad={() => setLoading(false)}
          style={style}
          fill={fill}
          {...props}
        />
      ) : (
        <Image
          src={fallbackSrc}
          alt={fallbackAlt}
          className={cn(
            'object-contain', // Always contain the image
            className
          )}
          style={style}
          fill={fill}
          {...props}
        />
      )}
    </div>
  );
}

export default SafeImage;
