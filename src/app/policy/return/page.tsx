"use client"
import React from 'react'

const ReturnPolicy = () => {
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
                        RETURN POLICY
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <span>Return Policy</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto parts</span> is a place where you can buy the perfect <span className="text-blue-500">Used and remanufactured engines & transmissions</span> for your vehicle.
                    </p>

                    <p>
                        We understand that sometimes you may need to return a product. Our policy allows authorized returns to be accepted for the majority of our products within 90 calendar days of the purchaser receiving the item.
                    </p>

                    <p>
                        We want to offer rapid and effective service, so to maintain our high standards:
                    </p>

                    <ul className="space-y-2 pl-6 list-disc">
                        <li>All returned items must be unopened and in their original packaging</li>
                        <li>Returns can be processed Monday to Friday between 9:00 AM to 6:00 PM</li>
                        <li>You must include all components from the initial delivery</li>
                        <li>Contact our customer service team with your order number to initiate the return</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                    <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                    <p>
                        If you have any questions about returns, please contact our customer service team.
                        We're here to help ensure your return process is as smooth as possible.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReturnPolicy
