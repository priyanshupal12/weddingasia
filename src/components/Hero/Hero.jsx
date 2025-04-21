import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ChevronRight, ChevronLeft, ShoppingBag, Images } from 'lucide-react';

// This component needs swiper styles to be included in your project:
// You'll need to add to your main CSS file:
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Images
// import react from 'C:/Users/priya/Desktop/weddingasia/weddingasia/src/assets/react.svg';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      image: 'https://img.freepik.com/free-photo/women-shopping-buying-consumer-products-customer-day-celebration_23-2151623481.jpg',
      title: "Luxury Bridal Collection",
      subtitle: "Elegance for Your Special Day",
      cta: "Explore Collection"
    },
    {
      image: "/api/placeholder/1920/1080",
      title: "Premium Wedding Attire",
      subtitle: "Timeless Designs for Perfect Moments",
      cta: "View Catalog"
    },
    {
      image: "/api/placeholder/1920/1080",
      title: "Exclusive Bridal Wear",
      subtitle: "Handcrafted with Attention to Detail",
      cta: "Shop Now"
    }
  ];

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen bg-stone-50 overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-white opacity-70 rounded-full transition-all duration-300"></span>`;
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Image */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 md:px-16">
                <div className="max-w-lg">
                  <h1 className="text-4xl md:text-6xl font-light text-stone-900 mb-4 tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-stone-700 mb-8 font-light">
                    {slide.subtitle}
                  </p>
                  <div className="flex space-x-4">
                    <button className="px-8 py-3 bg-stone-900 text-white hover:bg-stone-800 transition duration-300 flex items-center group">
                      <span>{slide.cta}</span>
                      <ShoppingBag className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-3 border border-stone-900 text-stone-900 hover:bg-stone-100 transition duration-300">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="swiper-button-prev absolute left-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full cursor-pointer hover:bg-white transition-all duration-300">
        <ChevronLeft className="w-6 h-6 text-stone-800" />
      </div>
      <div className="swiper-button-next absolute right-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full cursor-pointer hover:bg-white transition-all duration-300">
        <ChevronRight className="w-6 h-6 text-stone-800" />
      </div>
    </div>
  );
}

