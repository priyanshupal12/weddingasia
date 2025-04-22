import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import redChick from "../../assets/red-chick.jpg";
import show4 from "../../assets/show4.jpg";
import hero1 from "../../assets/hero1.jpg";
import eventFive from "../../assets/event-five.jpg";
import green_jewellary from "../../assets/green_jewellary.jpg";
import { motion } from "framer-motion";
import { MdLocationOn, MdDateRange, MdPhone } from "react-icons/md";

const placeData = [
  {
    img: redChick,
    title: "Wedding Asia",
    date: "3 & 4 May",
    location: "Mumbai",
    call: "+91-9216322509",
  },
  {
    img: show4,
    title: "Luxury Expo",
    date: "10 & 11 May",
    location: "Delhi",
    call: "+91-9876543210",
  },
  {
    img: hero1,
    title: "Fashion Fiesta",
    date: "17 & 18 May",
    location: "Bangalore",
    call: "+91-9123456789",
  },
  {
    img: eventFive,
    title: "Elite Showcase",
    date: "31 May & 1 June",
    location: "Chandigarh",
    call: "+91-9090909090",
  },
  {
    img: green_jewellary,
    title: "Royal Vogue",
    date: "7 & 8 June",
    location: "Jaipur",
    call: "+91-8877665544",
  },
];

const PlaceItem = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <motion.div
      className="mt-4 w-full max-w-sm cursor-pointer group"
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={toggleDetails} // handle mobile tap
    >
      <div className="relative h-[450px] overflow-hidden shadow-xl border border-gray-100">
        {/* Gold accent border */}
        <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-30 z-10 pointer-events-none"></div>

        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D0301]/90 via-[#3D0301]/30 to-transparent opacity-70 z-10"></div>

        <img
          src={data.img}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Slide-up Details */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1/2 bg-white/95 backdrop-blur-sm text-[#3D0301] 
            flex flex-col justify-start items-start p-6 
            transform ${showDetails ? "translate-y-0" : "translate-y-full"} 
            group-hover:translate-y-0 
            transition-transform duration-500 ease-in-out 
            shadow-[0_-15px_25px_-5px_rgba(0,0,0,0.1)] z-20
            border-t-2 border-[#D4AF37]`}
        >
          <h3 className="text-xl font-bold uppercase mb-3 relative">
            <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-[#3D0301]">
              {data.title}
            </span>
          </h3>

          <p className="mb-4 text-sm text-[#3D0301]/80 font-light italic">
            "Experience the epitome of elegance and innovation in our exclusive
            showcase"
          </p>

          <ul className="text-left w-full space-y-3">
            <li className="flex items-center text-[#3D0301]">
              <MdLocationOn className="mr-3 text-[#D4AF37]" />
              <span className="font-medium">{data.location}</span>
            </li>
            <li className="flex items-center text-[#3D0301]">
              <MdDateRange className="mr-3 text-[#D4AF37]" />
              <span className="font-medium">{data.date}</span>
            </li>
            <li className="flex items-center text-[#3D0301]">
              <MdPhone className="mr-3 text-[#D4AF37]" />
              <span className="font-medium">{data.call}</span>
            </li>
          </ul>
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-[#3D0301] to-[#5D0501] text-white uppercase px-4 py-4 
                   text-center text-lg hover:from-[#5D0501] hover:to-[#3D0301] transition-all duration-300 
                 shadow-lg font-medium tracking-wide"
      >
        Register Now
      </motion.button>
    </motion.div>
  );
};

const Upcomingevent = () => {
  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-white to-gray-50 text-zinc-900 relative overflow-hidden z-10">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#3D0301]/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3D0301]/5 rounded-full translate-x-24 translate-y-24"></div>

      <div className="max-w-7xl px-4 mx-auto relative">
        <div className="grid grid-cols-12 justify-start mb-12">
          <div className="col-span-12 lg:col-span-8 text-left">
            <p className="text-[#D4AF37] font-medium uppercase tracking-widest mb-2">
              Don't Miss Out
            </p>
            <h2 className="font-medium text-black font-heading leading-none text-3xl md:text-[55px] mb-2 relative inline-block pb-2">
              <span className="border-b-4 border-[#D4AF37] pb-2">Upcoming</span>{" "}
              Events
            </h2>

            <p className="text-gray-600 mt-6 max-w-7xl text-lg">
              Discover our curated selection of prestigious events showcasing
              the finest in luxury goods and services.
            </p>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, A11y, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={800}
            pagination={{
              clickable: true,
              el: ".custom-pagination",

              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active custom-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                effect: "coverflow",
                coverflowEffect: {
                  rotate: 10,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                },
              },
            }}
          >
            {placeData.map((data, i) => (
              <SwiperSlide key={i}>
                <PlaceItem data={data} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-10 flex justify-center gap-2" />

          {/* Add inline styles for the pagination bullets */}
          <style jsx>{`
            .custom-bullet {
              background-color: rgba(61, 3, 1, 0.5);
              width: 12px;
              height: 12px;
              display: inline-block;
              border-radius: 50%;
              margin: 0 4px;
              transition: all 0.3s ease;
            }
            .custom-bullet-active {
              background-color: rgb(61, 3, 1);
              width: 16px;
              height: 16px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Upcomingevent;
