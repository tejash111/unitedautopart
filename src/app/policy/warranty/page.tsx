"use client"
import React from 'react'

const WarrantyPolicy = () => {
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
                <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
                        WARRANTY POLICY
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <span>Warranty Policy</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto parts</span> stands behind the quality of our used and remanufactured engines & transmissions. We provide comprehensive warranty coverage to ensure your peace of mind.
                    </p>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Standard Warranty Coverage</h2>
                        <ul className="space-y-2 pl-6 list-disc">
                            <li>30-day standard warranty on all parts unless otherwise specified</li>
                            <li>Coverage for mechanical failures and defects</li>
                            <li>Extended warranty options available on select products</li>
                            <li>Labor costs may be covered in specific circumstances</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Warranty Exclusions</h2>
                        <ul className="space-y-2 pl-6 list-disc">
                            <li>Damage from improper installation</li>
                            <li>Modification of original parts</li>
                            <li>Normal wear and tear</li>
                            <li>Damage from accidents or misuse</li>
                        </ul>
                    </div>

                    <p>
                        Our warranty is designed to give you confidence in your purchase while ensuring fair usage and proper installation of our products.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                    <h2 className="text-2xl font-bold mb-4">Need to Make a Warranty Claim?</h2>
                    <p>
                        Please contact our customer service department with your order number and a detailed description of the issue.
                        Our team will guide you through the warranty claim process and help resolve any concerns.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WarrantyPolicy
