"use client"
import React from 'react'

const AirbagPage = () => {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <div
                className="w-full h-[300px] relative flex items-center justify-center"
                style={{
                    backgroundImage: 'url(/bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
                        USED CAR AIRBAGS
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Car Airbags</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> provides thoroughly tested and certified used airbag systems. Safety is our top priority, and all our airbag components undergo strict quality control.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Available Components</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Driver airbag modules</li>
                                <li>Passenger airbag modules</li>
                                <li>Side airbag modules</li>
                                <li>Curtain airbags</li>
                                <li>Airbag control modules</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Safety Certification</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>OEM specification compliance</li>
                                <li>Electronic diagnostic testing</li>
                                <li>Physical inspection</li>
                                <li>Deployment system verification</li>
                                <li>Clock spring testing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Safety Notice */}
                    <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-800">
                        <h2 className="text-2xl font-bold mb-4">Important Safety Information</h2>
                        <p>
                            Airbag installation should only be performed by certified technicians.
                            All our airbag modules are guaranteed to be free from recalls and meet all safety requirements.
                            Professional installation is required to ensure proper functionality and safety compliance.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Need Airbag Components?</h2>
                        <p>
                            Contact our safety specialists to ensure you get the correct airbag components for your vehicle.
                            We'll help verify compatibility and provide necessary documentation for your peace of mind.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirbagPage
