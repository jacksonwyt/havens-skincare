'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiCalendar } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  
  const isLandingPage = pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // For landing page, use more transparent header that becomes more opaque on scroll
  const landingNavbarClass = scrollPosition > 50
    ? "bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-lg"
    : "bg-white/20 backdrop-blur-sm";
    
  // For other pages, use slightly more opaque header
  const navbarClass = scrollPosition > 50
    ? "bg-white/80 backdrop-blur-md border-b border-white/10 shadow-lg"
    : "bg-white/50 backdrop-blur-sm";

  const finalNavbarClass = isLandingPage ? landingNavbarClass : navbarClass;
  const navbarHeight = "h-16 sm:h-20";

  return (
    <>
      <nav className={`${finalNavbarClass} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out overflow-hidden`} data-aos="fade-down" data-aos-duration="800">
        {/* Decorative wave animation at the bottom of navbar */}
        {isLandingPage && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none">
            <div className="wave1 h-full"></div>
          </div>
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`flex justify-between items-center ${navbarHeight} transition-all duration-300`}>
            {/* Logo - visible on all pages */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative h-10 w-40 sm:h-12 sm:w-48 transition-all duration-300 hover:opacity-90">
                  <Image 
                    src="/images/NavbarLogo.png" 
                    alt="Haven's Skincare" 
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden sm:flex sm:items-center">
              <div className="flex items-center">
                <div className="flex space-x-1 md:space-x-3 lg:space-x-6">
                  <Link href="/" className={`text-gray-800 hover:text-haven-blue px-2 md:px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group ${pathname === '/' ? 'text-haven-blue' : ''}`} data-aos="fade-down" data-aos-delay="100">
                    <span className="relative z-10 transition-colors duration-300">Home</span>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-haven-blue transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                  <Link href="/services" className={`text-gray-800 hover:text-haven-blue px-2 md:px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group ${pathname === '/services' ? 'text-haven-blue' : ''}`} data-aos="fade-down" data-aos-delay="200">
                    <span className="relative z-10 transition-colors duration-300">Services</span>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-haven-blue transition-all duration-300 ${pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                  <Link href="/about" className={`text-gray-800 hover:text-haven-blue px-2 md:px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group ${pathname === '/about' ? 'text-haven-blue' : ''}`} data-aos="fade-down" data-aos-delay="300">
                    <span className="relative z-10 transition-colors duration-300">About</span>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-haven-blue transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                  <Link href="/contact" className={`text-gray-800 hover:text-haven-blue px-2 md:px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group ${pathname === '/contact' ? 'text-haven-blue' : ''}`} data-aos="fade-down" data-aos-delay="400">
                    <span className="relative z-10 transition-colors duration-300">Contact</span>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-haven-blue transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                  {/* Only show Book Now button if not on home page */}
                  {!isLandingPage && (
                    <a 
                      href="https://heatherhavens.setmore.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary btn-with-icon text-xs md:text-sm py-1.5 px-3 md:py-2 md:px-4 ml-1 md:ml-3"
                      data-aos="fade-down" data-aos-delay="500"
                    >
                      <FiCalendar className="mr-1" />
                      Book Now
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Mobile menu - logo and hamburger */}
            <div className="flex items-center justify-between sm:hidden">
              <div className="flex-grow">
                {/* We don't need duplicate logo here since it's already visible on all screen sizes */}
              </div>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-haven-blue focus:outline-none transition-colors duration-300"
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FiX className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <FiMenu className="block h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          
          {/* Decorative elements - only visible on landing page */}
          {isLandingPage && (
            <>
              <div className="absolute top-0 right-0 w-24 h-24 bg-haven-blue/5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-xl"></div>
              <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-seafoam/5 rounded-full transform -translate-y-1/2 blur-lg"></div>
            </>
          )}
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div id="mobile-menu" 
             className={`sm:hidden bg-white/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${pathname === '/' ? 'text-haven-blue bg-haven-blue/10' : 'text-gray-800 hover:text-haven-blue hover:bg-white/50'}`}>
              Home
            </Link>
            <Link href="/services" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${pathname === '/services' ? 'text-haven-blue bg-haven-blue/10' : 'text-gray-800 hover:text-haven-blue hover:bg-white/50'}`}>
              Services
            </Link>
            <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${pathname === '/about' ? 'text-haven-blue bg-haven-blue/10' : 'text-gray-800 hover:text-haven-blue hover:bg-white/50'}`}>
              About
            </Link>
            <Link href="/contact" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${pathname === '/contact' ? 'text-haven-blue bg-haven-blue/10' : 'text-gray-800 hover:text-haven-blue hover:bg-white/50'}`}>
              Contact
            </Link>
            {/* Only show Book Now button if not on home page */}
            {!isLandingPage && (
              <div className="mt-4 pt-2 border-t border-gray-200/30">
                <a href="https://heatherhavens.setmore.com" target="_blank" rel="noopener noreferrer" className="btn-primary btn-with-icon mx-3 text-center flex justify-center">
                  <FiCalendar className="mr-2" />
                  Book Now
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from going under the navbar only when needed */}
      {!isLandingPage && <div className={navbarHeight}></div>}
    </>
  );
};

export default Navbar; 