import Link from 'next/link';
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
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl font-bold text-gray-100 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or ready to book? Get in touch with our team at Havens Skincare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div data-aos="fade-right" data-aos-duration="800">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We&#39;d love to hear from you! Whether you have questions about our services, need skincare advice, or want to schedule an appointment, our team is here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                  <div className="bg-seafoam bg-opacity-81 p-3 rounded-full mr-4">
                    <FiMapPin className="text-seafoam-text-dark w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">2650 Avon Street</p>
                    <p className="text-gray-600">Newport Beach, CA 92663</p>
                  </div>
                </div>
                
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-seafoam bg-opacity-81 p-3 rounded-full mr-4">
                    <FiPhone className="text-seafoam-text-dark w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:9493753632" className="hover:text-seafoam transition duration-300">(949) 375-3632</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                  <div className="bg-seafoam bg-opacity-81 p-3 rounded-full mr-4">
                    <FiMail className="text-seafoam-text-dark w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@havensskincare.com" className="hover:text-seafoam transition duration-300">info@havensskincare.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="400">
                  <div className="bg-seafoam bg-opacity-81 p-3 rounded-full mr-4">
                    <FiClock className="text-seafoam-text-dark w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 7pm</p>
                    <p className="text-gray-600">Saturday: 10am - 5pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8" data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-seafoam text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 transition duration-300">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-seafoam text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 transition duration-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="bg-sand bg-opacity-20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seafoam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-white mb-4 hero-text-shadow">
                Ready for a one-of-a-kind Skincare Experience?
              </h2>
              <p className="text-white text-lg max-w-xl hero-text-shadow">
                Book your appointment today and begin your journey to radiant skin.
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <Link href="/booking" className="bg-pink-100 text-gray-500 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 inline-block font-medium">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}