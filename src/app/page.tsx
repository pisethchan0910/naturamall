import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      {/* Main Content - Header is now in layout.tsx */}
      <h1 className="text-3xl font-bold mb-4">Welcome to Tmall</h1>

      {/* Placeholder for Hero Section */}
      <section className="bg-gray-200 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hero Section</h2>
        <p>This is a placeholder for the main promotional content.</p>
      </section>

      {/* Placeholder for Product Categories */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-100 p-4 rounded-lg text-center"
            >
              Category {i}
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-gray-300 h-40 mb-2 rounded" /> {/* Placeholder for image */}
              <h3 className="font-semibold">Product {i}</h3>
              <p className="text-gray-600">$XX.XX</p>
            </div>
          ))}
        </div>
      </section>
      {/* Footer is now in layout.tsx or will be added there */}
    </div>
  );
}
