// 'use client';
// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
 
// } from "@/components/ui/carousel";

// import {Menu} from "@/app/components/Menu"
// import {PricingPlans} from "@/app/components/PricingPlans"
// import {BlogSection} from "@/app/components/Blogsection"
// import {InstagramSection} from "@/app/components/InstagramSection"

// export default function Hero() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );

//   const images = [
//     "/home-banner1.jpg",
//     "/home-banner2.jpg",
//     "/home-banner3.jpg",
//   ];

//   return (
//     <section
//       className=" flex flex-col justify-center items-center w-full min-h-[85vh] bg-gray-100"
//     >
//       {/* Carousel */}
//       <div className="carousel-container w-full max-w-screen-2xl overflow-hidden bg-cover bg-no-repeat">
//         <Carousel
//           plugins={[plugin.current]}
//           className="w-full "
//           onMouseEnter={plugin.current.stop}
//           onMouseLeave={plugin.current.reset}
//         >
//           <CarouselContent className="flex">
//             {images.map((image, index) => (
//               <CarouselItem key={index} className="w-full">
//                 <Card>
//                   <CardContent className="relative   h-[88vh] flex items-center justify-center">
//                     <Image
//                       src={image}
//                       alt={`Slide ${index + 1}`}
//                       layout="fill"
//                       className="object-cover "
//                     />
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div >
//       <h className="text-3xl ml-50 mr-50 mb-6 mt-10 font-mono">How it Works</h>
//       <div className="m-10">
        
//         <div className="container mx-auto flex justify-between items-center h-200  ">
          
//             <div className="container grid items-center m-10">
//                 <Image src={"/1.png"} alt="logo" width={100} height={100} className=" rounded-full"/>
//                 <h className="font-bold">Choose Your Favourite Meal</h>
//                 <p>Choose your favorite meals and order online or by phone. It's easy to customize your order</p>
//             </div>
//             <div className="container grid-flow-row m-10">
//                 <Image src={"/2.png"} alt="logo" width={150} height={150} className=" rounded-full"/>
//                 <h className="font-bold">We deliever our meals</h>
//                 <p>We prepared and delivered meals arrive at your door. Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
//             </div>
//             <div className="container grid-flow-row m-10">
//                 <Image src={"/3.png"} alt="logo" width={150} height={150} className=" rounded-full"/>
//                 <h className="font-bold">Eat and Enjoy!</h>
//                 <p>No shooping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.</p>
//             </div>
//         </div>
        

//       </div>

//       <Menu />
     
//       <PricingPlans />     
//        <BlogSection />     
//       <InstagramSection />      


//     </section>

    
//   );
// }


'use client';

import * as React from "react";

import Image from "next/image";


import { Menu } from "@/app/components/Menu";
import { PricingPlans } from "@/app/components/PricingPlans";
import { BlogSection } from "@/app/components/Blogsection";
import { InstagramSection } from "@/app/components/InstagramSection";

export default function Hero() {


  return (
    <section className="flex flex-col justify-center items-center w-full">
      
      <div
        className="relative w-full h-[88vh] bg-gray-100 overflow-hidden flex items-center"
        style={{
          backgroundImage: `url('/home-banner1.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            Healthy Inside, Fresh <span className="text-green-500">Outside.</span>
          </h1>
          <p className="text-lg mb-8">
            We deliver healthy food that is ready to eat. Just choose your own
            menu you like.
          </p>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg font-semibold transition duration-200">
            Learn More
          </button>
        </div>
      </div>

      
      <h className="text-3xl font-mono mt-10 mb-6">How it Works</h>
      <div className="m-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="container grid items-center m-10">
            <Image
              src={"/1.png"}
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <h className="font-bold">Choose Your Favourite Meal</h>
            <p>
              Choose your favorite meals and order online or by phone. It's easy
              to customize your order.
            </p>
          </div>
          <div className="container grid items-center m-10">
            <Image
              src={"/2.png"}
              alt="logo"
              width={150}
              height={150}
              className="rounded-full"
            />
            <h className="font-bold">We Deliver Our Meals</h>
            <p>
              Prepared and delivered meals arrive at your door. Duis autem vel
              eum iriure dolor in hendrerit in vulputate.
            </p>
          </div>
          <div className="container grid items-center m-10">
            <Image
              src={"/3.png"}
              alt="logo"
              width={150}
              height={150}
              className="rounded-full"
            />
            <h className="font-bold">Eat and Enjoy!</h>
            <p>
              No shopping, no cooking, no counting, and no cleaning. Enjoy your
              healthy meals with your family.
            </p>
          </div>
        </div>
      </div>

      
      <Menu />
      <PricingPlans />
      <BlogSection />
      <InstagramSection />
    </section>
  );
}

