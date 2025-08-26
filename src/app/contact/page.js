"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    'Used Engines',
    'Used Transmissions',
    'Transfer Cases',
    'Instrument Clusters',
    'Body Parts',
    'Electrical Components',
    'Other'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSelect = (service) => {
    setFormData({
      ...formData,
      service: service
    });
    setIsDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-300 py-16 px-4 sm:px-6 lg:px-8" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M20 20h60v60H20z\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'0.5\' opacity=\'0.1\'/%3E%3C/svg%3E")'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">CONTACT US</h1>
          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            NEEDS HELP? LET'S GET IN TOUCH
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-gray-900 rounded-lg p-8 text-white relative overflow-hidden">
              {/* Background car silhouette effect */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 right-0 w-96 h-48 bg-gradient-to-tl from-gray-700 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">GET IN TOUCH</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">OUR LOCATION</h4>
                      <p className="text-gray-300 leading-relaxed">
                        2320 Lower Wetumpka Rd, Montgomery, AL<br />
                        36110, United States.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">CONTACT US</h4>
                      <p className="text-gray-300">+12058582195</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">CONTACT EMAIL</h4>
                      <p className="text-gray-300">info@unitedautoparts.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                    required
                  />
                  
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-gray-100 text-left rounded-md focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all flex items-center justify-between"
                    >
                      <span className={formData.service ? 'text-gray-900' : 'text-gray-500'}>
                        {formData.service || 'Select Service'}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 mt-1">
                        {services.map((service, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleServiceSelect(service)}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all resize-none"
                  required
                ></textarea>

                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 uppercase tracking-wider"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;