"use client"

import React, { useState, useEffect } from 'react';

const CarBrandsSelector = () => {
    const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
    const [offset, setOffset] = useState(0);

    const carBrands = [
        {
            id: 1,
            name: 'Dodge',
            logo: (
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-2xl font-bold mb-2">
                        <span className="text-black">DODGE</span>
                        <span className="text-red-600 ml-1 text-3xl">⚡</span>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            name: 'Jaguar',
            logo: (
                <div className="flex flex-col items-center justify-center h-full">
                    <svg viewBox="0 0 100 40" className="w-24 h-10 text-gray-600 fill-current mb-2">
                        <path d="M85 25c-3-2-7-3-12-3-8 0-15 4-20 10-3 4-8 6-13 6-6 0-11-3-14-8-2-3-2-7 0-10 2-2 5-3 8-3 4 0 8 2 10 5l2-2c-3-4-8-6-12-6-5 0-9 2-12 6-3 4-3 9 0 13 4 6 11 10 18 10 7 0 13-3 17-8 4-5 10-8 17-8 3 0 6 1 8 2l1-3z" />
                        <circle cx="15" cy="15" r="2" />
                    </svg>
                    <div className="text-sm font-bold text-gray-700">JAGUAR</div>
                </div>
            )
        },
        {
            id: 3,
            name: 'Honda',
            logo: (
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-red-600 rounded-lg flex items-center justify-center bg-white">
                            <span className="text-red-600 font-bold text-xl">H</span>
                        </div>
                    </div>
                    <div className="text-red-600 font-bold text-sm">HONDA</div>
                </div>
            )
        },
        {
            id: 4,
            name: 'BMW',
            logo: (
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border-2 border-gray-400 relative overflow-hidden bg-white">
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white"></div>
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500"></div>
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500"></div>
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-gray-400"></div>
                        </div>
                    </div>
                    <div className="text-gray-700 font-bold text-sm">BMW</div>
                </div>
            )
        },
        {
            id: 5,
            name: 'Toyota',
            logo: (
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                        <div className="relative">
                            <div className="w-12 h-8 relative">
                                <div className="absolute top-2 left-2 w-8 h-4 border-2 border-red-600 rounded-full"></div>
                                <div className="absolute top-0 left-4 w-6 h-6 border-2 border-red-600 rounded-full"></div>
                                <div className="absolute top-1 left-1 w-10 h-6 border-2 border-red-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-red-600 font-bold text-sm">TOYOTA</div>
                </div>
            )
        },
        {
            id: 6,
            name: 'Ford',
            logo: (
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                        <div className="bg-blue-800 text-white px-4 py-2 rounded-lg">
                            <span className="font-bold text-lg italic">Ford</span>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        if (hoveredBrand !== null) return; // ⏸ pause when hovered

        const interval = setInterval(() => {
            setOffset(prev => (prev - 1) % (carBrands.length * 200)); // shift left continuously
        }, 20); // adjust speed (lower = faster)

        return () => clearInterval(interval);
    }, [hoveredBrand, carBrands.length]);

    return (
        <div className="w-full bg-black py-16 overflow-hidden relative">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-50 tracking-wide">
                    FIND USED AUTO PARTS BY BRAND
                </h2>
            </div>

            {/* Sliding Brand Container */}
            <div className="relative w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div
                        className="flex gap-6 transition-all duration-700 ease-in-out"
                        style={{
                            transform: `translateX(${offset}px)`,
                        }}
                    >
                        {carBrands.concat(carBrands).map((brand, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredBrand(brand.id)}
                                onMouseLeave={() => setHoveredBrand(null)}
                                className={`
                  flex-shrink-0 w-64 h-40  border dark:border-white/[0.2] bg-black rounded-xl
                  cursor-pointer transition-all duration-700 ease-in-out relative
                  ${hoveredBrand === brand.id
                                        ? 'transform scale-110 shadow-2xl border-orange-500 z-20'
                                        : hoveredBrand
                                            ? 'blur-sm opacity-60 scale-95'
                                            : 'hover:shadow-lg'
                                    }
                `}
                            >
                                <div className="relative h-full p-6 flex flex-col justify-center items-center">
                                    {brand.logo}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selection Info */}
            {hoveredBrand && (
                <div className="text-center mt-12 transition-all duration-500">
                    <div className="inline-block bg-black border-1  border-white/[0.2] rounded-full px-8 py-4 shadow-lg">
                        <span className="text-xl font-bold  text-gray-100">
                            Exploring {carBrands.find(brand => brand.id === hoveredBrand)?.name} Parts
                        </span>
                    </div>
                </div>
            )}

            
        </div>
    );
};

export default CarBrandsSelector;
