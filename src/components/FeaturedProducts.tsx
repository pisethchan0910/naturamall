'use client'; // If we add any client-side interactions like carousels later

import Link from 'next/link';
import Image from 'next/image';

// Placeholder product data structure
interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  imageUrl: string; // Placeholder, replace with actual image paths
  storeName?: string;
  salesVolume?: string;
  href: string;
}

const placeholderProducts: Product[] = [
  {
    id: '1',
    name: 'High-Quality Summer Dress - Floral Print, Cotton',
    price: '¥129.00',
    originalPrice: '¥258.00',
    imageUrl: '/placeholders/product-1.jpg', // Replace with actual image path
    storeName: 'Fashionista Boutique',
    salesVolume: '3000+ sold',
    href: '/product/1'
  },
  {
    id: '2',
    name: 'Latest Model Smartphone - 128GB, 5G Enabled',
    price: '¥3899.00',
    imageUrl: '/placeholders/product-2.jpg',
    storeName: 'Tech World',
    salesVolume: '1500+ sold',
    href: '/product/2'
  },
  {
    id: '3',
    name: 'Comfortable Running Shoes - Breathable Mesh',
    price: '¥249.00',
    originalPrice: '¥499.00',
    imageUrl: '/placeholders/product-3.jpg',
    storeName: 'Sporty Goods',
    salesVolume: '5000+ sold',
    href: '/product/3'
  },
  {
    id: '4',
    name: 'Organic Green Tea Leaves - 500g Pack',
    price: '¥88.00',
    imageUrl: '/placeholders/product-4.jpg',
    storeName: 'Healthy Living Store',
    salesVolume: '2000+ sold',
    href: '/product/4'
  },
    {
    id: '5',
    name: 'Wireless Bluetooth Headphones - Noise Cancelling',
    price: '¥499.00',
    originalPrice: '¥799.00',
    imageUrl: '/placeholders/product-5.jpg',
    storeName: 'AudioPhile Store',
    salesVolume: '2500+ sold',
    href: '/product/5'
  },
  {
    id: '6',
    name: 'Luxury Leather Handbag - Designer Collection',
    price: '¥1280.00',
    imageUrl: '/placeholders/product-6.jpg',
    storeName: 'Chic Accessories',
    salesVolume: '800+ sold',
    href: '/product/6'
  },
  {
    id: '7',
    name: 'Smart Home Security Camera - 1080p WiFi',
    price: '¥350.00',
    imageUrl: '/placeholders/product-7.jpg',
    storeName: 'Secure Home Inc.',
    salesVolume: '1200+ sold',
    href: '/product/7'
  },
  {
    id: '8',
    name: 'Kids Educational Toy Set - Building Blocks',
    price: '¥199.00',
    originalPrice: '¥299.00',
    imageUrl: '/placeholders/product-8.jpg',
    storeName: 'PlayLearn Toys',
    salesVolume: '4000+ sold',
    href: '/product/8'
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={product.href} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative w-full h-48 sm:h-56 md:h-60 bg-gray-200">
        {/* Placeholder for Image - Tmall often has images that fit the container */}
        {/* <Image src={product.imageUrl} alt={product.name} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" /> */}
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Image: {product.id}</span>
        </div>
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

const FeaturedProducts = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">猜你喜欢 - Guess You Like</h2>
          <Link href="/all-featured" className="text-sm text-red-500 hover:underline font-medium">
            View More &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {placeholderProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
