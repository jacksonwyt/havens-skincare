import Link from "next/link";
import { FiCheck, FiCalendar, FiLayers } from "react-icons/fi";
import ImageWithFallback from "@/components/ImageWithFallback";
import Image from "next/image";


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
              objectPosition: "center 30%",
              zIndex: -1
            }}
            className="w-full h-full"
          />
          {/* Glass-like column overlay removed */}
        </div>
        
        <div className="relative z-20 w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
          {/* Business Card Content - Logo and booking button side by side */}
          <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto mt-8 md:mt-12 lg:mt-16">
            {/* Booking button as a card - positioned on the left */}
            <div className="w-full lg:w-2/5 mb-8 lg:mb-0 pl-4 sm:pl-8 md:pl-12" data-aos="fade-right" data-aos-duration="800">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-sm shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:bg-white/25">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready for Radiant Skin?</h3>
                <p className="text-white/90 mb-5 text-sm sm:text-base">
                  Schedule your personalized skincare treatment with Newport Beach&apos;s premier esthetician.
                </p>
                <a 
                  href="https://heatherhavens.setmore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-seafoam/30 backdrop-blur-sm text-gray-800 border border-white/30 font-medium text-base px-8 py-3 rounded-none shadow-md hover:bg-seafoam/40 hover:border-white/40 hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center group w-full"
                >
                  <FiCalendar className="mr-3 text-gray-800 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="tracking-wide">BOOK APPOINTMENT</span>
                </a>
              </div>
            </div>
            
            {/* Logo side - moved further right */}
            <div className="w-full lg:w-1/2 flex justify-end pr-4 sm:pr-8 md:pr-16 lg:pr-20 mb-8 md:mb-10 mt-8 md:mt-16 lg:mt-20" data-aos="zoom-in" data-aos-duration="1200">
              <ImageWithFallback 
                src="/images/logo.png" 
                fallbackSrc="/images/placeholder.svg"
                alt="Haven's Skincare Logo" 
                width={700} 
                height={350} 
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 90vw, 700px"
                className="max-w-full h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[250px] object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Small navbar logo in bottom right corner */}
          <div className="absolute bottom-2 right-4 sm:bottom-3 sm:right-6 z-30">
            <div className="relative h-8 w-24 sm:h-10 sm:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image 
                src="/images/NavbarLogo.png" 
                alt="Haven's Skincare" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Migrated from About Page */}
      <section className="py-12 md:py-16 bg-haven-blue/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl font-bold text-white mb-4">Experience the <span className="text-seafoam/90">Havens</span> Difference</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Bringing tranquility and skin rejuvenation to Newport Beach.
            </p>
          </div>

          {/* Owner Bio Section with First Image */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-2/5" data-aos="fade-right" data-aos-duration="800">
              {/* First image */}
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[3/4] max-w-[280px] sm:max-w-[320px] mx-auto">
                <ImageWithFallback
                  src="/images/owner1.jpeg"
                  fallbackSrc="/images/owner-avatar.png"
                  alt="Heather Havens, Professional Esthetician"
                  width={320}
                  height={427}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  className="rounded-lg"
                />
                
                {/* Small navbar logo in bottom right corner of image */}
                <div className="absolute bottom-2 right-2 z-10">
                  <div className="relative h-6 w-16 opacity-80 hover:opacity-100 transition-opacity duration-300">
                    <Image 
                      src="/images/NavbarLogo.png" 
                      alt="Haven's Skincare" 
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-white mb-4">
                About Me
              </h3>
              <h4 className="text-xl text-seafoam/90 mb-6">Founder & Lead Esthetician</h4>
              
              {/* Bullet points from original home page */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                  <FiCheck className="text-seafoam/90 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">Custom treatments tailored to your skin type</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                  <FiCheck className="text-seafoam/90 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">Premium skincare products</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300">
                  <FiCheck className="text-seafoam/90 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">Relaxing environment inspired by coastal serenity</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400">
                  <FiCheck className="text-seafoam/90 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">Over 30 years of skincare expertise</span>
                </li>
              </ul>
              
              <p className="text-white/90 mb-6">
                With over 30 years of expertise in the skincare industry, my journey began at the esteemed Dermal Institute, where I developed a deep understanding of advanced skincare techniques. I then refined my craft at the world-renowned Four Seasons, catering to an elite clientele seeking results-driven treatments in a luxurious setting.
              </p>
            </div>
          </div>

          {/* The Havens Approach - Moved between image sections */}
          <div className="mb-16">
            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
              <h3 className="text-2xl font-bold text-white mb-4">The Havens Approach</h3>
              <p className="text-white/90 max-w-3xl mx-auto">
                Our philosophy combines scientific expertise with the natural healing elements of the California coast.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Approach 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seafoam text-gray-800 mb-6">
                  <FiCheck className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Personal Attention</h4>
                <p className="text-white/80">
                  Every treatment is customized to your unique skin concerns and goals, with dedicated attention from start to finish.
                </p>
              </div>
              
              {/* Approach 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seafoam text-gray-800 mb-6">
                  <FiCheck className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Premium Products</h4>
                <p className="text-white/80">
                  We use only the highest quality, professionally-formulated products with proven results.
                </p>
              </div>
              
              {/* Approach 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seafoam text-gray-800 mb-6">
                  <FiCheck className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Coastal Serenity</h4>
                <p className="text-white/80">
                  Our tranquil environment is designed to soothe the senses, inspired by the beauty of the California coast.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Journey with Second Image */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
            <div className="lg:w-2/5" data-aos="fade-left" data-aos-duration="800">
              {/* Second image */}
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[3/4] max-w-[280px] sm:max-w-[320px] mx-auto">
                <ImageWithFallback
                  src="/images/Owner3.jpeg"
                  fallbackSrc="/images/owner-avatar.png"
                  alt="Heather Havens, Founder and Lead Esthetician"
                  width={320}
                  height={427}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  className="rounded-lg"
                />
                
                {/* Small navbar logo in bottom right corner of image */}
                <div className="absolute bottom-2 right-2 z-10">
                  <div className="relative h-6 w-16 opacity-80 hover:opacity-100 transition-opacity duration-300">
                    <Image 
                      src="/images/NavbarLogo.png" 
                      alt="Haven's Skincare" 
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-white mb-4">
                My Professional Journey
              </h3>
              <p className="text-white/90 mb-6">
                At 25, I launched my own facial studio, offering personalized skincare solutions tailored to the needs of discerning clients. My passion for corrective skincare led me to work alongside a top cosmetic dermatologist, where I specialized in treating acne-prone skin and mastering microdermabrasion techniques to restore balance and radiance.
              </p>
              <p className="text-white/90 mb-6">
                After taking time to focus on my family and adopting a beautiful son along the way, life took an unexpected turn when I tragically lost my oldest son. In the wake of profound loss, I was guided back to my true passion—helping others achieve healthy, luminous skin. Skincare is more than a profession for me; it is a calling, a way to bring healing and confidence to those I touch.
              </p>
              <p className="text-white/90 mb-6">
                Now, I bring my decades of expertise, unwavering dedication, and personalized care to an exclusive clientele who seek not just treatments, but transformative skincare experiences. My goal is to create an oasis of renewal, where science meets luxury, and every client leaves feeling restored, radiant, and deeply cared for.
              </p>
              <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="400">
                <span className="inline-flex items-center text-seafoam/90">
                  <FiCheck className="mr-2" /> Licensed Esthetician
                </span>
                <span className="inline-flex items-center text-seafoam/90">
                  <FiCheck className="mr-2" /> Advanced Training
                </span>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="flex flex-col lg:flex-row gap-6 mb-16">
            {/* Havens Mission Section */}
            <div className="lg:w-3/5" data-aos="fade-right" data-aos-duration="800">
              <div className="text-center h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">The Havens Mission</h3>
                <p className="text-lg text-white/90 italic mb-5">
                  &quot;To enhance your natural beauty with personalized treatments that rejuvenate both skin and spirit.&quot;
                </p>
                <p className="text-white/80 mb-5">
                  At Havens Skincare, we&#39;re dedicated to providing exceptional skincare services. We combine the latest skincare innovations with natural elements for treatments that leave you feeling refreshed, renewed, and radiant.
                </p>
                <div className="flex justify-center w-full">
                  <div className="inline-flex items-center text-seafoam/90 text-sm" data-aos="zoom-in" data-aos-delay="400">
                    <FiCheck className="mr-2" /> Personalized Care For Every Client
                  </div>
                </div>
              </div>
            </div>
            
            {/* In Loving Memory Section */}
            <div className="lg:w-2/5 lg:border-l lg:border-white/20 lg:pl-6" data-aos="fade-left" data-aos-duration="800">
              <div className="text-center">
                <h3 className="text-xl font-bold text-seafoam mb-4">In Loving Memory</h3>
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[180px] mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <div className="relative w-full mx-auto rounded-lg overflow-hidden" 
                      style={{ 
                        boxShadow: '0 0 20px rgba(235, 199, 230, 0.4)',
                        border: '2px solid rgba(235, 199, 230, 0.3)',
                        maxWidth: "100%", 
                        height: "auto" 
                      }}>
                      <ImageWithFallback
                        src="/images/Chasen.JPG"
                        fallbackSrc="/images/owner-avatar.png"
                        alt="In loving memory of Chasen"
                        width={428}
                        height={535}
                        style={{ objectFit: 'contain', width: "100%", height: "auto" }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full text-center mt-4" data-aos="fade-up" data-aos-delay="300">
                    <p className="text-seafoam/90 italic mb-2">
                      This space is dedicated to the loving memory of my son Chasen.
                    </p>
                    <p className="text-white/80">
                      His spirit and light continue to inspire our mission of healing and transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our <span className="text-seafoam">Signature</span> Services</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore our range of specialized treatments designed to rejuvenate, nourish, and transform your skin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="bg-seafoam/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-seafoam/20 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
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
                <Link href="/services#facials" className="text-gray-700 hover:text-seafoam font-medium transition duration-300 text-sm sm:text-base">
                  Learn More →
                </Link>
              </div>
            </div>
           
            {/* Service 2 */}
            <div className="bg-seafoam/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-seafoam/20 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
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
                <Link href="/services#peels" className="text-gray-700 hover:text-seafoam font-medium transition duration-300 text-sm sm:text-base">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-seafoam/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-seafoam/20 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none" data-aos="fade-up" data-aos-delay="300">
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
                <Link href="/services#microderm" className="text-gray-700 hover:text-seafoam font-medium transition duration-300 text-sm sm:text-base">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="400">
            <Link href="/services" className="bg-white/70 backdrop-blur-sm text-gray-800 border border-seafoam/30 font-medium px-8 py-3 rounded-none shadow-md hover:bg-white/90 hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center group inline-flex mx-auto">
              <FiLayers className="mr-2 text-gray-800" />
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-seafoam/90 to-seafoam/70 backdrop-blur-md text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-white/10 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-white/10 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready for a Skincare Transformation?</h2>
            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
              Book your appointment today and experience the perfect blend of science and relaxation at Havens Skincare.
            </p>
            <a 
              href="https://heatherhavens.setmore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/70 backdrop-blur-sm text-gray-800 border border-white/50 font-medium px-8 py-3 rounded-none shadow-md hover:bg-white/90 hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center group inline-flex"
            >
              <FiCalendar className="mr-2 text-gray-800" />
              Book Your Appointment
            </a>
            
            {/* Small navbar logo below CTA button */}
            <div className="mt-8 flex justify-center">
              <div className="relative h-8 w-24 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image 
                  src="/images/NavbarLogo.png" 
                  alt="Haven's Skincare" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
