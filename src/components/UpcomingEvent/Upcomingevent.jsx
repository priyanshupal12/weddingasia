import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import show1 from "../../assets/show1.jpg"; // Replace with jewelry images
import show2 from "../../assets/show2.jpg";
import show3 from "../../assets/show3.jpg";
import show4 from "../../assets/show4.jpg";
import show5 from "../../assets/show5.jpg";
import show6 from "../../assets/show6.jpg";
import hero1 from "../../assets/hero1.jpg";

const Eventshowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  // Jewelry showcase event data
  const eventDetails = {
    title: "Upcoming Events",
    subtitle: "Annual Jewelry Exhibition",
    description:
      "An exclusive showcase of our finest jewelry collections, featuring masterful craftsmanship and rare gemstones from around the world.",
    date: "April 15-18, 2025",
    location: "The Grand Atrium, Luxury Mall",
  };

  const showcaseItems = [
    {
      image: show1,
      name: "11th, 12th & 13th July",
      description: "YMCA AHMEDABAD",
      highlight: "JEWELLERY WORLD",
    },
    {
      image: show5,
      name: "25th, 26th & 27th July",
      description: "ST.REGIS MUMBAI",
      highlight: "JEWELLERY WORLD",
    },
    {
      image: show2,
      name: "25th, 26th & 27th Augest",
      description: "THE ASHOK DELHI",
      highlight: "JEWELLERY WORLD",
    },
    {
      image: show3,
      name: "26th, 27th September",
      description: "HOTEL MARRIOTT INDORE.",
      highlight: "JEWELLERY WORLD",
    },
    {
      image: show6,
      name: "3rd, 4th & 5th October",
      description: "TAJ KRISHNA HYDERABAD",
      highlight: "JEWELLERY WORLD",
    },
    {
      image: hero1,
      name: "21th, 22th & 23rd November",
      description: "YMCA AHMEDABAD",
      highlight: "JEWELLERY WORLD",
    },
    // New items
    {
      image: show4, // Replace with a new image
      name: "14th, 15th and 16th November",
      description: "ST.REGIS MUMBAI",
      highlight: "JEWELLERY WORLD",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-stone-900 to-stone-800 text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Event header */}
        <motion.div
          className="mb-10 md:mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="max-w-xl">
              <motion.div
                className="flex items-center mb-6"
                // initial={{ x: -30, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                // transition={{ duration: 0.7 }}
              >
                <div className="h-px w-12 bg-amber-400 mr-4"></div>
                <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">
                  Event Showcase
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-light mb-6 tracking-tight"
                // initial={{ y: 30, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // transition={{ duration: 0.7, delay: 0.2 }}
              >
                {eventDetails.title}
                {/* <span className="block text-2xl md:text-3xl text-stone-300 mt-2">{eventDetails.subtitle}</span> */}
              </motion.h1>

              {/* <motion.p
                className="text-stone-300 text-lg mb-8 max-w-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {eventDetails.description}
              </motion.p> */}
            </div>

            {/* <motion.div 
              className="mt-8 md:mt-0 bg-stone-800/50 backdrop-blur-sm p-6 border border-stone-700 rounded-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
                <span className="text-stone-200 font-medium">{eventDetails.date}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-stone-200">{eventDetails.location}</span>
              </div>
            </motion.div> */}
          </div>

          {/* Decorative line */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-stone-600 to-transparent mt-12 md:mt-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Featured collection */}
        <motion.div style={{ opacity, scale }} className="mb-10 md:mb-14">
          {/* <h2 className="text-3xl font-light mb-12 tracking-tight">Featured Collections</h2> */}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large featured item */}
            <motion.div
              className="md:col-span-8 relative overflow-hidden rounded-lg aspect-[5/4] group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 0.99 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <img
                src={showcaseItems[0].image}
                alt={showcaseItems[0].name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="flex items-center mb-4">
                  <div className="h-px w-8 bg-amber-400 mr-3"></div>
                  <span className="text-amber-400 uppercase tracking-wider text-xs font-medium">
                    {showcaseItems[0].highlight}
                  </span>
                </div>
                <h3 className="text-4xl font-medium mb-2">
                  {showcaseItems[0].name}
                </h3>
                <p className="text-stone-300 max-w-lg">
                  {showcaseItems[0].description}
                </p>
                <motion.div
                  className="mt-16 md:mt-24 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="/register"
                    className="inline-block px-8 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-stone-800 font-medium text-lg hover:bg-gradient-to-l hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
                  >
                    Register Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Smaller items */}
            <div className="md:col-span-4 grid grid-cols-1 gap-6">
              {showcaseItems.slice(1, 3).map((item, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 * (index + 1) }}
                  whileHover={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                    <div className="flex items-center mb-2">
                      <div className="h-px w-6 bg-amber-400 mr-2"></div>
                      <span className="text-amber-400 uppercase tracking-wider text-xs font-medium">
                        {item.highlight}
                      </span>
                    </div>
                    <h3 className="text-3xl font-medium">{item.name}</h3>
                    <p className="text-stone-300 max-w-lg">
                      {item.description}
                    </p>
                    <motion.div
                      className="mt-16 md:mt-24 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href="/register"
                        className="inline-block px-8 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-stone-800 font-medium text-lg hover:bg-gradient-to-l hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
                      >
                        Register Now
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {showcaseItems.slice(3, 7).map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[16/9] group cursor-pointer"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <div className="flex items-center mb-2">
                  <div className="h-px w-6 bg-amber-400 mr-2"></div>
                  <span className="text-amber-400 uppercase tracking-wider text-xs font-medium">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-4xl font-medium mb-2">{item.name}</h3>
                <p className="text-stone-300 max-w-lg">{item.description}</p>
                <motion.div
                  className="mt-16 md:mt-24 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="/register"
                    className="inline-block px-8 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-stone-800 font-medium text-lg hover:bg-gradient-to-l hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
                  >
                    Register Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="#gallery"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-stone-900 font-medium hover:from-amber-400 hover:to-amber-500 transition-all duration-300 group"
          >
            <span>View Complete Exhibition Gallery</span>
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Eventshowcase;
