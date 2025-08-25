'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const paymentMethods = [
    { name: 'MasterCard', color: 'bg-red-600' },
    { name: 'Venmo', color: 'bg-blue-500' },
    { name: 'American Express', color: 'bg-blue-700' },
    { name: 'Discover', color: 'bg-orange-600' },
    { name: 'Zelle', color: 'bg-purple-600' },
    { name: 'Visa', color: 'bg-blue-800' },
    { name: 'Google Pay', color: 'bg-gray-700' },
  ];

  const shippingPartners = [
    { name: 'FedEx', logo: '/fedex-logo.png' },
    { name: 'UPS', logo: '/ups-logo.png' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="bg-white rounded-lg p-4 mb-6 w-fit">
              <div className="flex flex-col items-center">
                <div className="border-2  rounded p-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <div className="w-6 h-4 bg-white rounded"></div>
                    </div>
                    <div className="text-gray-800 font-bold text-sm">CAR</div>
                  </div>
                </div>
                <div className="text-gray-500 font-bold text-lg tracking-wider">UNITED</div>
                <div className="text-gray-600 text-sm">AUTO PARTS</div>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Welcome to United Auto parts, your one-stop store for replacement high-quality used OEM automotive parts and accessories.
            </p>

            <div className="space-y-3">
              <div className="text-gray-300">Support center 24/7</div>
              <div className="text-gray-400 text-xl font-bold">
                +12059592195
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-8 text-gray-500">ABOUT US</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-8 text-gray-400">CONTACT US</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  ADDRESS
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  2320 LOWER WETUMPKA RD,<br />
                  MONTGOMERY, AL 36110, UNITED STATES.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-400" />
                  PHONE NUMBER
                </h4>
                <p className="text-gray-300">+12059592195</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-400" />
                  EMAIL ID
                </h4>
                <p className="text-gray-300">INFO@UNITEDAUTOPART.COM</p>
              </div>
            </div>
          </div>

          {/* Payment & Shipping Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-8 text-gray-400">WE ACCEPT</h3>
            
            {/* Payment Methods */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-red-600 text-white text-xs font-bold px-3 py-2 rounded text-center">
                MasterCard
              </div>
              <div className="bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded text-center">
                venmo
              </div>
              <div className="bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded text-center">
                AMERICAN<br/>EXPRESS
              </div>
              <div className="bg-orange-600 text-white text-xs font-bold px-3 py-2 rounded text-center">
                Discover
              </div>
              <div className="bg-purple-600 text-white text-xs font-bold px-3 py-2 rounded text-center">
                Zelle
              </div>
              <div className="bg-blue-800 text-white text-xs font-bold px-3 py-2 rounded text-center">
                VISA
              </div>
              <div className="bg-gray-700 text-white text-xs font-bold px-3 py-2 rounded text-center col-span-1">
                G Pay
              </div>
            </div>

            {/* Shipping Partners */}
            <h4 className="text-lg font-bold mb-4 text-gray-400">SHIPPING PARTNERS</h4>
            <div className="flex gap-4">
              <div className="bg-white px-4 py-2 rounded flex items-center">
                <span className="text-purple-600 font-bold text-sm">Fed</span>
                <span className="text-orange-500 font-bold text-sm">Ex</span>
              </div>
              <div className="bg-yellow-600 px-4 py-2 rounded flex items-center">
                <span className="text-white font-bold text-sm">ups</span>
                <span className="text-white text-xs ml-1">WE ❤ LOGISTICS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center text-gray-400 text-sm">
            © 2024 United Auto Parts. All rights reserved.
          </div>
        </div>
      </div>

      {/* Floating Phone Button */}
      <div className="fixed bottom-6 left-6">
        <a
          href="tel:+12059592195"
          className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-600 transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-8 h-8 text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;