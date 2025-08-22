import AnimatedSection from '@/components/framer/framer';
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import React from 'react'

const features = [
  {
    title: "High-Quality Selection",
    description: "At United Auto Parts, we provide quality used auto parts for all makes and models at affordable prices. We offer a vast range of used car parts for sale online that meet the original specifications. Just relax and shop with us."
  },
  {
    title: "Affordable Prices",
    description: "We know that automotive care is expensive. That’s why we operate diligently, providing affordable used car parts at low prices. All our used auto parts for sale are easy on your pocket."
  },
  {
    title: "Expert Advice",
    description: "Our staff members are not only experienced but also passionate about assisting with used car parts online."
  },
  {
    title: "Easy to Reach",
    description: "With our global headquarters in California, we provide United Auto Parts everywhere. Thanks to our efficient shipping network, no matter where you are, you will always receive the used car auto parts for sale online at your doorstep."
  },
  {
    title: "Sustainability Focus",
    description: "We actively support a more responsible and sustainable automobile sector by focusing on OEM used car parts online. We are committed to environmentally friendly methods and waste reduction because we value environmental stewardship."
  },
  {
    title: "Customer-Centric Approach",
    description: "Your satisfaction is our topmost priority. We offer a seamless and individualized experience, from browsing our catalog to completing a purchase and receiving after-sales service."
  },
  {
    title: "Reliability and Trust",
    description: "With millions of happy customers, United Auto Parts has made a name for itself in the automobile parts market as a company that can be trusted."
  },
  {
    title: "Uncompromising Quality",
    description: "We firmly believe that quality should never be compromised. Our affordable used car parts guarantee top-notch performance, ensuring your vehicle runs smoothly and reliably."
  }
];

const Home = () => {
  return (
    <div className='bg-black'>
      <div className='z-40 backdrop-blur-xl fixed w-full'>
        <Header />
      </div>

    <AnimatedSection>
      <div className='w-full h-screen relative bg-black '>

        <Image
          src={'/bg.jpg'}
          alt='bg'
          fill
          className='object-cover blur-sm absolute inset-0 z-0'
          placeholder='empty'
        />

        <div className="relative z-10 flex justify-center items-center h-full gap-20 ">
          <Image
            src={'/engine.png'}
            height={400}
            width={400}
            alt='engine'
            className='mr- '
          />
          <h1 className='text-5xl text-gray-200 '><div>
            United Auto parts BRINGS</div>
            <div>EXCLUSIVE USED &</div>
            <div>REMANUFACTURED AUTO PARTS FOR</div>
            <div className='text-gray-300'>YOUR CAR</div>
            <div>
              <p className='text-sm mb-5'>Unleash Peak Performance and Efficiency with The Affordable Used Car Parts..</p>
            </div>
            <div>
              <Image
                src={'/icon-ban.png'}
                height={300}
                width={300}
                alt='engine'
                className=''
              />
            </div>
            <div>
              <Image
                src={'/30day.png'}
                height={250}
                width={250}
                alt='engine'
              />
            </div>
          </h1>




        </div>
      </div>
      </AnimatedSection>
      <div className='bg-black h-30 flex items-center justify-between px-35 '>
        <div>
          <div className='text-white text-2xl uppercase'>
            Get Parts for your Car Today.
          </div>
          <div className='text-white'>
            All Items available
          </div>
        </div>
        <Button className='border-gray-400 text-white' variant={'outline'}>Call us to get 10% off</Button>
      </div>

    <AnimatedSection>
      <div className='flex justify-center bg-black '>
        <div>
          <div className='text-3xl text-center text-white uppercase mt-15 mb-5'>
          Why Choose Us?
        </div>
        <div className='text-gray-300'>At United Auto parts, we stand out as your preferred choice for automotive parts needs. The customer-centric approach sets us apart from other suppliers,</div>
        <p className='text-gray-300 text-center'>making your experience smooth and stress-free.</p>
        </div>

        

        
      </div>

       <div className=' grid grid-cols-4 mx-10 gap-5 mt-10'>
        
        {
          features.map((item)=>(
            <Card className='bg-[#111111] text-gray-300 border-none hover:bg-[#272729]'>
              <CardHeader>
                <CardTitle>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {item.description}
              </CardContent>

            </Card>
          ))
        }
      </div>
      </AnimatedSection>
    </div>
  )
}

export default Home
