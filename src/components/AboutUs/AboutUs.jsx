import React, { useState, useEffect } from 'react';
import { ChevronRight, Instagram, Facebook, Twitter, ChevronDown, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import heroimage from '../../assets/about-hero.jpg';
import founderImage from '../../assets/sonia-chawla.jpg'; // Add founder image
import exhibitionImage from '../../assets/red_color_girl.jpg';
import missionImage from '../../assets/green_jewellary.jpg';
import diamond from '../../assets/white-diamond.jpeg';
import ring from '../../assets/gold_ring.jpeg';
import bluedoiamond from '../../assets/green-diamond.avif';
import earring from '../../assets/earrings.jpg';
import successStoryImage from '../../assets/vikram-img.avif';

export default function AboutUs() {

  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Jewellery World Exhibition';
  const [typingComplete, setTypingComplete] = useState(false);

  // Effect for fade-in animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Effect for typing animation
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 120); // Adjust speed here (lower = faster)

      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText, fullText]);

  // Animation variants for section headings
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Animation variants for decorative bars
  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "6rem", opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
  };

  // Exhibition data for performance snapshot table
  const exhibitionData = [
    {
      year: "2022",
      cities: "Ahmedabad, Indore, Raipur",
      total: "5",
      exhibitors: "100+",
      visitors: "15,000+",
      highlights: "Post-COVID revival. Bridal focus. Trusted beginnings."
    },
    {
      year: "2023",
      cities: "Ahmedabad, Mumbai, Hyderabad, Surat, Indore",
      total: "6",
      exhibitors: "200+",
      visitors: "20,000+",
      highlights: "Wider reach. Premium showcases. Growing recognition."
    },
    {
      year: "2024",
      cities: "Ahmedabad, Mumbai, Hyderabad, Surat, Indore",
      total: "8",
      exhibitors: "300+",
      visitors: "25,000+",
      highlights: "Iconic venues like St. Regis. Regional dominance."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Elegant Banner with Design Elements */}
      <div className="relative h-[40rem] overflow-hidden">
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 bg-black/40 z-10">
        </div>

        {/* The actual banner image */}
        <img
          src={heroimage}
          alt="Jewellery World Exhibition"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Banner Content with elegant frame */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center p-16 max-w-3xl relative">
            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 border-2 border-amber-200"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute inset-0 m-4 border border-amber-100"
            ></motion.div>

            {/* Content inside frame */}
            <div className="relative z-10">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-light text-white mb-6"
              >
                {typedText}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: "loop"
                  }}
                  className="inline-block w-1 h-12 bg-amber-300 ml-1"
                />
              </motion.h1>

              {/* Decorative divider */}
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="h-px bg-amber-300"
                ></motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="mx-4"
                >
                  <Star className="w-6 h-6 text-amber-300" />
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="h-px bg-amber-300"
                ></motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-amber-50 max-w-lg mx-auto"
              >
                India's Premier Luxury Jewelry Platform
              </motion.p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* About Content - Our Story Section */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        {/* The Story of Jewellery World Exhibition */}
        <div className="relative max-w-4xl mx-auto lg:mx-0 text-start mb-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
            className="text-3xl md:text-4xl font-light text-stone-800 mb-8"
          >
            The Story of Jewellery World Exhibition
          </motion.h2>

          <motion.div
            style={{ transformOrigin: "left" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={barVariants}
            className="h-1 bg-amber-700 mb-8 block"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-stone-600 leading-relaxed"
          >
            Jewellery World Exhibition is India's premier luxury jewelry platform, where craftsmanship, innovation, and tradition converge. What started as a bold vision has evolved into one of the country's most anticipated events, showcasing the finest jewelers and designers from around the globe. With each edition, the exhibition continues to set trends, foster collaborations, and offer unparalleled experiences for industry leaders and jewelry enthusiasts alike.
          </motion.p>
        </div>

        {/* Founder Profile - Side by Side with Image */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="aspect-square">
              <img
                src={founderImage}
                alt="Sonia Chawla - Founder, Jewellery World"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-amber-400"
            ></motion.div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={headingVariants}
                className="text-3xl font-light text-stone-800 mb-6 inline-block relative"
              >
                Sonia Chawla – Founder, Jewellery World
              </motion.h2>
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={barVariants}
                className="block h-1 bg-amber-700"
              ></motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-stone-600 leading-relaxed"
            >
              Sonia Chawla is the founder of Jewellery World and brings over 20 years of experience in exhibitions and media. She began her journey in 2006 with The Times Group, curating some of Mumbai's early jewelry and wedding showcases. Her interest in the luxury segment and ability to identify evolving market needs helped shape her career path.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-stone-600 leading-relaxed"
            >
              Later, as CEO of Global Fairs and Media at the Indian Express Group, Sonia played a key role in driving strategic growth and repositioning the brand within the industry. With a thoughtful, insight led approach, she has consistently worked to create platforms that connect businesses with the right audiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-stone-600 leading-relaxed"
            >
              Jewellery World is a result of this vision—built to offer a refined, well-curated space for jewelry professionals and connoisseurs alike.
            </motion.p>
          </div>
        </div>

        {/* Mission, Vision, and Legacy Section */}
        <div className="mb-32">
          <div className="text-start mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={headingVariants}
              className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
            >
              Mission, Vision, and Legacy of the Exhibition
            </motion.h2>
            <motion.div
              style={{ transformOrigin: "left" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={barVariants}
              className="h-1 bg-amber-700 mb-8 block"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mission",
                content: "To create an unparalleled platform uniting luxury jewelry artisans with discerning buyers and designers, while celebrating the fusion of tradition and innovation."
              },
              {
                title: "Vision",
                content: "To be the global standard for luxury jewelry exhibitions, setting trends, elevating craftsmanship, and creating a lasting legacy of excellence."
              },
              {
                title: "Legacy",
                content: "Jewellery World has become a symbol of sophistication and innovation, shaping the future of the jewelry industry and building a global community of creators and collectors."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-amber-50 p-8 shadow-sm border-l-4 border-amber-700 h-full"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-2xl font-light text-stone-800 mb-4">{item.title}</h3>
                <p className="text-stone-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Story Section */}
        {/* <div className="mb-32">
          <div className="text-start mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={headingVariants}
              className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
            >
              Jewellery World Exhibitions – India's Sparkling Success Story
            </motion.h2>
            <motion.div
              style={{ transformOrigin: "left" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={barVariants}
              className="h-1 bg-amber-700 mb-8 block"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-stone-600 leading-relaxed mb-12"
            >
              A Journey of Glamour, Growth & Grandeur
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-stone-600 leading-relaxed"
              >
                Over the years, Jewellery World Exhibitions has grown into one of India's most trusted platforms for bridal and fine jewellery showcases. Here's a powerful look at the numbers that speak louder than words:
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-medium text-amber-800 mb-4">Performance Snapshot</h3>
                <div className="overflow-auto">
                  <table className="min-w-full divide-y divide-amber-200">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-medium text-amber-700 tracking-wider border-b border-amber-200">Year</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-amber-700 tracking-wider border-b border-amber-200">Cities Covered</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-amber-700 tracking-wider border-b border-amber-200">Total Exhibitions</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-amber-700 tracking-wider border-b border-amber-200">Exhibitor Participation</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-amber-700 tracking-wider border-b border-amber-200">Visitor Footfall</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-amber-700 tracking-wider border-b border-amber-200">Defining Highlights</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100">
                      {exhibitionData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-amber-50' : 'bg-white'}>
                          <td className="py-3 px-4 text-sm text-stone-800">{item.year}</td>
                          <td className="py-3 px-4 text-sm text-stone-600">{item.cities}</td>
                          <td className="py-3 px-4 text-sm text-stone-600">{item.total}</td>
                          <td className="py-3 px-4 text-sm text-stone-600">{item.exhibitors}</td>
                          <td className="py-3 px-4 text-sm text-stone-600">{item.visitors}</td>
                          <td className="py-3 px-4 text-sm text-stone-600">{item.highlights}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden"
            >
              <div className="aspect-square">
                <img
                  src={successStoryImage}
                  alt="Jewellery World Exhibition Success"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-amber-400"
              ></motion.div>
            </motion.div>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { stat: "5+", label: "Cities Touched" },
              { stat: "18+", label: "Exhibitions Hosted" },
              { stat: "600+", label: "Leading Jewellers Showcased" },
              { stat: "60,000+", label: "Jewellery Lovers Engaged" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-amber-50 p-8 text-center border-b-4 border-amber-700"
              >
                <h3 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">{item.stat}</h3>
                <p className="text-stone-600 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-100 p-10 text-center"
          >
            <h3 className="text-2xl font-light text-stone-800 mb-6">What's Next?</h3>
            <p className="text-lg text-amber-800 mb-6">With new cities, bigger venues, and exclusive bridal experiences on the horizon – 2025 is all set to be even grander.</p>
            <div className="mx-auto w-24 h-px bg-amber-700 mb-6"></div>
            <p className="text-xl text-stone-700 font-light italic">
              We don't just host exhibitions.<br />
              We create celebrated destinations for jewellery lovers, brides-to-be, and India's finest jewellers to connect, celebrate, and shine.
            </p>
          </motion.div>
        </div> */}

        {/* Success Story Section */}
        {/* Success Story Section */}
        <div className="mb-16 md:mb-32 w-full overflow-hidden">
          <div className="text-start mb-8 md:mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={headingVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-800 mb-4"
            >
              Jewellery World Exhibitions – India's Sparkling Success Story
            </motion.h2>
            <motion.div
              style={{ transformOrigin: "left" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={barVariants}
              className="h-1 bg-amber-700 mb-6 md:mb-8 block w-full md:w-3/4 lg:w-1/2"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-stone-600 leading-relaxed mb-8 md:mb-12"
            >
              A Journey of Glamour, Growth & Grandeur
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-16">
            <div className="space-y-6 md:space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-stone-600 leading-relaxed"
              >
                Over the years, Jewellery World Exhibitions has grown into one of India's most trusted platforms for bridal and fine jewellery showcases. Here's a powerful look at the numbers that speak louder than words:
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-4 md:p-6 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-medium text-amber-800 mb-3 md:mb-4">Performance Snapshot</h3>
                <div className="overflow-x-auto w-full">
                  <table className="min-w-full divide-y divide-amber-200 text-xs sm:text-sm">
                    <thead>
                      <tr>
                        <th className="py-2 md:py-3 px-2 md:px-4 text-left font-medium text-amber-700 tracking-wider border-b border-amber-200 whitespace-nowrap">Year</th>
                        <th className="py-2 md:py-3 px-2 md:px-4 text-left font-medium text-amber-700 tracking-wider border-b border-amber-200 whitespace-nowrap">Cities</th>
                        <th className="py-2 md:py-3 px-2 md:px-4 text-left font-medium text-amber-700 tracking-wider border-b border-amber-200 whitespace-nowrap">Exhibitions</th>
                        <th className="py-2 md:py-3 px-2 md:px-4 text-left font-medium text-amber-700 tracking-wider border-b border-amber-200 whitespace-nowrap">Exhibitors</th>
                        <th className="py-2 md:py-3 px-2 md:px-4 text-left font-medium text-amber-700 tracking-wider border-b border-amber-200 whitespace-nowrap">Visitors</th>
                        <th className="py-2 md:py-3 px-2 md:px-4 text-left font-medium text-amber-700 tracking-wider border-b border-amber-200 whitespace-nowrap">Highlights</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100">
                      {exhibitionData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-amber-50' : 'bg-white'}>
                          <td className="py-2 md:py-3 px-2 md:px-4 text-stone-800 whitespace-nowrap">{item.year}</td>
                          <td className="py-2 md:py-3 px-2 md:px-4 text-stone-600 whitespace-nowrap">{item.cities}</td>
                          <td className="py-2 md:py-3 px-2 md:px-4 text-stone-600 whitespace-nowrap">{item.total}</td>
                          <td className="py-2 md:py-3 px-2 md:px-4 text-stone-600 whitespace-nowrap">{item.exhibitors}</td>
                          <td className="py-2 md:py-3 px-2 md:px-4 text-stone-600 whitespace-nowrap">{item.visitors}</td>
                          <td className="py-2 md:py-3 px-2 md:px-4 text-stone-600">{item.highlights}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden mt-6 md:mt-0"
            >
              <div className="aspect-square w-full max-w-lg mx-auto">
                <img
                  src={successStoryImage}
                  alt="Jewellery World Exhibition Success"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-l-2 border-b-2 border-amber-400"
              ></motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
              { stat: "5+", label: "Cities Touched" },
              { stat: "18+", label: "Exhibitions Hosted" },
              { stat: "600+", label: "Leading Jewellers Showcased" },
              { stat: "60,000+", label: "Jewellery Lovers Engaged" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-amber-50 p-4 sm:p-6 md:p-8 text-center border-b-4 border-amber-700"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-amber-800 mb-2">{item.stat}</h3>
                <p className="text-stone-600 text-xs sm:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-100 p-6 md:p-10 text-center"
          >
            <h3 className="text-xl md:text-2xl font-light text-stone-800 mb-4 md:mb-6">What's Next?</h3>
            <p className="text-base md:text-lg text-amber-800 mb-4 md:mb-6">With new cities, bigger venues, and exclusive bridal experiences on the horizon – 2025 is all set to be even grander.</p>
            <div className="mx-auto w-16 md:w-24 h-px bg-amber-700 mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-stone-700 font-light italic">
              We don't just host exhibitions.<br className="hidden sm:block" />
              We create celebrated destinations for jewellery lovers, brides-to-be, and India's finest jewellers to connect, celebrate, and shine.
            </p>
          </motion.div>
        </div>

        {/* Materials Section - Maintained from Previous Design */}
        <div className="py-20 bg-stone-100 rounded-lg mb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-start mb-16">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={headingVariants}
                className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
              >
                Exquisite Showcases
              </motion.h2>
              <motion.div
                style={{ transformOrigin: "left" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={barVariants}
                className="h-1 bg-amber-700 mb-8 block"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Fine Jewelry",
                  desc: "Handcrafted pieces that showcase exceptional quality and design",
                  image: diamond
                },
                {
                  name: "Bridal Collections",
                  desc: "Stunning wedding jewelry for the modern bride",
                  image: ring
                },
                {
                  name: "Designer Creations",
                  desc: "Avant-garde designs from India's top jewelry designers",
                  image: bluedoiamond
                },
                {
                  name: "Heritage Pieces",
                  desc: "Traditional craftsmanship with timeless appeal",
                  image: earring
                }
              ].map((material, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="group text-center"
                >
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 rounded-full border-4 border-amber-100 p-2 mx-auto overflow-hidden">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={material.image}
                          alt={material.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "4rem" }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-amber-700"
                    ></motion.div>
                  </div>
                  <h3 className="text-xl text-stone-800 mb-2">{material.name}</h3>
                  <p className="text-stone-600 text-sm px-4">{material.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-amber-50 to-stone-100 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={headingVariants}
              className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
            >
              Join Us at the Next Exhibition
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: { width: "6rem", opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
              }}
              className="h-1 bg-amber-700 mx-auto"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-stone-600 mb-8">Experience the finest jewelry craftsmanship and design at India's premier luxury jewelry platform.</p>
            <button className="inline-block px-8 py-3 bg-amber-700 text-white font-medium hover:bg-amber-800 transition-colors">
              Subscribe for Updates
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}