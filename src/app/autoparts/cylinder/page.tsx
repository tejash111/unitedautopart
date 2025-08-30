"use client"
import React from 'react'

const CylinderHeadPage = () => {
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
                        USED CYLINDER HEADS
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Cylinder Heads</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> provides quality used cylinder heads for all major vehicle manufacturers. Each cylinder head is thoroughly inspected and pressure tested to ensure optimal performance.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Available Types</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>DOHC (Dual Overhead Cam)</li>
                                <li>SOHC (Single Overhead Cam)</li>
                                <li>V6 & V8 Configurations</li>
                                <li>Inline 4 & 6 Cylinder</li>
                                <li>Diesel Engine Heads</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Quality Checks</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Pressure testing</li>
                                <li>Crack inspection</li>
                                <li>Valve seat examination</li>
                                <li>Surface flatness check</li>
                                <li>Camshaft journal inspection</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Information */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Testing Process</h2>
                        <p>
                            Each cylinder head undergoes a comprehensive inspection process including pressure testing,
                            valve spring compression testing, and surface flatness verification. Our quality control ensures
                            you receive a reliable component ready for installation.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Find Your Cylinder Head</h2>
                        <p>
                            Contact our engine specialists to find the right cylinder head for your vehicle.
                            We'll help you identify the correct specifications and ensure compatibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CylinderHeadPage
