// Import necessary Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import cl1 from "../../assets/clientlogos/cl1.jpg"
import cl2 from "../../assets/clientlogos/cl2.jpg"
import cl3 from "../../assets/clientlogos/cl3.jpg"
import cl4 from "../../assets/clientlogos/cl4.jpg"
import cl5 from "../../assets/clientlogos/cl5.jpg"
import cl6 from "../../assets/clientlogos/cl6.png"
import cl7 from "../../assets/clientlogos/cl7.jpg"
import cl8 from "../../assets/clientlogos/cl8.png"
import cl10 from "../../assets/clientlogos/cl10.jpg"
import cl11 from "../../assets/clientlogos/cl11.jpg"
import cl13 from "../../assets/clientlogos/cl13.jpg"
import cl14 from "../../assets/clientlogos/cl14.png"
import cl15 from "../../assets/clientlogos/cl15.jpg"
import cl16 from "../../assets/clientlogos/cl16.png"
import cl17 from "../../assets/clientlogos/cl17.jpg"
import cl21 from "../../assets/clientlogos/cl21.jpg"
import cl22 from "../../assets/clientlogos/cl22.jpg"
import cl23 from "../../assets/clientlogos/cl23.jpg"
import cl24 from "../../assets/clientlogos/cl24.png"
import cl26 from "../../assets/clientlogos/cl26.jpg"
import cl27 from "../../assets/clientlogos/cl27.jpg"
import cl28 from "../../assets/clientlogos/cl28.jpg"
import cl29 from "../../assets/clientlogos/cl29.jpg"
import cl30 from "../../assets/clientlogos/cl30.jpg"
import cl31 from "../../assets/clientlogos/cl31.jpg"
import cl32 from "../../assets/clientlogos/cl32.jpg"
import cl33 from "../../assets/clientlogos/cl33.jpg"
import cl34 from "../../assets/clientlogos/cl34.png"
import cl36 from "../../assets/clientlogos/cl36.jpg"
import cl38 from "../../assets/clientlogos/cl38.jpg"
import cl40 from "../../assets/clientlogos/cl40.jpg"
import cl41 from "../../assets/clientlogos/cl41.jpg"

import cl43 from "../../assets/clientlogos/cl43.jpg"

const ClientsSlider = ({ className }) => {
  // Create an array of all client logos for cleaner rendering
  const clientLogos = [
    { src: cl1, alt: "Client Logo 1" },
    { src: cl2, alt: "Client Logo 2" },
    { src: cl3, alt: "Client Logo 3" },
    { src: cl4, alt: "Client Logo 4" },
    { src: cl5, alt: "Client Logo 5" },
    { src: cl6, alt: "Client Logo 6" },
    { src: cl7, alt: "Client Logo 7" },
    { src: cl8, alt: "Client Logo 8" },
    { src: cl10, alt: "Client Logo 10" },
    { src: cl11, alt: "Client Logo 11" },
    { src: cl13, alt: "Client Logo 13" },
    { src: cl14, alt: "Client Logo 14" },
    { src: cl15, alt: "Client Logo 15" },
    { src: cl16, alt: "Client Logo 16" },
    { src: cl17, alt: "Client Logo 17" },
    { src: cl21, alt: "Client Logo 21" },
    { src: cl22, alt: "Client Logo 22" },
    { src: cl23, alt: "Client Logo 23" },
    { src: cl24, alt: "Client Logo 24" },
    { src: cl26, alt: "Client Logo 26" },
    { src: cl27, alt: "Client Logo 27" },
    { src: cl28, alt: "Client Logo 28" },
    { src: cl29, alt: "Client Logo 29" },
    { src: cl30, alt: "Client Logo 30" },
    { src: cl31, alt: "Client Logo 31" },
    { src: cl32, alt: "Client Logo 32" },
    { src: cl33, alt: "Client Logo 33" },
    { src: cl34, alt: "Client Logo 34" },
    { src: cl36, alt: "Client Logo 36" },
    { src: cl38, alt: "Client Logo 38" },
    { src: cl40, alt: "Client Logo 40" },
    { src: cl41, alt: "Client Logo 41" },
    { src: cl43, alt: "Client Logo 43" },
  ];

  return (
    <section className={`client-slider-section py-6 sm:py-10 ${className}`}>
      <div className="container mx-auto px-2 sm:px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="client-logos-swiper"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-32 sm:h-24 p-3 sm:p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-28 sm:max-h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSlider;