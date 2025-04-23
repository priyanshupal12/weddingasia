import React, { useState, useEffect } from "react";

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

const BlogItem = ({ blog, index }) => {
  const { title, description, image, category } = blog;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 ${
        index % 3 === 0 ? "lg:col-span-2" : "lg:col-span-1"
      } h-full flex flex-col bg-white `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-0"
          }`}
        ></div>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-in-out transform group-hover:scale-110"
        />
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="font-serif text-xl font-medium mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          <a
            href="#"
            className="inline-block relative overflow-hidden bg-white text-pink-600 text-sm font-medium px-5 py-2.5 rounded-lg border border-pink-200 shadow-sm transition-all duration-300 hover:bg-pink-50 hover:border-pink-300 hover:shadow-md"
          >
            <span className="relative flex items-center justify-center gap-2">
              <span>Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
      active
        ? "bg-pink-100 text-pink-700"
        : "bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-500"
    }`}
  >
    {children}
  </button>
);

const JournalPage = () => {
  const [filter, setFilter] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);

    if (filter === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter((blog) => blog.category === filter));
    }
  }, [filter]);

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 opacity-10">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern
              id="flowers"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 0C8.3 0 7 1.3 7 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 18c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#flowers)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className={`font-serif text-5xl md:text-6xl font-light mb-6 transition-all duration-1000 ${
              animateHeader
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Wedding <span className="font-medium text-pink-600">Journal</span>
          </h2>
          <div className="w-24 h-1 bg-pink-300 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Explore our curated collection of wedding inspiration, planning
            advice, and the latest trends for your special day.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredBlogs.map((blog, i) => (
            <BlogItem blog={blog} index={i} key={i} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <nav className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-1 py-1 shadow-sm">
            <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-pink-50">
              <span className="sr-only">Previous</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-pink-600 text-white shadow-sm">
              1
            </button>
            <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-pink-50">
              2
            </button>
            <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-pink-50">
              3
            </button>

            <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-pink-50">
              <span className="sr-only">Next</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default JournalPage;
