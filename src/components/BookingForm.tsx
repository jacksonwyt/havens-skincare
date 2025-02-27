'use client';

import { useState, useEffect } from 'react';
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// List of services that can be booked
const services = [
  { id: 'hydrating-facial', name: 'Hydrating Facial', duration: '60 min', price: '$120' },
  { id: 'deep-cleansing-facial', name: 'Deep Cleansing Facial', duration: '75 min', price: '$135' },
  { id: 'anti-aging-facial', name: 'Anti-Aging Facial', duration: '75 min', price: '$150' },
  { id: 'coastal-glow-facial', name: 'Coastal Glow Facial', duration: '90 min', price: '$165' },
  { id: 'chemical-peel', name: 'Chemical Peel', duration: '45 min', price: '$150' },
  { id: 'microdermabrasion', name: 'Microdermabrasion', duration: '50 min', price: '$135' },
  { id: 'led-therapy', name: 'LED Light Therapy', duration: '30 min', price: '$75' },
  { id: 'brow-wax', name: 'Eyebrow Shaping', duration: '15 min', price: '$35' },
  { id: 'lip-wax', name: 'Lip Wax', duration: '10 min', price: '$20' },
  { id: 'full-face-wax', name: 'Full Face Wax', duration: '30 min', price: '$75' },
];

// Available time slots
const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', 
  '5:00 PM', '6:00 PM'
];

