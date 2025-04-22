import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);
  
  const images = [
    {
      id: 1,
      src: "/api/placeholder/600/800",
      alt: "Elegant bride in traditional attire",
      quote: "Where tradition meets contemporary elegance"
    },
    {
      id: 2,
      src: "/api/placeholder/600/800",
      alt: "Designer bridal jewelry collection",
      quote: "Crafting timeless moments through exquisite details"
    },
    {
      id: 3,
      src: "/api/placeholder/600/800",
      alt: "Luxury wedding venue decoration",
      quote: "Transforming dreams into magnificent realities"
    },
    {
      id: 4,
      src: "/api/placeholder/600/800",
      alt: "Bride and groom in designer outfits",
      quote: "Celebrating love stories with unparalleled sophistication"
    },
    {
      id: 5,
      src: "/api/placeholder/600/800",
      alt: "Premium bridal fashion showcase",
      quote: "Where luxury whispers and elegance speaks"
    },
    {
      id: 6,
      src: "/api/placeholder/600/800",
      alt: "Designer bridal collection",
      quote: "Every detail curated, every moment perfected"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto italic">
            At Wedding Asia Productions, we create captivating visual narratives that celebrate 
            the essence of luxury and bridal elegance. Collaborating with the finest designers, 
            our expert team curates premium content that amplifies brand presence and connects 
            with discerning audiences.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(selectedId === image.id ? null : image.id)}
            >
              <div className="aspect-w-3 aspect-h-4 w-full">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-light italic text-lg mb-2 tracking-wide">
                  {image.quote}
                </p>
              </motion.div>
              
              {selectedId === image.id && (
                <motion.div
                  className="absolute inset-0 bg-black/70 flex items-center justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-white text-xl text-center font-serif">
                    {image.quote}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic text-lg">
            "Weaving luxury into every frame, crafting narratives that resonate with the soul of celebration."
          </p>
        </div>
      </div>
    </div>
  );
}