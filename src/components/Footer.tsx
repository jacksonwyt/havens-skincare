'use client';

import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-haven-blue/90 to-gray-900/95 backdrop-blur-sm text-white pt-16 pb-6 overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About */}
          <div className="bg-haven-blue/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 transform transition-transform duration-500 hover:-translate-y-2 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Havens Skincare</h3>
            <p className="mb-4 footer-link">
              A luxury esthetician studio in Newport Beach, California, providing personalized skincare treatments in a serene coastal-inspired environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" 
                 className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm hover:bg-white/25 transition-all duration-300 group">
                <FiFacebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm hover:bg-white/25 transition-all duration-300 group">
                <FiInstagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                 className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm hover:bg-white/25 transition-all duration-300 group">
                <FiTwitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-haven-blue/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 transform transition-transform duration-500 hover:-translate-y-2 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-white/25 backdrop-blur-sm rounded-full p-2 mr-3 flex-shrink-0">
                  <FiMapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="footer-link">2650 Avon Street<br />Newport Beach, CA 92663</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/25 backdrop-blur-sm rounded-full p-2 mr-3 flex-shrink-0">
                  <FiPhone className="w-4 h-4 text-white" />
                </div>
                <div className="mt-1">
                  <span className="footer-link">(949) 375-3632</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/25 backdrop-blur-sm rounded-full p-2 mr-3 flex-shrink-0">
                  <FiMail className="w-4 h-4 text-white" />
                </div>
                <div className="mt-1">
                  <span className="footer-link">halibrando@yahoo.com</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/25 backdrop-blur-sm rounded-full p-2 mr-3 flex-shrink-0">
                  <FiClock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="footer-link">
                    <p>Mon-Fri: 9am - 7pm</p>
                    <p>Sat: 10am - 6pm</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-haven-blue/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 transform transition-transform duration-500 hover:-translate-y-2 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link hover:underline flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link hover:underline flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link hover:underline flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <a href="https://heatherhavens.setmore.com" target="_blank" rel="noopener noreferrer" className="footer-link hover:underline flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Book Appointment
                </a>
              </li>
              <li>
                <Link href="/contact" className="footer-link hover:underline flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="footer-link text-sm">
              &copy; {new Date().getFullYear()} Havens Skincare. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="footer-link text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="footer-link text-sm hover:underline">
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