// import { useEffect, useState } from 'react';
// import MenuCard from '../components/Menucard';
// import SubcategoryButton from '../components/Subcategorybutton';

// export default function Card() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [subcategoryItems, setSubcategoryItems] = useState({}); 
//   const [visibleSubcategories, setVisibleSubcategories] = useState([]); 

//   useEffect(() => {
//     async function fetchMenuItems() {
//       const response = await fetch('/api/menu');
//       const data = await response.json();
//       setMenuItems(data);

      
//       const groupedItems = data.reduce((acc, item) => {
//         acc[item.sub_category] = acc[item.sub_category] || [];
//         acc[item.sub_category].push(item);
//         return acc;
//       }, {});
//       setSubcategoryItems(groupedItems);
//     }

//     fetchMenuItems();
//   }, []);

//   const toggleSubcategory = (subcategory) => {
//     setVisibleSubcategories((prev) =>
//       prev.includes(subcategory)
//         ? prev.filter((cat) => cat !== subcategory) 
//         : [...prev, subcategory] 
//     );
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">Menu</h1>

//       <div className="mb-4">
//         {Object.keys(subcategoryItems).map((subcategory) => (
//           <div key={subcategory}>
           
//             <SubcategoryButton
//               key={subcategory}
//               subcategory={subcategory}
//               onClick={() => toggleSubcategory(subcategory)}
//             />

            
//             {visibleSubcategories.includes(subcategory) && (
//               <div className="grid grid-cols-3 gap-4 mt-4">
//                 {subcategoryItems[subcategory].map((item) => (
//                   <MenuCard key={item.id} item={item} />
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from 'react';
// import MenuCard from '../components/Menucard';
// import SubcategoryButton from '../components/Subcategorybutton';

// export default function Card() {
//   const [menuItems, setMenuItems] = useState([]); 
//   const [subcategoryItems, setSubcategoryItems] = useState({}); 

//   useEffect(() => {
//     async function fetchMenuItems() {
//       const response = await fetch('/api/menu');
//       const data = await response.json();
//       setMenuItems(data);

   
//       const groupedItems = data.reduce((acc, item) => {
//         acc[item.sub_category] = acc[item.sub_category] || [];
//         acc[item.sub_category].push(item);
//         return acc;
//       }, {});
//       setSubcategoryItems(groupedItems);
//     }

//     fetchMenuItems();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">Menu</h1>

    
//       <div className="mb-4">
//         {Object.keys(subcategoryItems).map((subcategory) => (
//           <div key={subcategory} className="mb-6">
           
//             {/* <SubcategoryButton
//               key={subcategory}
//               subcategory={subcategory}
//               onClick={() => console.log(`${subcategory} clicked`)} // Optional action for the button
//             /> */}

           
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               {subcategoryItems[subcategory].map((item) => (
//                 <MenuCard key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import MenuCard from "@/app/components/Menucard"; // Adjust the import based on your file structure

// export default function MenuPage() {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     async function fetchMenuItems() {
//       try {
//         const response = await fetch("/api/menu"); // Update endpoint to match your API route
//         if (!response.ok) {
//           throw new Error("Failed to fetch menu items");
//         }
//         const data = await response.json();
//         setMenuItems(data);
//       } catch (error) {
//         console.error("Error fetching menu items:", error);
//       }
//     }

//     fetchMenuItems();
//   }, []);

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl  text-center mb-6 text-black font-mono">Our Menu</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {menuItems.map((item) => (
//           <MenuCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import MenuCard from "@/app/components/Menucard"; // Adjust the import based on your file structure

// export default function Card({ searchQuery }) {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     async function fetchMenuItems() {
//       try {
//         const response = await fetch("/api/menu"); // Update endpoint to match your API route
//         if (!response.ok) {
//           throw new Error("Failed to fetch menu items");
//         }
//         const data = await response.json();
//         setMenuItems(data);
//       } catch (error) {
//         console.error("Error fetching menu items:", error);
//       }
//     }

//     fetchMenuItems();
//   }, []);

//   const filteredItems = menuItems.filter((item) => {
//     const regex = new RegExp(searchQuery, "i"); // Case-insensitive regex
//     return regex.test(item.item_name);
//   });

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl text-center mb-6 text-black font-mono">Our Menu</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredItems.map((item) => (
//           <MenuCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import MenuCard from '@/app/components/Menucard';

export default function Card({ searchQuery, onAddToCart, onQuantityChange }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const response = await fetch('/api/menu');
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    }

    fetchMenuItems();
  }, []);

  const filteredItems = menuItems.filter((item) =>
    new RegExp(searchQuery, 'i').test(item.item_name)
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl text-center mb-6 text-black font-mono">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </div>
    </div>
  );
}


