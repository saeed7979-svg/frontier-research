import React from 'react';

export default function JointResearch() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Header Section */}
      <section className="bg-purple-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Joint Research Collaboration</h1>
        <p className="text-purple-200 mt-2 text-lg max-w-2xl mx-auto">
          Explore our multidisciplinary collaboration areas and scope for research and innovation.
        </p>
      </section>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-purple-800 text-white">
                  <th className="p-4 border border-purple-900 w-1/3 text-lg font-semibold">Collaboration Area</th>
                  <th className="p-4 border border-purple-900 text-lg font-semibold">Scope</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">Joint Research Projects</td>
                  <td className="p-4 border border-purple-200">Multidisciplinary projects with universities, institutes and researchers.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">Researcher Collaboration</td>
                  <td className="p-4 border border-purple-200">Co-research, researcher matching and scientific collaboration.</td>
                </tr>
                <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">Joint Publications</td>
                  <td className="p-4 border border-purple-200">Co-authored articles, reviews, reports, books and book chapters.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">Joint Grants</td>
                  <td className="p-4 border border-purple-200">Collaborative proposals, consortium building and funded research.</td>
                </tr>
                <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">Student Research</td>
                  <td className="p-4 border border-purple-200">Research projects, thesis/dissertation collaboration and internships.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">Laboratory Collaboration</td>
                  <td className="p-4 border border-purple-200">Testing, characterization, technical research and prototypes where available.</td>
                </tr>
                <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">Industry R&D</td>
                  <td className="p-4 border border-purple-200">Applied research, industrial problem solving and technology development.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">Innovation & Technology Transfer</td>
                  <td className="p-4 border border-purple-200">Prototypes, intellectual property, patents, licensing and commercialization.</td>
                </tr>
                <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                  <td className="p-4 border border-purple-200 font-bold text-purple-900">International Collaboration</td>
                  <td className="p-4 border border-purple-200">Cross-border research, knowledge exchange and institutional partnerships.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}