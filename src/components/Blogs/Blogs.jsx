import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero2 from "../../assets/hero2.jpg";
// Sample blog data
const blogs = [
  {
    title: "A Petite Bride's Guide to Wedding Dress Shopping",
    description:
      "Dear petite bride to be, if you find yourself at 5'3″ or under, this guide is tailor-made for you! Wedding dress shopping can be a",
    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2024/06/xWA-13th-Mar24_-4523-F-min-1024x683.jpg.pagespeed.ic.OXtQSVO12j.webp",
    category: "Fashion",
  },
  {
    title: '"DESIGN IS CHANGING, BUT STYLE ENDURES": JJ VALAYA',
    description:
      "The couture king and master of ornamentation talks about his latest Ottoman collection, his Hollywood collaboration, bridal wear and the digital move.",
    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2024/03/x7-1.jpeg.pagespeed.ic.NkRzxJhZJ3.webp",
    category: "Designer",
  },
  {
    title: "The evolution of haute couture",
    description:
      "The confluence of traditional textiles, embroideries and weaves with contemporary western silhouettes has helped Indian couture and bridal wear evolve an entirely new design and",
    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2024/03/xHaute_Couture_Thumbnail4-1.jpg.pagespeed.ic.SfyRKgVR7Q.webp",
    category: "Fashion",
  },
  {
    title: "Signature Weddings by Pullman New Delhi, Aerocity",
    description:
      "Signature Weddings by Pullman' an exclusive Wedding roadshow held on 23rd March 2022 at the Peacock Ballroom., Pullman New Delhi, Aerocity.",
    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2021/03/xThumbnail-1.jpg.pagespeed.ic.WWjujaBbNA.webp",
    category: "Venue",
  },
  {
    title: "Suit Up! Differently",
    description:
      "Stealing pages from Aditi Rao Hydari's lookbook for wedding season inspiration.",
    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2024/03/xcover_image_1-1.jpeg.pagespeed.ic.DRZQoZkXwV.webp",
    category: "Style",
  },
  {
    title:
      '"The new normal in fashion will remain what was always normal": Leena Singh',
    description:
      "Leena Singh, co-founder of the iconic fashion label Ashima-Leena is among the original ladies of Delhi's fashion scene. Her flagship store is at Emporio, New",
    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2019/01/xLeena_Singh_Thumbnail-leena-1.jpg.pagespeed.ic.rS1pu0dkJX.webp",
    category: "Designer",
  },
];

// Filter categories for the filter buttons
const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

export default function BlogSectionWithBanner() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Filter blogs based on selected category
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div className="font-serif">
      {/* Hero Banner for transparent navbar */}
      <div className="relative w-full h-100 md:h-150 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <motion.img
          src={Hero2}
          alt="Wedding Asia Banner"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-white text-4xl md:text-6xl font-light mb-4 tracking-wider uppercase">
              Jewellery world <span className="font-semibold">Blogs</span>
            </h1>
          </motion.div>

          <motion.div
            className="w-24 h-px bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.7 }}
          ></motion.div>

          <motion.p
            className="text-gray-100 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Discover inspiration, trends and expert advice for your wedding
            journey
          </motion.p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-amber-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {filteredBlogs.length > 0 && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={filteredBlogs[0].image}
                    alt={filteredBlogs[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded shadow-sm">
                    <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">
                      {filteredBlogs[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-medium mb-4">
                    {filteredBlogs[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredBlogs[0].description}
                  </p>
                  <button className="self-start bg-amber-600 text-white px-6 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-amber-700 transition-colors duration-300">
                    Read Article
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.slice(1).map((blog, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden h-56">
                  
                  <motion.img
                    src={blog.image || "/api/placeholder/400/320"}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded shadow-sm">
                    <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-2 text-gray-900 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-600">
                      <span className="text-xs uppercase tracking-wide">
                        Continue Reading
                      </span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300 px-8 py-3 uppercase text-sm tracking-wider">
              View All Articles
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
