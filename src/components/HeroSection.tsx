'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Removed Navigation
import 'swiper/css';
// import 'swiper/css/navigation'; // Removed navigation CSS
import 'swiper/css/pagination';
import { useState } from 'react';

// Define interfaces for category data
interface SubCategory {
  name: string;
  href: string;
  subLinks?: string[]; // subLinks is optional
}

interface Category {
  name: string;
  displayShort: string;
  href: string;
  icon: string;
  subCategories: SubCategory[];
  promoImage?: string;
  promoLink?: string;
}

// Data for Carousel Slides
const carouselSlidesData = [
  {
    id: 1,
    imageUrl: "/assets/a.jpg", // Updated path
  },
  {
    id: 2,
    imageUrl: "/assets/b.jpg", // Updated path
  },
  {
    id: 3,
    imageUrl: "/assets/c.jpg", // Updated path
  },
];

// Updated category data structure
const categoriesData: Category[] = [
  {
    name: "បន្លែស្រស់", // Fresh Vegetables
    displayShort: "បន្លែស្រស់",
    href: "/category/fresh-vegetables",
    icon: "🥬",
    subCategories: [],
    promoImage: "/assets/veggie-promo.jpg",
    promoLink: "/promo/fresh-vegetables"
  },
  {
    name: "បន្លែដាំក្នុងផ្ទះ", // Homegrown Vegetables
    displayShort: "ដាំក្នុងផ្ទះ",
    href: "/category/homegrown",
    icon: "🌿",
    subCategories: [],
    promoImage: "/assets/homegrown.jpg",
    promoLink: "/promo/homegrown"
  },
  {
    name: "បន្លែអាហារូបត្ថម្ភខ្ពស់", // High Nutrition Vegetables
    displayShort: "អាហារូបត្ថម្ភខ្ពស់",
    href: "/category/nutritious",
    icon: "🥦",
    subCategories: [],
    promoImage: "/assets/nutritious.jpg",
    promoLink: "/promo/nutritious"
  },
  {
    name: "បន្លែសម្រាប់ម្ហូបខ្មែរ", // Khmer Cooking Vegetables
    displayShort: "ម្ហូបខ្មែរ",
    href: "/category/khmer-cuisine",
    icon: "🍛",
    subCategories: [],
    promoImage: "/assets/khmer-cuisine.jpg",
    promoLink: "/promo/khmer-vegetables"
  },
  {
    name: "បន្លែសាច់ក្រាស់", // Starchy Vegetables
    displayShort: "សាច់ក្រាស់",
    href: "/category/starchy",
    icon: "🥔",
    subCategories: [],
    promoImage: "/assets/starchy.jpg",
    promoLink: "/promo/starchy"
  },
  {
    name: "បន្លែសុទ្ធអង្ករ", // Organic Rice Vegetables
    displayShort: "សុទ្ធអង្ករ",
    href: "/category/organic-rice",
    icon: "🌾",
    subCategories: [],
    promoImage: "/assets/organic-rice.jpg",
    promoLink: "/promo/organic-rice"
  },
  {
    name: "បន្លែដើម", // Root Vegetables
    displayShort: "បន្លែដើម",
    href: "/category/roots",
    icon: "🫒",
    subCategories: [],
    promoImage: "/assets/roots.jpg",
    promoLink: "/promo/roots"
  },
  {
    name: "បន្លែត្រជាក់", // Chilled Vegetables
    displayShort: "ត្រជាក់",
    href: "/category/chilled",
    icon: "❄️",
    subCategories: [],
    promoImage: "/assets/chilled.jpg",
    promoLink: "/promo/chilled"
  }
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
  {
    title: "Tech Gadgets Galore",
    tag: "Hot New",
    tagColor: "bg-teal-500 text-white",
    href: "/promo/tech-gadgets",
    items: [
      { name: "Wireless Charger Pad", price: "¥199", href: "/product/wireless-charger", imageUrl: "https://picsum.photos/seed/charger_tech/200/200" },
      { name: "Bluetooth Speaker Mini", price: "¥350", href: "/product/bluetooth-speaker", imageUrl: "https://picsum.photos/seed/speaker_audio/200/200" },
    ],
  }
];

const HeroSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="bg-white py-3 md:py-4 relative"> {/* Added bg-white */}
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"> {/* Changed from flex to grid and updated column definitions */}
          {/* Sidebar: Categories */}
          <aside className="bg-red-500 p-3 md:p-4 rounded-lg shadow-lg relative z-20 flex flex-col"> {/* Added flex flex-col */}
            <h2 className="text-sm font-bold mb-1.5 text-white px-1.5 flex items-center">
              Categories
              <span className="ml-1.5 bg-white text-red-500 text-[10px] font-bold px-1 py-0.5 rounded-sm">NEW</span>
            </h2>
            <nav className="flex-grow"> {/* Added flex-grow */}
              <ul className="h-full flex flex-col"> {/* Removed space-y-0, added h-full flex flex-col */}
                {categoriesData.map((category) => (
                  <li
                    key={category.name}
                    onMouseEnter={() => setActiveCategory(category.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="relative group flex-grow" /* Added flex-grow */
                  >
                    <Link
                      href={category.href}
                      className="w-full h-full flex items-center px-1.5 text-[11px] leading-tight text-white hover:bg-white hover:text-black rounded-md transition-colors duration-150 group" /* Added w-full & h-full */
                    >
                      <span className="mr-1.5 text-sm">{category.icon}</span>
                      <span className="truncate">{category.displayShort}</span>
                      {/* Arrow removed to match image more closely, flyout still works */}
                    </Link>

                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Carousel */}
          <main className="relative z-10"> {/* Removed width, flex-shrink utilities */}
            <div className="h-full rounded-lg shadow-lg overflow-hidden">
              <Swiper
                modules={[Pagination, Autoplay]} // Removed Navigation from modules
                spaceBetween={0}
                slidesPerView={1}
                // navigation // Navigation prop removed
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
              >
                {carouselSlidesData.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="text-white flex items-center justify-center p-3 md:p-4 bg-cover bg-center relative" // Changed p-6 to p-3 md:p-4
                    style={{ backgroundImage: `url('${slide.imageUrl}')` }} // Corrected quotes
                  >
                    {/* Overlay and Content removed to display only image */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </main>

          {/* Smaller Promotional Blocks */}
          <aside className="lg:col-span-2 xl:col-span-3 grid grid-cols-3 gap-3 md:gap-4"> {/* Removed width, flex-shrink, self-stretch utilities; Added responsive col-span */}
            {promoBlocksData.map((block, index) => ( // Added index
              <div
                key={block.title}
                className={`bg-gray-100 p-3 md:p-4 rounded-lg shadow-md flex flex-col ${index === 0 ? 'col-span-2' : ''}`} // Changed p-2.5 to p-3 md:p-4
              >
                <div className="flex justify-between items-center mb-2 h-5"> 
                  <h3 className="text-sm font-bold text-gray-800 truncate">{block.title}</h3>
                  <div className="flex items-center"> 
                    {block.tag && (
                      <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-sm mr-1.5 ${block.tagColor}`}> 
                        {block.tag}
                      </span>
                    )}
                    <Link href={block.href} className="text-xs text-gray-400 hover:text-red-500">
                      &gt;
                    </Link>
                  </div>
                </div>
                <div className="flex gap-2 flex-1">
                  {block.items.map((item, _itemIdx) => ( // _itemIdx is not used for layout logic here, block's 'index' is
                    index === 0 ? ( // This is the first block (merged one), items are horizontal
                      <Link key={item.name} href={item.href} className="flex-1 bg-gray-100 rounded-lg p-3 md:p-4 flex flex-row items-center hover:shadow-lg transition-shadow overflow-hidden"> {/* Changed p-1.5 to p-3 md:p-4 */}
                        <div className="w-20 h-20 bg-gray-200 rounded mr-1.5 flex-shrink-0 flex items-center justify-center text-gray-400 text-xs overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col text-left flex-grow min-w-0"> {/* min-w-0 for better truncation */}
                          <p className="text-xs text-gray-700 leading-tight truncate w-full">{item.name}</p>
                          <p className="text-xs font-semibold text-red-500">{item.price}</p>
                        </div>
                      </Link>
                    ) : ( // These are the other blocks, items are vertical
                      <Link key={item.name} href={item.href} className="flex-1 bg-gray-100 rounded-lg p-3 md:p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow overflow-hidden"> {/* Changed p-1.5 to p-3 md:p-4 */}
                        <div className="w-full h-20 bg-gray-200 rounded mb-1 flex items-center justify-center text-gray-400 text-xs overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover"/>
                        </div>
                        <p className="text-xs text-gray-700 leading-tight truncate w-full">{item.name}</p>
                        <p className="text-xs font-semibold text-red-500">{item.price}</p>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </aside>

          {/* User/Login Panel */}
          <aside className="bg-gray-100 p-3 md:p-4 rounded-lg shadow-lg"> {/* Removed width, flex-shrink, self-stretch utilities */}
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
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: white !important;
          opacity: 0.7; /* Optional: for a slight difference for inactive bullets */
        }
        .swiper-pagination-bullet-active {
          background-color: white !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
