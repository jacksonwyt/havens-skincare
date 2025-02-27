'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-seafoam font-georgia text-2xl font-semibold">Haven&#39;s</span>
                <span className="ml-1 text-gray-700 font-georgia text-2xl">Skincare</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-800 hover:text-seafoam px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-seafoam px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-800 hover:text-seafoam px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-seafoam px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/booking" className="bg-seafoam text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition duration-300">
                Book Now
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-seafoam focus:outline-none"
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
      <div id="mobile-menu" className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block text-gray-800 hover:text-seafoam px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="block text-gray-800 hover:text-seafoam px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="/services" className="block text-gray-800 hover:text-seafoam px-3 py-2 rounded-md text-base font-medium">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-800 hover:text-seafoam px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          <Link href="/booking" className="block bg-seafoam text-white px-4 py-2 rounded-md text-base font-medium hover:bg-opacity-90 transition duration-300 mt-3 mx-3">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 