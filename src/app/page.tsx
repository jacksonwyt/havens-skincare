import Image from "next/image";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

// Components
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Main background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpeg"
            alt="Newport Beach coastline"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="scale-110"
          />
          {/* Gradient overlay with reduced opacity for more subtlety */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
        </div>

        {/* Animated wave elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 opacity-40">
          <div className="waves wave1"></div>
          <div className="waves wave2"></div>
          <div className="waves wave3"></div>
        </div>
        
        {/* Floating glass elements - decorative */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm mix-blend-overlay animate-float-slow hidden lg:block"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-haven-blue/10 backdrop-blur-sm mix-blend-overlay animate-float-slower rotate-45 hidden lg:block"></div>
        
        {/* Content with glass card */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-lg border border-white/20 shadow-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 hero-text-shadow">
              Havens Skincare
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto hero-text-shadow">
              Where beauty meets skin care excellence
            </p>
            <Link 
              href="/booking" 
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-seafoam/80 backdrop-blur-sm rounded-md shadow-md group border border-white/20"
              data-aos="zoom-in" 
              data-aos-delay="300"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">Book an Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 bg-haven-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12" data-aos="fade-right" data-aos-duration="800">
              <div className="relative rounded-lg overflow-hidden shadow-xl h-96">
                <Image
                  src="/images/owner1.jpeg"
                  alt="Professional esthetician"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Experience the Haven Difference
              </h2>
              <p className="text-gray-600 mb-6">
                At Haven&#39;s Skincare, we bring the tranquility of the California coast into every treatment. 
                Our Newport Beach studio offers personalized skin care services in a calming, luxurious environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-on-light">Custom treatments tailored to your skin type</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-on-light">Premium, marine-based skincare products</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-on-light">Relaxing environment inspired by coastal serenity</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-on-light">Over 10 years of skincare expertise</span>
                </li>
              </ul>
              <Link href="/about" className="btn-primary" data-aos="fade-up" data-aos-delay="500">
                Learn About Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-soft-blue bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Signature Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of premium treatments designed to rejuvenate your skin and enhance your natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white/50 backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group" 
                data-aos="fade-up" 
                data-aos-duration="600"
                data-aos-delay="100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/service-facial.jpg"
                  alt="Hydrating Facial"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 w-full left-0 right-0 text-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
                  <span className="inline-block bg-seafoam/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-seafoam transition-colors duration-300">Hydrating Facial</h3>
                <p className="text-gray-600 mb-4">
                  Restore moisture and radiance with our signature hydrating facial, using premium marine-derived ingredients.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-seafoam font-semibold">$120 | 60 min</span>
                  <Link href="/services#hydrating-facial" className="text-seafoam hover:text-opacity-80 font-medium relative group-hover:pr-1 transition-all duration-300">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-seafoam group-hover:w-full transition-all duration-500"></span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white/50 backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group" 
                data-aos="fade-up" 
                data-aos-duration="600"
                data-aos-delay="200">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/service-chemical-peel.jpg"
                  alt="Chemical Peel"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-seafoam transition-colors duration-300">Chemical Peel</h3>
                <p className="text-gray-600 mb-4">
                  Reveal fresh, renewed skin with our professional-grade chemical peels that target pigmentation and texture.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-seafoam font-semibold">$150 | 45 min</span>
                  <Link href="/services#chemical-peel" className="text-seafoam hover:text-opacity-80 font-medium relative group-hover:pr-1 transition-all duration-300">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-seafoam group-hover:w-full transition-all duration-500"></span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white/50 backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group" 
                data-aos="fade-up" 
                data-aos-duration="600"
                data-aos-delay="300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/service-microdermabrasion.jpg"
                  alt="Microdermabrasion"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 w-full left-0 right-0 text-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
                  <span className="inline-block bg-seafoam/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    New Client Special
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-seafoam transition-colors duration-300">Microdermabrasion</h3>
                <p className="text-gray-600 mb-4">
                  Gentle exfoliation treatment that removes dead skin cells and stimulates collagen production for smoother skin.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-seafoam font-semibold">$135 | 50 min</span>
                  <Link href="/services#microdermabrasion" className="text-seafoam hover:text-opacity-80 font-medium relative group-hover:pr-1 transition-all duration-300">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-seafoam group-hover:w-full transition-all duration-500"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="100">
            <Link href="/services" className="btn-primary inline-flex items-center justify-center relative overflow-hidden group">
              <span className="relative z-10">View All Services</span>
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why clients consistently choose Haven&#39;s for their skincare needs.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seafoam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-white mb-4 hero-text-shadow">
                Ready for Your Skincare Journey?
              </h2>
              <p className="text-white text-lg max-w-xl hero-text-shadow">
                Schedule your consultation today and discover the perfect treatment for your unique skin needs.
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <Link href="/booking" className="bg-gray-800 text-seafoam-text-dark px-8 py-3 rounded-md hover:bg-gray-500 transition duration-300 inline-block font-medium">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
