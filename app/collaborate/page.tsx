import React from 'react';

export default function Collaborate() {
  const collaborationData = [
    { area: "Joint Research Projects", scope: "Multidisciplinary projects with universities, institutes and researchers." },
    { area: "Researcher Collaboration", scope: "Co-research, researcher matching and scientific collaboration." },
    { area: "Joint Publications", scope: "Co-authored articles, reviews, reports, books and book chapters." },
    { area: "Joint Grants", scope: "Collaborative proposals, consortium building and funded research." },
    { area: "Student Research", scope: "Research projects, thesis/dissertation collaboration and internships." },
    { area: "Laboratory Collaboration", scope: "Testing, characterization, technical research and prototypes where available." },
    { area: "Industry R&D", scope: "Applied research, industrial problem solving and technology development." },
    { area: "Innovation & Technology Transfer", scope: "Prototypes, intellectual property, patents, licensing and commercialization." },
    { area: "International Collaboration", scope: "Cross-border research, knowledge exchange and institutional partnerships." }
  ];

  return (
    <div className="bg-slate-900 min-h-screen py-20 relative overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Joint Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaboration</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Professional Dark Glass Table */}
        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl overflow-hidden mb-12">
          
          {/* Table Header (Purple matching the image) */}
          <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 p-5 flex font-bold text-white text-lg border-b border-purple-500/30">
            <div className="w-1/3 px-4 tracking-wider uppercase text-sm md:text-base">Collaboration Area</div>
            <div className="w-2/3 px-4 tracking-wider uppercase text-sm md:text-base">Scope</div>
          </div>
          
          {/* Table Rows */}
          <div className="flex flex-col">
            {collaborationData.map((item, index) => (
              <div 
                key={index} 
                className={`flex p-5 border-b border-slate-700/50 hover:bg-slate-700/40 transition-all duration-300 ${index % 2 === 0 ? 'bg-slate-800/30' : 'bg-transparent'}`}
              >
                <div className="w-1/3 px-4 text-blue-300 font-bold flex items-center pr-6">
                  {item.area}
                </div>
                <div className="w-2/3 px-4 text-slate-300 leading-relaxed">
                  {item.scope}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer / Contact Details Bar */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-600 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-transform hover:-translate-y-1 duration-300">
           <h3 className="text-lg md:text-xl font-extrabold text-white mb-4 uppercase tracking-widest drop-shadow-md">
             Frontier Research & Innovation Solutions <span className="text-emerald-400">(SMC-PRIVATE) Limited</span> — Pakistan
           </h3>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-slate-300 text-lg bg-slate-900/50 py-4 px-6 rounded-lg inline-flex flex-wrap">
             <p className="font-bold text-blue-400 flex items-center gap-2">
               Ayaz Ahmad
             </p>
             <span className="hidden md:block text-slate-600">|</span>
             <p className="font-medium hover:text-white transition-colors">
               +92 345 0216630
             </p>
             <span className="hidden md:block text-slate-600">|</span>
             <a href="mailto:ayazsb1993@gmail.com" className="font-medium text-purple-300 hover:text-purple-200 transition-colors">
               ayazsb1993@gmail.com
             </a>
           </div>
        </div>

      </div>
    </div>
  );
}