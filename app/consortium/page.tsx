import React from 'react';

export default function Consortium() {
  const professorNetwork = [
    { level: "Professor", affiliation: "International Universities / Research Institutes", fields: "All Major Disciplines", role: "Project Lead / PI" },
    { level: "Associate Professor", affiliation: "International Universities / Research Institutes", fields: "All Major Disciplines", role: "Co-PI / Research Lead" },
    { level: "Assistant Professor", affiliation: "International Universities / Research Institutes", fields: "All Major Disciplines", role: "Co-Investigator" },
    { level: "Research Professor / Scientist", affiliation: "International Research Institutions", fields: "Specialized Fields", role: "Research Partner" },
    { level: "Industry Professor / Expert", affiliation: "Global Industry & Organizations", fields: "Applied & Emerging Fields", role: "Industry Partner" },
  ];

  const consortiumFramework = [
    { component: "Academic Partners", participants: "International universities and research institutes", role: "Project Lead / Co-PI / Co-Investigator", contribution: "Joint research, publications, student research, laboratories and grant proposals" },
    { component: "Research Partners", participants: "Research professors, scientists and specialist researchers", role: "Research Partner / Technical Expert", contribution: "Specialized expertise, methods, datasets, technical research and scientific collaboration" },
    { component: "Industry Partners", participants: "Global industry, organizations and technology partners", role: "Industry Partner", contribution: "Applied R&D, industrial problem solving, prototypes, technology validation and commercialization" },
    { component: "Funding & Grant Partners", participants: "Eligible international and national funding stakeholders", role: "Funding / Programme Collaboration", contribution: "Collaborative proposals, consortium development and implementation of funded projects" },
    { component: "Student & Early-Career Network", participants: "Students, research scholars and early-career researchers", role: "Research Participant", contribution: "Thesis/dissertation projects, internships, training and research assistance" },
  ];

  return (
    <div className="bg-slate-900 min-h-screen py-20 relative overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consortium</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Frontier Research and Innovation Solutions (FRIS) Pakistan aims to connect international professors, researchers, scientists and academic experts from universities and research institutions worldwide to support collaborative and internationally funded research projects.
          </p>
        </div>

        {/* Table 1: International Professor Network */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center border border-blue-500/50">
              <span className="text-blue-400 text-sm">01</span>
            </div>
            International Professor Network
          </h2>
          
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 text-slate-300 text-sm uppercase tracking-wider">
                  <th className="p-5 font-semibold">Academic Level</th>
                  <th className="p-5 font-semibold">International Affiliation</th>
                  <th className="p-5 font-semibold">Research Fields</th>
                  <th className="p-5 font-semibold text-blue-400">Consortium Role</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {professorNetwork.map((item, index) => (
                  <tr key={index} className={`border-b border-slate-700/30 hover:bg-slate-700/50 transition-colors ${index % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className="p-5 font-bold text-white whitespace-nowrap">{item.level}</td>
                    <td className="p-5">{item.affiliation}</td>
                    <td className="p-5">{item.fields}</td>
                    <td className="p-5 font-medium text-blue-300">{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: International Consortium Framework */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center border border-purple-500/50">
              <span className="text-purple-400 text-sm">02</span>
            </div>
            International Consortium Framework
          </h2>
          
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 text-slate-300 text-sm uppercase tracking-wider">
                  <th className="p-5 font-semibold text-purple-400">Consortium Component</th>
                  <th className="p-5 font-semibold">Participants</th>
                  <th className="p-5 font-semibold">Primary Role</th>
                  <th className="p-5 font-semibold">Planned Contribution</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {consortiumFramework.map((item, index) => (
                  <tr key={index} className={`border-b border-slate-700/30 hover:bg-slate-700/50 transition-colors ${index % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className="p-5 font-bold text-white whitespace-nowrap">{item.component}</td>
                    <td className="p-5">{item.participants}</td>
                    <td className="p-5 font-medium text-purple-300">{item.role}</td>
                    <td className="p-5 text-sm leading-relaxed">{item.contribution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mt-12">
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-full px-8 py-4 flex items-center gap-4 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping absolute"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full relative z-10"></div>
            <p className="text-blue-100 font-medium tracking-wide text-sm md:text-base">
              <strong className="text-white">Consortium Status:</strong> International professor and researcher network to be developed for collaborative and funded projects.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}