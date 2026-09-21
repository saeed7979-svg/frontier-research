import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-[#0a0f1a] border-t border-slate-800 pt-16 pb-8 relative overflow-hidden mt-auto">
      
      {/* Background Glowing Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-wide">
              FRONTIER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">RESEARCH</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              Multidisciplinary Research, Innovation & International Collaboration Services
            </p>
            <div className="inline-block bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 mt-4 shadow-inner">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest block mb-1">Registration</span>
              <span className="text-emerald-400 font-mono font-semibold">CUIN: 0352750</span>
            </div>
          </div>

          {/* Column 2: Updated Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Company Info', path: '/company-info' },
                { name: 'Objectives', path: '/objectives' },
                { name: 'Departments', path: '/departments' },
                { name: 'Consortium', path: '/consortium' },
                { name: 'Collaborate', path: '/collaborate' },
                { name: 'Joint Research', path: '/joint-research' },
                { name: 'About Us', path: '/about' },
              ].map((link, idx) => (
                <Link key={idx} href={link.path} className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-all duration-300 flex items-center group">
                  <span className="text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">›</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us (Updated Order & Icons) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
               <span className="w-1.5 h-6 bg-purple-500 rounded-full inline-block"></span> Contact Us
            </h3>
            <div className="space-y-5">
              
              {/* 1. CEO Ayaz Ahmad */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center border border-blue-500/20 group-hover:border-blue-400 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">CEO</p>
                  <p className="text-slate-300 font-semibold group-hover:text-white transition-colors">Ayaz Ahmad</p>
                </div>
              </div>

              {/* 2. Official Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-500/20 group-hover:border-purple-400 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:infofrispk@gmail.com" className="text-slate-300 hover:text-purple-400 transition-colors font-medium text-sm">infofrispk@gmail.com</a>
                </div>
              </div>

              {/* 3. Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-400 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors text-sm">+92 345 0216630</p>
                </div>
              </div>

              {/* 4. Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-orange-900/30 rounded-lg flex items-center justify-center border border-orange-500/20 group-hover:border-orange-400 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Address</p>
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-orange-400 transition-colors">
                    Al Mubashir Plaza, First Floor, Office No. 2, Main Street, Azeem Town, Khan Pur, Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Frontier Research & Innovation Solutions (SMC-PRIVATE) LIMITED. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors" title="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors" title="Twitter/X">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}