// components/Header.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import logo from '@/public/logo.2eb85d29b6c42e62c4ad.webp';


const MobileMenu = dynamic(() => import('./MobileMenu'), {
  ssr: false,
});


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    toggleMenu();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };


  return (
    <>
      <header className="relative  flex justify-between items-center px-6 bg-transparent z-20 w-full">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="https://thestockit.net/">
            <Image
              src={logo}
              alt="Agency Logo"
              className="h-12 w-auto"
              width={100}
              height={100}
              loading="lazy"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center items-center" aria-label="Main navigation">
          <div className="rounded-full border-2 border-gradient mt-1 p-1 px-7">
            <ul className="flex space-x-5 text-lg">
              <li>
                <Link href="/" className="hover:text-blue-500 ">
                  IP Checker
                </Link>
              </li>
              <li>
                <Link href="/ip-lookup" className="hover:text-blue-500 ">
                  IP Lookup
                </Link>
              </li>
              {/* <li>
                <Link href="#services" className="hover:text-blue-500 ">
                  Services
                </Link>
              </li> */}

              {/* <li>
                <Link href="#blogs" className="hover:text-blue-500 ">
                  Blogs
                </Link>
              </li> */}

            </ul>
          </div>
        </nav>

        {/* Let's Connect Button for Desktop */}
        <div className="hidden lg:block">
          <Link href="/ip-lookup" className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition">
            Check my IP
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div
              
              className="w-6 h-0.5 bg-gray-800 mb-1"
            ></div>
            <div
             
              className="w-6 h-0.5 bg-gray-800 mb-1"
            ></div>
            <div              
              className="w-6 h-0.5 bg-gray-800"
            ></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} handleLinkClick={handleLinkClick} />
        )}
      </header>


    </>
  );
};

export default Header;