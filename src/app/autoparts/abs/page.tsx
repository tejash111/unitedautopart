"use client"
import React from 'react'

const ABSModulePage = () => {
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
                        USED ABS MODULES
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used ABS Modules</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> offers reliable used ABS modules for all major vehicle brands. Each module is thoroughly tested to ensure proper functionality and safety.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Module Features</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Electronic Stability Control (ESC)</li>
                                <li>Traction Control Systems</li>
                                <li>Brake Force Distribution</li>
                                <li>Vehicle Stability Assist</li>
                                <li>Anti-lock Braking System</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Testing Process</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Diagnostic scanning</li>
                                <li>Circuit board inspection</li>
                                <li>Sensor communication check</li>
                                <li>Software verification</li>
                                <li>Compatibility testing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Information */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
                        <p>
                            Each ABS module undergoes comprehensive testing to ensure proper communication with vehicle sensors and reliable operation under all conditions. Our technicians verify proper functionality of all safety features before approval.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Need an ABS Module?</h2>
                        <p>
                            Contact our brake system specialists to find the right ABS module for your vehicle.
                            We ensure proper compatibility and programming for your specific make and model.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ABSModulePage
