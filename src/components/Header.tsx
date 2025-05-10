import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50"> {/* Removed shadow-md */}
      {/* Top Bar */}
      <div className="bg-white py-2 text-xs text-gray-500 border-b border-gray-200"> {/* Added bg-white */}
        <div className="container mx-auto flex flex-wrap justify-between items-center px-2 sm:px-4">
          <div className="flex space-x-2 sm:space-x-3 mb-1 sm:mb-0">
            <Link href="/login" className="hover:text-red-500 hover:underline">Login</Link>
            <Link href="/register" className="hover:text-red-500 hover:underline">Register</Link>
          </div>
          <div className="flex space-x-2 sm:space-x-3">
            <Link href="/my-orders" className="hover:text-red-500 hover:underline">My Orders</Link>
            <span className="border-l border-gray-300 hidden sm:inline"></span>
            <Link href="/my-tmall" className="hover:text-red-500 hover:underline hidden sm:inline">My Tmall</Link>
            <span className="border-l border-gray-300 hidden md:inline"></span>
            <Link href="/favorites" className="hover:text-red-500 hover:underline hidden md:inline">Favorites</Link>
            <span className="border-l border-gray-300"></span>
            <Link href="/customer-service" className="hover:text-red-500 hover:underline">Customer Service</Link>
            <span className="border-l border-gray-300 hidden lg:inline"></span>
            <Link href="/site-navigation" className="hover:text-red-500 hover:underline hidden lg:inline">Site Navigation</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-2 sm:px-4 flex flex-wrap sm:flex-nowrap justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 mb-2 sm:mb-0">
          <Link href="/">
            <span className="text-3xl sm:text-4xl font-extrabold text-red-600">Tmall</span>
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
          {/* Trending searches - hidden on small screens */}
          <div className="mt-1.5 flex-wrap space-x-2 text-xs text-gray-500 hidden sm:flex">
            <Link href="/search?q=summer+dresses" className="hover:text-red-500 hover:underline">Summer Dresses</Link>
            <Link href="/search?q=sneakers" className="hover:text-red-500 hover:underline">Sneakers</Link>
            <Link href="/search?q=smartphones" className="hover:text-red-500 hover:underline hidden md:inline">Smartphones</Link>
            <Link href="/search?q=home+decor" className="hover:text-red-500 hover:underline hidden lg:inline">Home Decor</Link>
          </div>
        </div>

        {/* QR Code Placeholder - hidden on small screens, order changed for mobile */}
        <div className="flex-shrink-0 hidden md:flex order-2 sm:order-3 ml-2 sm:ml-0">
           <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-100 border border-gray-200 flex flex-col items-center justify-center text-gray-400 rounded-md text-center p-1">
            <span className="text-xs">Scan for App</span>
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-300 mt-1"></div>
           </div>
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
