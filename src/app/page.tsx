import Link from "next/link";
import { FiCheck, FiCalendar, FiInfo, FiLayers } from "react-icons/fi";
import ImageWithFallback from "@/components/ImageWithFallback";
import PremiumNavigation from "@/components/PremiumNavigation";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Full Width Background */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/background.jpeg"
            fallbackSrc="/images/home.jpg"
            alt="Newport Beach coastline"
            fill
            sizes="100vw"
            priority
            style={{ 
              objectFit: "cover", 
              objectPosition: "center 30%"
            }}
            className="w-full h-full"
          />
          {/* Glass-like column overlay - positioned on the left side */}
          <div className="absolute top-0 bottom-0 left-[5%] sm:left-[8%] md:left-[12%] w-[280px] sm:w-[300px] md:w-[350px] bg-white/10 backdrop-blur-md border-r border-white/20 shadow-2xl"></div>
        </div>
        
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
          {/* Business Card Content */}
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Navigation side */}
            <div className="w-full md:w-2/5 flex flex-col items-center order-2 md:order-1 mb-6 md:mb-0 md:ml-[calc(12%-30px)]" data-aos="zoom-in" data-aos-delay="300">
              {/* Premium Navigation component container with glass effect */}
              <div className="w-full max-w-[280px] sm:max-w-sm p-5 sm:p-7 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-2xl transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.2)]">
                <PremiumNavigation />
              </div>
            </div>
            
            {/* Logo side */}
            <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2 mb-4 md:mb-0" data-aos="zoom-in" data-aos-duration="1200">
              <ImageWithFallback 
                src="/images/logo.png" 
                fallbackSrc="/images/placeholder.svg"
                alt="Haven's Skincare Logo" 
                width={600} 
                height={300} 
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 90vw, 600px"
                className="transition-transform duration-500 hover:scale-105 max-w-full h-auto max-h-[150px] sm:max-h-[180px] md:max-h-[220px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-12 md:py-16 bg-haven-blue/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/6 mb-8 md:mb-0 md:pr-12" data-aos="fade-right" data-aos-duration="800">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[3/4] max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0">
                <ImageWithFallback
                  src="/images/owner1.jpeg"
                  fallbackSrc="/images/owner-avatar.png"
                  alt="Professional esthetician"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:w-2/3" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Experience the Havens Difference
              </h2>
              <p className="text-white mb-6 text-sm sm:text-base">
                At Havens Skincare, we bring the tranquility of the California coast into every treatment. 
                Our Newport Beach studio offers personalized skin care services in a calming, luxurious environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">Custom treatments tailored to your skin type</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">Premium skincare products</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">Relaxing environment inspired by coastal serenity</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400">
                  <FiCheck className="text-haven-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">Over 10 years of skincare expertise</span>
                </li>
              </ul>
              <Link href="/about" className="btn-primary btn-with-icon text-sm sm:text-base" data-aos="fade-up" data-aos-delay="500">
                <FiInfo className="mr-2" />
                Learn About Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Signature Services</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore our range of specialized treatments designed to rejuvenate, nourish, and transform your skin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="bg-haven-blue/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-haven-blue/10 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white/60 p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-6 mx-auto">
                <ImageWithFallback 
                  src="/images/facial-icon.svg" 
                  fallbackSrc="/images/placeholder.svg" 
                  alt="Facial Treatment" 
                  width={28} 
                  height={28}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-3">Custom Facials</h3>
              <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">
                Personalized facial treatments tailored to your specific skin concerns and goals.
              </p>
              <div className="text-center">
                <Link href="/services#facials" className="text-haven-blue hover:text-haven-blue/80 font-medium transition duration-300 text-sm sm:text-base">
                  Learn More →
                </Link>
              </div>
            </div>
           
            {/* Service 2 */}
            <div className="bg-haven-blue/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-haven-blue/10 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white/60 p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-6 mx-auto">
                <ImageWithFallback 
                  src="/images/peeling-icon.svg" 
                  fallbackSrc="/images/placeholder.svg" 
                  alt="Chemical Peels" 
                  width={28} 
                  height={28}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-3">Chemical Peels</h3>
              <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">
                Advanced chemical treatments to address hyperpigmentation, fine lines, and texture.
              </p>
              <div className="text-center">
                <Link href="/services#peels" className="text-haven-blue hover:text-haven-blue/80 font-medium transition duration-300 text-sm sm:text-base">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-haven-blue/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-haven-blue/10 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white/60 p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-6 mx-auto">
                <ImageWithFallback 
                  src="/images/microderm-icon.png" 
                  fallbackSrc="/images/placeholder.svg" 
                  alt="Microdermabrasion" 
                  width={28} 
                  height={28}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-3">Microdermabrasion</h3>
              <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">
                Gentle exfoliation therapy that reveals softer, smoother, and more radiant skin.
              </p>
              <div className="text-center">
                <Link href="/services#microderm" className="text-haven-blue hover:text-haven-blue/80 font-medium transition duration-300 text-sm sm:text-base">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="400">
            <Link href="/services" className="btn-secondary btn-with-icon text-sm sm:text-base">
              <FiLayers className="mr-2" />
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-haven-blue backdrop-blur-md text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-white/5 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-white/5 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready for a Skincare Transformation?</h2>
            <p className="text-white/90 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
              Book your appointment today and experience the perfect blend of science and relaxation at Havens Skincare.
            </p>
            <a 
              href="https://heatherhavens.setmore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary btn-with-icon text-sm sm:text-base"
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
