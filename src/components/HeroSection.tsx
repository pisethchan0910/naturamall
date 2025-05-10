'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react'; // Added import for useState

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

const promoBlocksData = [
  {
    title: "Billion Subsidies - Price Guarantee",
    tag: "Limited Time",
    tagColor: "bg-red-500 text-white",
    href: "/promo/billion-subsidy",
    items: [
      { name: "EcoFlow Delta 2 Max", price: "¥19999", href: "/product/ecoflow-delta-2max", imageUrl: "https://picsum.photos/seed/power_station_electronic/200/200" },
      { name: "Solid Wood Wardrobe", price: "¥6300", href: "/product/ymmy-wardrobe", imageUrl: "https://picsum.photos/seed/furniture_wardrobe/200/200" },
    ],
  },
  {
    title: "Taobao Flash Sale",
    tag: "Super Low Price",
    tagColor: "bg-orange-400 text-white",
    href: "/promo/flash-sale",
    items: [
      { name: "Air Conditioner", price: "¥2599", href: "/product/air-conditioner", imageUrl: "https://picsum.photos/seed/air_conditioner_electronic/200/200" },
      { name: "Household Wires", price: "¥11", href: "/product/electrical-wire", imageUrl: "https://picsum.photos/seed/wiring_electronic/200/200" },
    ],
  },
  {
    title: "Factory Direct",
    tag: "Super Low Price",
    tagColor: "bg-orange-400 text-white",
    href: "/promo/factory-direct",
    items: [
      { name: "Quiet Cooling Fan", price: "¥673.50", href: "/product/air-cooler-fan", imageUrl: "https://picsum.photos/seed/fan_electronic/200/200" },
      { name: "Badminton Racket", price: "¥232.5", href: "/product/badminton-racket", imageUrl: "https://picsum.photos/seed/sports_racket/200/200" },
    ],
  },
  {
    title: "Everyday Low Price",
    href: "/promo/everyday-low",
    items: [
      { name: "Thin Laptop", price: "¥6816", href: "/product/laptop-thin", imageUrl: "https://picsum.photos/seed/laptop_computer/200/200" },
      { name: "Gaming Desktop PC", price: "¥1659", href: "/product/desktop-gaming-pc", imageUrl: "https://picsum.photos/seed/desktop_computer_gaming/200/200" },
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
                                    <div className="absolute inset-0 bg-gray-300 animate-pulse rounded" />
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
          <main className="w-full md:w-[20%] lg:w-[21%] relative z-10 flex-shrink-0">
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
          <aside className="w-full md:w-[42%] lg:w-[43%] grid grid-cols-2 gap-3 md:gap-4 flex-shrink-0 md:self-stretch">
            {promoBlocksData.map((block) => (
              <div key={block.title} className="bg-white p-2.5 rounded-lg shadow-md flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold text-gray-800 truncate">{block.title}</h3>
                  {block.tag && (
                    <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-sm ${block.tagColor}`}>
                      {block.tag}
                    </span>
                  )}
                  <Link href={block.href} className="text-xs text-gray-400 hover:text-red-500">
                    &gt;
                  </Link>
                </div>
                <div className="flex gap-2 flex-1">
                  {block.items.map((item, idx) => (
                    <Link key={item.name} href={item.href} className="flex-1 bg-gray-50 rounded-lg p-1.5 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                      <div className="w-full h-20 bg-gray-200 rounded mb-1 flex items-center justify-center text-gray-400 text-xs overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover"/>
                      </div>
                      <p className="text-xs text-gray-700 leading-tight truncate w-full">{item.name}</p>
                      <p className="text-xs font-semibold text-red-500">{item.price}</p>
                    </Link>
                  ))}
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
                <p className="text-sm font-medium text-gray-800 mb-2">Your Ideal Life, on Tmall</p>
                <p className="text-xs text-gray-500 mb-3">Log in for a better experience</p>
                <Link href="/login" className="block w-full bg-red-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors mb-3">
                    Log In
                </Link>
                <div className="grid grid-cols-4 gap-1 text-xs text-gray-600 mb-3">
                    {/* Placeholder icons - replace with actual icons */}
                    <div className="flex flex-col items-center"><span className="text-lg">⭐</span><span>Collections</span></div>
                    <div className="flex flex-col items-center"><span className="text-lg">📄</span><span>Followed</span></div>
                    <div className="flex flex-col items-center"><span className="text-lg">💖</span><span>Wishlist</span></div>
                    <div className="flex flex-col items-center"><span className="text-lg">👣</span><span>History</span></div>
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
