'use client'; // If we add any client-side interactions like carousels later

import Link from 'next/link';

// Placeholder product data structure

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  storeName?: string;
  salesVolume?: string;
  href: string;
}

import { useEffect, useState } from 'react';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">猜你喜欢 - Our Product</h2>
          <Link href="/all-featured" className="text-sm text-red-500 hover:underline font-medium">
            View More &rarr;
          </Link>
        </div>
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading products...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={product.href} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"> {/* Added bg-white */}
      <div className="relative w-full h-48 sm:h-56 md:h-60 bg-gray-200">
        {/* Using standard img tag for picsum.photos */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-base font-normal text-gray-800 mb-1.5 h-10 md:h-12 overflow-hidden group-hover:text-red-500 transition-colors duration-200 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-baseline mb-1">
          <span className="text-lg md:text-xl font-bold text-red-500 mr-1.5">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
          )}
        </div>
        <div className="text-xs text-gray-500 flex justify-between items-center">
          <span>{product.storeName || 'Tmall Store'}</span>
          {product.salesVolume && (
            <span>{product.salesVolume}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

// ...existing code...
export default FeaturedProducts;
