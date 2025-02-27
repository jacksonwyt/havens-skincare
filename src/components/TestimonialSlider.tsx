'use client';

import { useState, useEffect } from 'react';
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
    <div className="relative" data-aos="fade-up" data-aos-duration="800">
      {/* Main testimonial card */}
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden 
                      transition-opacity duration-500 
                      ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col md:flex-row">
          {/* Testimonial image */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          
          {/* Testimonial content */}
          <div className="w-full md:w-3/5 p-6 md:p-8 bg-sand bg-opacity-40">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={`${i < testimonials[currentIndex].rating 
                    ? 'text-seafoam-text-dark' 
                    : 'text-gray-300'} w-5 h-5`} 
                  fill={i < testimonials[currentIndex].rating ? '#49a596' : 'none'}
                />
              ))}
            </div>
            
            <blockquote className="mb-6">
              <p className="text-gray-800 italic testimonial-text">
                "{testimonials[currentIndex].quote}"
              </p>
            </blockquote>
            
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
                <p className="text-seafoam-text-dark">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button 
          onClick={goToPrevious}
          className="bg-seafoam text-white rounded-full p-2 shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-seafoam focus:ring-opacity-50 transition"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button 
          onClick={goToNext}
          className="bg-seafoam text-white rounded-full p-2 shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-seafoam focus:ring-opacity-50 transition"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSpecific(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex 
                ? 'bg-seafoam' 
                : 'bg-gray-300 hover:bg-gray-400'
            } transition duration-300 focus:outline-none`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider; 