
// 'use client';

// import * as React from "react";
// import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function Menu() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );

//   const images = [
//     "/menu1.jpg",
//     "/menu2.jpg",
//     "/menu3.jpg",
//     "/menu4.jpg",
//     "/menu5.jpg",
//     "/menu6.jpg",
//   ];
//   const head = [
//     "Grilled Roast Vegetable",
//     "Grilled Salmon",
//     "Salad with Chicken",
//     "Grilled Roasted Sandwich",
//     "Healthy Breakfast Egg",
//     "Tomato Sandwich",
//   ];

//   const text = [
//     "with tofu or soyabean curd",
//     "with lime butter sauce",
//     "with mint and basil puree",
//     "with love from our team",
//     "Lorem ipsum dollar to inr",
//     "with tofu or soyabean curd",
//   ];

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <h1 className="text-3xl font-mono text-center mb-6">Our Featured Menu</h1>
//       <section>
//         <Carousel
//           plugins={[plugin.current]}
//           className="w-full"
//           onMouseEnter={plugin.current.stop}
//           onMouseLeave={plugin.current.reset}
//         >
//           <CarouselContent className="flex justify-center items-center">
//             {images.map((image, index) => (
//               <CarouselItem
//                 key={index}
//                 className="mx-2 flex-shrink-0"
//                 style={{ maxWidth: "300px" }} // Set a consistent width for cards
//               >
//                 <Card className="relative">
//                   <CardContent className="relative flex flex-col items-center p-4">
//                     <div className="relative w-full h-48 mb-4">
//                       <Image
//                         src={image}
//                         alt={head[index]}
//                         fill
//                         className="object-cover rounded-lg"
//                       />
//                     </div>
//                     <h3 className="text-lg font-bold text-center mb-1 text-green-600">
//                       {head[index]}
//                     </h3>
//                     <p className="text-sm text-gray-600 text-center">
//                       {text[index]}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </section>
//     </div>
//   );
// }

'use client';

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export function Menu() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const images = [
    "/menu1.jpg",
    "/menu2.jpg",
    "/menu3.jpg",
    "/menu4.jpg",
    "/menu5.jpg",
    "/menu6.jpg",
  ];
  const head = [
    "Grilled Roast Vegetable",
    "Grilled Salmon",
    "Salad with Chicken",
    "Grilled Roasted Sandwich",
    "Healthy Breakfast Egg",
    "Tomato Sandwich",
  ];

  const text = [
    "with tofu or soyabean curd",
    "with lime butter sauce",
    "with mint and basil puree",
    "with love from our team",
    "Lorem ipsum dollar to inr",
    "with tofu or soyabean curd",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-mono text-center mb-6">Our Featured Menu</h1>
      <section>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex justify-center items-center">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="mx-2 flex-shrink-0"
                style={{ maxWidth: "300px" }} 
              >
                <Card className="relative group transition-all duration-300 hover:shadow-lg hover:shadow-slate-600">
                  <CardContent className="relative flex flex-col items-center p-4">
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={head[index]}
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-1 text-green-600">
                      {head[index]}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      {text[index]}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      
    </div>
  );
}
