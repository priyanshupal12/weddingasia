// Import necessary Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import img1 from "../../assets/client-logos/1.png"
import img2 from "../../assets/client-logos/2.png"
import img3 from "../../assets/client-logos/3.png"
import img4 from "../../assets/client-logos/4.jpeg"
import img5 from "../../assets/client-logos/5.png"
import img6 from "../../assets/client-logos/6.png"
import img7 from "../../assets/client-logos/7.png"
import img8 from "../../assets/client-logos/11.png"

const ClientsSlider = ({ className }) => {
  return (
    <section
      className={`ezy__clients16 light py-5 md:py-10 ${className}`}
    >
      <div className=" px-16 md:px-8 lg:px-16">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true} // Loop the slides
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          <SwiperSlide>
            <img
              src={img1}
              alt="Logo 2"
              className="max-h-11 h-auto max-w-full transition-all duration-500 ease-in-out "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="Logo 3"
              className="max-h-11 h-auto max-w-full  transition-all duration-500 ease-in-out "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="Logo 6"
              className="max-h-11 h-auto max-w-full  transition-all duration-500 ease-in-out "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img4}
              alt="Logo 7"
              className="max-h-11 h-auto max-w-full  transition-all duration-500 ease-in-out "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img5}
              alt="Logo 8"
              className="max-h-11 h-auto max-w-full transition-all duration-500 ease-in-out "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img6}
              alt="Logo 3"
              className="md:px-14 max-h-11 h-auto max-w-full  transition-all duration-500 ease-in-out "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img7}
              alt="Logo 8"
              className="max-h-11 h-auto max-w-full transition-all duration-500 ease-in-out "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img8}
              alt="Logo 8"
              className="max-h-11 h-auto max-w-full transition-all duration-500 ease-in-out "
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSlider;
