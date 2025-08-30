"use client"
import React from 'react'

const CancelPolicy = () => {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <div
                className="w-full h-[300px]  relative flex items-center justify-center"
                style={{
                    backgroundImage: 'url(/bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
                        CANCELLATION POLICY
                    </h1>
                    <div className="flex items-center gap-2 justify-center mt-4 text-gray-300">
                        <a href="/" className="hover:text-white">Home</a>
                        <span>/</span>
                        <span>Cancellation Policy</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
                <div className="space-y-6">
                    <p>
                        <span className="text-blue-500">United Auto parts</span> is a place where you can buy the perfect <span className="text-blue-500">Used and remanufactured engines & transmissions</span> for your vehicle. We are aware of the irregular nature of the situation and the possibility that you could need to cancel an order on occasion.
                    </p>

                    <p>
                        Don't worry, we've got you covered! You have the right to cancel your order at any moment before obtaining our official confirmation.
                    </p>

                    <p>
                        We want to offer rapid and effective service, so orders cannot be canceled once they have been verified and processed for shipping. This is due to the speed with which we work to ensure that you receive your car parts.
                    </p>

                    <p>
                        You can process your cancellation request on weekdays that is Monday to Friday between 9:00 AM to 6:00 PM. By doing this, we can reduce wait times and ensure that your things will be despatched quickly and delivered on schedule.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                    <h2 className="text-2xl font-bold mb-4">Need to Cancel Your Order?</h2>
                    <p>
                        Contact our customer service team immediately with your order number.
                        The sooner you request a cancellation, the more likely we can process it before shipping.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CancelPolicy
