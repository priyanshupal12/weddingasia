import React, { useState } from "react";
import blogOne from "../../assets/blog-one.jpg"
const JewelryBlogDetails = () => {
  // State for newsletter subscription
  const [email, setEmail] = useState("");
  
  // Sample related products data
  const relatedProducts = [
    { name: "Diamond Engagement Ring", price: "$2,499", category: "Rings" },
    { name: "Pearl Wedding Necklace", price: "$1,899", category: "Necklaces" },
    { name: "Sapphire Earrings", price: "$1,250", category: "Earrings" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Banner */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={blogOne}
              alt="Wedding Jewelry Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
              <div className="text-white">
                <p className="text-sm font-light tracking-widest mb-2 uppercase">Wedding Style Guide</p>
                <h1 className="text-3xl md:text-5xl font-serif mb-4">A Petite Bride's Guide to Wedding Dress Shopping</h1>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                    <img
                      src={blogOne}
                      alt="Alan Bell"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Alan Bell</p>
                    <p className="text-sm opacity-75">August 10, 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Dear petite bride to be, if you find yourself at 5'3″ or under, this guide
                is tailor-made for you! Wedding dress shopping can be a magical
                experience, but it can also present unique challenges, especially for
                those with petite frames. Fear not! With the right tips and tricks, you'll
                navigate the world of bridal fashion with ease and find the dress of your
                dreams.
              </p>
              
              <div className="my-8 p-6 bg-pink-50 rounded-xl border border-pink-100">
                <h3 className="text-xl font-serif mb-4 text-pink-800">Perfect Jewelry Pairings</h3>
                <p className="italic mb-2">
                  Complement your wedding dress with our specially curated jewelry collection for petite brides.
                </p>
                <a href="#" className="inline-block mt-2 text-pink-700 font-medium hover:text-pink-900">
                  Browse the Collection →
                </a>
              </div>
              
              <h2 className="text-2xl font-serif mt-8 mb-4">Understanding Your Body Type</h2>
              <p>
                Before delving into the vast array of wedding dress options, it's crucial to understand your body type.
                Understanding your body shape is a powerful tool for creating a bridal look that enhances your best features and makes you feel confident.
                Instead of fixating on rigid categorizations, focus on identifying which areas of your body you might want to visually balance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-lg bg-slate-50 border border-slate-100">
                  <h3 className="font-serif text-xl mb-3">Rectangle Body Shape</h3>
                  <p>
                    The rectangle shape features a straight silhouette with minimal waist definition. Your bust, shoulders, and hips are nearly the same size, with your waist being less than 25% smaller than your bust.
                  </p>
                  <p className="mt-2 font-medium text-slate-700">
                    Jewelry tip: Long pendant necklaces create vertical lines that elongate your frame.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg bg-slate-50 border border-slate-100">
                  <h3 className="font-serif text-xl mb-3">Pear Body Shape</h3>
                  <p>
                    With a pear shape, your hips are the most prominent feature, measuring at least 5% larger than your bust and shoulders. Your waist is the smallest part of your body.
                  </p>
                  <p className="mt-2 font-medium text-slate-700">
                    Jewelry tip: Statement earrings and detailed necklaces draw attention upward, creating balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-8">
              {/* Author Bio */}
              <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <img
                    src="/api/placeholder/100/100"
                    alt="Alan Bell"
                    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-pink-100"
                  />
                  <div>
                    <h3 className="font-medium text-lg">Alan Bell</h3>
                    <p className="text-gray-600">Bridal Fashion Consultant</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  With over 10 years of experience in bridal styling, Alan specializes in helping petite brides find their perfect wedding day look.
                </p>
              </div>
              
              {/* Newsletter */}
              <div className="mb-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                <h3 className="text-lg font-serif mb-3">Wedding Style Updates</h3>
                <p className="text-sm mb-4">
                  Subscribe to receive exclusive jewelry styling tips for your wedding day.
                </p>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
              
              {/* Related Products */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-serif mb-4">Featured Wedding Jewelry</h3>
                <div className="space-y-4">
                  {relatedProducts.map((product, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-gray-400 text-xs">{product.category}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{product.name}</h4>
                        <p className="text-pink-600">{product.price}</p>
                      </div>
                    </div>
                  ))}
                  <a href="#" className="block text-center text-sm font-medium text-pink-600 hover:text-pink-800 mt-4">
                    View all collections
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default JewelryBlogDetails;