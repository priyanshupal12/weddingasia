// import React, { useState, useEffect, useRef } from "react";
// import storyOne from "../../assets/story-one.jpg";
// import storyTwo from "../../assets/story-two.jpg";
// import storyThree from "../../assets/story-three.jpg";

// const WeddingStories = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isInView, setIsInView] = useState(false);
//   const sectionRef = useRef(null);

//   const stories = [
//     {
//       title: "Sethu & Vishnu",
//       date: "March 15, 2025",
//       description: "A beachside ceremony filled with joy and laughter",
//       location: "Goa, India",
//       color: "bg-rose-50",
//       image: storyOne,
//     },
//     {
//       title: "Aditi & Saurabh",
//       date: "January 22, 2025",
//       description: "An elegant palace wedding with traditional touches",
//       location: "Udaipur, India",
//       color: "bg-amber-50",
//       image: storyTwo,
//     },
//     {
//       title: "Hanna & Shahrukh",
//       date: "February 8, 2025",
//       description: "A magical winter celebration under the stars",
//       location: "Kashmir, India",
//       color: "bg-indigo-50",
//       image: storyThree,
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [stories.length]);

//   return (
//     <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 opacity-20 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 opacity-20 blur-3xl"></div>

//       <div className="max-w-7xl mx-auto">
//         {/* Heading section with accent underline */}
//         <div className="text-left mb-20">
//           <h2
//             className={`inline-block relative font-serif text-4xl sm:text-5xl font-light mb-6 text-gray-800 transition-all duration-1000 ${
//               isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             <span>Love</span>
//             <span className="font-normal text-rose-700"> Stories</span>
//             <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></span>
//           </h2>
//           <p
//             className={`max-w-7xl mx-auto text-gray-600 transition-all duration-1000 delay-200 ${
//               isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             Every love story is beautiful, but ours are extraordinary. Discover
//             the magical moments from our recent wedding celebrations.
//           </p>
//         </div>

//         {/* Stories showcase */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-center">
//           {/* Left side - Story carousel */}
//           <div
//             className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
//               isInView
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-12"
//             }`}
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-xl group">
//               {/* Image placeholder - replace with actual image */}
//               <div
//                 className={`h-96 sm:h-[500px] ${stories[activeIndex].color} relative`}
//               >
//                 <div className="absolute inset-0 flex items-center justify-center text-8xl text-gray-300">
//                   {/* This is a placeholder - replace with your image */}
//                   <img
//                     src={stories[activeIndex].image}
//                     alt={stories[activeIndex].title}
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>

//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

//                 {/* Story info overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500">
//                   <h3 className="font-serif text-3xl mb-2">
//                     {stories[activeIndex].title}
//                   </h3>
//                   <div className="flex items-center mb-3">
//                     <span className="inline-block w-1 h-1 rounded-full bg-rose-300 mr-2"></span>
//                     <span className="text-sm text-rose-200">
//                       {stories[activeIndex].date}
//                     </span>
//                     <span className="inline-block w-1 h-1 rounded-full bg-rose-300 mx-2"></span>
//                     <span className="text-sm text-rose-200">
//                       {stories[activeIndex].location}
//                     </span>
//                   </div>
//                   <p className="text-gray-200 max-w-md">
//                     {stories[activeIndex].description}
//                   </p>
//                 </div>
//               </div>

//               {/* Pagination dots */}
//               <div className="absolute bottom-3 right-6 flex space-x-2">
//                 {stories.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveIndex(index)}
//                     className={`w-2 h-2 rounded-full transition-all ${
//                       activeIndex === index ? "bg-white w-6" : "bg-white/50"
//                     }`}
//                     aria-label={`View story ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right side - Story list */}
//           <div className="lg:col-span-2">
//             <div className="space-y-6">
//               {stories.map((story, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ${
//                     isInView
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-12"
//                   } ${
//                     activeIndex === index
//                       ? "bg-gradient-to-r from-rose-50 to-white border-l-4 border-rose-400 shadow-sm"
//                       : "bg-white/50 hover:bg-white hover:shadow-sm"
//                   }`}
//                   style={{
//                     transitionDelay: `${isInView ? 600 + index * 200 : 0}ms`,
//                   }}
//                 >
//                   <div className="flex items-start">
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 ${
//                         activeIndex === index ? "bg-rose-500" : "bg-gray-200"
//                       }`}
//                     >
//                       {index + 1}
//                     </div>
//                     <div>
//                       <h4
//                         className={`font-serif text-lg mb-1 ${
//                           activeIndex === index
//                             ? "text-rose-800"
//                             : "text-gray-800"
//                         }`}
//                       >
//                         {story.title}
//                       </h4>
//                       <p className="text-sm text-gray-500">
//                         {story.date} • {story.location}
//                       </p>
//                       <p className="text-gray-600 mt-2 text-sm">
//                         {story.description}
//                       </p>
//                       {activeIndex === index && (
//                         <button className="mt-3 text-rose-600 text-sm font-medium flex items-center hover:text-rose-800 transition-colors">
//                           Read their story
//                           <svg
//                             className="w-4 h-4 ml-1"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WeddingStories;
