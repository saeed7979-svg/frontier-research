import React from 'react';

export default function Objectives() {
  const objectivesData = [
    "Advance multidisciplinary research across the company’s identified fields and disciplines.",
    "To Build international professor, researcher, university, research-institute and industry networks.",
    "To Develop collaborative research projects, proposals and consortia for eligible funding programmes.",
    "To Promote innovation, prototypes, intellectual property, technology transfer and responsible commercialization.",
    "For Strengthen research capacity through methodology, scientific writing, data analysis, training and mentoring.",
    "To Support applied research addressing environmental, energy, water, agriculture, health, technology and development challenges.",
    "To Facilitate academic–industry collaboration, testing, technical services, applied R&D and technology development.",
    "For Support student, scholar and early-career researcher collaboration, internships, theses, publications and research projects.",
    "To Develop digital and analytical solutions that improve skills, productivity, access, entrepreneurship and innovation.",
    "To Establish a scalable Pakistan-based platform for long-term national and international research collaboration."
  ];

  return (
    <div className="bg-slate-900 min-h-screen py-20 relative overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Objectives</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 backdrop-blur-md border border-blue-500/30 p-8 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/50">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-4 tracking-wide">Our <span className="text-blue-400">Vision</span></h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become a trusted Pakistan-based platform for research, innovation, education and digital opportunity, contributing to a knowledge-driven and sustainable economy.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-purple-900/40 to-slate-800/40 backdrop-blur-md border border-purple-500/30 p-8 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-400/50">
              <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-4 tracking-wide">Our <span className="text-purple-400">Mission</span></h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              To develop and deliver research, training, technology and digital solutions that improve skills, access, productivity, entrepreneurship and innovation.
            </p>
          </div>

        </div>

        {/* 10 Objectives Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center">The 10 Practical <span className="text-blue-400">Frameworks</span></h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {objectivesData.map((objective, index) => (
              <div key={index} className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 flex gap-5 hover:bg-slate-700/40 transition-colors duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center shadow-inner group-hover:border-blue-500/50 transition-colors">
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}