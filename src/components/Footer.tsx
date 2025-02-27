'use client';

import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-soft-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMapPin className="mr-2 text-sand" />
                <span>2650 Avon Street, Newport Beach, CA 92663</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-sand" />
                <a href="tel:9495551234" className="hover:text-sand transition duration-300">(949) 555-1234</a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-sand" />
                <a href="mailto:info@havensskincare.com" className="hover:text-sand transition duration-300">info@havensskincare.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-sand transition duration-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sand transition duration-300">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sand transition duration-300">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sand transition duration-300">Contact</Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-sand transition duration-300">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="mb-6">
              <li>Monday - Friday: 9am - 7pm</li>
              <li>Saturday: 10am - 5pm</li>
              <li>Sunday: Closed</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-sand transition duration-300"
              >
                <FiInstagram className="text-2xl" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-sand transition duration-300"
              >
                <FiFacebook className="text-2xl" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-sand transition duration-300"
              >
                <FiTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-seafoam pt-6 mt-8 text-center">
          <p>&copy; {currentYear} Haven&#39;s Skincare. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Link href="/privacy-policy" className="hover:text-sand transition duration-300 mr-4">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-sand transition duration-300">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;