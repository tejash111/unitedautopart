"use client"
import React from 'react'

const RadiatorsPage = () => {
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
                        USED RADIATORS
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Radiators</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> offers reliable used radiators for all vehicle types. Each radiator undergoes pressure testing and thorough inspection to ensure optimal cooling performance.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Radiator Types</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Aluminum radiators</li>
                                <li>Copper/brass radiators</li>
                                <li>Single core radiators</li>
                                <li>Dual core radiators</li>
                                <li>Heavy-duty radiators</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Quality Testing</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Pressure testing</li>
                                <li>Flow rate verification</li>
                                <li>Core integrity check</li>
                                <li>Tank seam inspection</li>
                                <li>Mount point verification</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Performance Guarantee</h2>
                        <p>
                            Every radiator is pressure tested to ensure there are no leaks and the cooling capacity
                            meets manufacturer specifications. We check all mounting points, connections, and sensor
                            ports to guarantee proper fitment and function.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Need a Radiator?</h2>
                        <p>
                            Contact our cooling system specialists to find the right radiator for your vehicle.
                            We'll ensure you get the correct size and type for optimal cooling performance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RadiatorsPage
