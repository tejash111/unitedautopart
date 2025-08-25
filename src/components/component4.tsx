import React from 'react';

export default function Component4() {
  return (
    <div className="h-150 flex flex-col lg:flex-row ">
      {/* Content Side */}
      <div className="flex-1 bg-gradient-to-br rounded-2xl from-gray-700 via-gray-800 to-gray-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/2 left-20 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-16 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 right-40 w-20 h-20 border border-white/30 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-white/20 rounded-full animate-ping"></div>
        </div>

        {/* Quality Badge */}
        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm text-orange-600 px-6 py-3 rounded-full font-bold text-sm animate-pulse shadow-lg">
          ✓ Premium Quality Parts
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-wide">
              <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                BUY USED
              </span>
              <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                DRIVESHAFT REAR
              </span>
            </h1>
            
            <div className="text-white/95 text-lg leading-relaxed space-y-4">
              <p>
                Welcome to United Auto parts, your one-stop store for replacement top-notch{' '}
                <a href="#" className="text-yellow-200 underline hover:text-yellow-100 transition-colors font-medium">
                  used & remanufactured parts
                </a>{' '}
                and accessories. Located in United States, we are a trustworthy name for millions of customers across the US.
              </p>
              
              <p>
                Our goal is to provide suitable and high-quality used car body parts without burning a hole in the pocket. Whether it's an everyday item or a hard-to-find part, we work hand-in-hand with our customers to provide OEM-used auto parts.
              </p>
              
              <p className="font-medium">
                The dedication to quality and affordability makes us the preferred choice for United Auto parts.
              </p>
            </div>

            
          </div>
        </div>

        
      </div>

      {/* Image Side */}
      <div className="flex-1 relative bg-black min-h-96 lg:h-150">
        {/* Professional Mechanic Illustration */}
        <div className="h-full flex items-center justify-center p-8 bg-black">
          <div className="relative">
            {/* Main Mechanic Figure */}
            <div className="w-80 h-96 bg-gradient-to-b from-blue-900 to-blue-700 rounded-t-full relative overflow-hidden shadow-2xl">
              {/* Head */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-amber-100 rounded-full border-4 border-blue-800"></div>
              
              {/* Body/Uniform */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-white rounded-lg shadow-lg">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-blue-600 rounded"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Arms working */}
              <div className="absolute top-24 right-8 w-8 h-20 bg-amber-100 rounded-full transform rotate-45 origin-top"></div>
              <div className="absolute top-24 left-8 w-8 h-20 bg-amber-100 rounded-full transform -rotate-12 origin-top"></div>
            </div>

            {/* Car Part Being Worked On */}
            <div className="absolute -right-12 top-32 w-24 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow-xl">
              <div className="absolute top-2 left-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-2 right-2 w-6 h-2 bg-orange-400 rounded animate-pulse"></div>
            </div>

            {/* Tools */}
            <div className="absolute -left-8 top-40 space-y-2">
              <div className="w-12 h-2 bg-gray-700 rounded"></div>
              <div className="w-10 h-2 bg-gray-600 rounded"></div>
              <div className="w-8 h-2 bg-gray-500 rounded"></div>
            </div>

            {/* Workshop Background Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg transform scale-110"></div>
          </div>
        </div>

        {/* Professional Badge */}
        <div className="absolute bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
          Certified Mechanic
        </div>

        {/* Quality Indicators */}
        <div className="absolute top-8 left-8 space-y-3">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">Quality Tested</span>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">OEM Standard</span>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">Warranty</span>
            </div>
          </div>
        </div>

      
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-orange-500/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-blue-500/20 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        </div>
      </div>
    </div>
  );
}