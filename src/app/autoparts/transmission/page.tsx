"use client"
import React from 'react'

const TransmissionPage = () => {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <div
                className="w-full h-[300px] relative flex items-center justify-center"
                style={{
                    backgroundImage: 'url(/engine2.png)', // Using another engine image from your public folder
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
                        USED TRANSMISSIONS
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Transmissions</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> offers reliable used transmissions for all major vehicle manufacturers. Each transmission is thoroughly tested to ensure smooth operation and longevity.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Available Transmission Types</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Automatic Transmissions</li>
                                <li>Manual Transmissions</li>
                                <li>CVT Transmissions</li>
                                <li>Dual-Clutch Transmissions</li>
                                <li>4x4 Transfer Cases</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Quality Features</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Dyno tested units</li>
                                <li>Low mileage options</li>
                                <li>Direct OEM replacements</li>
                                <li>Warranty coverage</li>
                                <li>Competitive pricing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Testing Process Section */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Our Testing Process</h2>
                        <p>
                            Each transmission undergoes comprehensive testing including pressure tests,
                            shift pattern verification, and fluid inspection. Our quality control process
                            ensures you receive a reliable transmission that meets or exceeds OEM specifications.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Find Your Transmission</h2>
                        <p>
                            Contact our transmission specialists with your vehicle details.
                            We'll help you find the perfect transmission match for your specific make and model.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransmissionPage
