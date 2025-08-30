"use client"
import React from 'react'

const TransferCasePage = () => {
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
                        USED TRANSFER CASES
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Transfer Cases</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> specializes in quality used transfer cases for 4x4 and AWD vehicles. Our transfer cases are thoroughly tested to ensure optimal performance and reliability.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Transfer Case Features</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Electronic and manual shift options</li>
                                <li>Compatible with major vehicle brands</li>
                                <li>Full-time and part-time 4WD systems</li>
                                <li>Chain-driven and gear-driven units</li>
                                <li>Various gear ratios available</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Quality Assurance</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Leak tested</li>
                                <li>Gear inspection</li>
                                <li>Chain and bearing check</li>
                                <li>Electronic testing (where applicable)</li>
                                <li>Warranty backed</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
                        <p>
                            Our transfer cases are compatible with a wide range of vehicles including trucks, SUVs, and crossovers.
                            Each unit is cleaned, inspected, and tested to ensure proper operation of both high and low range functions.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Need a Transfer Case?</h2>
                        <p>
                            Contact our 4x4 specialists to find the right transfer case for your vehicle.
                            We'll help you identify the correct part number and ensure compatibility with your specific model.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferCasePage
