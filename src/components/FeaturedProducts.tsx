'use client'; // If we add any client-side interactions like carousels later

import Link from 'next/link';
import Image from 'next/image';

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

const placeholderProducts: Product[] = [
  {
    id: '1',
    name: 'High-Quality Summer Dress - Floral Print, Cotton',
    price: '¥129.00',
    originalPrice: '¥258.00',
    imageUrl: 'https://picsum.photos/seed/product1/400/400',
    storeName: 'Fashionista Boutique',
    salesVolume: '3000+ sold',
    href: '/product/1'
  },
  {
    id: '2',
    name: 'Latest Model Smartphone - 128GB, 5G Enabled',
    price: '¥3899.00',
    imageUrl: 'https://picsum.photos/seed/product2/400/400',
    storeName: 'Tech World',
    salesVolume: '1500+ sold',
    href: '/product/2'
  },
  {
    id: '3',
    name: 'Comfortable Running Shoes - Breathable Mesh',
    price: '¥249.00',
    originalPrice: '¥499.00',
    imageUrl: 'https://picsum.photos/seed/product3/400/400',
    storeName: 'Sporty Goods',
    salesVolume: '5000+ sold',
    href: '/product/3'
  },
  {
    id: '4',
    name: 'Organic Green Tea Leaves - 500g Pack',
    price: '¥88.00',
    imageUrl: 'https://picsum.photos/seed/product4/400/400',
    storeName: 'Healthy Living Store',
    salesVolume: '2000+ sold',
    href: '/product/4'
  },
  {
    id: '5',
    name: 'Wireless Bluetooth Headphones - Noise Cancelling',
    price: '¥499.00',
    originalPrice: '¥799.00',
    imageUrl: 'https://picsum.photos/seed/product5/400/400',
    storeName: 'AudioPhile Store',
    salesVolume: '2500+ sold',
    href: '/product/5'
  },
  {
    id: '6',
    name: 'Luxury Leather Handbag - Designer Collection',
    price: '¥1280.00',
    imageUrl: 'https://picsum.photos/seed/product6/400/400',
    storeName: 'Chic Accessories',
    salesVolume: '800+ sold',
    href: '/product/6'
  },
  {
    id: '7',
    name: 'Smart Home Security Camera - 1080p WiFi',
    price: '¥350.00',
    imageUrl: 'https://picsum.photos/seed/product7/400/400',
    storeName: 'Secure Home Inc.',
    salesVolume: '1200+ sold',
    href: '/product/7'
  },
  {
    id: '8',
    name: 'Kids Educational Toy Set - Building Blocks',
    price: '¥199.00',
    originalPrice: '¥299.00',
    imageUrl: 'https://picsum.photos/seed/product8/400/400',
    storeName: 'PlayLearn Toys',
    salesVolume: '4000+ sold',
    href: '/product/8'
  },
  {
    id: '9',
    name: 'Modern Ergonomic Office Chair - Mesh Back',
    price: '¥899.00',
    imageUrl: 'https://picsum.photos/seed/product9/400/400',
    storeName: 'Office Comforts',
    salesVolume: '700+ sold',
    href: '/product/9'
  },
  {
    id: '10',
    name: 'Stainless Steel Cookware Set - 10 Piece',
    price: '¥650.00',
    originalPrice: '¥999.00',
    imageUrl: 'https://picsum.photos/seed/product10/400/400',
    storeName: 'Kitchen Masters',
    salesVolume: '1800+ sold',
    href: '/product/10'
  },
  {
    id: '11',
    name: 'Portable Blender for Shakes and Smoothies',
    price: '¥159.00',
    imageUrl: 'https://picsum.photos/seed/product11/400/400',
    storeName: 'FitLife Gadgets',
    salesVolume: '3200+ sold',
    href: '/product/11'
  },
  {
    id: '12',
    name: 'Yoga Mat with Carrying Strap - Eco Friendly',
    price: '¥120.00',
    imageUrl: 'https://picsum.photos/seed/product12/400/400',
    storeName: 'ZenFlow Yoga',
    salesVolume: '2200+ sold',
    href: '/product/12'
  },
  {
    id: '13',
    name: 'Hardcover Fiction Bestseller - Mystery Novel',
    price: '¥75.00',
    originalPrice: '¥150.00',
    imageUrl: 'https://picsum.photos/seed/product13/400/400',
    storeName: 'Readers Corner',
    salesVolume: '6000+ sold',
    href: '/product/13'
  },
  {
    id: '14',
    name: 'Professional DSLR Camera - 24MP Sensor',
    price: '¥4500.00',
    imageUrl: 'https://picsum.photos/seed/product14/400/400',
    storeName: 'Photo Pro Gear',
    salesVolume: '500+ sold',
    href: '/product/14'
  },
  {
    id: '15',
    name: "Men's Classic Leather Wallet - RFID Blocking", // Corrected apostrophe
    price: '¥180.00',
    imageUrl: 'https://picsum.photos/seed/product15/400/400',
    storeName: 'Gents Essentials',
    salesVolume: '1900+ sold',
    href: '/product/15'
  },
  {
    id: '16',
    name: 'Scented Candle Gift Set - Aromatherapy',
    price: '¥99.00',
    imageUrl: 'https://picsum.photos/seed/product16/400/400',
    storeName: 'Relax & Unwind',
    salesVolume: '2800+ sold',
    href: '/product/16'
  },
  {
    id: '17',
    name: 'Electric Toothbrush with Multiple Modes',
    price: '¥299.00',
    originalPrice: '¥450.00',
    imageUrl: 'https://picsum.photos/seed/product17/400/400',
    storeName: 'BrightSmile Dental',
    salesVolume: '1300+ sold',
    href: '/product/17'
  },
  {
    id: '18',
    name: 'Travel Backpack - Water Resistant, Laptop Compartment',
    price: '¥320.00',
    imageUrl: 'https://picsum.photos/seed/product18/400/400',
    storeName: 'Adventure Gear Co.',
    salesVolume: '1100+ sold',
    href: '/product/18'
  }
];

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

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-8 md:py-12"> {/* Added bg-white */}
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">猜你喜欢 - Our Product</h2>
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