const BookingForm: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: null as Date | null,
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });
  
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
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

  // Update available time slots whenever date changes
  useEffect(() => {
    if (formData.date) {
      // In a real application, you would fetch available time slots from the backend
      // For demo purposes, we'll filter out some time slots for weekends
      const dayOfWeek = formData.date.getDay();
      
      // Fewer appointments on weekends
      if (dayOfWeek === 0) { // Sunday (closed)
        setAvailableTimeSlots([]);
      } else if (dayOfWeek === 6) { // Saturday (limited hours)
        setAvailableTimeSlots(timeSlots.slice(1, 7)); // 10am to 4pm
      } else { // Weekdays
        setAvailableTimeSlots(timeSlots);
      }
    } else {
      setAvailableTimeSlots([]);
    }
  }, [formData.date]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      date,
      time: '', // Reset time when date changes
    }));
  };

  const nextStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const validateStep1 = () => {
    return formData.service && formData.date && formData.time;
  };

  const validateStep2 = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send the form data to your backend
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Show success message
      setFormStatus({
        message: 'Your appointment has been successfully booked! We look forward to seeing you soon.',
        isSuccess: true,
        isError: false,
      });
      
      // Reset form
      setFormData({
        service: '',
        date: null,
        time: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        notes: '',
      });
      
      // Go back to step 1
      setFormStep(1);
      
    } catch {
      // Show error message
      setFormStatus({
        message: 'There was an error booking your appointment. Please try again or contact us directly.',
        isSuccess: false,
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter out past dates
  const isDateAvailable = (date: Date) => {
    // Disable past dates and Sundays (business closed)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return date >= today && date.getDay() !== 0;
  };

  return (
    <div>
      {/* Form Status Message */}
      {formStatus.message && (
        <div 
          className={`p-4 mb-6 rounded-md ${
            formStatus.isSuccess 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {formStatus.message}
        </div>
      )}
      
      {/* Booking Steps */}
      <div className="mb-8 relative">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>
        
        <div className="flex items-center justify-between relative">
          <div 
            className={`flex flex-col items-center group ${formStep >= 1 ? 'cursor-default' : 'cursor-not-allowed'}`}
            onClick={() => formStep > 1 && prevStep()}
          >
            <div 
              className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition-all duration-500 
                ${formStep >= 1 
                  ? 'bg-seafoam/90 text-white ring-4 ring-seafoam/20' 
                  : 'bg-white/70 text-gray-400'} 
                ${formStep > 1 ? 'hover:scale-110 cursor-pointer' : ''}`}
            >
              <span className="text-lg font-medium">1</span>
              {formStep === 1 && (
                <span className="absolute top-0 right-0 -mr-1 -mt-1 bg-white rounded-full w-3 h-3 animate-ping"></span>
              )}
            </div>
            <div className={`mt-2 text-sm font-medium transition-colors duration-300 ${formStep >= 1 ? 'text-seafoam' : 'text-gray-500'}`}>Service</div>
          </div>
          
          <div className={`flex-1 h-0.5 mx-4 transition-all duration-700 
            ${formStep >= 2 ? 'bg-seafoam' : formStep === 1 ? 'bg-gradient-to-r from-seafoam to-gray-200' : 'bg-gray-200'}`}>
          </div>
          
          <div 
            className={`flex flex-col items-center group ${formStep >= 2 ? 'cursor-default' : 'cursor-not-allowed'}`}
          >
            <div 
              className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition-all duration-500 
                ${formStep >= 2 
                  ? 'bg-seafoam/90 text-white ring-4 ring-seafoam/20' 
                  : 'bg-white/70 text-gray-400'} 
                ${formStep > 2 ? 'hover:scale-110 cursor-pointer' : ''}`}
            >
              <span className="text-lg font-medium">2</span>
              {formStep === 2 && (
                <span className="absolute top-0 right-0 -mr-1 -mt-1 bg-white rounded-full w-3 h-3 animate-ping"></span>
              )}
            </div>
            <div className={`mt-2 text-sm font-medium transition-colors duration-300 ${formStep >= 2 ? 'text-seafoam' : 'text-gray-500'}`}>Details</div>
          </div>
          
          <div className={`flex-1 h-0.5 mx-4 transition-all duration-700 
            ${formStep >= 3 ? 'bg-seafoam' : formStep === 2 ? 'bg-gradient-to-r from-seafoam to-gray-200' : 'bg-gray-200'}`}>
          </div>
          
          <div className="flex flex-col items-center">
            <div 
              className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition-all duration-500 
                ${formStep >= 3 
                  ? 'bg-seafoam/90 text-white ring-4 ring-seafoam/20' 
                  : 'bg-white/70 text-gray-400'}`}
            >
              <span className="text-lg font-medium">3</span>
              {formStep === 3 && (
                <span className="absolute top-0 right-0 -mr-1 -mt-1 bg-white rounded-full w-3 h-3 animate-ping"></span>
              )}
            </div>
            <div className={`mt-2 text-sm font-medium transition-colors duration-300 ${formStep >= 3 ? 'text-seafoam' : 'text-gray-500'}`}>Confirm</div>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Select Service */}
        {formStep === 1 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Select a Service *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent appearance-none"
                >
                  <option value="">Select a Service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} ({service.duration} - {service.price})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Select a Date *
              </label>
              <div className="relative">
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  filterDate={isDateAvailable}
                  minDate={new Date()}
                  placeholderText="Select a date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
                  dateFormat="MMMM d, yyyy"
                  required
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                  <FiCalendar />
                </div>
              </div>
              {formData.date && formData.date.getDay() === 6 && (
                <p className="mt-1 text-sm text-seafoam">
                  Note: We have limited hours on Saturdays (10am-5pm).
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Select a Time *
              </label>
              <div className="relative">
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  disabled={!formData.date}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent appearance-none ${!formData.date ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option value="">
                    {formData.date
                      ? availableTimeSlots.length > 0
                        ? 'Select a Time'
                        : 'No times available'
                      : 'Please select a date first'}
                  </option>
                  {availableTimeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiClock className="text-gray-500" />
                </div>
              </div>
              {formData.date && availableTimeSlots.length === 0 && (
                <p className="mt-1 text-sm text-red-600">
                  We are closed on Sundays. Please select another day.
                </p>
              )}
            </div>
            
            <div className="pt-4">
              <button
                type="button"
                onClick={nextStep}
                disabled={!validateStep1()}
                className={`w-full bg-seafoam text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 ${
                  !validateStep1() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Personal Information */}
        {formStep === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
                    placeholder="First Name"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-500" />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
                  placeholder="Last Name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
                  placeholder="your.email@example.com"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-500" />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
                  placeholder="(123) 456-7890"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="text-gray-500" />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests or Notes
              </label>
              <div className="relative">
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seafoam focus:border-transparent"
                  placeholder="Any skin concerns or special requests?"
                ></textarea>
                <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                  <FiMessageSquare className="text-gray-500" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-white text-gray-700 border border-gray-300 py-2 px-6 rounded-md hover:bg-gray-50 transition duration-300"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!validateStep2()}
                className={`bg-seafoam text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300 ${
                  !validateStep2() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Review and Confirm */}
        {formStep === 3 && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Your Appointment</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium text-gray-800">
                    {services.find(s => s.id === formData.service)?.name || ''}
                  </span>
                </div>
                
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-800">
                    {services.find(s => s.id === formData.service)?.duration || ''}
                  </span>
                </div>
                
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium text-gray-800">
                    {services.find(s => s.id === formData.service)?.price || ''}
                  </span>
                </div>
                
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium text-gray-800">
                    {formData.date ? formData.date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }) : ''}
                  </span>
                </div>
                
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium text-gray-800">{formData.time}</span>
                </div>
                
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium text-gray-800">
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-800">{formData.email}</span>
                </div>
                
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium text-gray-800">{formData.phone}</span>
                </div>
                
                {formData.notes && (
                  <div className="pt-2">
                    <span className="text-gray-600 block mb-1">Special Requests/Notes:</span>
                    <span className="font-medium text-gray-800">{formData.notes}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              <p>
                By confirming this appointment, you agree to our <a href="#" className="text-seafoam hover:underline">cancellation policy</a>. A reminder will be sent to your email 24 hours before your appointment.
              </p>
            </div>
            
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-white text-gray-700 border border-gray-300 py-2 px-6 rounded-md hover:bg-gray-50 transition duration-300"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-seafoam text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Confirm Appointment'
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm; 