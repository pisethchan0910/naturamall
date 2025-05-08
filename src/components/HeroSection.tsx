'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Updated category data structure
const categoriesData = [
  {
    name: "Computer, Office, Stationery", // Full name for flyout title or alt text
    displayShort: "Computer / Office / stati", // Short display text for sidebar
    href: "/category/computer-office",
    icon: "💻", // Changed icon to be more relevant
    subCategories: [
      { name: "Laptops", href: "/category/computer-office/laptops", subLinks: ["Gaming Laptops", "Ultrabooks"] },
      { name: "Desktops", href: "/category/computer-office/desktops", subLinks: ["All-in-Ones", "Towers"] },
      { name: "Office Supplies", href: "/category/computer-office/supplies", subLinks: ["Printers", "Monitors"] },
    ],
    promoImage: "/promos/office-promo.jpg",
    promoLink: "/promo/office-deals"
  },
  {
    name: "Household Appliances, Mobile Phones",
    displayShort: "household appliance / cell",
    href: "/category/appliances-mobile",
    icon: "📱",
    subCategories: [
      { name: "Smartphones", href: "/category/appliances-mobile/smartphones", subLinks: ["New Releases", "Accessories"] },
      { name: "Home Appliances", href: "/category/appliances-mobile/home-appliances", subLinks: ["Kitchen", "Cleaning"] },
    ],
  },
  {
    name: "Furniture, Home Decor",
    displayShort: "furniture / Home / home",
    href: "/category/furniture-decor",
    icon: "🛋️", // Changed icon
    subCategories: [
        { name: "Living Room", href: "/category/furniture-decor/living-room", subLinks: ["Sofas", "Coffee Tables"] },
        { name: "Bedroom", href: "/category/furniture-decor/bedroom", subLinks: ["Beds", "Wardrobes"] },
    ]
  },
  {
    name: "Women\'s Fashion, Men\'s Fashion, Underwear",
    displayShort: "Ladies / Men / undergarr",
    href: "/category/fashion-all",
    icon: "👗",
    subCategories: [
      { name: "Women\'s Dresses", href: "/category/fashion-all/womens-dresses", subLinks: ["Summer", "Party"] },
      { name: "Men\'s Shirts", href: "/category/fashion-all/mens-shirts", subLinks: ["Formal", "Casual"] },
    ],
  },
  {
    name: "Shoes, Men\'s Shoes, Bags",
    displayShort: "Shoes / Men\'s shoes / m",
    href: "/category/shoes-bags",
    icon: "👟",
    subCategories: [
      { name: "Women\'s Shoes", href: "/category/shoes-bags/womens", subLinks: ["Heels", "Sneakers"] },
      { name: "Men\'s Shoes", href: "/category/shoes-bags/mens", subLinks: ["Formal", "Boots"] },
    ],
  },
  {
    name: "Watches, Jewelry, Accessories",
    displayShort: "Watches / jewelry / Acce:",
    href: "/category/watches-jewelry",
    icon: "⌚",
    subCategories: [
      { name: "Watches", href: "/category/watches-jewelry/watches", subLinks: ["Smartwatches", "Luxury"] },
      { name: "Jewelry", href: "/category/watches-jewelry/jewelry", subLinks: ["Necklaces", "Rings"] },
    ],
  },
  {
    name: "Automotive Parts, Cars, Travel",
    displayShort: "Car / Car / Travel",
    href: "/category/automotive-travel",
    icon: "🚗",
    subCategories: [
      { name: "Car Parts", href: "/category/automotive-travel/parts" },
      { name: "Travel Gear", href: "/category/automotive-travel/gear" },
    ],
  },
  {
    name: "Foodstuff, Fresh Produce, Health",
    displayShort: "foodstuff / Fresh / health",
    href: "/category/food-health",
    icon: "🍎",
    subCategories: [
      { name: "Snacks", href: "/category/food-health/snacks" },
      { name: "Health Supplements", href: "/category/food-health/supplements" },
    ],
  },
  {
    name: "Mother & Baby, Children\'s Clothing",
    displayShort: "Mother / Children\'s clothir",
    href: "/category/mother-baby",
    icon: "🧸",
    subCategories: [
      { name: "Baby Gear", href: "/category/mother-baby/baby-gear" },
      { name: "Kids\' Fashion", href: "/category/mother-baby/kids-fashion" },
    ],
  },
  {
    name: "Makeup, Personal Care, Cleaning",
    displayShort: "Make-up / Wash and care",
    href: "/category/beauty-care",
    icon: "💄",
    subCategories: [
      { name: "Makeup", href: "/category/beauty-care/makeup" },
      { name: "Skincare", href: "/category/beauty-care/skincare" },
    ],
  },
  {
    name: "Entertainment, Books, Hobbies",
    displayShort: "amusement / Books / fre",
    href: "/category/entertainment-books",
    icon: "📚",
    subCategories: [
      { name: "Books", href: "/category/entertainment-books/books" },
      { name: "Games", href: "/category/entertainment-books/games" },
    ],
  },
];

const HeroSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="bg-gray-100 py-3 md:py-4 relative">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-4">
          {/* Sidebar: Categories - Approx 1/5 width */}
          <aside className="w-full md:w-[18%] lg:w-[16%] bg-red-500 p-2.5 rounded-lg shadow-lg relative z-20 flex-shrink-0">
            <h2 className="text-sm font-bold mb-1.5 text-white px-1.5 flex items-center">
              classify
              <span className="ml-1.5 bg-white text-red-500 text-[10px] font-bold px-1 py-0.5 rounded-sm">NEW</span>
            </h2>
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
                      className="flex items-center px-1.5 py-[3px] text-[11px] leading-tight text-white hover:bg-red-600 rounded-md transition-colors duration-150 group"
                    >
                      <span className="mr-1.5 text-sm">{category.icon}</span>
                      <span className="truncate">{category.displayShort}</span>
                      {/* Arrow removed to match image more closely, flyout still works */}
                    </Link>

                    {/* Fly-out Menu */}
                    {activeCategory === category.name && (
                      <div
                        className="absolute left-full top-0 -mt-px w-auto min-w-[500px] max-w-[700px] bg-white border border-gray-200 rounded-r-lg shadow-xl p-5 z-30 grid grid-cols-3 gap-x-5 gap-y-3"
                        style={{ marginLeft: '0px' }}
                      >
                        {category.subCategories.map((subCat) => (
                          <div key={subCat.name} className="p-0">
                            <Link href={subCat.href} className="font-semibold text-xs text-gray-800 hover:text-red-500 hover:underline mb-1 block">{subCat.name}</Link>
                            <ul className="space-y-0.5">
                                {subCat.subLinks?.map((linkName: string) => ( // Added type for linkName
                                    <li key={linkName}>
                                        <Link href={`${subCat.href}/${linkName.toLowerCase().replace(/\s+/g, '-')}`} className="block text-xxs text-gray-600 hover:text-red-500 hover:underline">
                                            {linkName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                        {category.promoImage && (
                            <div className="col-span-3 mt-3 pt-3 border-t border-gray-200">
                                <Link href={category.promoLink || '#'}
                                    // Removed 'block' as 'flex' is present
                                    className="h-24 rounded overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 relative"
                                >
                                    <div className="absolute inset-0 bg-gray-300 animate-pulse rounded"></div>
                                    <span className="relative z-10">Promo: {category.name}</span>
                                </Link>
                            </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Carousel - Approx 2/5 width */}
          <main className="w-full md:w-[38%] lg:w-[40%] relative z-10 flex-shrink-0">
            <div className="h-full rounded-lg shadow-lg overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
              >
                {[1, 2, 3].map((item) => (
                  <SwiperSlide key={item} className={`bg-gradient-to-r ${item === 1 ? 'from-red-400 to-orange-400' : item === 2 ? 'from-blue-400 to-indigo-500' : 'from-green-400 to-teal-500'} text-white flex items-center justify-center p-6`}>
                    <div className="text-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        爆款直降低至9折! Slide {item}
                      </h2>
                      <p className="text-sm md:text-base mb-4">
                        一起淘惊喜 - Offer {item}.
                      </p>
                      <Link
                        href={`/promotions/main-event-${item}`}
                        className="bg-white text-red-500 font-semibold py-2 px-5 rounded-md hover:bg-gray-100 transition-colors text-sm"
                      >
                        Shop The Event
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </main>

          {/* Smaller Promotional Blocks - Approx 1/5 to 2/5 width */}
          <aside className="w-full md:w-[24%] lg:w-[24%] flex flex-col space-y-3 md:space-y-4 flex-shrink-0 md:self-stretch">
            {/* Placeholder for multiple small promo blocks */}
            {[1, 2, 3].map(item => (
                 <div key={item} className="bg-white p-2.5 rounded-lg shadow-md flex flex-col flex-1">
                    <h3 className="text-xs font-semibold text-gray-700 mb-1 truncate">Promo Block Title {item}</h3>
                    <div className="flex gap-2 flex-1">
                        <div className="w-1/2 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">Img A</div>
                        <div className="w-1/2 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">Img B</div>
                    </div>
                </div>
            ))}
          </aside>

          {/* User/Login Panel - Approx 1/5 width */}
          <aside className="w-full md:w-[20%] lg:w-[20%] bg-white p-3 rounded-lg shadow-md flex-shrink-0 md:self-stretch">
            <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                    {/* Placeholder for user avatar */}
                    <div className="w-10 h-10 rounded-full bg-orange-300 flex items-center justify-center text-white font-bold text-lg">?</div> 
                    <p className="ml-2 text-sm font-semibold text-gray-700">Good evening</p>
                </div>
                <p className="text-xs text-gray-500 mb-1">Sign up to open a store</p>
                <p className="text-sm font-medium text-gray-800 mb-2">Ideal life on Tmall</p>
                <p className="text-xs text-gray-500 mb-3">Hey! Better understand your</p>
                <Link href="/login" className="block w-full bg-red-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors mb-3">
                    Log in now
                </Link>
                <div className="grid grid-cols-4 gap-1 text-xs text-gray-600 mb-3">
                    {/* Placeholder icons - replace with actual icons */}
                    <div className="flex flex-col items-center"><span className="text-lg">⭐</span><span>Baby Colle...</span></div>
                    <div className="flex flex-col items-center"><span className="text-lg">📄</span><span>tioght sh...</span></div>
                    <div className="flex flex-col items-center"><span className="text-lg">💖</span><span>favorite s...</span></div>
                    <div className="flex flex-col items-center"><span className="text-lg">👣</span><span>footpri...</span></div>
                </div>
                <div className="grid grid-cols-4 gap-1">
                    {/* Placeholder app icons */}
                    {[1,2,3,4,5,6,7,8].map(i => (
                        <div key={i} className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-[10px]">App{i}</div>
                    ))}
                </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
