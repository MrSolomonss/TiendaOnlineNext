import { QuantitySelector, Title } from '@/components';
import { initialData } from '@/seed/seed';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
];

export default function AdminPage() {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title title="Verificar orden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Ajustar elementos</span>
                        <Link href="/cart" className="underline mb-5">
                        Editar carrito
                        </Link>

                        {/* Items */}
                        {productsInCart.map((product) => (
                            <div key={product.slug} className="flex mb-5">
                                <Image
                                    src={`/products/${product.images[0]}`}
                                    width={100}
                                    height={100}
                                    style={{
                                        width: '100px',
                                        height: '100px'
                                    }}   
                                    alt={product.title}
                                    className="mr-5 rounded"
                                />

                                <div>
                                    <p>{product.title}</p>
                                    <p>$ {product.price} x 3</p>
                                    <p className="font-bold">Subtotal: ${product.price * 3}</p>

                                    
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Checkout - resumen */}
                    <div className="bg-white rounded-xl shadow-xl p-7">
                        <h2 className="text-2xl mb-2">Direccion de entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl">Fernando Herrera</p>
                            <p>Av. Siempre viva 123</p>
                            <p>Col. Centro</p>
                            <p>Alcaldia Guahtemoc</p>
                            <p>Ciudad de Mexico</p>
                            <p>CP 647829</p>
                            <p>123.123.123</p>
                        </div>

                        {/* Divider */}
                        <div
                        className="w-full h-0.5 rounded bg-gray-200 mb-10" 
                        />

                        <h2 className="text-2xl mb-2">Resumen de orden</h2>
                        <div className="grid grid-cols-2">
                            <span>No. Productos</span>
                            <span className="text-right">3 artículos</span>

                            <span>Subtotal</span>
                            <span className="text-right">$ 100</span>

                            <span>Impuestos (15%)</span>
                            <span className="text-right">$ 15</span>

                            <span className="mt-5 text-2xl">Total:</span>
                            <span className="mt-5 text-2xl text-right">$ 115</span>
                        </div>

                        {/* Botón de Checkout */}
                        <div className="mt-5 w-full">
                            <Link
                                className="flex btn-primary justify-center"
                                href="/orders/123"
                            >
                                Colocar orden
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
