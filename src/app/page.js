

import { Navbar } from "@/app/components/Navbar";
import Hero from "./components/Hero";
import { Footer } from "@/app/components/Footer";
import Image from "next/image"
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />

      
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} // whatsapp bot link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-green-300 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transition-transform duration-200 transform hover:scale-110"
        >
          <span className="font-semibold text-black">Chat on WhatsApp</span>
          <Image src={"/Whatsapp.png"} alt="logo" width={50} height={50} className=" rounded-full"/>

          
        </a>
      </div>
    </div>
  );
}
