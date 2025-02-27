'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Regular Client',
    image: '/images/testimonial-1.jpg',
    quote: 'The Hydrating Facial at Haven\'s completely transformed my skin. I\'ve been struggling with dryness for years, and after just one session, my skin felt incredibly moisturized and rejuvenated. The esthetician was knowledgeable and made me feel completely relaxed.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'First-time Client',
    image: '/images/testimonial-2.jpg',
    quote: 'I was hesitant to try a chemical peel, but the team at Haven\'s explained everything so thoroughly that I felt completely at ease. The results were amazing - my skin looks so much clearer and the sun spots I\'ve had for years are significantly lighter.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Miller',
    role: 'Monthly Subscriber',
    image: '/images/testimonial-3.jpg',
    quote: 'I\'ve been coming to Haven\'s monthly for over a year now, and the consistency in quality is remarkable. The peaceful, coastal-inspired atmosphere instantly puts me at ease, and my skin has never looked better. Highly recommend their microdermabrasion treatment!',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Client Since 2022',
    image: '/images/testimonial-4.jpg',
    quote: 'As someone who spends a lot of time in the sun, I needed a skincare routine that would protect and repair my skin. The customized treatment plan from Haven\'s has made such a difference. Professional, attentive, and genuinely caring about results.',
    rating: 4,
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sliderRef = useRef<HTMLDivElement>(null);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSpecific = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative py-10" data-aos="fade-up" data-aos-duration="800" ref={sliderRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-seafoam/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/4"></div>
      
      {/* Main testimonial card */}
      <div 
        className={`bg-white/40 backdrop-blur-md rounded-lg shadow-lg overflow-hidden 
                  border border-white/30 transition-all duration-700 ease-out
                  ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        style={{ 
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg) scale(${isAnimating ? 0.95 : 1})`,
          transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Testimonial image with parallax */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <div 
              className="absolute inset-0 transition-transform duration-700 ease-out"
              style={{ 
                transform: `scale(1.1) translateX(${mousePosition.x * 0.05}px) translateY(${mousePosition.y * 0.05}px)` 
              }}
            >
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
            
            {/* Floating rating that moves opposite to parallax */}
            <div 
              className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg z-10 flex items-center"
              style={{ 
                transform: `translateX(${-mousePosition.x * 0.1}px) translateY(${-mousePosition.y * 0.1}px)` 
              }}
            >
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`${i < testimonials[currentIndex].rating 
                      ? 'text-seafoam' 
                      : 'text-gray-300'} w-4 h-4`} 
                    fill={i < testimonials[currentIndex].rating ? '#FFCFEF' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs font-medium">{testimonials[currentIndex].rating}.0</span>
            </div>
          </div>
          
          {/* Testimonial content */}
          <div className="w-full md:w-3/5 p-6 md:p-8 bg-sand/20">            
            <blockquote className="mb-6 relative">
              <div className="absolute -top-6 -left-4 text-seafoam opacity-20 text-6xl font-serif">"</div>
              <p className="text-gray-800 italic testimonial-text relative z-10">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="absolute -bottom-4 -right-2 text-seafoam opacity-20 text-6xl font-serif">"</div>
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800 text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-seafoam">{testimonials[currentIndex].role}</p>
              </div>
              
              <div className="hidden md:block bg-seafoam/10 rounded-full px-3 py-1">
                <span className="text-sm text-seafoam font-medium">Verified Customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <div 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
        style={{ 
          transform: `translateY(-50%) translateX(${mousePosition.x * 0.05}px)` 
        }}
      >
        <button 
          onClick={goToPrevious}
          className="bg-seafoam/90 backdrop-blur-sm text-white rounded-full p-2.5 shadow-lg hover:bg-seafoam focus:outline-none focus:ring-2 focus:ring-seafoam focus:ring-opacity-50 transition-all duration-300 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
      </div>
      
      <div 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
        style={{ 
          transform: `translateY(-50%) translateX(${-mousePosition.x * 0.05}px)` 
        }}
      >
        <button 
          onClick={goToNext}
          className="bg-seafoam/90 backdrop-blur-sm text-white rounded-full p-2.5 shadow-lg hover:bg-seafoam focus:outline-none focus:ring-2 focus:ring-seafoam focus:ring-opacity-50 transition-all duration-300 hover:scale-110"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSpecific(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'bg-seafoam w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            } focus:outline-none`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider; 