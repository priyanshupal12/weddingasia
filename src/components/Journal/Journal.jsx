import React from "react";
import { Link } from "react-router-dom";
import blogOne from "../../assets/blog-one.jpg";
import blogTwo from "../../assets/blog-two.jpg";
import blogThree from "../../assets/blog-three.jpg";
import { motion } from "framer-motion";

const teamMembers = [
  {
    img: blogOne,
    name: "A PETITE BRIDE’S GUIDE TO WEDDING DRESS SHOPPING",
    info: "Dear petite bride to be...",
  },
  {
    img: blogTwo,
    name: "COVID-SAFE WEDDING DESTINATIONS",
    info: "With luxury hotels promising 100 percent...",
  },
  {
    img: blogThree,
    name: "DONT LET STRESS SHOW ON SKIN SAYS BLOSSOM KOCHHAR",
    info: "Renowned aromatherapist Blossom...",
  },
];

const TeamMemberItem = ({ member }) => (
  <div className="group relative">
    <div className="w-[380px] h-[500px] overflow-hidden mx-auto">
      <motion.img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover"
        animate={{
          scale: [1.1, 1], // Slightly reduced zoom for smoother feel
        }}
        transition={{
          duration: 6, // Slightly faster but still slow enough for smoothness
          repeat: Infinity,
          repeatType: "mirror", // Smooth back and forth
          ease: "easeInOut", // Smooth easing
        }}
      />
    </div>

    <div
      className="absolute -bottom-12 left-[10%] p-5 w-[80%] bg-white shadow-xl text-center overflow-hidden z-[1] transition-all duration-300 
		md:group-hover:bg-gradient-to-r md:group-hover:from-[#3D0301] md:group-hover:to-[#730202] 
		md:group-hover:pt-7 md:group-hover:px-5 md:group-hover:pb-10 md:group-hover:text-white"
    >
      <h3 className="text-sm font-semibold leading-normal opacity-80 mb-1 md:group-hover:opacity-100">
        {member.name}
      </h3>

      <p
        className="text-sm mt-2 transition-all duration-300 
		  opacity-100 max-h-40
		  md:opacity-0 md:max-h-0 
		  md:group-hover:opacity-100 md:group-hover:max-h-40
		  overflow-hidden"
      >
        {member.info}
      </p>

      <button
        className="mt-4 px-4 py-2 text-sm font-medium border rounded 
		  bg-[#3D0301] text-white 
		  opacity-100
		  md:opacity-0 md:group-hover:opacity-100 
		  transition duration-300 
		  hover:bg-white hover:text-[#3D0301]"
      >
        Read More
      </button>
    </div>
  </div>
);

const Journal = () => {
  return (
    <section className="py-14 md:py-24 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 justify-start mb-12">
          <div className="col-span-12 lg:col-span-8 text-left">
            <h2 className="font-medium text-black font-heading leading-none text-3xl md:text-[55px] mb-2 relative inline-block pb-2">
              <span className="border-b-4 border-[#D4AF37] pb-2">Journal</span>
            </h2>
            <p className="text-gray-600 mt-6 max-w-7xl text-lg">
              Discover our curated selection of prestigious events showcasing
              the finest in luxury goods and services.
            </p>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, i) => (
            <div key={i} className="my-6 sm:my-8">
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>

        {/* Show More Journals Button */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#3D0301] via-[#5A0C07] to-[#3D0301] text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300"
          >
            Show More Journals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Journal;
