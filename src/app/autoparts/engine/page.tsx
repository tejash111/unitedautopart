"use client"
import React from 'react'

const EnginePage = () => {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <div
                className="w-full h-[300px] relative flex items-center justify-center"
                style={{
                    backgroundImage: 'url(/engine.png)', // Using the engine image from your public folder
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
                        USED ENGINES
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Engines</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        At <span className="text-blue-500">United Auto Parts</span>, we offer a wide selection of quality used engines for all major vehicle makes and models. Our engines are carefully inspected and tested to ensure reliable performance.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Why Choose Our Used Engines?</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Thoroughly tested and inspected</li>
                                <li>Competitive pricing</li>
                                <li>90-day warranty coverage</li>
                                <li>Wide variety of makes and models</li>
                                <li>Professional technical support</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Engine Specifications</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Complete engine assemblies</li>
                                <li>Various engine sizes available</li>
                                <li>Gasoline and diesel options</li>
                                <li>Low mileage units</li>
                                <li>OEM quality parts</li>
                            </ul>
                        </div>
                    </div>

                    {/* Quality Assurance Section */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Our Quality Assurance</h2>
                        <p>
                            Every engine undergoes a rigorous inspection process before being made available for sale.
                            This includes compression testing, oil pressure verification, and thorough cleaning.
                            We stand behind our products with our comprehensive warranty program.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Engine?</h2>
                        <p>
                            Our team of experts is here to help you find the perfect engine for your vehicle.
                            Contact us with your vehicle make, model, and year for personalized assistance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnginePage
