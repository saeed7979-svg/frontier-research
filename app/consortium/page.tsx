export default function Consortium() {
  // Yeh aapki company ke consortium partners ki details hain
  const framework = [
    { title: "Academic Partners", role: "Project Lead / Co-PI", desc: "Joint research, publications, student research, laboratories and grant proposals" },
    { title: "Research Partners", role: "Technical Expert", desc: "Specialized expertise, methods, datasets, technical research and scientific collaboration" },
    { title: "Industry Partners", role: "Industry Partner", desc: "Applied R&D, industrial problem solving, prototypes, technology validation and commercialization" },
    { title: "Funding Partners", role: "Programme Collaboration", desc: "Collaborative proposals, consortium development and implementation of funded projects" },
    { title: "Student Network", role: "Research Participant", desc: "Thesis/dissertation projects, internships, training and research assistance" }
  ];

  return (
    <div className="py-20 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Global Network</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">International Consortium</h1>
        <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
          Connecting international professors, researchers, scientists and academic experts worldwide to support collaborative and internationally funded research projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {framework.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
            <h2 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h2>
            <div className="inline-block bg-emerald-50 text-emerald-700 font-semibold px-3 py-1 rounded text-sm mb-4">
              Role: {item.role}
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-900 text-white rounded-2xl p-10 text-center shadow-lg border border-slate-800">
        <h2 className="text-3xl font-bold mb-4">Join Our Research Network</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Whether you are an International Professor, Industry Expert, or Early-Career Researcher, there is a place for you in our consortium.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded font-medium transition-all shadow-md">
          Apply for Consortium
        </button>
      </div>
    </div>
  );
}