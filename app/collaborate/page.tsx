import React from 'react';

export default function Collaborate() {
  return (
    <div className="bg-slate-900 min-h-screen py-20 relative overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Collaborate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">With Us</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Join our multidisciplinary framework to foster innovation, research, and global partnerships.
          </p>
        </div>

        {/* Content Box (Glassmorphism) */}
        <div className="bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
          <p className="text-slate-400 text-lg mb-6">
            Yeh Collaborate page ka design hai. Client ki taraf se is page ke liye jo bhi text, details, ya tasweer aaye, wo yahan aa jayegi.
          </p>
          <p className="text-emerald-400 font-semibold tracking-widest uppercase">
            Data Awaiting...
          </p>
        </div>

      </div>
    </div>
  );
}