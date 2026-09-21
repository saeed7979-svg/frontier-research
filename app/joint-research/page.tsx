import React from 'react';

export default function JointResearch() {
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Joint Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaboration</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our multidisciplinary collaboration areas and scope for research and innovation.
          </p>
        </div>

        {/* Professional Dark Glass Table */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden mb-12">
          
          {/* Table Header (Modern Dark Gradient) */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 flex font-bold text-white text-lg border-b border-slate-700">
            <div className="w-1/3 px-4 tracking-wider uppercase text-sm md:text-base text-blue-400">Collaboration Area</div>
            <div className="w-2/3 px-4 tracking-wider uppercase text-sm md:text-base text-purple-400">Scope</div>
          </div>
          
          {/* Table Rows */}
          <div className="flex flex-col">
            {collaborationData.map((item, index) => (
              <div 
                key={index} 
                className={`flex p-6 border-b border-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 ${index % 2 === 0 ? 'bg-slate-800/20' : 'bg-transparent'}`}
              >
                <div className="w-1/3 px-4 text-white font-bold flex items-center pr-6 tracking-wide">
                  {item.area}
                </div>
                <div className="w-2/3 px-4 text-slate-300 leading-relaxed">
                  {item.scope}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}