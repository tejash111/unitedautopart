import AnimatedSection from '@/components/framer/framer';
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BadgePercent, BatteryCharging, Handshake, Leaf, MapPinHouse, PersonStanding, ShieldCheck, User, Wrench } from 'lucide-react';
import Component4 from '@/components/component4';
import Component5 from '@/components/component5';
import CarBrandsSelector from '@/components/carBrands';
import Component6 from '@/components/component6';
import { Component7 } from '@/components/component7';
import CustomerReviews from '@/components/customerReviews';
import Footer from '@/components/footer';

const features = [
  {
    logo: <Wrench size={40} />,
    title: "High-Quality Selection",
    description: "At United Auto Parts, we provide quality used auto parts for all makes and models at affordable prices. We offer a vast range of used car parts for sale online that meet the original specifications. Just relax and shop with us."
  },
  {
    logo: <BadgePercent size={40} />,
    title: "Affordable Prices",
    description: "We know that automotive care is expensive. That’s why we operate diligently, providing affordable used car parts at low prices. All our used auto parts for sale are easy on your pocket."
  },
  {
    logo: <User size={40} />,
    title: "Expert Advice",
    description: "Our staff members are not only experienced but also passionate about assisting with used car parts online."
  },
  {
    logo: <MapPinHouse size={40} />,
    title: "Easy to Reach",
    description: "With our global headquarters in California, we provide United Auto Parts everywhere. Thanks to our efficient shipping network, no matter where you are, you will always receive the used car auto parts for sale online at your doorstep."
  },
  {
    logo: <Leaf size={40} />,
    title: "Sustainability Focus",
    description: "We actively support a more responsible and sustainable automobile sector by focusing on OEM used car parts online. We are committed to environmentally friendly methods and waste reduction because we value environmental stewardship."
  },
  {
    logo: <PersonStanding size={40} />,
    title: "Customer-Centric Approach",
    description: "Your satisfaction is our topmost priority. We offer a seamless and individualized experience, from browsing our catalog to completing a purchase and receiving after-sales service."
  },
  {
    logo: <Handshake size={40} />,
    title: "Reliability and Trust",
    description: "With millions of happy customers, United Auto Parts has made a name for itself in the automobile parts market as a company that can be trusted."
  },
  {
    logo: <ShieldCheck size={40} />,
    title: "Uncompromising Quality",
    description: "We firmly believe that quality should never be compromised. Our affordable used car parts guarantee top-notch performance, ensuring your vehicle runs smoothly and reliably."
  }
];

const Home = () => {
  return (
    <div className='bg-black'>


      <AnimatedSection>
        <div className='w-full min-h-screen relative bg-black pt-16'>

          <Image
            src={'/bg.jpg'}
            alt='bg'
            fill
            className='object-cover blur-sm absolute inset-0 z-0'
            placeholder='empty'
          />

          <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center h-full gap-8 lg:gap-20 px-4 lg:px-8">
            <div className="order-2 lg:order-1 perspective-1000">
              <Image
                src={'/engine.png'}
                height={300}
                width={300}
                alt='engine'
                className='transform-gpu 
        hover:scale-110 duration-500 ease-in-out cursor-pointer
                   rotateX-[12deg] rotateY-[20deg] rotateZ-[2deg] scale-105
                   drop-shadow-[25px_35px_45px_rgba(0,0,0,0.4)]
                   filter brightness-112 contrast-110 saturate-105
                   w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'
              />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className='text-2xl sm:text-3xl lg:text-5xl text-gray-400 mt-3 space-y-2'>
                <div>United Auto parts BRINGS</div>
                <div>EXCLUSIVE USED &</div>
                <div>REMANUFACTURED AUTO PARTS FOR</div>
                <div className='text-gradient-to-br from-gray-900 via-black to-gray-800'>YOUR CAR</div>
                <div>
                  <p className='text-xs sm:text-sm mb-5 max-w-md mx-auto lg:mx-0'>Unleash Peak Performance and Efficiency with The Affordable Used Car Parts..</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Image
                    src={'/icon-ban.png'}
                    height={200}
                    width={200}
                    alt='engine'
                    className='w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]'
                  />
                  <Image
                    src={'/30day.png'}
                    height={150}
                    width={150}
                    alt='engine'
                    className='w-[120px] h-[120px] lg:w-[250px] lg:h-[250px]'
                  />
                </div>
              </h1>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <div className='bg-gradient-to-br from-gray-900 via-black to-gray-900 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 gap-4'>
        <div className="text-center lg:text-left">
          <div className='text-white text-lg lg:text-2xl uppercase'>
            Get Parts for your Car Today.
          </div>
          <div className='text-white text-sm lg:text-base'>
            All Items available
          </div>
        </div>
        <Button className='border-gray-400 text-white w-full lg:w-auto' variant={'outline'}>Call us to get 10% off</Button>
      </div>

      <AnimatedSection>
        <div className='flex justify-center px-4'>
          <div className='max-w-4xl text-center'>
            <div className='text-2xl lg:text-3xl text-center text-white uppercase mt-8 lg:mt-15 mb-5'>
              Why Choose Us?
            </div>
            <div className='text-gray-300 mb-2 text-sm lg:text-base'>
              At United Auto parts, we stand out as your preferred choice for automotive parts needs. The customer-centric approach sets us apart from other suppliers,
            </div>
            <p className='text-gray-300 text-center text-sm lg:text-base'>
              making your experience smooth and stress-free.
            </p>
          </div>
        </div>

        {/* Fixed Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 lg:mx-10 gap-4 lg:gap-6 mt-8'>
          {features.map((item, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:border-white/[0.2] border-black/[0.1] w-full h-full min-h-[280px] rounded-xl p-4 lg:p-6 border flex flex-col">

                {/* Icon */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white flex justify-center items-center mb-4"
                >
                  {item.logo}
                </CardItem>

                {/* Title */}
                <CardItem
                  as="h3"
                  translateZ="60"
                  className="text-lg lg:text-xl font-bold text-neutral-600 dark:text-white text-center mb-3"
                >
                  {item.title}
                </CardItem>

                {/* Description - flex-1 to fill remaining space */}
                <CardItem
                  translateZ="100"
                  className="text-neutral-500 text-xs lg:text-sm dark:text-neutral-300 text-center flex-1 flex items-start"
                >
                  {item.description}
                </CardItem>

              </CardBody>
            </CardContainer>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Component4 />
      </AnimatedSection>

      <AnimatedSection>
        <Component5 />
      </AnimatedSection>

      <AnimatedSection>
        <CarBrandsSelector />
      </AnimatedSection>

      {/* <AnimatedSection>
      <Component6/>
      </AnimatedSection> */}
      <AnimatedSection>
        <Component7 />
      </AnimatedSection>
      <AnimatedSection>
        <CustomerReviews />
      </AnimatedSection>

    </div>
  )
}

export default Home
