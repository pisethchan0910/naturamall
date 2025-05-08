import Image from "next/image";
import HeroSection from "@/components/HeroSection"; // Import the HeroSection component

export default function HomePage() {
  return (
    <>
      <HeroSection /> {/* Add the HeroSection component here */}
      <div className="container mx-auto p-4">
        {/* Main Content - Header is now in layout.tsx */}
        {/* The old h1 can be removed or kept depending on SEO strategy, for now, it's removed as Hero has its own h1 */}

        {/* Placeholder for Product Categories */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-100 p-4 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                Category {i}
              </div>
            ))}
          </div>
        </section>

        {/* Placeholder for Featured Products */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-gray-300 h-40 mb-2 rounded" /> {/* Placeholder for image */}
                <h3 className="font-semibold">Product {i}</h3>
                <p className="text-gray-600">$XX.XX</p>
              </div>
            ))}
          </div>
        </section>
        {/* Footer is now in layout.tsx or will be added there */}
      </div>
    </>
  );
}
