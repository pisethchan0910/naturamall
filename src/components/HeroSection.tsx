import Link from 'next/link';
import Image from 'next/image'; // Keep for potential image use

const HeroSection = () => {
  // Placeholder data for categories
  const categories = [
    { name: "Women's Fashion", href: "/category/womens-fashion" },
    { name: "Men's Fashion", href: "/category/mens-fashion" },
    { name: "Electronics", href: "/category/electronics" },
    { name: "Home & Kitchen", href: "/category/home-kitchen" },
    { name: "Beauty & Health", href: "/category/beauty-health" },
    { name: "Sports & Outdoors", href: "/category/sports-outdoors" },
    { name: "Kids & Toys", href: "/category/kids-toys" },
    { name: "Groceries", href: "/category/groceries" },
    { name: "Automotive", href: "/category/automotive" },
    { name: "Books & Media", href: "/category/books-media" },
  ];

  return (
    <section className="bg-gray-100 py-6 md:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar: Categories */}
          <aside className="w-full md:w-1/4 lg:w-1/5 bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3 text-gray-700">Categories</h2>
            <nav>
              <ul className="space-y-1.5">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="text-sm text-gray-600 hover:text-red-500 hover:underline flex items-center group"
                    >
                      {/* Placeholder for category icon */}
                      <span className="w-4 h-4 mr-2 bg-gray-200 rounded-sm inline-block group-hover:bg-red-100"></span>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4">
                 <Link href="/all-categories" className="text-sm text-red-500 hover:underline font-semibold">View All Categories &rarr;</Link>
            </div>
          </aside>

          {/* Main Content: Carousel and Small Banners */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            {/* Main Carousel/Banner Placeholder */}
            <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white h-64 md:h-80 lg:h-96 rounded-lg shadow-lg flex items-center justify-center p-6 mb-4">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Exclusive Deals Just For You!
                </h1>
                <p className="text-md md:text-lg mb-5">
                  Top brands, amazing prices. Don't miss out.
                </p>
                <Link
                  href="/promotions/main-event"
                  className="bg-white text-red-500 font-semibold py-2.5 px-6 rounded-md hover:bg-gray-100 transition-colors text-base"
                >
                  Shop The Event
                </Link>
              </div>
              {/* Placeholder for actual carousel image/content */}
            </div>

            {/* Smaller Promotional Banners Placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white h-32 rounded-lg shadow p-4 flex flex-col justify-between hover:shadow-xl transition-shadow"
                >
                  <div>
                    <h3 className="font-semibold text-gray-700">Promo Banner {item}</h3>
                    <p className="text-xs text-gray-500">Special offer inside.</p>
                  </div>
                  <Link href={`/promo/${item}`} className="text-sm text-red-500 hover:underline self-start font-medium">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
