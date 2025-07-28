'use client';

import { useState, type FC, use, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
// Remove Swiper imports
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  storeName?: string;
  salesVolume?: string;
  href: string;
  description?: string;
  images?: { src: string; alt: string }[];
  detailImages?: string[];
}

interface ProductPageResolvedParams {
  id: string;
}

interface ProductPageProps {
  params: Promise<ProductPageResolvedParams>;
}

const ProductDetailPage: FC<ProductPageProps> = ({ params: paramsPromise }) => {
  const actualParams = use(paramsPromise);
  const { id } = actualParams;
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data: Product[] = await res.json();
        const found = data.find((p) => p.id === id);
        setProduct(found || null);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  if (loading) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p>Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
      </main>
    );
  }

  const handleAddToCart = () => {
    let priceAsNumber = Number.NaN;
    if (typeof product.price === 'string') {
      const strippedPrice = product.price.replace(/[^\d.-]/g, '');
      if (strippedPrice) {
        priceAsNumber = Number.parseFloat(strippedPrice);
      }
    }
    if (Number.isNaN(priceAsNumber)) {
      priceAsNumber = 0;
    }
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: priceAsNumber,
        image: product.imageUrl,
      },
      quantity
    );
    setToastMessage(`${quantity} of ${product.name} added to cart!`);
    setShowToast(true);
  };

  const ImageGallery = ({ images, productName }: { images: string[]; productName: string }) => {
    const [activeIdx, setActiveIdx] = useState(0);
        return (
          <div className="flex mb-4 overflow-hidden rounded-lg aspect-square bg-white">
        {/* Thumbnails on the left */}
        <div className="flex flex-col gap-2 p-2 justify-center items-center">
          {images.map((img, idx) => (
            <button
              key={img}
              type="button"
            className={`border rounded overflow-hidden w-14 h-14 flex items-center justify-center focus:outline-none ${activeIdx === idx ? 'border-red-500' : 'border-gray-200'} cursor-pointer`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Show image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
        {/* Main image on the right */}
        <div className="flex-1 relative flex items-center justify-center">
          <Image
            src={images[activeIdx]}
            alt={`${productName} image ${activeIdx + 1}`}
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    );
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      {showToast && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            backgroundColor: '#48BB78',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            zIndex: 100,
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
            opacity: showToast ? 1 : 0,
            transform: showToast ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <p className="font-semibold">Success!</p>
          <p>{toastMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="product-gallery">
          {product.detailImages && product.detailImages.length > 0 && (
            <ImageGallery images={product.detailImages} productName={product.name} />
          )}
          <div className="thumbnail-images grid grid-cols-3 sm:grid-cols-4 gap-2">
            {product.images?.map((img) => (
              <div
                key={img.src}
                className="thumbnail border border-gray-200 rounded overflow-hidden cursor-pointer hover:border-red-500 relative aspect-square"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-red-600 mb-4">
            {product.price}
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Number.parseInt(e.target.value, 10) || 1)
              }
              className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
