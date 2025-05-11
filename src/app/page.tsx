import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts"; // Import FeaturedProducts

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts /> {/* Add FeaturedProducts section */}
      <div className="container mx-auto p-4">
        {/* Main Content - Header is now in layout.tsx */}

        {/* Placeholder for Featured Products - This is now handled by the FeaturedProducts component */}
        {/* <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-gray-300 h-40 mb-2 rounded" />
                <h3 className="font-semibold">Product {i}</h3>
                <p className="text-gray-600">$XX.XX</p>
              </div>
            ))}
          </div>
        </section> */}
        {/* Footer is now in layout.tsx or will be added there */}
      </div>
    </>
  );
}
