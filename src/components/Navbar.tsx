'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiCalendar } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  
  const isLandingPage = pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navbarClass = scrollPosition > 50
    ? "bg-white/80 backdrop-blur-md border-b border-white/10 shadow-lg"
    : "bg-white/50 backdrop-blur-sm";

  const navbarHeight = "h-16";

  // Return null after all hooks have been executed
  if (isLandingPage) {
    return null;
  }

  return (
    <nav className={`${navbarClass} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between ${navbarHeight} transition-all duration-300`}>
          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:items-center w-full">
            <div className="flex items-center">
              {/* All links in one group on the left */}
              <div className="flex space-x-6">
                <Link href="/" className={`text-gray-800 hover:text-haven-blue px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group`}>
                  <span className="relative z-10 transition-colors duration-300">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-haven-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/services" className={`text-gray-800 hover:text-haven-blue px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group`}>
                  <span className="relative z-10 transition-colors duration-300">Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-haven-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/about" className={`text-gray-800 hover:text-haven-blue px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group`}>
                  <span className="relative z-10 transition-colors duration-300">About</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-haven-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/contact" className={`text-gray-800 hover:text-haven-blue px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group`}>
                  <span className="relative z-10 transition-colors duration-300">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-haven-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/booking" className="btn-primary btn-with-icon text-sm">
                  <FiCalendar className="mr-1" />
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button - centered with no logo */}
          <div className="flex items-center justify-end sm:hidden w-full">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-haven-blue focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div id="mobile-menu" 
           className={`sm:hidden bg-white/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block text-gray-800 hover:text-haven-blue px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Home
          </Link>
          <Link href="/services" className="block text-gray-800 hover:text-haven-blue px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Services
          </Link>
          <Link href="/about" className="block text-gray-800 hover:text-haven-blue px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="block text-gray-800 hover:text-haven-blue px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Contact
          </Link>
          <Link href="/booking" className="btn-primary btn-with-icon mx-3 mt-3 text-center flex justify-center">
            <FiCalendar className="mr-1" />
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 