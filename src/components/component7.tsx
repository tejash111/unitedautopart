"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function Component7() {
  return (
    <CardContainer className="inter-var  ">
      <CardBody  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]   rounded-xl p-6 border w-350 grid grid-cols-3 gap- items-center justify-center">
      <CardItem translateZ="20" className="text-gray-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 rounded-2xl w-100">
          <h1 className="font-semibold text-4xl mb-5">Comprehensive Parts Inventory</h1>

         <p> We maintain an extensive inventory of engine parts, including but not limited to pistons, crankshafts, camshafts, gaskets, valves, bearings, and more. Our wide selection ensures that you find the exact parts you need for various vehicle makes and models</p>
        </CardItem>
        <CardItem
          translateZ="50"
          className="  text-neutral-600 dark:text-white col-span-2"
        >
         We acknowledge the distinct requirements of various individuals and entities, including professional dealers, discerning customers, service stations, and weekend automobile enthusiasts. The United Auto parts offers a wide range of used engines, used transmissions, and other used auto parts, catering to make and models of vehicles, beyond geographical domains. Our distinguishing factor in the highly competitive automotive sector gives us a steadfast dedication to ensuring high-quality standards. Every auto part undergoes a comprehensive inspection and testing procedure, guaranteeing optimal performance, extended lifespan, and utmost customer contentment. Our approach's market excellence is further demonstrated by exclusive warranty, which lasts up to 5 years. This warranty is a physical manifestation of our unwavering belief in the quality and reliability of the items we provide. By selecting our company, customers simply don’t acquire a product component but investing in a commitment to excellence, dependability, and outstanding customer service.

Trust us to fuel your enthusiasm for automobiles and witness the transformative impact that our extensive knowledge and unwavering commitment can bring about.
        </CardItem>
        
        
      </CardBody>
    </CardContainer>
  );
}
