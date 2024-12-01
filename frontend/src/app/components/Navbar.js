import React from "react";
import Link from "next/link";
import Image from "next/image"
export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-green-500 rounded-full flex justify-center items-center">
            <Image src={"/logo.png"} alt="logo" width={70} height={70} className=" rounded-full" />
            </div>
            <h1 className="ml-3 text-xl font-bold text-green-500 font-mono">Grainy Giggles</h1>
          </div>

          
          <div className="hidden md:flex space-x-8 text-sm font-medium font-mono">
            <Link href="/about" className="text-gray-800 hover:text-green-500">
              ABOUT US
            </Link>
            <Link href="/menu" className="text-gray-800 hover:text-green-500 font-mono">
              MENU
            </Link>
            {/* <Link href="#" className="text-gray-800 hover:text-green-500 font-mono">
              PROGRAMS
            </Link>
            <Link href="#" className="text-gray-800 hover:text-green-500 font-mono">
              PRICING
            </Link>
            <Link href="/addproduct" className="text-gray-800 hover:text-green-500 font-mono">
              ADMIN
            </Link> */}
          </div>

          
          {/* <div className="hidden md:flex">
            <Link
              href="#"
              className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-all font-mono"
            >
              CHOOSE PLAN
            </Link>
          </div> */}

          
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
