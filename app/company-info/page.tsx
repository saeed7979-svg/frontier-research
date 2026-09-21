import React from 'react';

export default function CompanyInfo() {
  return (
    <div className="bg-slate-900 min-h-screen py-20 relative overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Company & Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Information</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Official registration and corporate identity details of Frontier Research & Innovation Solutions.
          </p>
        </div>

        {/* Legal Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Corporate Identity */}
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-xl hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-700">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-500/30">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Corporate Identity</h2>
            </div>
            
            <div className="space-y-5">
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Brand Name</p>
                <p className="text-white text-lg font-medium">Frontier Research & Innovation Solutions</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Legal Company Name</p>
                <p className="text-blue-300 font-bold leading-snug">FRONTIER RESEARCH & INNOVATION SOLUTIONS (SMC-PRIVATE) LIMITED</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Chief Executive Officer (CEO)</p>
                <p className="text-white text-lg font-medium">Ayaz Ahmad</p>
              </div>
            </div>
          </div>

          {/* Card 2: Legal Registration */}
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-xl hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-700">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center border border-emerald-500/30">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Registration Details</h2>
            </div>
            
            <div className="space-y-5">
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Corporate Unique ID (CUIN)</p>
                <p className="text-emerald-400 text-xl font-mono font-bold tracking-widest">0352750</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Date of Incorporation</p>
                <p className="text-white text-lg font-medium">27 August 2026</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Company Status</p>
                <p className="text-slate-300 leading-relaxed text-sm">Company incorporated under the Companies Act, 2017 (XIX of 2017); limited by shares.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Full Width Card: Contact & Address */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-600 rounded-2xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-emerald-500"></div>
          
          <div className="grid md:grid-cols-2 gap-8 pl-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Registered Address
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-sm">
                Al Mubashir Plaza, First Floor, Office No. 2, Main Street, Azeem Town, Khan Pur, Pakistan
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Official Contact
              </h3>
              <div className="space-y-2">
                <p className="text-slate-300 flex items-center gap-3">
                  <span className="font-semibold text-slate-400">Phone:</span> 
                  <span className="text-white">+92 345 0216630</span>
                </p>
                <p className="text-slate-300 flex items-center gap-3">
                  <span className="font-semibold text-slate-400">Email:</span> 
                  <a href="mailto:infofrispk@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">infofrispk@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}