import React, { useState, useEffect } from 'react';
import { ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Hero Section with Image Overlay */}
      <div className="relative h-96 overflow-hidden">
        {/* This is where your image will go */}
        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
          <p className="text-lg italic">Your Brand Image Here</p>
        </div>
        
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className={`text-4xl md:text-6xl font-light text-stone-800 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Our Story
            </h1>
            <div className={`w-24 h-px bg-amber-700 mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
            <p className={`text-lg text-stone-600 max-w-md transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Crafting timeless elegance since 2010
            </p>
          </div>
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
              At [Your Brand], we believe that luxury is found in the details. Each piece in our collection is thoughtfully designed and meticulously crafted to celebrate the most special moments in your life.
            </p>
            
            <p className="text-stone-600 leading-relaxed">
              Our bridal and luxury collections combine timeless elegance with contemporary sensibility, using only the finest fabrics and materials sourced from around the world.
            </p>
            
            <div className="pt-4">
              <button className="group flex items-center text-amber-800 font-light hover:text-amber-600 transition-colors">
                Discover our collections 
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
                  <h4 className="text-lg text-stone-700 mb-1">Artisanal Craftsmanship</h4>
                  <p className="text-stone-600">Each garment is handcrafted by skilled artisans with decades of experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-px h-full bg-amber-700 mr-4"></div>
                <div>
                  <h4 className="text-lg text-stone-700 mb-1">Sustainable Practices</h4>
                  <p className="text-stone-600">We're committed to ethical sourcing and environmentally conscious production.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-px h-full bg-amber-700 mr-4"></div>
                <div>
                  <h4 className="text-lg text-stone-700 mb-1">Personalized Experience</h4>
                  <p className="text-stone-600">Our dedicated team ensures each client receives individual attention and care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-12">
            <span className="border-b border-amber-700 pb-2">Meet Our Team</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((person) => (
              <div key={person} className="group">
                <div className="aspect-square bg-stone-200 mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-stone-400">
                    <p className="text-lg italic">Team Member Photo</p>
                  </div>
                </div>
                <h3 className="text-xl text-stone-800 mb-1">Jane Doe</h3>
                <p className="text-amber-700 font-light mb-2">Creative Director</p>
                <p className="text-stone-600 text-sm">With over 15 years of experience in luxury fashion, Jane brings unparalleled vision to our designs.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="bg-stone-100 py-16 mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-700 italic mb-6 text-lg">"The attention to detail and quality of craftsmanship exceeded all my expectations. I felt truly beautiful on my special day."</p>
            <p className="text-stone-800">— Sarah J., Bride</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-light mb-4 text-white">Contact Us</h4>
              <p className="mb-2">123 Elegance Avenue</p>
              <p className="mb-2">Fashion District, CA 90210</p>
              <p className="mb-2">contact@yourbrand.com</p>
              <p>+1 (800) 123-4567</p>
            </div>
            
            <div>
              <h4 className="text-xl font-light mb-4 text-white">Hours</h4>
              <p className="mb-2">Monday - Friday: 10am - 7pm</p>
              <p className="mb-2">Saturday: 10am - 6pm</p>
              <p>Sunday: By Appointment Only</p>
            </div>
            
            <div>
              <h4 className="text-xl font-light mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-500 transition-colors">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-8 pt-8 text-center">
            <p className="text-sm">© {new Date().getFullYear()} [Your Brand]. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}