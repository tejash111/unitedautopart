"use client"
import React from 'react'

const AlternatorsPage = () => {
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
                        USED ALTERNATORS
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Alternators</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> offers a wide selection of tested used alternators. Each unit is thoroughly inspected and tested to ensure proper charging system operation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Alternator Features</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Various amperage outputs</li>
                                <li>OEM specifications</li>
                                <li>Direct-fit replacements</li>
                                <li>Multiple pulley configurations</li>
                                <li>Built-in voltage regulators</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Testing Process</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Output voltage testing</li>
                                <li>Amperage output verification</li>
                                <li>Bearing inspection</li>
                                <li>Diode testing</li>
                                <li>Pulley and clutch check</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
                        <p>
                            Each alternator is bench tested to verify proper voltage output and charging capability.
                            Our testing process ensures reliable performance and proper integration with your vehicle's
                            electrical system.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Need an Alternator?</h2>
                        <p>
                            Contact our electrical specialists to find the right alternator for your vehicle.
                            We'll help you match the correct amperage output and mounting configuration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlternatorsPage
