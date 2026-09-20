"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    {/* Glass-morphism Sticky Navbar */}
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24"> {/* h-24 se height thodi barhai hai taake logo ko jagah mile */}
          
          {/* 1. Professional Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
               {/* Logo Wrapper - Is se logo box khoobsurat aur alag nazar aayega */}
               <div className="bg-white p-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center justify-center transition-transform hover:scale-105 hover:shadow-blue-500/20">
                 <Image 
                   src="/logo.png" 
                   alt="FRIS Logo" 
                   width={120} 
                   height={45} 
                   className="object-contain"
                   priority
                 />
               </div>
            </Link>
          </div>

          {/* 2. Desktop Menu (Modern & Sleek) */}
          <div className="hidden lg:block">
            <div className="ml-8 flex items-baseline space-x-6">
              <Link href="/" className="text-slate-300 hover:text-blue-400 px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">Home</Link>
              <Link href="/departments" className="text-slate-300 hover:text-blue-400 px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">Departments</Link>
              <Link href="/consortium" className="text-slate-300 hover:text-blue-400 px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">Research Consortium</Link>
              <Link href="/collaborate" className="text-slate-300 hover:text-blue-400 px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">Collaborate</Link>
              <Link href="/about" className="text-slate-300 hover:text-blue-400 px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">About Us</Link>
              <Link href="/joint-research" className="text-slate-300 hover:text-blue-400 px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">Joint Research</Link>
            </div>
          </div>

          {/* 3. Contact Us Button (Glowing & Modern) */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 border border-blue-500">
              Contact Us
            </Link>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) */}
          <div className="-mr-2 flex lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu List */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            <Link onClick={() => setIsOpen(false)} href="/" className="text-slate-300 hover:text-blue-400 block px-3 py-3 rounded-md text-base font-medium border-b border-slate-800">Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/departments" className="text-slate-300 hover:text-blue-400 block px-3 py-3 rounded-md text-base font-medium border-b border-slate-800">Departments</Link>
            <Link onClick={() => setIsOpen(false)} href="/consortium" className="text-slate-300 hover:text-blue-400 block px-3 py-3 rounded-md text-base font-medium border-b border-slate-800">Research Consortium</Link>
            <Link onClick={() => setIsOpen(false)} href="/collaborate" className="text-slate-300 hover:text-blue-400 block px-3 py-3 rounded-md text-base font-medium border-b border-slate-800">Collaborate</Link>
            <Link onClick={() => setIsOpen(false)} href="/about" className="text-slate-300 hover:text-blue-400 block px-3 py-3 rounded-md text-base font-medium border-b border-slate-800">About Us</Link>
            <Link onClick={() => setIsOpen(false)} href="/joint-research" className="text-slate-300 hover:text-blue-400 block px-3 py-3 rounded-md text-base font-medium border-b border-slate-800">Joint Research</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white block px-3 py-3 rounded-md text-base font-medium mt-4 text-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}