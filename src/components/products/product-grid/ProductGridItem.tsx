'use client';

import React, { useState } from 'react';
import { SeedProduct } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    product: SeedProduct;
}

export const ProductGridItem = ({ product }: Props) => {

   const [displayImage, setDisplayImage] = useState(product.images[0]); // Inicializa con un valor por defecto adecuado

  return (
    <div>
        <div className='rounded-md overflow-hidden fade-in'>
          <Link 
          className='hover:text-blue-600'
          href={`/product/${product.slug}`}>
            <Image
                src={`/products/${displayImage}`}
                alt={product.title}
                className="w-full object-cover rounded"
                width={500}
                height={500}
                onMouseEnter={() => setDisplayImage(product.images[1]) }
                onMouseLeave={() => setDisplayImage(product.images[0]) }

                priority
            />
            <div className="mt-2">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        </div>
    </div>
  );
}
