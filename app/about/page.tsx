import React from 'react';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-300">FRONTIER RESEARCH & INNOVATION SOLUTIONS</h2>
        <p className="text-slate-300 mt-2">(SMC-PRIVATE) LIMITED — Pakistan</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-900">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">VISION</h3>
            <p className="text-slate-600 text-justify leading-relaxed">
              To become a trusted Pakistan-based platform for research, innovation, education and digital opportunity, contributing to a knowledge-driven and sustainable economy.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-900">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">MISSION</h3>
            <p className="text-slate-600 text-justify leading-relaxed">
              To develop and deliver research, training, technology and digital solutions that improve skills, access, productivity, entrepreneurship and innovation.
            </p>
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">STRATEGIC OBJECTIVES</h3>
          <p className="text-slate-600 mb-8 text-lg">
            The company pursue the following objectives as a practical framework for research, innovation, capacity building and international collaboration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              "Advance multidisciplinary research across the company's identified fields and disciplines.",
              "To Build international professor, researcher, university, research-institute and industry networks.",
              "To Develop collaborative research projects, proposals and consortia for eligible funding programmes.",
              "To Promote innovation, prototypes, intellectual property, technology transfer and responsible commercialization.",
              "For Strengthen research capacity through methodology, scientific writing, data analysis, training and mentoring.",
              "To Support applied research addressing environmental, energy, water, agriculture, health, technology and development challenges.",
              "To Facilitate academic-industry collaboration, testing, technical services, applied R&D and technology development.",
              "For Support student, scholar and early-career researcher collaboration, internships, theses, publications and research projects.",
              "To Develop digital and analytical solutions that improve skills, productivity, access, entrepreneurship and innovation.",
              "To Establish a scalable Pakistan-based platform for long-term national and international research collaboration."
            ].map((objective, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center mr-4 mt-1">
                  {index + 1}
                </div>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company & Legal Information Table */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">COMPANY & LEGAL INFORMATION</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="p-4 border border-blue-800 w-1/3">Information</th>
                  <th className="p-4 border border-blue-800">Official Details</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="bg-slate-50">
                  <td className="p-4 border border-slate-300 font-semibold">Company / Brand Name</td>
                  <td className="p-4 border border-slate-300">Frontier Research & Innovation Solutions</td>
                </tr>
                <tr>
                  <td className="p-4 border border-slate-300 font-semibold">Legal Company Name</td>
                  <td className="p-4 border border-slate-300">FRONTIER RESEARCH & INNOVATION SOLUTIONS (SMC-PRIVATE) LIMITED</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 border border-slate-300 font-semibold">Company Status</td>
                  <td className="p-4 border border-slate-300">Company incorporated under the Companies Act, 2017 (XIX of 2017); limited by shares.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-slate-300 font-semibold">Corporate Unique Identification No. (CUIN)</td>
                  <td className="p-4 border border-slate-300">0352750</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 border border-slate-300 font-semibold">Date of Incorporation</td>
                  <td className="p-4 border border-slate-300">27 August 2026</td>
                </tr>
                <tr>
                  <td className="p-4 border border-slate-300 font-semibold">Chief Executive Officer (CEO)</td>
                  <td className="p-4 border border-slate-300 font-bold text-blue-900">Ayaz Ahmad</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 border border-slate-300 font-semibold">Official Contact Number</td>
                  <td className="p-4 border border-slate-300">+92 345 0216630</td>
                </tr>
                <tr>
  <td className="p-4 border border-slate-300 font-semibold">Official Email</td>
  <td className="p-4 border border-slate-300">infofrispk@gmail.com</td>
</tr>
                <tr className="bg-slate-50">
                  <td className="p-4 border border-slate-300 font-semibold">Registered / Business Address</td>
                  <td className="p-4 border border-slate-300">Al Mubashir Plaza, First Floor, Office No. 2, Main Street, Azeem Town, Khan Pur, Pakistan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}