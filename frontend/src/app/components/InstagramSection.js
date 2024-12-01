import Image from "next/image";
import Link from "next/link";
export function InstagramSection ()  {
  const images = [
    "/insta1.jpg", 
    "/insta2.jpg",
    "/insta3.jpg",
    "/insta4.jpg",
    "/insta5.jpg",
    "/insta6.jpg",
    "/insta7.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl  mb-2 font-mono">FOLLOW OUR INSTAGRAM</h2>
      <a 
        href="https://www.instagram.com/grainygiggles" 
        className="text-green-600 text-lg font-medium font-mono" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        @GrainyGiggles
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group"
          >
            <Image
              src={image}
              alt={`Instagram post ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


