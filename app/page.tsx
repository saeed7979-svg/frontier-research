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

      {/* =========================================
          STEP 2: TRUST & STATS BAR (Overlapping)
          ========================================= */}
      <section className="bg-slate-50 relative z-20 px-4">
        <div className="max-w-6xl mx-auto -mt-12">
          <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col md:flex-row justify-around items-center gap-8 border border-slate-700/50 backdrop-blur-lg">
            
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-2">10+</h3>
              <p className="text-slate-300 font-medium uppercase tracking-wider text-sm">Research Areas</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-slate-600"></div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-purple-400 mb-2">Global</h3>
              <p className="text-slate-300 font-medium uppercase tracking-wider text-sm">Collaboration Network</p>
            </div>

            <div className="hidden md:block w-px h-16 bg-slate-600"></div>

            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-2">100%</h3>
              <p className="text-slate-300 font-medium uppercase tracking-wider text-sm">Multidisciplinary</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* =========================================
          STEP 3: SERVICES & COLLABORATION CARDS
          ========================================= */}
      <section className="py-24 px-4 max-w-7xl mx-auto bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Areas of <span className="text-blue-600">Collaboration</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive multidisciplinary framework designed to foster innovation, research, and global partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { area: "Joint Research Projects", scope: "Multidisciplinary projects with universities, institutes and researchers." },
            { area: "Researcher Collaboration", scope: "Co-research, researcher matching and scientific collaboration." },
            { area: "Joint Publications", scope: "Co-authored articles, reviews, reports, books and book chapters." },
            { area: "Joint Grants", scope: "Collaborative proposals, consortium building and funded research." },
            { area: "Student Research", scope: "Research projects, thesis/dissertation collaboration and internships." },
            { area: "Laboratory Collaboration", scope: "Testing, characterization, technical research and prototypes where available." },
            { area: "Industry R&D", scope: "Applied research, industrial problem solving and technology development." },
            { area: "Innovation & Technology Transfer", scope: "Prototypes, intellectual property, patents, licensing and commercialization." },
            { area: "International Collaboration", scope: "Cross-border research, knowledge exchange and institutional partnerships." }
          ].map((item, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              
              {/* Decorative top border glow (Hover Effect) */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              {/* Number Badge */}
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-inner">
                <span className="text-blue-600 group-hover:text-white font-black text-2xl transition-colors duration-300">
                  {index + 1}
                </span>
              </div>
              
              {/* Card Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {item.area}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {item.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}