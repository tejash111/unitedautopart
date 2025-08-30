"use client"
import React from 'react'

const BumpersPage = () => {
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
                        USED BUMPERS
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Bumpers</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> provides quality used bumpers for all major vehicle makes and models. Each bumper is carefully inspected for structural integrity and cosmetic condition.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Available Types</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Front bumpers</li>
                                <li>Rear bumpers</li>
                                <li>Chrome bumpers</li>
                                <li>Painted bumpers</li>
                                <li>Sport package bumpers</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Quality Features</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Structural integrity check</li>
                                <li>Mounting points verification</li>
                                <li>Sensor compatibility</li>
                                <li>Paint condition assessment</li>
                                <li>Impact resistance testing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Bumper Components</h2>
                        <p>
                            Our bumpers come complete with all necessary mounting brackets and hardware.
                            For bumpers with integrated technology (parking sensors, cameras, etc.),
                            we ensure all electronic components are tested and functional.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Find Your Bumper</h2>
                        <p>
                            Contact our body parts specialists to find the perfect match for your vehicle.
                            We can help with color matching and ensure proper fitment for your specific model.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BumpersPage
