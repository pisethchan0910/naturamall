'use client';

import { useState, type FC, use, useEffect } from 'react'; // Added useEffect
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

// Placeholder product data type
interface Product {
  id: string;
  name: string;
  price: string; 
  description: string;
  imageUrl: string;
  images: { src: string; alt: string }[];
}

// Placeholder function to fetch product data by ID
const getProductById = (id: string): Product | null => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: '$199.99',
      description: 'Experience immersive sound with these premium wireless headphones. Features noise-cancellation, long battery life, and a comfortable design for all-day wear. Perfect for music lovers and professionals alike.',
      imageUrl: '/assets/a.jpg', // Main image
      images: [
        { src: '/assets/a.jpg', alt: 'Headphones front view' },
        { src: '/assets/b.jpg', alt: 'Headphones side view' },
        { src: '/assets/c.jpg', alt: 'Headphones on a stand' },
      ],
    },
  ];
  return products.find(p => p.id === id) || null;
};


interface ProductPageResolvedParams {
  id: string;
}

interface ProductPageProps {
  params: Promise<ProductPageResolvedParams>; // params is now a Promise
}

const ProductDetailPage: FC<ProductPageProps> = ({ params: paramsPromise }) => {
  const actualParams = use(paramsPromise); 
  const { id } = actualParams; 

  const product = getProductById(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  // New state for toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // useEffect for toast auto-hide
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Hide toast after 3 seconds
    }
    return () => clearTimeout(timer); // Cleanup timer
  }, [showToast]);

  if (!product) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p>Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
      </main>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      let priceAsNumber = Number.NaN;

      if (typeof product.price === 'string') {
        const strippedPrice = product.price.replace(/[^\d.-]/g, '');
        if (strippedPrice) { 
          priceAsNumber = Number.parseFloat(strippedPrice);
        }
      }

      if (Number.isNaN(priceAsNumber)) {
        console.error(`Failed to parse price for product ${product.name} (ID: ${product.id}): \"${product.price}\". Using 0.00 as fallback.`);
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
      // Update toast state instead of alert
      setToastMessage(`${quantity} of ${product.name} added to cart!`);
      setShowToast(true);
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      {/* Toast Notification */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            top: '80px', 
            right: '20px',
            backgroundColor: '#48BB78', // green-500
            color: 'white',
            padding: '1rem 1.5rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
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
        {/* Image Gallery */}
        <div className="product-gallery">
          <div className="main-image mb-4 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="thumbnail-images grid grid-cols-3 sm:grid-cols-4 gap-2">
            {product.images.map((img) => (
              <div key={img.src} className="thumbnail border border-gray-200 rounded overflow-hidden cursor-pointer hover:border-red-500">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={100}
                  height={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800">{product.name}</h1>
          <p className="text-2xl font-semibold text-red-600 mb-4">{product.price}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Quantity Selector - Basic */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value, 10) || 1)}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          {/* Add to Cart Button */}
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
