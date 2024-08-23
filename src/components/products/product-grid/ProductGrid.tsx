import React from 'react';
import { SeedProduct } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';

// Definición de la interfaz Props con TypeScript
interface Props {
    products: SeedProduct[];
}

// Definición del componente ProductGrid
export const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {products.map((product) => (
          <ProductGridItem key={product.slug} product={product} />
        ))}
      </div>
      <div>ProductGrid</div>
    </div>
  );
}
