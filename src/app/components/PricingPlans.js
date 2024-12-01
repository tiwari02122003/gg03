// 'use client';

// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// export function PricingPlans() {
//   const plans = [
//     {
//       name: "Basic Plan",
//       price: "$19.99/month",
//       features: ["1 Meal Per Day", "Free Delivery", "No Customization"],
//       buttonText: "Order Now",
//     },
//     {
//       name: "Standard Plan",
//       price: "$39.99/month",
//       features: ["2 Meals Per Day", "Free Delivery", "Customization Options"],
//       buttonText: "Order Now",
//     },
//     {
//       name: "Premium Plan",
//       price: "$59.99/month",
//       features: [
//         "3 Meals Per Day",
//         "Free Delivery",
//         "Full Customization",
//         "Priority Support",
//       ],
//       buttonText: "Order Now",
//     },
//   ];

//   return (
//     <section className="w-full max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
//         Our Plans
//       </h1>
//       <div className="flex justify-center items-start gap-6">
//         {plans.map((plan, index) => (
//           <Card
//             key={index}
//             className="w-full max-w-sm bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
//             style={{ minHeight: "400px" }} // Increased height
//           >
//             <CardHeader>
//               <CardTitle className="text-center text-gray-800 text-2xl font-semibold group-hover:text-green-600 transition-colors duration-300">
//                 {plan.name}
//               </CardTitle>
//               <CardDescription className="text-center text-gray-800 text-xl font-bold">
//                 {plan.price}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-2">
//                 {plan.features.map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="text-gray-600 text-sm flex items-center"
//                   >
//                     <span className="mr-2 text-green-500">✔</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//             <CardFooter>
//               <Button className="w-full bg-gray-800 hover:bg-green-600 group-hover:bg-green-600 text-white transition-colors duration-300">
//                 {plan.buttonText}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function PricingPlans() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$19.99/month",
      features: ["1 Meal Per Day", "Free Delivery", "No Customization"],
      buttonText: "Order Now",
    },
    {
      name: "Standard Plan",
      price: "$39.99/month",
      features: ["2 Meals Per Day", "Free Delivery", "Customization Options"],
      buttonText: "Order Now",
    },
    {
      name: "Premium Plan",
      price: "$59.99/month",
      features: [
        "3 Meals Per Day",
        "Free Delivery",
        "Full Customization",
        "Priority Support",
      ],
      buttonText: "Order Now",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center mb-8  font-mono">
        Our Plans
      </h1>
      <div className="flex justify-center items-start gap-6">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="w-full max-w-sm bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group flex flex-col"
            style={{ minHeight: "400px" }}
          >
            <CardHeader>
              <CardTitle className="text-center text-gray-800 text-2xl font-semibold group-hover:text-green-600 transition-colors duration-300">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-center text-gray-800 text-xl font-bold">
                {plan.price}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 text-sm flex items-center"
                  >
                    <span className="mr-2 text-green-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full bg-gray-800 hover:bg-green-600 group-hover:bg-green-600 text-white transition-colors duration-300">
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
