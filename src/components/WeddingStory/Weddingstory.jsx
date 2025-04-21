import React, { useState, useEffect } from "react";

const products = [
  {
    img: "https://images.pexels.com/photos/17261593/pexels-photo-17261593/free-photo-of-portrait-of-smiling-indian-couple-in-traditional-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Sethu and Vishnu",
    date: "March 15, 2025",
    brief: "A beachside ceremony filled with joy and laughter",
  },
  {
    img: "https://images.pexels.com/photos/25158843/pexels-photo-25158843/free-photo-of-traditional-indian-wedding-couple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Aditi and Saurabh",
    date: "January 22, 2025",
    brief: "An elegant palace wedding with traditional touches",
  },
  {
    img: "https://images.pexels.com/photos/16987433/pexels-photo-16987433/free-photo-of-portrait-of-a-traditional-couple-kissing.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Hanna and Shahrukh",
    date: "February 8, 2025",
    brief: "A magical winter celebration under the stars",
  },
];

const ProductItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group h-96 relative shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card with flip effect */}
      <div
        className={`relative w-full h-full transition-all duration-500 bg-white ${
          isHovered ? "scale-0" : "scale-100"
        }`}
      >
        {/* Front side content */}
        <div className="h-64 flex justify-center items-center px-6 overflow-hidden bg-white">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="px-6 py-6 absolute bottom-0 left-0 right-0 bg-white">
          <h2 className="font-serif text-xl font-bold text-red-900 mb-1">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm font-light italic">
            {product.date}
          </p>
        </div>
      </div>

      {/* Back side content */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-red-900 to-red-950 overflow-hidden text-white transition-all duration-500 ${
          isHovered ? "scale-100" : "scale-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center p-8 h-full">
          <h3 className="font-serif text-xl font-bold text-yellow-400 mb-4">
            {product.title}
          </h3>
          <p className="text-gray-100 mb-6 text-center">{product.brief}</p>
          <button className="px-6 py-2 bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-colors rounded-full text-sm font-medium">
            View Story
          </button>
        </div>
      </div>
    </div>
  );
};

const WeddingStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50 text-zinc-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-red-100 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-100 translate-x-1/3 translate-y-1/3 opacity-30"></div>

      <div className="max-w-7xl px-4 mx-auto relative z-10">
        <div className="grid grid-cols-12 justify-start mb-12">
          <div className="col-span-12 lg:col-span-8 text-left">
            <h2 className="font-medium text-black font-heading leading-none text-3xl md:text-[55px] mb-2 relative inline-block pb-2">
              <span className="border-b-4 border-[#D4AF37] pb-2">Wedding </span>{" "}
              Stories
            </h2>

            <p className="text-gray-600 mt-6 max-w-7xl text-lg">
              Discover our curated selection of prestigious events showcasing
              the finest in luxury goods and services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              className={`transition-all duration-1000  mt-8 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 2000}ms` }}
              key={i}
            >
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingStory;
