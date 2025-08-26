import React from 'react';
import { Wrench, Clock, Shield, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';


const items = [
    { number: "01", name: "Used Engine" , description : "A used engine that has been expertly repaired and inspected can give an automobile new life. Without investing in a new engine, it provides a cost-effective way to keep your automobile running efficiently. Your car will continue to be a reliable method of transportation thanks to quality assurance's reliability and performance." ,
        img : "https://www.unitedautopart.com/assets/images/new1.jpg"
     },
    { number: "02", name: "Used Transmission" , description : "A Used transmission can provide the same functionality at a lower cost. The transmission is essential to a vehicle's operation. When properly maintained and serviced, it guarantees effortless gear changes and maximum driving effectiveness." ,
        img : "https://www.unitedautopart.com/assets/images/new2.jpg"
     },
    { number: "03", name: "Used Transfer Case"  , description : "A used transfer case is an affordable option for transmitting power between axles and is essential in four-wheel-drive systems. When professionally examined and restored, it can offer the same reliability as a new one, ensuring excellent vehicle performance on various terrains." ,
        img : "https://www.unitedautopart.com/assets/images/new5.jpg"
    },
    { number: "04", name: "Used Instrument Cluster"  , description : "The used instrument cluster combines affordability and functionality to display critical vehicle data. When meticulously restored, it gives accurate readings like a new one, maintaining the dashboard's look." ,
        img : "	https://www.unitedautopart.com/assets/images/new6.jpg"
     },
    { number: "05",name: "Used Steering Column" , description : "A used steering column can reasonably restore the critical function of steering responsiveness, which is essential. It ensures precise control without compromising performance or safety because it has been carefully examined and fitted.",
        img : "https://www.unitedautopart.com/assets/images/new7.jpg"
     },
    { number: "06", name: "Used Drive Shaft" , description : "A used drive shaft exhibits comparable performance to a brand-new counterpart in its ability to transmit torque and rotation efficiently. The smooth connection between different components of a vehicle guarantees mechanical integrity." ,
        img : "https://www.unitedautopart.com/assets/images/new8.jpg"
     },
    { number: "07", name: "Used Airbag" , description : "The utilization of a used airbag is vital for ensuring safety, as it has the potential to function at an equivalent level of efficacy as a newly manufactured counterpart, provided that it undergoes a thorough inspection.",
        img : "https://www.unitedautopart.com/assets/images/new9.jpg"
     },
    { number: "08", name: "Used ABS Module" , description : "" ,
        img : "https://www.unitedautopart.com/assets/images/new4.jpg"
    }
  ]



const AboutUs = () => {
  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <div className="text-center my-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">ABOUT US</h2>
          <div className=" mt-5 text-gray-100 text-center">
            <p><Link href={'/'} className='hover:text-gray-600'>Home</Link>/aboutus</p>
           
          </div>
          <div className='text-gray-600 text-center mt-8'>
            We are pleased to welcome you to United Auto parts, where we are committed to offering you the best used auto parts for all of your vehicles, including automobiles, vans, and sports utility vehicles. You can rely on us to give you the most value for your money thanks to our unrivaled warranty and pricing.
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose United Auto Parts?</h3>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Convenient Hours</h4>
                <p className="text-gray-700">Our convenient hours of operation demonstrate our dedication to your happiness. We are available to help you Monday through Friday and our website is open around-the-clock for your convenience.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-700">We are confident that you will find what you need thanks to our vast online catalog, which features thousands of parts. All parts are thoroughly inspected and expertly sourced.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <DollarSign className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost-Effective Solutions</h4>
                <p className="text-gray-700">At United Auto parts, we are aware that buying a car is an expensive investment and that maintaining your car, truck, or SUV can be just as expensive. We offer a lot of auto parts available at competitive prices.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Wrench className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Expert Service</h4>
              <p className="text-gray-700">
                Shop with us today and let us help you keep your car running smoothly and effectively! Our team is dedicated to helping you find the right parts for your specific vehicle needs.
              </p>
            </div>
          </div>
        </div>

        {/* Parts Categories Preview */}
        <div className='grid grid-cols-4 '>
              {items.map((item, index) => (
                 <CardContainer key={index} className="inter-var  flex  ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-90 h-110 rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         {item.name}
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4 hover:blur-sm relative" >
            
          <img
            src={item.img}
            height="1000"
            width="1000"
            className="h-60 relative w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          <span className='text-gray-800 absolute'>{item.description}</span>
          
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {item.number}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
              ))}
              </div>
            </div>
      </div>
  );
};

export default AboutUs;