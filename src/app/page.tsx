import Image from "next/image";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

// Components
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Updated to shorter height */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Main background image - Modified for shorter height */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpeg"
            alt="Newport Beach coastline"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="scale-110"
          />
        </div>
        
        {/* Logo and button content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col items-center justify-center h-full" data-aos="fade-up" data-aos-duration="1000">
          {/* Large logo in the center */}
          <div className="mb-8" data-aos="zoom-in" data-aos-duration="1200">
            <Image 
              src="/images/logo.png" 
              alt="Haven's Skincare Logo" 
              width={800} 
              height={400} 
              className="transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
          
          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center" data-aos="zoom-in" data-aos-delay="300">
            {/* Services button */}
            <Link 
              href="/services" 
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-haven-blue/70 backdrop-blur-md rounded-md shadow-lg group border border-white/30 transform transition-all duration-300 hover:bg-haven-blue/80 hover:shadow-xl"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative group-hover:translate-y-[-2px] transition-transform duration-300">Services</span>
            </Link>
            
            {/* About button */}
            <Link 
              href="/about" 
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-haven-blue/70 backdrop-blur-md rounded-md shadow-lg group border border-white/30 transform transition-all duration-300 hover:bg-haven-blue/80 hover:shadow-xl"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative group-hover:translate-y-[-2px] transition-transform duration-300">About</span>
            </Link>
            
            {/* Book an Appointment button */}
            <Link 
              href="/booking" 
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-haven-blue/70 backdrop-blur-md rounded-md shadow-lg group border border-white/30 transform transition-all duration-300 hover:bg-haven-blue/80 hover:shadow-xl"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative group-hover:translate-y-[-2px] transition-transform duration-300">Book an Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 bg-haven-blue/15">
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Experience the Haven Difference
              </h2>
              <p className="text-white mb-6">
                At Haven&apos;s Skincare, we bring the tranquility of the California coast into every treatment. 
                Our Newport Beach studio offers personalized skin care services in a calming, luxurious environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white">Custom treatments tailored to your skin type</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white">Premium, marine-based skincare products</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white">Relaxing environment inspired by coastal serenity</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white">Over 10 years of skincare expertise</span>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Signature Services</h2>
            <p className="text-gray-600">
              Explore our range of specialized treatments designed to rejuvenate, nourish, and transform your skin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-haven-blue/10 backdrop-blur-sm rounded-lg p-6 border border-haven-blue/10 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white/60 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Image src="/images/facial-icon.svg" alt="Facial Treatment" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Custom Facials</h3>
              <p className="text-gray-600 text-center mb-4">
                Personalized facial treatments tailored to your specific skin concerns and goals.
              </p>
              <div className="text-center">
                <Link href="/services#facials" className="text-haven-blue hover:text-haven-blue/80 font-medium transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-haven-blue/10 backdrop-blur-sm rounded-lg p-6 border border-haven-blue/10 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white/60 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Image src="/images/peeling-icon.svg" alt="Chemical Peels" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Chemical Peels</h3>
              <p className="text-gray-600 text-center mb-4">
                Advanced chemical treatments to address hyperpigmentation, fine lines, and texture.
              </p>
              <div className="text-center">
                <Link href="/services#peels" className="text-haven-blue hover:text-haven-blue/80 font-medium transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-haven-blue/10 backdrop-blur-sm rounded-lg p-6 border border-haven-blue/10 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white/60 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Image src="/images/microderm-icon.svg" alt="Microdermabrasion" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Microdermabrasion</h3>
              <p className="text-gray-600 text-center mb-4">
                Gentle exfoliation therapy that reveals softer, smoother, and more radiant skin.
              </p>
              <div className="text-center">
                <Link href="/services#microderm" className="text-haven-blue hover:text-haven-blue/80 font-medium transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-haven-blue/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-white">
              Discover why our clients trust Haven&apos;s Skincare for their skincare journey.
            </p>
          </div>
          
          {/* Testimonial Slider Component */}
          <div data-aos="fade-up" data-aos-delay="200">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-haven-blue backdrop-blur-md text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Ready for a Skincare Transformation?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Book your appointment today and experience the perfect blend of science and relaxation at Haven&apos;s Skincare.
            </p>
            <Link 
              href="/booking" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-haven-blue font-medium rounded-md shadow-lg transform transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
