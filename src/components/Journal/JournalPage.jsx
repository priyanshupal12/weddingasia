import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

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

const BlogItem = ({ blog, index, isVisible }) => {
  const { title, description, image, category } = blog;
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 150}ms`;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${index % 3 === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}
        h-full flex flex-col bg-white hover:shadow-xl`}
      style={{ transitionDelay: animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-72">
        {/* Category badge */}
        <div 
          className={`absolute top-4 left-4 z-20 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-0'
          }`}
        >
          <span className="bg-gradient-to-r from-[#3D0301] to-[#8B0000] text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-md">
            {category}
          </span>
        </div>
        
        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#3D0301]/90 via-[#3D0301]/60 to-[#3D0301]/30 transition-opacity duration-300 z-10 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-110"
        />
        
        {/* Text overlay that appears on hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 z-10 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <h3 className="font-serif text-2xl font-medium mb-2 line-clamp-2">{title}</h3>
          <div className="w-16 h-0.5 bg-white mb-3 transition-all duration-500 group-hover:w-24"></div>
          <p className="text-white/90 text-sm line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="font-serif text-xl font-medium mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          <a
            href="#"
            className="inline-block relative overflow-hidden text-[#3D0301] text-sm font-medium group-hover:text-[#6B0000] transition-all duration-300"
          >
            <span className="relative flex items-center gap-2">
              <span>Read Article</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-2"
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
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B0000] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </article>
  );
};

const FilterTab = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-[#3D0301] to-[#8B0000] text-white shadow-lg shadow-[#3D0301]/20"
        : "bg-white/80 text-gray-600 hover:bg-[#3D0301]/5 hover:text-[#3D0301] shadow-sm"
    }`}
  >
    {children}
  </button>
);

const ModernJournalPage = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [visible, setVisible] = useState(false);
  const blogGridRef = useRef(null);

  useEffect(() => {
    setVisible(true);

    const filtered = blogs.filter(blog => {
      const matchesFilter = filter === "All" || blog.category === filter;
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           blog.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
    
    setFilteredBlogs(filtered);
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (blogGridRef.current) {
      observer.observe(blogGridRef.current);
    }
    
    return () => {
      if (blogGridRef.current) {
        observer.unobserve(blogGridRef.current);
      }
    };
  }, [filter, searchTerm]);

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#F9EDED] via-white to-[#F0E3E3] overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#3D0301]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-72 h-72 bg-[#6B0000]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-72 h-72 bg-[#8B0000]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className={`font-serif text-6xl md:text-7xl font-light mb-8 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="relative inline-block">
              Wedding
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3D0301] to-transparent"></span>
            </span>{" "}
            <span className="font-medium bg-gradient-to-r from-[#3D0301] to-[#8B0000] bg-clip-text text-transparent">Journal</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300" style={{ 
            transitionDelay: '300ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)'
          }}>
            Explore our curated collection of wedding inspiration, planning
            advice, and the latest trends to create your perfect celebration.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-12 transition-all duration-1000 delay-500" style={{ 
            transitionDelay: '500ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)'
          }}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-5 pr-12 bg-white/80 backdrop-blur-sm border border-[#3D0301]/10 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3D0301]/20 transition-all"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3D0301]">
                <Search size={20} />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-700" style={{ 
            transitionDelay: '700ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)'
          }}>
            {categories.map((category) => (
              <FilterTab
                key={category}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </FilterTab>
            ))}
          </div>
        </div>

        <div 
          ref={blogGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, i) => (
              <BlogItem blog={blog} index={i} key={i} isVisible={visible} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-2xl font-medium text-[#3D0301] mb-4">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredBlogs.length > 0 && (
          <div className="mt-20 flex justify-center transition-all duration-1000 delay-1000" style={{ 
            transitionDelay: '1000ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)'
          }}>
            <nav className="inline-flex items-center gap-2 p-1 rounded-full bg-white/80 backdrop-blur-sm shadow-lg">
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-[#3D0301]/5 transition-colors">
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
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

              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#3D0301] to-[#8B0000] text-white shadow-md">
                1
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-[#3D0301]/5 transition-colors">
                2
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-[#3D0301]/5 transition-colors">
                3
              </button>

              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-[#3D0301]/5 transition-colors">
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
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
        )}
      </div>
    </section>
  );
};

export default ModernJournalPage;