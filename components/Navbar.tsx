"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Agar aap logo image use kar rahe hain

export default function Navbar() {
  // Yeh isOpen batayega ke mobile menu khula hai ya band
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo (Yahan apna logo image laga lein) */}
          <div className="flex-shrink-0 bg-white p-1 rounded">
            <Link href="/">
               {/* Agar aapki image ka code kuch aur hai toh yahan replace kar lein */}
               <Image 
  src="/logo.png" 
  alt="FRIS Logo" 
  width={140} 
  height={45} 
  className="object-contain"
/>
            </Link>
          </div>

          {/* 2. Desktop Menu (Badi screens ke liye) */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium">Home</Link>
              <Link href="/departments" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium">Departments</Link>
              <Link href="/consortium" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium">International Consortium</Link>
              <Link href="/collaborate" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium">Collaborate</Link>
              <Link href="/about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium">About Us</Link>
              <Link href="/joint-research" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium">Joint Research</Link>
            </div>
          </div>

          {/* 3. Contact Us Button (Desktop) */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Contact Us
            </Link>
          </div>

          {/* 4. Mobile Menu Button (Hamburger Icon) */}
          <div className="-mr-2 flex lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon jab band ho */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Cross icon jab menu khula ho */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu List (Choti screens ke liye dropdown) */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link onClick={() => setIsOpen(false)} href="/" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/departments" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Departments</Link>
            <Link onClick={() => setIsOpen(false)} href="/consortium" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">International Consortium</Link>
            <Link onClick={() => setIsOpen(false)} href="/collaborate" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Collaborate</Link>
            <Link onClick={() => setIsOpen(false)} href="/about" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Link onClick={() => setIsOpen(false)} href="/joint-research" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Joint Research</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium mt-4 text-center">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}