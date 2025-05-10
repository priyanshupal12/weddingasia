import { useState, useEffect } from 'react';
import { Play, Pause, Clock, ChevronRight, X } from 'lucide-react';
import tn1 from "../../assets/tn1.jpg";
import tn2 from "../../assets/tn2.jpg"; 

// Using public placeholder image services for thumbnails
const podcastsData = [
  {
    id: 1,
    title: "Understanding Diamond Clarity",
    description: "A deep dive into how diamond clarity affects value and beauty",
    duration: "3:45",
    // Using Picsum for realistic photo placeholders
    thumbnail: tn1,
    youtubeUrl: "https://youtu.be/9SuXXMyqWO0",
    views: "2.4K",
    featured: true
  },
  {
    id: 2,
    title: "Gold vs Platinum: What's Better?",
    description: "Comparing two premium metals for your jewelry collection",
    duration: "2:30",
    thumbnail: tn2,
    youtubeUrl: "https://youtu.be/GKR7WXifNPA",
    views: "1.8K"
  },
  {
    id: 3,
    title: "Jewelry Care 101",
    description: "Essential tips to maintain the shine and durability of your treasures",
    duration: "4:15",
    thumbnail: "https://picsum.photos/seed/jewelry/640/360",
    youtubeUrl: "https://www.youtube.com/watch?v=example3",
    views: "3.2K"
  },
  {
    id: 4,
    title: "Gemstone Color Guide",
    description: "Understanding hue, tone and saturation in precious stones",
    duration: "5:20",
    thumbnail: "https://picsum.photos/seed/gemstone/640/360",
    youtubeUrl: "https://www.youtube.com/watch?v=example4",
    views: "1.5K"
  },
  {
    id: 5,
    title: "Trending Designs 2025",
    description: "What's hot in the jewelry world this season",
    duration: "3:10",
    thumbnail: "https://picsum.photos/seed/trends/640/360",
    youtubeUrl: "https://www.youtube.com/watch?v=example5",
    views: "4.7K",
    featured: true
  },
  {
    id: 6,
    title: "Vintage Jewelry Restoration",
    description: "Bringing heirloom pieces back to their former glory",
    duration: "6:25",
    thumbnail: "https://picsum.photos/seed/vintage/640/360",
    youtubeUrl: "https://www.youtube.com/watch?v=example6",
    views: "2.1K"
  }
];

export default function Podcast() {
  const [loading, setLoading] = useState(true);
  const [activePodcast, setActivePodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [categories, setCategories] = useState(['All', 'Educational', 'Trends', 'Craftsmanship', 'Designer Stories']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [bannerVideoMuted, setBannerVideoMuted] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle YouTube navigation
  const navigateToYouTube = (podcast) => {
    // Open YouTube link in a new tab
    window.open(podcast.youtubeUrl, '_blank');
  };

  // For the "Now Playing" bar functionality - can still be used for local preview before going to YouTube
  const togglePlay = (podcast, event) => {
    // Prevent the click from propagating to the parent (which would navigate to YouTube)
    event.stopPropagation();
    
    if (activePodcast && activePodcast.id === podcast.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActivePodcast(podcast);
      setIsPlaying(true);
    }
  };

  const closeNowPlaying = () => {
    setActivePodcast(null);
    setIsPlaying(false);
  };

  const featuredPodcasts = podcastsData.filter(podcast => podcast.featured);
  const regularPodcasts = podcastsData.filter(podcast => !podcast.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner with Video Background */}
      <div className="relative">
        <div className="h-[76vh] bg-gradient-to-r from-amber-700 to-amber-500 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={bannerVideoMuted}
              playsInline
            >
              {/* Using placeholder since we can't link to external videos */}
              <source src="/api/placeholder/video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Controls */}
            <button 
              onClick={() => setBannerVideoMuted(!bannerVideoMuted)}
              className="absolute bottom-4 right-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-300"
            >
              {bannerVideoMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
            
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 z-10" style={{ 
              backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E')` 
            }}></div>
          </div>
          
          {/* Content overlay */}
          <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center z-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              <span className="block text-amber-200">Podcast Gallery</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
              Discover the stories, craftsmanship and trends behind exquisite jewelry pieces
            </p>
            <div className="mt-8 flex">
              <div className="rounded-md shadow">
                <a href="#latest" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                  Explore Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 mr-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Podcasts</h2>
            <a href="#" className="text-amber-600 hover:text-amber-700 flex items-center">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
                  <div className="h-64 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPodcasts.map((podcast) => (
                <div 
                  key={podcast.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  onClick={() => navigateToYouTube(podcast)}
                >
                  <div className="relative">
                    {/* Thumbnail with YouTube icon overlay */}
                    <img 
                      src={podcast.thumbnail} 
                      alt={podcast.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300">
                      {/* YouTube icon with play button */}
                      <div className="h-16 w-16 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-white text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{podcast.duration}</span>
                        </div>
                        <div className="text-white text-sm">{podcast.views} views</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{podcast.title}</h3>
                    <p className="text-gray-600 text-sm">{podcast.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        
        {/* Regular Podcasts Grid */}
        <section id="latest">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Latest Episodes</h2>
            <a href="#" className="text-amber-600 hover:text-amber-700 flex items-center">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPodcasts.map((podcast) => (
                <div 
                  key={podcast.id} 
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => navigateToYouTube(podcast)}
                >
                  <div className="relative">
                    <img 
                      src={podcast.thumbnail} 
                      alt={podcast.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
                      {/* YouTube icon with play button */}
                      <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="h-5 w-5 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-3 py-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-white text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{podcast.duration}</span>
                        </div>
                        <div className="text-white text-xs">{podcast.views} views</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1 text-gray-800">{podcast.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{podcast.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Sign Up */}
        <section className="mt-16 bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with New Podcasts</h2>
            <p className="mb-6">Subscribe to our newsletter and never miss a new episode or jewelry trend</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Now Playing Bar (Shows when a podcast is active) */}
      {activePodcast && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-3 flex items-center justify-between z-40">
          <div className="flex items-center">
            <img 
              src={activePodcast.thumbnail} 
              alt={activePodcast.title}
              className="h-12 w-12 object-cover rounded mr-3"
            />
            <div>
              <h4 className="font-medium text-gray-800">{activePodcast.title}</h4>
              <p className="text-xs text-gray-500">Now Playing</p>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              onClick={() => navigateToYouTube(activePodcast)}
              className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center mr-3"
            >
              <Play className="h-4 w-4 text-white ml-0.5" />
            </button>
            <div className="text-gray-600 text-sm mr-4">{activePodcast.duration}</div>
            
            {/* Close button */}
            <button 
              onClick={closeNowPlaying}
              className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
              aria-label="Close player"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}