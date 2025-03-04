'use client';

import { useState, FormEvent } from 'react';
import { FiSend } from 'react-icons/fi';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    message: string;
    isSuccess: boolean;
    isError: boolean;
  }>({
    message: '',
    isSuccess: false,
    isError: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send the form data to your backend
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Clear the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Show success message
      setFormStatus({
        message: 'Thank you for your message! We will get back to you soon.',
        isSuccess: true,
        isError: false,
      });
      
    } catch (error) {
      // Show error message
      setFormStatus({
        message: 'There was an error sending your message. Please try again.',
        isSuccess: false,
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear the status message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          message: '',
          isSuccess: false,
          isError: false,
        });
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form Status Message */}
      {formStatus.message && (
        <div 
          className={`p-4 rounded-md ${
            formStatus.isSuccess 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {formStatus.message}
        </div>
      )}
      
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
          placeholder="Your Name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
          placeholder="(123) 456-7890"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
        >
          <option value="">Select a Subject</option>
          <option value="Appointment Question">Appointment Question</option>
          <option value="Service Inquiry">Service Inquiry</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary btn-with-icon ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiSend className="mr-2" /> Send Message
            </>
          )}
        </button>
      </div>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        * Required fields
      </p>
    </form>
  );
};

export default ContactForm; 