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
    }, 8000); // Change testimonial every 8 seconds

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
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className={`flex transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="w-full px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-soft-blue">
                    <Image 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} w-5 h-5`} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-800">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none"
        aria-label="Previous testimonial"
      >
        <FiChevronLeft className="text-seafoam w-6 h-6" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none"
        aria-label="Next testimonial"
      >
        <FiChevronRight className="text-seafoam w-6 h-6" />
      </button>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSpecific(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none ${index === currentIndex ? 'bg-seafoam' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider; 