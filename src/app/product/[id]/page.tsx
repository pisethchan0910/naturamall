import React from 'react';
import Image from 'next/image';

// Placeholder product data type
interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  images: { src: string; alt: string }[];
  // Add other relevant product fields here
  // e.g., category, brand, stock, reviews, specifications, etc.
}

// Placeholder function to fetch product data by ID
// In a real application, this would fetch from an API or database
const getProductById = (id: string): Product | null => {
  // For now, return a static product or find from a predefined list
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
        // Add more images if available
      ],
    },
    // Add more products if you want to test with different IDs
  ];
  return products.find(p => p.id === id) || null;
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage: React.FC<ProductPageProps> = ({ params }) => {
  const { id } = params;
  const product = getProductById(id);

  if (!product) {
    return (
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p>Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
        </main>
    );
  }

  return (
      <main className="flex-grow container mx-auto px-4 py-8">
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
                defaultValue="1"
                className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Add to Cart
            </button>

            {/* Additional details can be added here */}
            {/* e.g., Share buttons, Wishlist, Product specs table */}
          </div>
        </div>
      </main>
  );
};

export default ProductDetailPage;
