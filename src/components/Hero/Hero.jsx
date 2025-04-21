import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ChevronRight, ChevronLeft, ShoppingBag, Calendar } from 'lucide-react';

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg'; 
import hero4 from '../../assets/hero4.jpg';
import hero5 from '../../assets/hero5.jpg';


export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedElements, setAnimatedElements] = useState({
    divider: false,
    title: false,
    subtitle: false,
    buttons: false
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Reset animations when slide changes
    setAnimatedElements({
      divider: false,
      title: false,
      subtitle: false,
      buttons: false
    });
    
    // Trigger animations in sequence
    const animationSequence = [
      { element: 'divider', delay: 300 },
      { element: 'title', delay: 500 },
      { element: 'subtitle', delay: 800 },
      { element: 'buttons', delay: 1100 },
    ];
    
    animationSequence.forEach(({ element, delay }) => {
      setTimeout(() => {
        setAnimatedElements(prev => ({ ...prev, [element]: true }));
      }, delay);
    });
  }, [activeIndex]);

  const slides = [
    {
      image: hero5,
      title: "Luxury Bridal Collection",
      subtitle: "Elegance for Your Special Day",
      cta: "Explore Collection"
    },
    {
      image: hero2,
      title: "Premium Wedding Attire",
      subtitle: "Timeless Designs for Perfect Moments",
      cta: "View Catalog"
    },
    {
      image: hero3,
      title: "Exclusive Bridal Wear",
      subtitle: "Handcrafted with Attention to Detail",
      cta: "Shop Now"
    }
  ];

  if (!mounted) return null;

  return (
    <React.Fragment>
    <div className="relative w-full h-[90vh] md:h-screen bg-stone-50 overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1500}
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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Image with zoom effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={`w-full h-full transform transition-transform duration-10000 ease-linear ${activeIndex === index ? 'scale-110' : 'scale-100'}`}>
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover object-[60%_10%]"
                />
              </div>
              
              {/* Enhanced overlay with more gradient depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content with improved styling and animations */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 md:px-16">
                <div className="max-w-lg relative z-10">
                  {/* Decorative elements with animation */}
                  <div 
                    className={`w-20 h-1 bg-amber-400 mb-6 transition-all duration-700 ease-out ${
                      animatedElements.divider 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-8'
                    }`}
                  ></div>
                  
                  <h1 
                    className={`text-5xl md:text-7xl font-light text-white mb-4 tracking-wide leading-tight transition-all duration-700 ease-out ${
                      animatedElements.title 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {slide.title}
                  </h1>
                  
                  <p 
                    className={`text-lg md:text-xl text-white/90 mb-8 font-light transition-all duration-700 ease-out ${
                      animatedElements.subtitle 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {slide.subtitle}
                  </p>
                  
                  <div 
                    className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out ${
                      animatedElements.buttons 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <button className="px-8 py-4 bg-amber-400 text-stone-900 hover:bg-amber-300 transition duration-300 flex items-center group">
                      <span className="font-medium">{slide.cta}</span>
                      <ShoppingBag className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 border border-white text-white hover:bg-white/10 transition duration-300 flex items-center group">
                      <span>Book Appointment</span>
                      <Calendar className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-white/30"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-white/30"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide count indicator */}
      <div className="absolute bottom-8 right-8 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full z-10">
        <span className="font-medium">{activeIndex + 1}</span>
        <span className="mx-2 text-white/50">/</span>
        <span className="text-white/70">{slides.length}</span>
      </div>
    </div>
    
    </React.Fragment>
  );
}