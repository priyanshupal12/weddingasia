import React, { useState, useEffect } from 'react';
import { ChevronRight, Instagram, Facebook, Twitter, ChevronDown, Star } from 'lucide-react';

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Elegant Banner with Design Elements */}
      <div className="relative h-[40rem] overflow-hidden">
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 bg-black/40 z-10">
          <div className="absolute inset-0 opacity-20">
            Background image is now handled by the img tag below
          </div>
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
            <div className="absolute inset-0 border-2 border-amber-200 opacity-80"></div>
            <div className="absolute inset-0 m-4 border border-amber-100 opacity-60"></div>

            {/* Content inside frame */}
            <div className="relative z-10">
              <h1 className={`text-5xl md:text-7xl font-light text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                Our Heritage
              </h1>

              {/* Decorative divider */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-amber-300"></div>
                <div className="mx-4">
                  <Star className="w-6 h-6 text-amber-300" />
                </div>
                <div className="h-px w-16 bg-amber-300"></div>
              </div>

              <p className={`text-xl text-amber-50 max-w-lg mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                Crafting timeless heirlooms since 1987
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* About Content - Redesigned Layout */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        {/* Introduction with decorative elements */}
        <div className="relative max-w-4xl mx-auto text-center mb-24">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-px h-16 bg-amber-700"></div>

          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-8">
            A Legacy of Elegance
          </h2>

          <div className="w-24 h-px bg-amber-700 mx-auto mb-8"></div>

          <p className="text-lg text-stone-600 leading-relaxed">
            At WeddingAsia, we believe that wedding jewelry is more than adornment—it's an expression of love and commitment that becomes part of your family's legacy. Each piece in our collection is thoughtfully designed and meticulously crafted to mark the most special moments in your life.
          </p>
        </div>

        {/* Philosophy & Commitment - Side by Side with Image */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative overflow-hidden">
            <div className="aspect-square">
              <img
                src={sisters}
                alt="Elegant Wedding Jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-amber-400"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-light text-stone-800 mb-6 inline-block relative">
              Our Philosophy
              <span className="absolute -bottom-2 left-0 w-1/3 h-px bg-amber-700"></span>
            </h2>

            <p className="text-stone-600 leading-relaxed">
              Our wedding jewelry collections combine traditional craftsmanship with contemporary design sensibilities, using only the finest gemstones and precious metals sourced from trusted suppliers around the world.
            </p>

            <div className="space-y-6 bg-amber-50 p-8 shadow-sm border-l-4 border-amber-700">
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
            </div>

            <div className="pt-4">
              <button className="group flex items-center text-amber-800 font-medium hover:text-amber-600 transition-colors border-b border-amber-800 pb-1">
                Explore our collections
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Collection Highlights - Redesigned with Overlays */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Signature Collections
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto"></div>
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
              <div key={idx} className="group relative overflow-hidden">
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
              </div>
            ))}
          </div>
        </div>

        {/* Materials Section - Redesigned in Circular Layout */}
        <div className="py-20 bg-stone-100 rounded-lg mb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
                Exquisite Materials
              </h2>
              <div className="w-24 h-px bg-amber-700 mx-auto"></div>
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
                <div key={idx} className="group text-center">
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
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-700"></div>
                  </div>
                  <h3 className="text-xl text-stone-800 mb-2">{material.name}</h3>
                  <p className="text-stone-600 text-sm px-4">{material.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section - Redesigned with Hover Effects */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Meet Our Artisans
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto"></div>
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
              <div key={idx} className="group relative bg-white shadow-sm hover:shadow-md transition-shadow">
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
                  <div className="w-12 h-px bg-amber-700 mb-4"></div>
                  <p className="text-stone-600 text-sm">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section - Redesigned with Elegant Styling */}
      <div className="bg-gradient-to-r from-amber-50 to-stone-100 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Client Stories
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
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
          </div>
        </div>
      </div>

      {/* Process Section - Redesigned with Timeline */}
      <div className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Our Crafting Process
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto"></div>
          </div>

          <div className="relative">
            
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-amber-200 hidden md:block"></div>

            <div className="space-y-20 md:space-y-0">
              {[
                { step: "1", title: "Design Consultation", desc: "Meet with our designers to share your vision and preferences. Our experts will guide you through our collections and help you find the perfect style." },
                { step: "2", title: "Material Selection", desc: "Handpick your gemstones and precious metals from our curated selection. Each stone is carefully evaluated for quality, color, and brilliance." },
                { step: "3", title: "Crafting", desc: "Our artisans bring your design to life using time-honored techniques passed down through generations, ensuring unparalleled quality and detail." },
                { step: "4", title: "Final Presentation", desc: "Receive your heirloom piece in our signature packaging, along with care instructions and certification documents." }
              ].map((process, idx) => (
                <div key={idx} className={`relative md:grid md:grid-cols-2 items-center ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
                  {/* Timeline node */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-y-0 z-10 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center border-4 border-white text-lg font-light">
                      {process.step}
                    </div>
                  </div>

                  <div className={`md:pr-16 ${idx % 2 === 0 ? 'md:block' : 'md:hidden'}`}>
                    {idx % 2 === 0 ? (
                      <div className="bg-amber-50 p-8 rounded-lg shadow-sm relative md:mr-8">
                        <div className="md:hidden w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center border-4 border-white text-lg font-light absolute -top-5 left-4">
                          {process.step}
                        </div>
                        <h3 className="text-xl text-stone-800 mb-3 mt-4 md:mt-0">{process.title}</h3>
                        <p className="text-stone-600">{process.desc}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className={`md:pl-16 ${idx % 2 === 0 ? 'md:hidden' : 'md:block'}`}>
                    {idx % 2 !== 0 ? (
                      <div className="bg-amber-50 p-8 rounded-lg shadow-sm relative md:ml-8">
                        <div className="md:hidden w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center border-4 border-white text-lg font-light absolute -top-5 left-4">
                          {process.step}
                        </div>
                        <h3 className="text-xl text-stone-800 mb-3 mt-4 md:mt-0">{process.title}</h3>
                        <p className="text-stone-600">{process.desc}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}