import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Image from 'next/image';

const products = [
  {
    img : "/engine.png",
    status: "IN STOCK",
    category: "Engine [car]",
    title: "2011 AUDI A4 ENGINE",
    stockId: 2687,
    mileage: "129K",
    button: "Call Us Now"
  },
  {
    img : "/engine.png",
    status: "IN STOCK",
    category: "Engine [car]",
    title: "2008 BMW 128I ENGINE",
    stockId: 3456,
    mileage: "81K",
    button: "Call Us Now"
  },
  {
    img : "/engine.png",
    status: "IN STOCK",
    category: "Transmission",
    title: "1971 BUICK TRANSMISSION",
    stockId: 3424,
    mileage: "81K",
    button: "Call Us Now"
  },
  {
    img : "/engine.png",
    status: "IN STOCK",
    category: "Airbag",
    title: "2009 BMW AIRBAG",
    stockId: 445,
    mileage: "81K",
    button: "Call Us Now"
  }
];


const Component5 = () => {
  return (
    <div className='flex  items-center justify-center gap-8  '>
      {products.map((product, index) => (
        <CardContainer  key={index} className="inter-var items-center justify-center">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:border-white/[0.2] border-black/[0.1] w-80 h-80 rounded-xl p-6 border items-center ">
            
            {/* Status Badge */}
            <CardItem
              translateZ="20"
              className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full mb-3 w-fit"
            >
              {product.status}
            </CardItem>

            {/* Category Icon */}
            <CardItem
              translateZ="50"
              className="text-4xl font-bold text-neutral-600 dark:text-white flex justify-center items-center mb-2"
            >
              <Image src={product.img} height={80} width={80}  alt='engine'/>
            </CardItem>

            {/* Product Title */}
            <CardItem
              as="h3"
              translateZ="60"
              className="text-xl font-bold text-neutral-600 dark:text-white text-center"
            >
              {product.title}
            </CardItem>

            {/* Category */}
            <CardItem 
              translateZ="40" 
              className="text-neutral-500 text-sm text-center mt-1 dark:text-neutral-300"
            >
              {product.category}
            </CardItem>

            {/* Stock ID and Mileage */}
            <CardItem 
              translateZ="100" 
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 space-y-1"
            >
              <div className="flex justify-between items-center">
                <span>Stock ID:</span>
                <span className="font-semibold">#{product.stockId}</span>
              </div>
              {product.mileage && (
                <div className="flex justify-between items-center">
                  <span>Mileage:</span>
                  <span className="font-semibold">{product.mileage}</span>
                </div>
              )}
            </CardItem>

            {/* Call to Action Button */}
            <CardItem
              translateZ="120"
              className="mt-4 w-full"
            >
              <button className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 border  border-black/[0.1] dark:border-white/[0.2]">
                {product.button}
              </button>
            </CardItem>

          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default Component5;
