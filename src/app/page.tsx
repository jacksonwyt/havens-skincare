import Link from "next/link";
import { FiCheck, FiCalendar, FiInfo, FiLayers } from "react-icons/fi";
import ImageWithFallback from "@/components/ImageWithFallback";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Responsive with padding instead of fixed height */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Main background image - Modified for responsive height */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/background.jpeg"
            fallbackSrc="/images/home.jpg"
            alt="Newport Beach coastline"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="scale-110"
          />
          {/* Dark tint overlay - more transparent, sharper */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        
        {/* Logo and button content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col items-center justify-center h-full" data-aos="fade-up" data-aos-duration="1000">
          {/* Large logo in the center */}
          <div className="mb-8" data-aos="zoom-in" data-aos-duration="1200">
            <ImageWithFallback 
              src="/images/logo.png" 
              fallbackSrc="/images/placeholder.svg"
              alt="Haven's Skincare Logo" 
              width={800} 
              height={400} 
              sizes="(max-width: 768px) 90vw, 800px"
              className="transition-transform duration-500 hover:scale-105 w-full max-w-[800px]"
              priority
            />
          </div>
          
          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center" data-aos="zoom-in" data-aos-delay="300">
            {/* Services button */}
            <Link 
              href="/services" 
              className="btn-primary btn-with-icon"
            >
              <FiLayers className="mr-2" />
              Services
            </Link>
            
            {/* About button */}
            <Link 
              href="/about" 
              className="btn-secondary btn-with-icon"
            >
              <FiInfo className="mr-2" />
              About
            </Link>
            
            {/* Book an Appointment button */}
            <a 
              href="https://heatherhavens.setmore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-seafoam btn-with-icon"
            >
              <FiCalendar className="mr-2" />
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 bg-haven-blue/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/6 mb-8 md:mb-0 md:pr-12" data-aos="fade-right" data-aos-duration="800">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[3/4]">
                <ImageWithFallback
                  src="/images/owner1.jpeg"
                  fallbackSrc="/images/owner-avatar.png"
                  alt="Professional esthetician"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:w-2/3" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h2 className="text-3xl font-bold text-white mb-4">
                Experience the Havens Difference
              </h2>
              <p className="text-white mb-6">
                At Havens Skincare, we bring the tranquility of the California coast into every treatment. 
                Our Newport Beach studio offers personalized skin care services in a calming, luxurious environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white">Custom treatments tailored to your skin type</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white">Premium skincare products</span>
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
              <Link href="/about" className="btn-primary btn-with-icon" data-aos="fade-up" data-aos-delay="500">
                <FiInfo className="mr-2" />
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
                <ImageWithFallback src="/images/facial-icon.svg" fallbackSrc="/images/placeholder.svg" alt="Facial Treatment" width={32} height={32} />
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
                <ImageWithFallback src="/images/peeling-icon.svg" fallbackSrc="/images/placeholder.svg" alt="Chemical Peels" width={32} height={32} />
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
                <ImageWithFallback src="/images/microderm-icon.png" fallbackSrc="/images/placeholder.svg" alt="Microdermabrasion" width={32} height={32} />
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
            <Link href="/services" className="btn-primary btn-with-icon">
              <FiLayers className="mr-2" />
              View All Services
            </Link>
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
              Book your appointment today and experience the perfect blend of science and relaxation at Havens Skincare.
            </p>
            <a 
              href="https://heatherhavens.setmore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary btn-with-icon"
            >
              <FiCalendar className="mr-2" />
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
