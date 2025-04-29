import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const navigate = useNavigate();

  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/events")
      .then((res) => res.json())
      .then((data) => setPlaceData(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  const handleClick = () => {
    navigate("/contact");
  };

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
                    <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white">
                      <div className="h-64 overflow-hidden">
                        <img
                          src={event.img}
                          alt={event.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-[10%_50%] transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="inline-block bg-amber-500 text-white text-xs px-2 py-1 rounded font-semibold">
                          EXCLUSIVE
                        </span>
                      </div>

                      <div className="p-6 relative z-10 transform translate-y-0 group-hover:translate-y-1 transition-transform duration-300">
                        <h3 className="text-xl font-bold font-serif mb-1 text-gray-900">
                          {event.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-amber-500 mb-3"></div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-amber-500 mr-2"
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
                            <p className="text-gray-800 font-medium">
                              {event.date}
                            </p>
                          </div>

                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-amber-500 mr-2"
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
                            <p className="text-gray-800">{event.location}</p>
                          </div>

                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-amber-500 mr-2"
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
                            <p className="text-gray-800">{event.contact}</p>
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-md hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center">
                          <button
                            onClick={handleClick}
                            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-md hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center"
                          >
                            REGISTER NOW
                          </button>
                        </button>
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
                  setCurrentIndex(idx * visibleCount); // <-- This line was missing
                }}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex / visibleCount === idx
                    ? "bg-amber-500"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
