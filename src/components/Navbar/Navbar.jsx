import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // icons
import { Link } from 'react-router-dom'; // optional, if using routing
import logo from '../../assets/logo1.png'; // logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white ${scrolled ? 'bg-gradient-to-b from-stone-900 to-stone-800 shadow-md' : 'bg-transparent'}`}>
      <nav className="  px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
        {/* Left - Logo */}
        <Link to="/">
          <img src={logo} alt="Jewellery World Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Right - Desktop Menu */}
        <ul className="hidden md:flex  space-x-14  font-medium font-serif text-white">
          <li className="border-l border-white pl-4 hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-200 px-2 py-1"><Link to="/">Home</Link></li>
          <li className="border-l border-white pl-4 hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-200 px-2 py-1"><Link to="/aboutus">About Us</Link></li>
          <li className="border-l border-white pl-4 hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-200 px-2 py-1"><Link to="/gallery">Gallery</Link></li>
          <li className="border-l border-white pl-4 hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-200 px-2 py-1"><Link to="/podcast">Podcast</Link></li>
          <li className="border-l border-white pl-4 hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-200 px-2 py-1"><Link to="/register">Contact us</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </nav>

{/* Mobile Menu */}
{menuOpen && (
  // Mobile Menu with animation
  <div
    className={`md:hidden fixed top-20 left-0 w-full bg-white text-gray-800 font-serif transition-all duration-300 ease-in-out z-40 ${
      menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
    }`}
  >
    <ul className="flex flex-col items-start px-6 py-4 space-y-4 text-lg text-white bg-stone-800">
      <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
      <li><Link to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link></li>
      <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
      {/* <li><Link to="/onlinestore" onClick={() => setMenuOpen(false)}>Online Store</Link></li> */}
      <li><Link to="/journal" onClick={() => setMenuOpen(false)}>Journal</Link></li>
      <li><Link to="/register" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
    </ul>
  </div>
)}

     
    </header>
  );
};

export default Navbar;
