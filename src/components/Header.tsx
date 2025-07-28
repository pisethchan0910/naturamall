"use client"; // Add this directive

import Link from 'next/link';
import { useCart } from '@/context/CartContext'; // Import useCart

const Header = () => {
  const { cartItems } = useCart(); // Get cartItems from context

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white sticky top-0 z-50"> {/* Removed shadow-md */}
      {/* Top Bar */}
      <div className="bg-white py-2 text-xs text-gray-500 border-b border-gray-200"> {/* Added bg-white */}
        <div className="container mx-auto flex flex-wrap justify-between items-center px-2 sm:px-4">
          <div className="flex space-x-2 sm:space-x-3 mb-1 sm:mb-0">
            <Link href="/login" className="hover:text-red-500 hover:underline">Login</Link>
            <Link href="/register" className="hover:text-red-500 hover:underline">Register</Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Cart Icon and Item Count - Moved here for better visibility */}
            <Link href="/cart" className="flex items-center hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <title>Shopping Cart</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-xs font-medium bg-red-500 text-white rounded-full px-1.5 py-0.5 leading-none">{totalItems}</span>
            </Link>
            <span className="border-l border-gray-300 hidden sm:inline" />
            <Link href="/my-orders" className="hover:text-red-500 hover:underline">My Orders</Link>
            <span className="border-l border-gray-300 hidden sm:inline" />
            <Link href="/favorites" className="hover:text-red-500 hover:underline hidden md:inline">Favorites</Link>
            <span className="border-l border-gray-300" />
            <Link href="/customer-service" className="hover:text-red-500 hover:underline">Customer Service</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-2 sm:px-4 flex flex-wrap sm:flex-nowrap justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 mb-2 sm:mb-0">
          <Link href="/">
            <span className="text-3xl sm:text-4xl font-extrabold text-red-600">Natura Mall</span>
            {/* <Image src="/path-to-your-logo.svg" alt="Tmall Logo" width={150} height={40} /> */}
          </Link>
        </div>

        {/* Search Bar - Order changed for mobile to appear below logo if wrapped */}
        <div className="flex-grow max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-0 sm:mx-4 order-3 sm:order-2 w-full sm:w-auto mt-2 sm:mt-0">
          <form className="flex border-2 border-red-500 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-red-300">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full px-3 py-2 sm:py-2.5 text-sm text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 text-sm hover:bg-red-600 focus:outline-none transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* QR Code Placeholder - hidden on small screens, order changed for mobile */}
        <div className="flex-shrink-0 hidden md:flex order-2 sm:order-3 ml-2 sm:ml-0">
           {/* <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-100 border border-gray-200 flex flex-col items-center justify-center text-gray-400 rounded-md text-center p-1">
            <span className="text-xs">Scan for App</span>
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-300 mt-1" />
           </div> */}
        </div>
      </div>

      {/* Optional: Main Navigation Bar (if Tmall has one below search) */}
      {/* <nav className="bg-red-500 text-white">
        <div className="container mx-auto px-4 py-2 flex space-x-6">
          <Link href="/category/womens-fashion" className="hover:bg-red-600 px-3 py-1 rounded">Women's Fashion</Link>
          <Link href="/category/mens-fashion" className="hover:bg-red-600 px-3 py-1 rounded">Men's Fashion</Link>
          <Link href="/category/electronics" className="hover:bg-red-600 px-3 py-1 rounded">Electronics</Link>
          <Link href="/category/home-appliances" className="hover:bg-red-600 px-3 py-1 rounded">Home Appliances</Link>
          <Link href="/category/beauty" className="hover:bg-red-600 px-3 py-1 rounded">Beauty</Link>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
