import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero3 from "../../assets/hero3.jpg";
import show1 from "../../assets/show1.jpg";
import show3 from "../../assets/show3.jpg";
import green_jewellary from "../../assets/green_jewellary.jpg";
import twinGirls from "../../assets/twins.jpg";
import show6 from "../../assets/show6.jpg";
import hero2 from "../../assets/hero2.jpg";
// import { useNavigate } from 'react-router-dom';

// Mock images (replace with your actual imports)
const images = [hero3, show1, show3, green_jewellary, twinGirls, show6, hero2];

// Event data
const placeData = [
  {
    img: images[0],
    title: "Jewellery World",
    date: "11-12-13 July",
    location: "YMCA AHMEDABAD",
    call: "+91-9323727518",
  },
  {
    img: images[1],
    title: "Jewellery World",
    date: "25. 26. 27 July",
    location: "ST.REGIS MUMBAI",
    call: "+91-9323727518",
  },
  {
    img: images[2],
    title: "Jewellery World",
    date: "29. 30 August",
    location: "THE ASHOK DELHI",
    call: "+91-9323727518",
  },
  {
    img: images[3],
    title: "Jewellery World",
    date: "26. 27 September",
    location: "HOTEL MARRIOTT INDORE",
    call: "+91-9323727518",
  },
  {
    img: images[4],
    title: "Jewellery World",
    date: "03. 04. 05 October",
    location: "TAJ KRISHNA HYDERABAD",
    call: "+91-9323727518",
  },

  {
    img: images[6],
    title: "Jewellery World",
    date: "14. 15. 16 November",
    location: "ST.REGIS MUMBAI",
    call: "+91-9323727518",
  },
  {
    img: images[5],
    title: "Jewellery World",
    date: "21. 22. 23 November",
    location: "YMCA AHMEDABAD",
    call: "+91-9323727518",
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    type: "Visitor",
    companyName: "",
  });

  // Calculate visible cards (display 3 cards on desktop, 1 on mobile)
  const visibleCount = window.innerWidth > 768 ? 3 : 1;

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (currentIndex < placeData.length - visibleCount) {
        setDirection(1);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setDirection(-1);
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const nextSlide = () => {
    setAutoplay(false);
    if (currentIndex < placeData.length - visibleCount) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    setAutoplay(false);
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend

    // Close the modal and show a success message
    setShowModal(false);
    alert("Registration successful!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      address: "",
      type: "Visitor",
      companyName: "",
    });
  };

  // Get visible events
  const visibleEvents = [];
  for (let i = 0; i < visibleCount; i++) {
    if (currentIndex + i < placeData.length) {
      visibleEvents.push(placeData[currentIndex + i]);
    }
  }

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gold-500 tracking-wider mb-2">
            EXPERIENCE ELEGANCE
          </h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Upcoming Exhibitions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto"></div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`p-2 rounded-full ${
                  currentIndex === 0
                    ? "bg-gray-200 text-gray-400"
                    : "bg-amber-100 text-amber-800"
                } hover:bg-amber-200 transition-all`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= placeData.length - visibleCount}
                className={`p-2 rounded-full ${
                  currentIndex >= placeData.length - visibleCount
                    ? "bg-gray-200 text-gray-400"
                    : "bg-amber-100 text-amber-800"
                } hover:bg-amber-200 transition-all`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative h-full">
            <AnimatePresence mode="wait">
              <div className="flex flex-wrap -mx-4">
                {visibleEvents.map((event, index) => (
                  <motion.div
                    key={currentIndex + index}
                    className="w-full md:w-1/3 px-4 mb-8"
                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="relative overflow-hidden shadow-lg h-full">
                      {/* Card is an image with overlay */}
                      <div className="h-full aspect-[3/4] overflow-hidden relative">
                        <img
                          src={event.img}
                          alt={event.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        {/* Dark gradient overlay for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 opacity-90"></div>

                        {/* Badge position */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="inline-block bg-amber-500 text-white text-xs px-2 py-1 rounded font-semibold">
                            EXCLUSIVE
                          </span>
                        </div>

                        {/* Content positioned as an overlay - now centered */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-left ">
                          <h3 className="text-[18px] font-bold font-serif mb-1 ">
                            {event.title}
                          </h3>
                          <div className="w-12 h-0.5 bg-amber-500 mb-4 "></div>

                          <div className="space-y-4 mt-48">
                            <div className="flex items-center justify-start">
                              <svg
                                className="w-6 h-6 text-amber-400 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                              </svg>
                              <p className="text-white font-bold text-[22px]">
                                {event.location}
                              </p>
                            </div>

                            <div className="flex items-center justify-start">
                              <svg
                                className="w-5 h-5 text-amber-400 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <p className="text-white font-bold text-lg">
                                {event.date}
                              </p>
                            </div>

                            <div className="flex items-center justify-start">
                              <svg
                                className="w-5 h-5 text-amber-400 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                ></path>
                              </svg>
                              <p className="text-white font-bold">
                                {event.call}
                              </p>
                            </div>
                          </div>

                          <div className="mt-auto">
                            <button
                              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center"
                              onClick={handleOpenModal}
                            >
                              REGISTER NOW
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center">
            {Array.from({
              length: Math.ceil(placeData.length / visibleCount),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoplay(false);
                  setDirection(idx > currentIndex / visibleCount ? 1 : -1);
                  setCurrentIndex(idx * visibleCount);
                }}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  Math.floor(currentIndex / visibleCount) === idx
                    ? "w-6 bg-amber-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-lg mx-auto overflow-hidden shadow-xl relative z-10 rounded-md"
          >
            {/* Modal header with professional design */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4 flex justify-between items-center">
              <div className="text-white">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Register for Exhibition
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal body with professional styling */}
            <div className="px-6 py-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Full Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-1"
                      htmlFor="mobile"
                    >
                      Mobile Number <span className="text-amber-600">*</span>
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="+1 (123) 456-7890"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-1"
                      htmlFor="type"
                    >
                      Register as <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Visitor">Visitor</option>
                        <option value="Exhibitor">Exhibitor</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-1"
                      htmlFor="address"
                    >
                      Address <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                      id="address"
                      name="address"
                      placeholder="Your complete address"
                      rows="2"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  {formData.type === "Exhibitor" && (
                    <div className="sm:col-span-2">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="companyName"
                      >
                        Company Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Your company name"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="pt-3 flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2 space-y-3 space-y-reverse sm:space-y-0">
                  <button
                    type="button"
                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition-colors shadow-sm hover:shadow text-sm flex items-center justify-center"
                  >
                    <span>Complete Registration</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
