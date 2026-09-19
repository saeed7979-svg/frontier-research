import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white tracking-wider mb-4">FRONTIER RESEARCH</h3>
          <p className="text-sm leading-relaxed mb-4">
            Multidisciplinary Research, Innovation & International Collaboration Services
          </p>
          <p className="text-xs text-slate-500">CUIN: 0352750</p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/departments" className="hover:text-blue-400 transition-colors">Departments</Link></li>
            <li><Link href="/consortium" className="hover:text-blue-400 transition-colors">International Consortium</Link></li>
            <li><Link href="/collaboration" className="hover:text-blue-400 transition-colors">Collaborate</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="text-slate-400 block mb-1">Address:</span> Al Mubashir Plaza, First Floor, Office No. 2, Main Street, Azeem Town, Khan Pur, Pakistan</li>
            <li><span className="text-slate-400 block mt-3 mb-1">Phone:</span> +92 345 0216630</li>
            <li><span className="text-slate-400 block mt-3 mb-1">Email:</span> ayazsb1993@gmail.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        © {new Date().getFullYear()} Frontier Research & Innovation Solutions (SMC-PRIVATE) LIMITED. All rights reserved.
      </div>
    </footer>
  );
}