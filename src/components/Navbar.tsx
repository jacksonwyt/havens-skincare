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
              <Link href="/" className="text-gray-700 hover:text-seafoam px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-seafoam px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-seafoam px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-seafoam px-3 py-2 rounded-md text-sm font-medium">
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
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-seafoam focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
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
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" 
              className="text-gray-700 hover:text-seafoam block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link href="/about"
              className="text-gray-700 hover:text-seafoam block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/services"
              className="text-gray-700 hover:text-seafoam block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link href="/contact"
              className="text-gray-700 hover:text-seafoam block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/booking"
              className="bg-seafoam text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 