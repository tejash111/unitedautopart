"use client"
import React from 'react'

const TurboPage = () => {
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
                        USED TURBOCHARGERS
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <a href="/autoparts" className="hover:text-white">Auto Parts</a>
                        <span>/</span>
                        <span>Used Turbochargers</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto Parts</span> provides quality used turbochargers for both gasoline and diesel engines. Each turbo undergoes comprehensive testing to ensure optimal boost performance and reliability.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Turbocharger Types</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Fixed geometry turbos</li>
                                <li>Variable geometry turbos</li>
                                <li>Twin-scroll turbos</li>
                                <li>Twin-turbo systems</li>
                                <li>Diesel turbochargers</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Quality Testing</h2>
                            <ul className="space-y-2 pl-6 list-disc">
                                <li>Shaft play inspection</li>
                                <li>Compressor wheel balance</li>
                                <li>Wastegate testing</li>
                                <li>VGT mechanism check</li>
                                <li>Housing inspection</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Information */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Performance Verification</h2>
                        <p>
                            Each turbocharger undergoes thorough testing to ensure proper boost control,
                            wastegate function, and VGT operation where applicable. We verify bearing clearances
                            and shaft balance to guarantee reliable performance.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">Find Your Turbocharger</h2>
                        <p>
                            Contact our turbocharger specialists to find the right unit for your vehicle.
                            We'll help match the correct specifications and ensure compatibility with your engine.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TurboPage
