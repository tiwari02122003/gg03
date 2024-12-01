// import Image from "next/image";

// export function BlogSection() {
//   const blogs = [
//     {
//       image: "/blog1.jpg", 
//       title: "5 Foods That Sound Healthy, But Aren't",
//       date: "Posted May 27, 2016",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//       comments: "10 Comments",
//     },
//     {
//       image: "/blog2.jpg",
//       title: "6 Tips to Make Paleo Eating Easy",
//       date: "Posted May 28, 2016",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//       comments: "8 Comments",
//     },
//     {
//       image: "/blog3.jpg",
//       title: "5 Simple & Healthy Gluten-Free Cookies",
//       date: "Posted May 29, 2016",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//       comments: "21 Comments",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4">
//       <h2 className="text-2xl font-bold text-center mb-8">Latest Blog</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="rounded-lg shadow-lg overflow-hidden bg-white"
//           >
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               width={400}
//               height={300}
//               className="w-full h-auto"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
//               <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
//               <p className="text-gray-700 mb-4">{blog.description}</p>
//               <div className="flex justify-between items-center text-sm text-gray-500">
//                 <span>{blog.comments}</span>
//                 <a
//                   href="#"
//                   className="text-green-600 hover:underline font-medium"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
import Image from "next/image";

export function  BlogSection (){
  const blogs = [
    {
      image: "/blog1.jpg", 
      title: "5 Foods That Sound Healthy, But Aren't",
      date: "Posted May 27, 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      comments: "10 Comments",
    },
    {
      image: "/blog2.jpg", 
      title: "6 Tips to Make Paleo Eating Easy",
      date: "Posted May 28, 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      comments: "8 Comments",
    },
    {
      image: "/blog3.jpg", 
      title: "5 Simple & Healthy Gluten-Free Cookies",
      date: "Posted May 29, 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      comments: "21 Comments",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl  text-center mb-8 font-mono">Latest Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden bg-white group" // Group for hover effects
          >
            <div className="overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={300}
                className="w-full h-auto transform transition-transform duration-300 ease-out group-hover:scale-105 group-hover:filter group-hover:grayscale" // Hover effects
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{blog.comments}</span>
                <a
                  href="#"
                  className="text-green-600 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




