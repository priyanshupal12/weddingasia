import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your images here
// For example:
// import image1 from '../../assets/image1.jpg';
// import image2 from '../../assets/image2.jpg';
// etc.
import show4 from '../../assets/show4.jpg';
import hero5 from '../../assets/hero5.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';
import hero1 from '../../assets/hero1.jpg';
import hero4 from '../../assets/hero4.jpg';
import show1 from '../../assets/show1.jpg';
import show2 from '../../assets/show2.jpg';
import show3 from '../../assets/show3.jpg';
import show5 from '../../assets/show5.jpg';
import show6 from '../../assets/show6.jpg';

export default function EventShowcase() {
  // Available months and years
  const timelineData = [
    { id: 1, month: "January", year: "2024" },
    { id: 2, month: "March", year: "2024" },
    { id: 3, month: "May", year: "2024" },
    { id: 4, month: "August", year: "2024" },
    { id: 5, month: "October", year: "2024" },
    // { id: 6, month: "December", year: "2024" },
    // { id: 7, month: "February", year: "2025" },
    // { id: 8, month: "April", year: "2025" }
  ];

  // State
  const [selectedTime, setSelectedTime] = useState(timelineData[0].id);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // REPLACE THIS SECTION: Create an object with your actual images for each event
  // This is an example - replace with your actual image paths
  const eventImages = {
    1: [
      show4,
      show1,
      show2,
      show3,
      show5,
      show6,
      hero5,  
      hero2,
      hero3,
      hero1,
      hero4,
      
      // Add more images as needed
    ],
    2: [
      show6,
      hero5,  
      hero2,
      hero3,
      hero1,
      hero4,
      show4,
      show1,
      show2,
      show3,
      show5,
      // Add more images as needed
    ],
    3: [
      show4,
      show1,
      show2,
      show3,
      show5,
      show6,
      hero5,  
      hero2,
      hero3,
      hero1,
      hero4,
      
      // Add more images as needed
    ],
    4: [
      show6,
      hero5,  
      hero2,
      hero3,
      hero1,
      hero4,
      show4,
      show1,
      show2,
      show3,
      show5,
      // Add more images as needed
    ],
    5: [
      show6,
      hero5,  
      hero2,
      hero3,
      hero1,
      hero4,
      show4,
      show1,
      show2,
      show3,
      show5,
      // Add more images as needed
    ],
    1: [
      show4,
      show1,
      show2,
      show3,
      show5,
      show6,
      hero5,  
      hero2,
      hero3,
      hero1,
      hero4,
      
      // Add more images as needed
    ],
    // Continue for all events (3-8)
    // This is just an example structure
  };

  // Generate images for each event with your actual images
  const generateImages = (eventId) => {
    // You can adjust this number to the total number of images you want
    const totalImages = 10;
    const images = [];
    
    // If you have actual images mapped to this eventId, use them first
    const actualImages = eventImages[eventId] || [];
    
    for (let i = 1; i <= totalImages; i++) {
      if (i <= actualImages.length) {
        // Use actual images if available
        images.push({
          id: i,
          src: actualImages[i-1],
          alt: `Wedding Asia Productions - Event ${eventId}, Image ${i}`
        });
      } else {
        // Fallback to placeholder if you don't have enough images
        images.push({
          id: i,
          src: `/api/placeholder/${600 + (i % 3) * 10}/${800 + (i % 5) * 10}`,
          alt: `Wedding Asia Productions - Event ${eventId}, Image ${i}`
        });
      }
    }
    return images;
  };

  // Content for each event
  const eventContent = {
    1: {
      title: "Elegance Unveiled",
      subtitle: "Annual Bridal Collection",
      description: "An exclusive showcase of our finest bridal collections, featuring masterful craftsmanship and exquisite designs from renowned couturiers.",
      images: generateImages(1)
    },
    2: {
      title: "Royal Splendor",
      subtitle: "Heritage Exhibition",
      description: "Celebrating the majestic traditions of royal weddings, showcasing opulent designs and ceremonial grandeur from across cultures.",
      images: generateImages(2)
    },
    3: {
      title: "Floral Symphony",
      subtitle: "Spring Celebration",
      description: "A breathtaking arrangement of floral magnificence, where nature's beauty enhances the bridal experience through artistic expression.",
      images: generateImages(3)
    },
    4: {
      title: "Summer Soiree",
      subtitle: "Destination Weddings",
      description: "Capturing the essence of luxury destination weddings, where pristine locations provide the perfect backdrop for unforgettable celebrations.",
      images: generateImages(4)
    },
    5: {
      title: "Autumn Allure",
      subtitle: "Fashion Gala",
      description: "A sophisticated showcase of seasonal collections where warm hues and rich textures create an atmosphere of romantic elegance.",
      images: generateImages(5)
    },
    6: {
      title: "Winter Wonderland",
      subtitle: "Holiday Collections",
      description: "Enchanting winter weddings brought to life through crystalline details, luxurious fabrics, and the magical ambiance of the festive season.",
      images: generateImages(6)
    },
    7: {
      title: "Modern Marvels",
      subtitle: "Contemporary Designs",
      description: "Pushing the boundaries of traditional bridal aesthetics with innovative designs that blend timeless elegance with modern sensibilities.",
      images: generateImages(7)
    },
    8: {
      title: "Ethereal Dreams",
      subtitle: "Spring Collection",
      description: "A celebration of ethereal beauty and romantic whimsy, featuring delicate fabrics and intricate details that create dreamlike wedding moments.",
      images: generateImages(8)
    }
  };

  // Scroll handling for timeline
  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -200 : 200;
    setScrollPosition(prev => Math.max(0, prev + scrollAmount));
  };

  // Define some animation variants for the gallery images
  const galleryImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-red-50 to-green-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-gray-400"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full border border-gray-400"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-gray-400"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border border-gray-400"></div>
        <div className="absolute -left-10 top-1/3 w-32 h-32 rounded-full border border-gray-400"></div>
      </div>

      {/* BANNER SECTION */}
      <motion.div
        className="relative w-full h-[80vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Image container for banner */}
        <div className="absolute inset-0 bg-gray-800">
          <div className="h-full w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 z-10"></div>
            <img
              src={show4}
              alt="Luxury Jewelry Collection Banner"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Corner elements */}
        <div className="absolute top-6 left-6 w-16 h-16 z-20" style={{ borderTop: '2px solid #d4af37', borderLeft: '2px solid #d4af37' }}></div>
        <div className="absolute top-6 right-6 w-16 h-16 z-20" style={{ borderTop: '2px solid #d4af37', borderRight: '2px solid #d4af37' }}></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 z-20" style={{ borderBottom: '2px solid #d4af37', borderLeft: '2px solid #d4af37' }}></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 z-20" style={{ borderBottom: '2px solid #d4af37', borderRight: '2px solid #d4af37' }}></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.7
              }}
            >
              <div className="w-16 h-16 relative mx-auto mb-2">
                <div className="absolute inset-0 rotate-45 transform" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(245,204,125,0.2))' }}></div>
                <div className="absolute inset-2 rotate-45 transform" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.6), rgba(245,204,125,0.6))' }}></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated sparkles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
            style={{ background: '#f5cc7d' }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.2
            }}
          ></motion.div>
          <motion.div
            className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full"
            style={{ background: '#d4af37' }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.7,
              delay: 0.5
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full"
            style={{ background: '#f5cc7d' }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
              delay: 1
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full"
            style={{ background: '#d4af37' }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.3,
              delay: 1.5
            }}
          ></motion.div>
        </div>
      </motion.div>
      {/* END BANNER SECTION */}

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        {/* Main heading */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/3 pr-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                <span className="block font-serif">Event Showcase</span>
              </h2>
              <div className="h-1 w-24 bg-yellow-500 mb-6"></div>
              <div className="text-2xl font-bold text-gray-800 mb-2">Jewellery World Productions</div>
              <p className="text-lg text-gray-600 italic">
              We craft captivating visual stories that highlight the brilliance and artistry of fine jewellery. Collaborating with top-tier designers, 
              our expert team curates luxurious content that enhances brand presence and resonates with sophisticated audiences.
              </p>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="h-full w-px bg-gray-200"></div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500 relative"
            >
              <div className="absolute -left-3 top-6 w-6 h-6 bg-yellow-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {eventContent[selectedTime].title}
              </h3>
              <p className="text-lg text-yellow-500 font-semibold mb-4">
                {eventContent[selectedTime].subtitle}
              </p>
              <p className="text-gray-600">
                {eventContent[selectedTime].description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Timeline navigation */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-700">Browse Events</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex space-x-4 py-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {timelineData.map(time => (
                <motion.button
                  key={time.id}
                  onClick={() => setSelectedTime(time.id)}
                  className={`px-6 py-3 relative rounded-lg bg-white shadow-md flex-shrink-0 transition-all duration-300 ${
                    selectedTime === time.id ? 'ring-2 ring-yellow-500' : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-sm font-medium text-gray-900">{time.month}</div>
                  <div className="text-xs text-gray-500">{time.year}</div>
                  {selectedTime === time.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-yellow-500 w-full"
                      layoutId="timelineHighlight"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Gallery grid with more framer-motion animations */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={selectedTime}
        >
          {eventContent[selectedTime].images.map((image, index) => (
            <motion.div
              key={image.id}
              className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-md bg-white p-1"
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              variants={galleryImageVariants}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Optional overlay with zoom effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                // whileHover={{ 
                //   opacity: 1,
                //   backgroundColor: 'rgba(0,0,0,0.3)'
                // }}
              >
                <motion.div
                  className="text-white text-opacity-0"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-yellow-500 bg-opacity-80 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    {/* You can add an icon here if you want */}
                    <span className="text-lg">+</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative line */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-px h-16 bg-gray-200"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-3 h-3 rounded-full bg-rose-500"></div>
        </div>
      </div>
    </div>
  );
}