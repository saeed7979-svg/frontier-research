import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section - Updated to logo.jpg */}
        <Link href="/" className="flex flex-col items-center cursor-pointer">
          <Image 
            src="/logo.jpg" 
            alt="Frontier Research Logo" 
            width={160} 
            height={55} 
            className="object-contain bg-white p-1 rounded"
          />
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/departments" className="hover:text-blue-400 transition-colors">Departments</Link>
          <Link href="/consortium" className="hover:text-blue-400 transition-colors">International Consortium</Link>
          <Link href="/collaboration" className="hover:text-blue-400 transition-colors">Collaborate</Link>
        </div>
        
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-sm font-semibold transition-colors cursor-pointer inline-block">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}