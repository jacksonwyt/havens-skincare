import Link from 'next/link';
import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contact Us | Haven's Skincare - Newport Beach Esthetician",
  description: "Get in touch with Haven's Skincare in Newport Beach, California. Book appointments, ask questions, or find our location information.",
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-soft-blue bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or ready to book? Get in touch with our team at Haven&#39;s Skincare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We&#39;d love to hear from you! Whether you have questions about our services, need skincare advice, or want to schedule an appointment, our team is here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-seafoam bg-opacity-10 p-3 rounded-full mr-4">
                    <FiMapPin className="text-seafoam w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Ocean View Blvd</p>
                    <p className="text-gray-600">Newport Beach, CA 92660</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seafoam bg-opacity-10 p-3 rounded-full mr-4">
                    <FiPhone className="text-seafoam w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:9495551234" className="hover:text-seafoam transition duration-300">(949) 555-1234</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seafoam bg-opacity-10 p-3 rounded-full mr-4">
                    <FiMail className="text-seafoam w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@havensskincare.com" className="hover:text-seafoam transition duration-300">info@havensskincare.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seafoam bg-opacity-10 p-3 rounded-full mr-4">
                    <FiClock className="text-seafoam w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 7pm</p>
                    <p className="text-gray-600">Saturday: 10am - 5pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-seafoam bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-seafoam">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0 0v2m0 4h.01M8 21h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5z" />
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-seafoam bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-seafoam">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-seafoam bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-seafoam">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-sand bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in the heart of Newport Beach, just minutes from the coast.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-96">
              {/* Replace with actual Google Maps iframe in production */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  Google Maps iframe would go here in production.<br />
                  For privacy reasons, it's not loaded in this demo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/?q=Newport+Beach,CA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-seafoam hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seafoam bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the Haven difference with our personalized skincare treatments.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
} 