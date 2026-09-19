import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-900 text-white py-24 px-8 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-blue-400 font-semibold tracking-widest text-sm mb-4 uppercase">
            Multidisciplinary Research & Innovation
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advancing Knowledge for a Sustainable Economy
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl">
            A trusted Pakistan-based platform connecting international professors, researchers, and industry leaders to drive innovation and digital opportunity.
          </p>
          <div className="flex space-x-4">
            <Link href="/departments" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded font-medium transition-all text-white cursor-pointer inline-block">
              Explore Departments
            </Link>
            
            <Link href="/consortium" className="border border-slate-600 hover:border-slate-400 px-8 py-3 rounded font-medium transition-all text-white cursor-pointer inline-block">
              Join Consortium
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="max-w-7xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To become a trusted Pakistan-based platform for research, innovation, education and digital opportunity, contributing to a knowledge-driven and sustainable economy.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold mb-4 text-emerald-600">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            To develop and deliver research, training, technology and digital solutions that improve skills, access, productivity, entrepreneurship and innovation.
          </p>
        </div>
      </section>
    </div>
  );
}