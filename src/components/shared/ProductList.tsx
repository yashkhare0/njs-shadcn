'use client';

import { useProducts } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/shared';
import { formatCurrency } from '@/utils';
import Image from 'next/image';

export function ProductList() {
  const { products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <div className="text-center p-4">Loading products...</div>;
  }

  if (isError) {
    return (
      <div className="text-center p-4 text-red-500">
        Error loading products: {error?.message || 'Unknown error'}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return <div className="text-center p-4">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {product.image && (
            <div className="relative w-full h-48">
              <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-lg">{formatCurrency(product.price)}</span>
              <Button onClick={() => toast.success(`Added ${product.name} to cart!`)} size="sm">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
