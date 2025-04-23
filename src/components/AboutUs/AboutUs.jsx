import React, { useState, useEffect } from 'react';
import { ChevronRight, Instagram, Facebook, Twitter, ChevronDown, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import heroimage from '../../assets/girls-around.jpg';
import greenjewelry from '../../assets/green_jewellary.jpg';
import sisters from '../../assets/twin-girls.jpg';
import redchick from '../../assets/red-chick.jpg';
import diamond from '../../assets/circle_diamond.jpeg';
import ring from '../../assets/gold_ring.jpeg';
import bluedoiamond from '../../assets/blue-diamond.avif';
import earring from '../../assets/earrings.jpg';
import boy from '../../assets/boy-image.avif';
import girl from '../../assets/girl-artist.avif';
import vikram from '../../assets/vikram-img.avif';
import test from '../../assets/testimonial-girl.avif';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Our Heritage';
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
      }, 150); // Adjust speed here (lower = faster)

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
          alt="Luxury Wedding Jewelry Collection"
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
                className="text-5xl md:text-7xl font-light text-white mb-6"
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
                Crafting timeless heirlooms since 1987
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

      {/* About Content - Redesigned Layout */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        {/* Introduction with decorative elements */}
        <div className="relative max-w-4xl mx-auto lg:mx-0 text-start mb-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
            className="text-3xl md:text-4xl font-light text-stone-800 mb-8"
          >
            A Legacy of Elegance
          </motion.h2>


          <motion.div
            style={{ transformOrigin: "left" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={barVariants}
            className="h-1 bg-amber-700 mb-8 block"
          />


          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={barVariants}
            className="h-1 bg-amber-700 mb-8"
          ></motion.div> */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-stone-600 leading-relaxed"
          >
            At Jewellery World, we believe that wedding jewelry is more than adornment—it's an expression of love and commitment that becomes part of your family's legacy. Each piece in our collection is thoughtfully designed and meticulously crafted to mark the most special moments in your life.
          </motion.p>
        </div>

        {/* Philosophy & Commitment - Side by Side with Image */}
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
                src={sisters}
                alt="Elegant Wedding Jewelry"
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
                Our Philosophy
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
              Our wedding jewelry collections combine traditional craftsmanship with contemporary design sensibilities, using only the finest gemstones and precious metals sourced from trusted suppliers around the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 bg-amber-50 p-8 shadow-sm border-l-4 border-amber-700"
            >
              <h3 className="text-2xl font-light text-stone-800 mb-4">
                Our Commitment
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-lg text-stone-700 mb-1">Master Craftsmanship</h4>
                    <p className="text-stone-600">Each piece is handcrafted by master jewelers with decades of expertise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-lg text-stone-700 mb-1">Ethical Sourcing</h4>
                    <p className="text-stone-600">We're committed to responsibly sourced gemstones and conflict-free diamonds.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-lg text-stone-700 mb-1">Bespoke Experience</h4>
                    <p className="text-stone-600">Our dedicated artisans work closely with each client to create personalized pieces.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="pt-4">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="group flex items-center text-amber-800 font-medium hover:text-amber-600 transition-colors border-b border-amber-800 pb-1"
              >
                Explore our collections
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Collection Highlights - Redesigned with Overlays */}
        <div className="mb-32">
          <div className="text-start mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={headingVariants}
              className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
            >
              Signature Collections
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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Bridal Sets",
                desc: "Complete ensembles for your wedding day",
                image: greenjewelry
              },
              {
                name: "Heritage Collection",
                desc: "Traditional designs with modern craftsmanship",
                image: sisters
              },
              {
                name: "Bespoke Creations",
                desc: "Custom jewelry tailored to your vision",
                image: redchick
              }
            ].map((collection, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/5] bg-stone-200 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light mb-2">{collection.name}</h3>
                  <p className="text-amber-100 text-sm mb-4">{collection.desc}</p>
                  <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                    <a href="#" className="inline-block text-sm text-amber-300 hover:text-amber-200 transition-colors border-b border-amber-300 pb-1">
                      View Collection
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Materials Section - Redesigned in Circular Layout */}
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
                Exquisite Materials
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
                  name: "Diamonds",
                  desc: "Ethically sourced, GIA-certified diamonds of exceptional clarity",
                  image: diamond
                },
                {
                  name: "Gold",
                  desc: "22K and 18K gold crafted with traditional techniques",
                  image: ring
                },
                {
                  name: "Precious Gems",
                  desc: "Rubies, sapphires, and emeralds of the highest quality",
                  image: bluedoiamond
                },
                {
                  name: "Pearls",
                  desc: "Natural freshwater and saltwater pearls of lustrous beauty",
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

        {/* Team Section - Redesigned with Hover Effects */}
        <div className="mb-32">
          <div className="text-start mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={headingVariants}
              className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
            >
              Meet Our Artisans
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

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Raj Sharma",
                title: "Master Jeweler",
                bio: "With over 25 years of experience, Raj's intricate designs have adorned brides across generations.",
                image: boy
              },
              {
                name: "Priya Verma",
                title: "Gemologist",
                bio: "A certified gemologist with expertise in selecting the finest stones for our heritage collections.",
                image: girl
              },
              {
                name: "Vikram Patel",
                title: "Design Director",
                bio: "Blending traditional motifs with contemporary aesthetics to create timeless wedding jewelry.",
                image: vikram
              }
            ].map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group relative bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-8 border-l-8 border-amber-500 group-hover:border-t-16 group-hover:border-l-16 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-stone-800 mb-1">{person.name}</h3>
                  <p className="text-amber-700 font-light mb-3">{person.title}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "3rem" }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
                    className="h-px bg-amber-700 mb-4"
                  ></motion.div>
                  <p className="text-stone-600 text-sm">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section - Redesigned with Elegant Styling */}
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
              Client Stories
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
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-white p-10 shadow-sm">
              {/* Decorative quotes */}
              <div className="absolute -top-6 -left-6 text-6xl text-amber-200">"</div>
              <div className="absolute -bottom-6 -right-6 text-6xl text-amber-200 transform rotate-180">"</div>

              <p className="text-amber-800 italic mb-8 text-lg leading-relaxed">My bridal set was beyond my imagination – the craftsmanship and attention to detail made me feel like royalty. These pieces will be treasured heirlooms in our family.</p>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full border-2 border-amber-200 p-1 mr-4 overflow-hidden">
                  <img
                    src={test}
                    alt="Anita Reddy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-stone-800 font-medium">Anita Reddy</p>
                  <p className="text-amber-700 text-sm">Bride, Bangalore</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              <button className="w-3 h-3 rounded-full bg-amber-700"></button>
              <button className="w-3 h-3 rounded-full bg-stone-300 hover:bg-amber-400 transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-stone-300 hover:bg-amber-400 transition-colors"></button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Process Section - Redesigned with Timeline */}
      <div className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-start mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={headingVariants}
              className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
            >
              Our Crafting Process
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

          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-amber-200 hidden md:block"
            ></motion.div>

            <div className="space-y-20 md:space-y-0">
              {[
                { step: "1", title: "Design Consultation", desc: "Meet with our designers to share your vision and preferences. Our experts will guide you through our collections and help you find the perfect style." },
                { step: "2", title: "Material Selection", desc: "Handpick your gemstones and precious metals from our curated selection. Each stone is carefully evaluated for quality, color, and brilliance." },
                { step: "3", title: "Crafting", desc: "Our artisans bring your design to life using time-honored techniques passed down through generations, ensuring unparalleled quality and detail." },
                { step: "4", title: "Final Presentation", desc: "Receive your heirloom piece in our signature packaging, along with care instructions and certification documents." }
              ].map((process, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.3, duration: 0.6 }}
                  className={`relative md:grid md:grid-cols-2 items-center ${idx % 2 === 0 ? '' : 'md:text-right'}`}
                >
                  {/* Timeline node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.3 + 0.2, duration: 0.4 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-y-0 z-10 hidden md:block"
                  >
                    <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center border-4 border-white text-lg font-light">
                      {process.step}
                    </div>
                  </motion.div>

                  <div className={`md:pr-16 ${idx % 2 === 0 ? 'md:block' : 'md:hidden'}`}>
                    {idx % 2 === 0 ? (
                      <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.3 + 0.1, duration: 0.6 }}
                        className="bg-amber-50 p-8 rounded-lg shadow-sm relative md:mr-8"
                      >
                        <div className="md:hidden w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center border-4 border-white text-lg font-light absolute -top-5 left-4">
                          {process.step}
                        </div>
                        <h3 className="text-xl text-stone-800 mb-3 mt-4 md:mt-0">{process.title}</h3>
                        <p className="text-stone-600">{process.desc}</p>
                      </motion.div>
                    ) : null}
                  </div>

                  <div className={`md:pl-16 ${idx % 2 === 1 ? 'md:block' : 'md:hidden'}`}>
                    {idx % 2 === 1 ? (
                      <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.3 + 0.1, duration: 0.6 }}
                        className="bg-amber-50 p-8 rounded-lg shadow-sm relative md:ml-8"
                      >
                        <div className="md:hidden w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center border-4 border-white text-lg font-light absolute -top-5 left-4">
                          {process.step}
                        </div>
                        <h3 className="text-xl text-stone-800 mb-3 mt-4 md:mt-0">{process.title}</h3>
                        <p className="text-stone-600">{process.desc}</p>
                      </motion.div>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}