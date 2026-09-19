import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="/" className="text-xl font-bold tracking-wider">
            FRONTIER RESEARCH
          </Link>
          <span className="text-xs text-slate-400">& INNOVATION SOLUTIONS</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/departments" className="hover:text-blue-400 transition-colors">Departments</Link>
          <Link href="/consortium" className="hover:text-blue-400 transition-colors">International Consortium</Link>
          <Link href="/collaboration" className="hover:text-blue-400 transition-colors">Collaborate</Link>
        </div>
        
        {/* Yeh Contact Us ka naya Link hai */}
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-sm font-semibold transition-colors">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}