'use client';

import Link from 'next/link';
import Image from 'next/image'; // Keep for potential image use
import { useState } from 'react'; // Import useState for hover interactions

// Updated category data structure
const categoriesData = [
  {
    name: "Women's Fashion",
    href: "/category/womens-fashion",
    icon: "👗", // Placeholder icon
    subCategories: [
      { name: "Dresses", href: "/category/womens-fashion/dresses", subLinks: ["Summer Dresses", "Party Dresses", "Casual Dresses"] },
      { name: "Tops", href: "/category/womens-fashion/tops", subLinks: ["Blouses", "T-Shirts", "Knitwear"] },
      { name: "Shoes", href: "/category/womens-fashion/shoes", subLinks: ["Heels", "Flats", "Sneakers"] },
      { name: "Accessories", href: "/category/womens-fashion/accessories", subLinks: ["Handbags", "Jewelry", "Scarves"] },
    ],
    promoImage: "/promos/womens-fashion.jpg", // Placeholder promo image path
    promoLink: "/promo/womens-special"
  },
  {
    name: "Men's Fashion",
    href: "/category/mens-fashion",
    icon: "👔",
    subCategories: [
      { name: "Shirts", href: "/category/mens-fashion/shirts", subLinks: ["Formal Shirts", "Casual Shirts"] },
      { name: "Pants", href: "/category/mens-fashion/pants", subLinks: ["Chinos", "Jeans"] },
      { name: "Outerwear", href: "/category/mens-fashion/outerwear", subLinks: ["Jackets", "Coats"] },
      { name: "Shoes", href: "/category/mens-fashion/shoes", subLinks: ["Formal Shoes", "Sneakers"] },
    ],
  },
  {
    name: "Electronics",
    href: "/category/electronics",
    icon: "📱",
    subCategories: [
      { name: "Smartphones", href: "/category/electronics/smartphones", subLinks: ["New Releases", "Accessories"] },
      { name: "Laptops", href: "/category/electronics/laptops", subLinks: ["Gaming Laptops", "Ultrabooks"] },
      { name: "Audio", href: "/category/electronics/audio", subLinks: ["Headphones", "Speakers"] },
      { name: "Cameras", href: "/category/electronics/cameras", subLinks: ["DSLR", "Mirrorless"] },
    ],
    promoImage: "/promos/electronics-sale.jpg",
    promoLink: "/promo/electronics-deals"
  },
  {
    name: "Home & Kitchen",
    href: "/category/home-kitchen",
    icon: "🏠",
    subCategories: [
        { name: "Furniture", href: "/category/home-kitchen/furniture", subLinks: ["Living Room", "Bedroom"] },
        { name: "Appliances", href: "/category/home-kitchen/appliances", subLinks: ["Kitchen", "Cleaning"] },
        { name: "Decor", href: "/category/home-kitchen/decor", subLinks: ["Lighting", "Rugs"] },
        { name: "Bedding & Bath", href: "/category/home-kitchen/bedding-bath", subLinks: ["Towels", "Linens"] },
    ]
  },
  {
    name: "Beauty & Health",
    href: "/category/beauty-health",
    icon: "💄",
    subCategories: [
      { name: "Skincare", href: "/category/beauty-health/skincare", subLinks: ["Moisturizers", "Serums"] },
      { name: "Makeup", href: "/category/beauty-health/makeup", subLinks: ["Foundation", "Lipstick"] },
      { name: "Hair Care", href: "/category/beauty-health/haircare", subLinks: ["Shampoo", "Styling"] },
    ],
  },
  {
    name: "Sports & Outdoors",
    href: "/category/sports-outdoors",
    icon: "⚽",
    subCategories: [
      { name: "Activewear", href: "/category/sports-outdoors/activewear", subLinks: ["Men's", "Women's"] },
      { name: "Equipment", href: "/category/sports-outdoors/equipment", subLinks: ["Fitness", "Cycling"] },
      { name: "Outdoor Gear", href: "/category/sports-outdoors/outdoorgear", subLinks: ["Camping", "Hiking"] },
    ],
  },
  // Add a few more to make the list longer
  {
    name: "Kids & Toys",
    href: "/category/kids-toys",
    icon: "🧸",
    subCategories: [
      { name: "Toys", href: "/category/kids-toys/toys", subLinks: ["Action Figures", "Dolls"] },
      { name: "Baby Gear", href: "/category/kids-toys/baby-gear", subLinks: ["Strollers", "Car Seats"] },
    ],
  },
  {
    name: "Groceries & Pets",
    href: "/category/groceries-pets",
    icon: "🛒",
    subCategories: [
      { name: "Fresh Food", href: "/category/groceries-pets/fresh", subLinks: ["Fruits", "Vegetables"] },
      { name: "Pet Supplies", href: "/category/groceries-pets/pets", subLinks: ["Dog Food", "Cat Toys"] },
    ],
  },
];

const HeroSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="bg-gray-100 py-4 md:py-6 relative"> {/* Adjusted padding */}
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar: Categories */}
          <aside className="w-full md:w-60 lg:w-64 bg-red-500 p-2.5 rounded-lg shadow-lg relative z-20"> {/* Changed background to red */}
            <h2 className="text-sm font-bold mb-1.5 text-white px-1.5">Shop by Category</h2> {/* Changed text to white */}
            <nav>
              <ul className="space-y-0">
                {categoriesData.map((category) => (
                  <li
                    key={category.name}
                    onMouseEnter={() => setActiveCategory(category.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="relative group"
                  >
                    <Link
                      href={category.href}
                      className="flex items-center px-1.5 py-1 text-xs text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors duration-150 group"
                    >
                      <span className="mr-2 text-sm">{category.icon}</span>
                      {category.name}
                      <span className="ml-auto text-gray-200 group-hover:text-white transition-colors duration-150 text-xs">&gt;</span>
                    </Link>

                    {/* Fly-out Menu */}
                    {activeCategory === category.name && (
                      <div
                        className="absolute left-full top-0 -mt-px w-auto min-w-[500px] max-w-[700px] bg-white border border-gray-200 rounded-r-lg shadow-xl p-5 z-30 grid grid-cols-3 gap-x-5 gap-y-3"
                        style={{ marginLeft: '0px' }} // Adjusted for seamless connection
                      >
                        {category.subCategories.map((subCat) => (
                          <div key={subCat.name} className="p-0">
                            <Link href={subCat.href} className="font-semibold text-xs text-gray-800 hover:text-red-500 hover:underline mb-1 block">{subCat.name}</Link>
                            <ul className="space-y-0.5">
                                {subCat.subLinks?.map(linkName => (
                                    <li key={linkName}>
                                        <Link href={`${subCat.href}/${linkName.toLowerCase().replace(/\s+/g, '-')}`} className="block text-xxs text-gray-600 hover:text-red-500 hover:underline">
                                            {linkName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                        {/* Promotional Image in Fly-out */}
                        {category.promoImage && (
                            <div className="col-span-3 mt-3 pt-3 border-t border-gray-200">
                                <Link href={category.promoLink || '#'}
                                    className="block h-24 rounded overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 relative"
                                >
                                    {/* Placeholder for actual Image component */}
                                    <div className="absolute inset-0 bg-gray-300 animate-pulse rounded"></div>
                                    <span className="relative z-10">Promo: {category.name}</span>
                                    {/* <Image src={category.promoImage} alt={`${category.name} Promotion`} layout="fill" objectFit="cover" className="rounded" /> */}
                                </Link>
                            </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* Removed View All Categories link for now to match Tmall's typical hero category display */}
          </aside>

          {/* Main Content: Carousel and Small Banners */}
          <main className="w-full md:flex-1 relative z-10"> {/* Adjusted width, z-index */}
            {/* Main Carousel/Banner Placeholder */}
            <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white h-64 md:h-[calc(100%-0px)] lg:h-[calc(100%-0px)] rounded-lg shadow-lg flex items-center justify-center p-6 mb-4 md:mb-0"> {/* Adjusted height and margin */}
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Exclusive Deals Just For You!
                </h1>
                <p className="text-md md:text-lg mb-5">
                  Top brands, amazing prices. Don&apos;t miss out.
                </p>
                <Link
                  href="/promotions/main-event"
                  className="bg-white text-red-500 font-semibold py-2.5 px-6 rounded-md hover:bg-gray-100 transition-colors text-base"
                >
                  Shop The Event
                </Link>
              </div>
            </div>

            {/* Smaller Promotional Banners Placeholders - Tmall often has these outside the immediate hero or integrated differently, so removing for now to focus on sidebar + main banner */}
            {/* 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
            */}
          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
