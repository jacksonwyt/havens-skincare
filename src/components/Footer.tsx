'use client';

import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-haven-blue/90 to-gray-900/95 backdrop-blur-sm text-white pt-12 sm:pt-16 pb-6 overflow-hidden">
      {/* Wave pattern at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-4 bg-haven-blue/30"></div>
      <div className="absolute top-4 left-0 right-0 w-full h-2 bg-haven-blue/20"></div>
      
      {/* Decorative coastal elements */}
      <div className="absolute top-0 left-0 right-0 opacity-10">
        <div className="waves wave3"></div>
      </div>
      
      {/* Glass circular decorations */}
      <div className="absolute top-16 right-16 w-64 h-64 rounded-full bg-haven-blue/20 backdrop-blur-sm mix-blend-overlay animate-float-slow hidden lg:block"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-haven-blue/10 backdrop-blur-sm mix-blend-overlay animate-float-slower hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* About */}
          <div className="bg-haven-blue/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 transform transition-transform duration-500 hover:-translate-y-2 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Havens Skincare</h3>
            <p className="mb-4 footer-link text-sm sm:text-base">
              A luxury esthetician studio in Newport Beach, California, providing personalized skincare treatments in a serene coastal-inspired environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" 
                 className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm hover:bg-white/25 transition-all duration-300 group">
                <FiFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm hover:bg-white/25 transition-all duration-300 group">
                <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                 className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm hover:bg-white/25 transition-all duration-300 group">
                <FiTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-haven-blue/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 transform transition-transform duration-500 hover:-translate-y-2 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <div className="bg-white/25 backdrop-blur-sm rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3 flex-shrink-0">
                  <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <span className="footer-link text-xs sm:text-sm">2650 Avon Street<br />Newport Beach, CA 92663</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/25 backdrop-blur-sm rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3 flex-shrink-0">
                  <FiPhone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="mt-0.5 sm:mt-1">
                  <span className="footer-link text-xs sm:text-sm">(949) 375-3632</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/25 backdrop-blur-sm rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3 flex-shrink-0">
                  <FiMail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="mt-0.5 sm:mt-1">
                  <span className="footer-link text-xs sm:text-sm">halibrando@yahoo.com</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/25 backdrop-blur-sm rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3 flex-shrink-0">
                  <FiClock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <div className="footer-link text-xs sm:text-sm">
                    <p>Mon-Fri: 9am - 7pm</p>
                    <p>Sat: 10am - 6pm</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-haven-blue/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 transform transition-transform duration-500 hover:-translate-y-2 shadow-lg sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-1 sm:gap-2">
              <div>
                <Link href="/" className="footer-link hover:underline flex items-center group text-xs sm:text-sm">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-1.5 sm:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Home
                </Link>
              </div>
              <div>
                <Link href="/about" className="footer-link hover:underline flex items-center group text-xs sm:text-sm">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-1.5 sm:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  About Us
                </Link>
              </div>
              <div>
                <Link href="/services" className="footer-link hover:underline flex items-center group text-xs sm:text-sm">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-1.5 sm:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Services
                </Link>
              </div>
              <div>
                <a href="https://heatherhavens.setmore.com" target="_blank" rel="noopener noreferrer" className="footer-link hover:underline flex items-center group text-xs sm:text-sm">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-1.5 sm:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Book Appointment
                </a>
              </div>
              <div>
                <Link href="/contact" className="footer-link hover:underline flex items-center group text-xs sm:text-sm">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-1.5 sm:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="footer-link text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Havens Skincare. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 mt-3 md:mt-0">
              <Link href="/privacy-policy" className="footer-link text-xs sm:text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="footer-link text-xs sm:text-sm hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;