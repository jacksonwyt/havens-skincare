'use client';

import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Haven's Skincare</h3>
            <p className="mb-4 footer-link">
              A luxury esthetician studio in Newport Beach, California, providing personalized skincare treatments in a serene coastal-inspired environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FiFacebook className="w-5 h-5 hover:text-seafoam transition-colors duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram className="w-5 h-5 hover:text-seafoam transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter className="w-5 h-5 hover:text-seafoam transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-3 mt-1 text-seafoam" />
                <span className="footer-link">123 Ocean Avenue<br />Newport Beach, CA 92663</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="w-5 h-5 mr-3 mt-1 text-seafoam" />
                <span className="footer-link">(949) 555-1234</span>
              </li>
              <li className="flex items-start">
                <FiMail className="w-5 h-5 mr-3 mt-1 text-seafoam" />
                <span className="footer-link">info@havensskincare.com</span>
              </li>
              <li className="flex items-start">
                <FiClock className="w-5 h-5 mr-3 mt-1 text-seafoam" />
                <div className="footer-link">
                  <p>Mon-Fri: 9am - 7pm</p>
                  <p>Sat: 10am - 6pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="footer-link hover:underline">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4 footer-link">
              Stay updated with our latest treatments, skincare tips, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam text-gray-800"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="bg-seafoam text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="footer-link text-sm">
              &copy; {new Date().getFullYear()} Haven's Skincare. All rights reserved.
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