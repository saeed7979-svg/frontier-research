import React from 'react';

export default function Collaborate() {
  return (
    <div className="bg-slate-900 min-h-screen py-20 relative overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">With Us</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Join our global network of universities, researchers, and industries to drive innovation and create impactful solutions.
          </p>
        </div>

        {/* Who Can Join Section (3 Cards) */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {['Universities & Institutes', 'Industry Partners', 'Independent Researchers'].map((title, i) => (
            <div key={i} className="bg-slate-800/40 backdrop-blur-md border border-slate-700 p-8 rounded-2xl text-center hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 mx-auto bg-blue-900/50 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-bold text-2xl">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {i === 0 && "Collaborate on joint degree programs, research projects, and academic exchanges to build capacity."}
                {i === 1 && "Engage in applied R&D, technology transfer, and industry-specific problem solving for real-world impact."}
                {i === 2 && "Co-author publications, access grants, and participate in our multidisciplinary research teams."}
              </p>
            </div>
          ))}
        </div>

        {/* 2-Column Layout for Process and Form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Process */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10">How to <span className="text-blue-400">Collaborate</span></h2>
            <div className="space-y-10">
              {[
                { title: "Submit Your Proposal", desc: "Fill out the collaboration request form with your institutional details and proposed area of interest." },
                { title: "Expert Review", desc: "Our multidisciplinary team will evaluate your proposal for alignment with our strategic objectives." },
                { title: "Formal Agreement", desc: "Sign an MoU or Joint Research Agreement (JRA) and officially initiate the partnership." }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
                    {index + 1}
                  </div>
                  <div className="mt-1">
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: VIP Collaboration Form */}
          <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
             {/* Top Decorative Line */}
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
             
             <h3 className="text-2xl font-bold text-white mb-8">Collaboration Request</h3>
             
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Dr. John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@university.edu" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Institution / Company</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Name of your organization" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Area of Interest</label>
                  <select className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                    <option>Joint Research Projects</option>
                    <option>Joint Publications</option>
                    <option>Industry R&D</option>
                    <option>Innovation & Technology Transfer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message / Proposal Summary</label>
                  <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="Briefly describe your collaboration idea..."></textarea>
                </div>

                <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 text-lg">
                  Submit Request
                </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
}