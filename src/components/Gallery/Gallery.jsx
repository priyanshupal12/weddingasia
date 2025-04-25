import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import show4 from '../../assets/show4.jpg';

// Import your gallery images
import g1 from '../../assets/gallery/g1.jpg';
import g2 from '../../assets/gallery/g2.jpg';
import g3 from '../../assets/gallery/g3.jpg';
import g4 from '../../assets/gallery/g4.jpg';
import g5 from '../../assets/gallery/g5.jpg';
import g6 from '../../assets/gallery/g6.jpg';
import g7 from '../../assets/gallery/g7.jpg';
import g8 from '../../assets/gallery/g8.jpg';
import g9 from '../../assets/gallery/g9.jpg';
import g10 from '../../assets/gallery/g10.jpg';
import g11 from '../../assets/gallery/g11.jpg';
import g12 from '../../assets/gallery/g12.jpg';
import g13 from '../../assets/gallery/g13.jpg';
import g14 from '../../assets/gallery/g14.jpg';
import g15 from '../../assets/gallery/g15.jpg';
import g16 from '../../assets/gallery/g16.jpg';
import g17 from '../../assets/gallery/g17.jpg';
import g18 from '../../assets/gallery/g18.jpg';
import g19 from '../../assets/gallery/g19.jpg';
import g20 from '../../assets/gallery/g20.jpg';
import g21 from '../../assets/gallery/g21.jpg';
import g22 from '../../assets/gallery/g22.jpg';
import g23 from '../../assets/gallery/g23.jpg';
import g24 from '../../assets/gallery/g24.jpg';
import g25 from '../../assets/gallery/g25.jpg';
import g26 from '../../assets/gallery/g26.jpg';
import g27 from '../../assets/gallery/g27.jpg';
import g28 from '../../assets/gallery/g28.jpg';
import g29 from '../../assets/gallery/g29.jpg';
import g30 from '../../assets/gallery/g30.jpg';
import g31 from '../../assets/gallery/g31.jpg';
import g32 from '../../assets/gallery/g32.jpg';
import g33 from '../../assets/gallery/g33.jpg';
import g34 from '../../assets/gallery/g34.jpg';
import g35 from '../../assets/gallery/g35.jpg';
import g36 from '../../assets/gallery/g36.jpg';
import g37 from '../../assets/gallery/g37.jpg';
import g38 from '../../assets/gallery/g38.jpg';
import g39 from '../../assets/gallery/g39.jpg';
import g40 from '../../assets/gallery/g40.jpg';
import g41 from '../../assets/gallery/g41.jpg';
import g42 from '../../assets/gallery/g42.jpg';
import g43 from '../../assets/gallery/g43.jpg';


// ... keep all your other imports

export default function EventShowcase() {
  // State
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  
  // Generate images for the gallery
  const galleryImages = [
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
    g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
    g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
    g31, g32, g33, g34, g35, g36, g37, g38, g39, g40,
    g41, g42, g43, g14, g15, g16, g17, g18, g19, g20,
  ].map((src, index) => ({
    id: index + 1,
    src,
    alt: `Wedding Asia Productions - Image ${index + 1}`
  }));

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Track which images have loaded
  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  // Navigate between images in fullscreen view
  const navigateFullscreen = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  // Close fullscreen view on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        navigateFullscreen('next');
      } else if (e.key === 'ArrowLeft') {
        navigateFullscreen('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Animation variants
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
                Elegance Unveiled
              </h3>
              <p className="text-lg text-yellow-500 font-semibold mb-4">
                Annual Bridal Collection
              </p>
              <p className="text-gray-600">
                An exclusive showcase of our finest bridal collections, featuring masterful craftsmanship and exquisite designs from renowned couturiers.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Gallery heading */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-700">Gallery Showcase</h3>
          </div>
          <div className="h-px w-full bg-gray-200 mb-8"></div>
        </div>

        {/* Gallery grid with skeleton loading */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {loading ? (
            // Skeleton loaders
            [...Array(20)].map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg bg-gray-200"
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  transition: { 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }
                }}
              >
                <div className="w-full h-full"></div>
              </motion.div>
            ))
          ) : (
            // Actual gallery images
            galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-md bg-white p-1 cursor-pointer"
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={galleryImageVariants}
                onClick={() => setSelectedImage(image)}
              >
                {/* Skeleton before image loads */}
                {!loadedImages[image.id] && (
                  <motion.div 
                    className="absolute inset-0 bg-gray-200"
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      transition: { 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }
                    }}
                  />
                )}
                
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: loadedImages[image.id] ? 1 : 0 
                  }}
                  transition={{ duration: 0.5 }}
                  onLoad={() => handleImageLoad(image.id)}
                  style={{ visibility: loadedImages[image.id] ? 'visible' : 'hidden' }}
                />
                
                {/* Zoom indicator overlay */}
                <motion.div 
                  className="absolute inset-0  bg-opacity-0 flex items-center justify-center"
                  whileHover={{ 
                    opacity: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)'
                  }}
                >
                  <motion.div
                    className="text-white"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-yellow-500 bg-opacity-80 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <span className="text-lg">+</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))
          )}
        </div>

        {/* Fullscreen image view */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
                
                {/* Navigation buttons */}
                <motion.button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateFullscreen('prev');
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.7)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={28} />
                </motion.button>
                
                <motion.button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateFullscreen('next');
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.7)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={28} />
                </motion.button>
                
                {/* Image counter */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full text-white text-sm">
                  {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative line */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-px h-16 bg-gray-200"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-3 h-3 rounded-full bg-rose-500"></div>
        </div>
      </div>
    </div>
  );
}