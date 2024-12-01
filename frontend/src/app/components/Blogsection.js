import { useState } from "react";
import Image from "next/image";

export function BlogSection() {
  const blogs = [
    {
      image: "/blog1.jpg",
      title: "5 Foods That Sound Healthy, But Aren't",
      date: "Posted May 27, 2024",
      description:
        "These foods might seem healthy but can be misleading: granola, flavored yogurt, veggie chips, protein bars, and reduced-fat peanut butter.",
      fullDescription:
        "Granola, often considered a healthy snack, is usually loaded with sugars and calories. Flavored yogurt contains as much sugar as candy. Veggie chips are deep-fried and contain minimal real vegetables. Protein bars are often packed with artificial ingredients. Reduced-fat peanut butter replaces healthy fats with sugars and unhealthy oils.",
      comments: "10 Comments",
    },
    {
      image: "/blog2.jpg",
      title: "6 Tips to Make Paleo Eating Easy",
      date: "Posted Aug 28, 2024",
      description:
        "Embrace simplicity, prep meals ahead, and keep your pantry paleo-friendly for an easier transition.",
      fullDescription:
        "To make paleo eating easy, focus on whole foods like meats, veggies, and nuts. Prep meals ahead of time to avoid last-minute unhealthy choices. Stock your pantry with paleo-friendly staples like almond flour and coconut oil. Keep snacks like hard-boiled eggs and trail mix on hand, and experiment with paleo versions of your favorite recipes to stay satisfied.",
      comments: "8 Comments",
    },
    {
      image: "/blog3.jpg",
      title: "5 Simple & Healthy Gluten-Free Cookies",
      date: "Posted October 29, 2024",
      description:
        "Discover easy recipes for gluten-free cookies that are both delicious and nutritious.",
      fullDescription:
        "These gluten-free cookies are made with wholesome ingredients like almond flour, coconut sugar, and dark chocolate chips. They are easy to make and perfect for satisfying your sweet tooth without compromising on health. Try recipes such as peanut butter oatmeal cookies, chocolate chip almond cookies, and coconut macaroons for a healthy twist on classic treats.",
      comments: "21 Comments",
    },
  ];


  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl text-center mb-8 font-mono">Latest Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden bg-white group"
          >
            <div className="overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={300}
                className="w-full h-auto transform transition-transform duration-300 ease-out group-hover:scale-105 group-hover:filter group-hover:grayscale"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
              <p className="text-gray-700 mb-4">
                {blog.description}
                {expanded === index
                  ? blog.fullDescription
                  : !blog.fullDescription}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{blog.comments}</span>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-green-600 hover:underline font-medium"
                >
                  {expanded === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




