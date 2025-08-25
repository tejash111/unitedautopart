// components/Component6.tsx
import Image from "next/image";

const Component6 = () => {
  return (
    <section className="w-full bg-black py-16  flex items-center ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12">
        
        {/* Left Image */}
        <div className="w-full flex justify-center">
          <Image
            src="/engine2.png" 
            alt="Car Engine"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-600 leading-tight mb-6">
            YOUR RELIABLE SOURCE FOR <br /> HASSLE-FREE AUTOMOTIVE PARTS
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Our <span className="font-semibold">relationship with the customers</span> 
            gives us the upper hand over other suppliers, as we understand 
            finding the genuine OEM part can be a hassle, but don’t worry; 
            we provide quality used auto parts.
          </p>
          <p className="text-gray-500 leading-relaxed mt-4">
            The team of United Auto parts is always round-the-clock to assist you, 
            with customer service whether you live closer to California or any corner 
            across the US. Our extensive network and connections in the automotive 
            industry enable us to provide those elusive parts that could be a cumbersome process.
          </p>
          <p className="text-gray-500 leading-relaxed mt-4">
            We believe that used car parts for sale online should never be compromised, 
            and your selection ensures you get the United Auto parts without compromising 
            the budget. We are your friendly figure in open complex window automotive care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Component6;
