import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      
      {/* =========================================
          STEP 1: HERO SECTION (Glowing & Modern)
          ========================================= */}
      <section className="relative bg-slate-900 text-white py-28 px-4 overflow-hidden border-b-[6px] border-blue-600">
        
        {/* Animated Glowing Gradients (Background) */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Main Heading with Gradient Text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-2xl">
            <span className="text-white">FRONTIER RESEARCH & INNOVATION</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              SOLUTIONS
            </span>
          </h1>
          
          {/* Company Status */}
          <p className="text-xl md:text-2xl font-bold text-emerald-400 mb-8 tracking-widest drop-shadow-md">
            (SMC-PRIVATE) LIMITED — Pakistan
          </p>

          {/* Glassmorphism Box for Multidisciplinary Text */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 py-5 px-8 rounded-2xl mb-12 w-full max-w-4xl shadow-2xl">
            <p className="text-lg md:text-xl font-bold text-purple-300 leading-relaxed uppercase tracking-widest">
              Multidisciplinary Research, Innovation & International Collaboration Services
            </p>
          </div>
          
          {/* CEO Badge */}
          <div className="mb-14 bg-blue-900/30 backdrop-blur-md py-3 px-10 rounded-full border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <p className="text-xl md:text-2xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg">
              CEO AYAZ AHMAD
            </p>
          </div>

          {/* The 4 Glassmorphism Buttons */}
          <div className="flex flex-wrap justify-center gap-5 w-full max-w-5xl">
            <button className="bg-white/10 hover:bg-blue-600 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-2 text-sm md:text-base w-full sm:w-auto uppercase tracking-wide">
              Company & Legal Information
            </button>
            <button className="bg-white/10 hover:bg-blue-600 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-2 text-sm md:text-base w-full sm:w-auto uppercase tracking-wide">
              Joint Research Collaboration
            </button>
            <button className="bg-white/10 hover:bg-blue-600 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-2 text-sm md:text-base w-full sm:w-auto uppercase tracking-wide">
              Research Consortium
            </button>
            <button className="bg-white/10 hover:bg-blue-600 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-2 text-sm md:text-base w-full sm:w-auto uppercase tracking-wide">
              Objectives
            </button>
          </div>

        </div>
      </section>

      {/* Yeh jagah humne Step 2 aur Step 3 ke liye khali chori hai */}
      <section className="flex-grow bg-slate-50 py-20 flex items-center justify-center">
        <p className="text-slate-400 text-lg">Step 2 (Stats Bar) aur Step 3 yahan add karenge...</p>
      </section>

    </div>
  );
}