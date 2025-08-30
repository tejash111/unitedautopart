"use client"
import React from 'react'

const SteeringColumnPage = () => {
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
                        USED STEERING COLUMNS
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Steering Columns</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> offers a comprehensive selection of quality used steering columns. Each unit is carefully inspected to ensure safety and proper functionality.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Available Types</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Manual tilt columns</li>
                                <li>Power tilt columns</li>
                                <li>Telescoping columns</li>
                                <li>Fixed columns</li>
                                <li>Sport and luxury variants</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Safety Features</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Collapsible design inspection</li>
                                <li>Lock mechanism testing</li>
                                <li>Electrical component check</li>
                                <li>Bearing assessment</li>
                                <li>Tilt/telescoping function verification</li>
                            </ul>
                        </div>
                    </div>

                    {/* Safety Information */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Safety Standards</h2>
                        <p>
                            All our steering columns undergo rigorous safety inspections to ensure they meet OEM specifications.
                            We pay special attention to the collapsible safety features and locking mechanisms that are crucial
                            for driver protection.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Looking for a Steering Column?</h2>
                        <p>
                            Our experts can help you find the exact steering column for your vehicle.
                            Contact us with your vehicle's make, model, and year for professional assistance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SteeringColumnPage
