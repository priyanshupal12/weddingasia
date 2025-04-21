import React, { useState, useEffect } from 'react';
import { ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

import heroimage from '../../assets/girls-around.jpg';
import greenjewelry from '../../assets/green_jewellary.jpg';
import sisters from '../../assets/twin-girls.jpg';
import redchick from '../../assets/red-chick.jpg';
import diamond from '../../assets/circle_diamond.jpeg';
import ring from '../../assets/gold_ring.jpeg';
import bluedoiamond from '../../assets/blue-diamond.avif';
import earring from '../../assets/earrings.jpg';
import boy from '../../assets/boy-image.avif'
import girl from '../../assets/girl-artist.avif'
import vikram from '../../assets/vikram-img.avif'
import test from '../../assets/testimonial-girl.avif';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Hero Section with Image Overlay */}
      <div className="relative h-[30rem] overflow-hidden">
        {/* The actual image - properly positioned inside the container */}
        <img
          src={heroimage}
          alt="Luxury Wedding Jewelry Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="container mx-auto px-6 md:px-12">
          <h1 className={`text-4xl md:text-6xl font-light text-stone-800 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Our Heritage
          </h1>
          <div className={`w-24 h-px bg-amber-700 mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <p className={`text-lg text-stone-600 max-w-md transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Crafting timeless heirlooms since 1987
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-light text-stone-800 border-b border-amber-700 pb-4 inline-block">
              Our Philosophy
            </h2>

            <p className="text-stone-600 leading-relaxed">
              At [Your Brand], we believe that wedding jewelry is more than adornment—it's an expression of love and commitment that becomes part of your family's legacy. Each piece in our collection is thoughtfully designed and meticulously crafted to mark the most special moments in your life.
            </p>

            <p className="text-stone-600 leading-relaxed">
              Our wedding jewelry collections combine traditional craftsmanship with contemporary design sensibilities, using only the finest gemstones and precious metals sourced from trusted suppliers around the world.
            </p>

            <div className="pt-4">
              <button className="group flex items-center text-amber-800 font-light hover:text-amber-600 transition-colors">
                Explore our collections
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className={`bg-stone-100 p-8 shadow-sm transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-light text-stone-800 mb-6">
              Our Commitment
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-px h-full bg-amber-700 mr-4"></div>
                <div>
                  <h4 className="text-lg text-stone-700 mb-1">Master Craftsmanship</h4>
                  <p className="text-stone-600">Each piece is handcrafted by master jewelers with decades of expertise in traditional techniques.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-px h-full bg-amber-700 mr-4"></div>
                <div>
                  <h4 className="text-lg text-stone-700 mb-1">Ethical Sourcing</h4>
                  <p className="text-stone-600">We're committed to responsibly sourced gemstones and conflict-free diamonds in all our creations.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-px h-full bg-amber-700 mr-4"></div>
                <div>
                  <h4 className="text-lg text-stone-700 mb-1">Bespoke Experience</h4>
                  <p className="text-stone-600">Our dedicated artisans work closely with each client to create personalized pieces that tell your unique story.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Highlights - New Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-12">
            <span className="border-b border-amber-700 pb-2">Signature Collections</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
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
                <div className="aspect-video bg-stone-200 mb-4 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl text-stone-800 mb-1">{collection.name}</h3>
                <p className="text-stone-600 text-sm">{collection.desc}</p>
                <div className="mt-2">
                  <a href="#" className="text-sm text-amber-700 hover:text-amber-600 transition-colors">
                    View Collection
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials Section - New for Jewelry */}
        <div className="mt-24 bg-stone-100 p-8 md:p-12">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-12">
            <span className="border-b border-amber-700 pb-2">Exquisite Materials</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
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
              <div key={idx} className="group">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4 border border-amber-200 overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg text-stone-800 mb-1">{material.name}</h3>
                <p className="text-stone-600 text-sm">{material.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-12">
            <span className="border-b border-amber-700 pb-2">Meet Our Artisans</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={idx} className="group">
                <div className="aspect-square bg-stone-200 mb-4 overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl text-stone-800 mb-1">{person.name}</h3>
                <p className="text-amber-700 font-light mb-2">{person.title}</p>
                <p className="text-stone-600 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section with Carousel Appearance */}
      <div className="bg-stone-100 py-16 mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-12">
            <span className="border-b border-amber-700 pb-2">Client Stories</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center bg-white p-8 shadow-sm relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl text-amber-700">"</div>
            <p className="text-amber-700 italic mb-6 text-lg">My bridal set was beyond my imagination – the craftsmanship and attention to detail made me feel like royalty. These pieces will be treasured heirlooms in our family.</p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-stone-200 mr-4 overflow-hidden">
                <img 
                  src={test} 
                  alt="Anita Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-stone-800 font-medium">Anita Reddy</p>
                <p className="text-stone-600 text-sm">Bride, Bangalore</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              <button className="w-2 h-2 rounded-full bg-amber-700"></button>
              <button className="w-2 h-2 rounded-full bg-stone-300"></button>
              <button className="w-2 h-2 rounded-full bg-stone-300"></button>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section - New for Jewelry */}
      <div className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-12">
            <span className="border-b border-amber-700 pb-2">Our Crafting Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { step: "1", title: "Design Consultation", desc: "Meet with our designers to share your vision" },
              { step: "2", title: "Material Selection", desc: "Handpick your gemstones and precious metals" },
              { step: "3", title: "Crafting", desc: "Our artisans bring your design to life" },
              { step: "4", title: "Final Presentation", desc: "Receive your heirloom piece in our signature packaging" }
            ].map((process, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center mx-auto mb-6 text-xl">
                  {process.step}
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-amber-200"></div>
                )}
                <h3 className="text-lg text-stone-800 mb-1">{process.title}</h3>
                <p className="text-stone-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}