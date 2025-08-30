"use client"
import React from 'react'

const AxlePage = () => {
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
                        USED AXLES
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Axles</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> offers reliable used axles for all vehicle types. Each axle assembly is thoroughly inspected and tested to ensure proper operation and durability.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Available Types</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Front axle assemblies</li>
                                <li>Rear axle assemblies</li>
                                <li>CV axles</li>
                                <li>Drive axles</li>
                                <li>Differential assemblies</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Quality Checks</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Bearing inspection</li>
                                <li>CV joint testing</li>
                                <li>Spline verification</li>
                                <li>Boot condition check</li>
                                <li>Shaft straightness test</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Information */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Testing Process</h2>
                        <p>
                            Each axle undergoes thorough inspection of all components including CV joints,
                            bearings, and seals. We verify proper spline count and ensure all mounting points
                            are in excellent condition for trouble-free installation.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Need an Axle?</h2>
                        <p>
                            Contact our drivetrain specialists to find the right axle for your vehicle.
                            We'll ensure proper fitment and compatibility with your specific model.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AxlePage
