'use client';

import { useState, type FC, use } from 'react'; // Import `use`
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

// Placeholder product data type
interface Product {
  id: string;
  name: string;
  price: string; // Price is string like "$199.99"
  description: string;
  imageUrl: string;
  images: { src: string; alt: string }[];
}

// Placeholder function to fetch product data by ID
// In a real application, this would fetch from an API or database
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
  const actualParams = use(paramsPromise); // Unwrap the promise to get the actual params object
  const { id } = actualParams; // Destructure id from the resolved params

  const product = getProductById(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

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
      let priceAsNumber = Number.NaN; // Corrected: Use Number.NaN

      if (typeof product.price === 'string') {
        const strippedPrice = product.price.replace(/[^\d.-]/g, '');
        if (strippedPrice) { // Ensure not an empty string before parsing
          priceAsNumber = Number.parseFloat(strippedPrice);
        }
      }

      // If price is still NaN after attempting to parse, log an error and default to 0
      if (Number.isNaN(priceAsNumber)) { // Corrected: Use Number.isNaN
        console.error(`Failed to parse price for product ${product.name} (ID: ${product.id}): "${product.price}". Using 0.00 as fallback.`);
        priceAsNumber = 0;
      }

      addToCart(
        {
          id: product.id,
          name: product.name,
          price: priceAsNumber, // Use the parsed (and potentially defaulted) number
          image: product.imageUrl, // Matches CartItem interface (image is optional)
        },
        quantity
      );
      alert(`${quantity} of ${product.name} added to cart!`);
    }
  };

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

          {/* Additional details can be added here */}
          {/* e.g., Share buttons, Wishlist, Product specs table */}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
