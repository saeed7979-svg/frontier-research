export default function Collaboration() {
  // Yeh aapki company ke collaboration areas ki details hain
  const collaborations = [
    { area: "Joint Research Projects", scope: "Multidisciplinary projects with universities, institutes and researchers." },
    { area: "Researcher Collaboration", scope: "Co-research, researcher matching and scientific collaboration." },
    { area: "Joint Publications", scope: "Co-authored articles, reviews, reports, books and book chapters." },
    { area: "Joint Grants", scope: "Collaborative proposals, consortium building and funded research." },
    { area: "Student Research", scope: "Research projects, thesis/dissertation collaboration and internships." },
    { area: "Laboratory Collaboration", scope: "Testing, characterization, technical research and prototypes where available." },
    { area: "Industry R&D", scope: "Applied research, industrial problem solving and technology development." },
    { area: "Innovation & Technology Transfer", scope: "Prototypes, intellectual property, patents, licensing and commercialization." }
  ];

  return (
    <div className="py-20 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Partnerships</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">Joint Research Collaboration</h1>
        <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
          We facilitate academic–industry collaboration, technical services, applied R&D and technology development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {collaborations.map((collab, index) => (
          <div key={index} className="flex bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
                ✓
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{collab.area}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{collab.scope}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Banner */}
      <div className="mt-20 bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Ready to collaborate?</h3>
          <p className="text-slate-600">Reach out to us to discuss multidisciplinary research opportunities.</p>
        </div>
        <div className="mt-6 md:mt-0 flex space-x-4">
          <div className="text-right">
            <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider mb-1">Official Contact</p>
            <p className="font-bold text-slate-800">+92 345 0216630</p>
            <p className="font-bold text-slate-800">ayazsb1993@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}