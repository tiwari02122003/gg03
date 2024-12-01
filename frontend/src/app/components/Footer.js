import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaTumblr } from "react-icons/fa";
import Image from "next/image"
export function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-green-500 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">

              <Image src={"/logo.png"} alt="logo" width={70} height={70} className=" rounded-full" />
              </div>
              <h1 className="ml-3 text-xl font-bold">Grainy Giggles</h1>
            </div>
            <p className="text-sm mt-2">healthy food delivery</p>
          </div>

          
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">ABOUT</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">PRESS</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Press Release
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Media
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">COMPANY</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Board
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">TERM</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          
          <div className="flex space-x-4 mt-6 md:mt-0">
            {/* <a href="#" className="text-white hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaGooglePlusG />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTumblr />
            </a> */}
          </div>
        </div>
      </div>

     
      <div className="bg-green-600 text-sm text-center py-4 font-mono">
        © {currentYear} GrainyGiggles, Inc. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
