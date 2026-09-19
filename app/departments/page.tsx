'use client';
import { useState } from 'react';

export default function Departments() {
  const [openDept, setOpenDept] = useState<number | null>(null);

  const departmentsData = [
    {
      id: 1,
      name: "Natural & Physical Sciences",
      subs: [
        { title: "Physics", desc: "Physics; applied physics; materials physics; energy physics; environmental physics; nanoscience." },
        { title: "Chemistry", desc: "Inorganic chemistry; organic chemistry; physical chemistry; analytical chemistry; environmental chemistry; green chemistry." },
        { title: "Mathematics", desc: "Pure mathematics; applied mathematics; mathematical modelling; optimization." },
        { title: "Statistics", desc: "Statistics; probability; biostatistics; quantitative methods; statistical research." },
        { title: "Earth & Atmospheric Sciences", desc: "Earth science; geology; geoscience; atmospheric science; environmental monitoring; climate systems." }
      ]
    },
    {
      id: 2,
      name: "Materials Science & Nanotechnology",
      subs: [
        { title: "Materials Science", desc: "Advanced materials; functional materials; polymers; ceramics; composites; material characterization." },
        { title: "Nanotechnology", desc: "Nanomaterials; nanostructures; nano-enabled technologies; nanoscale characterization." },
        { title: "Green Chemistry & Catalysis", desc: "Green synthesis; sustainable chemistry; catalysis; photocatalysis; environmental catalysis." },
        { title: "Surface & Interface Engineering", desc: "Surface modification; coatings; interfaces; adsorption; corrosion; functional surfaces." }
      ]
    },
    {
      id: 3,
      name: "Engineering & Infrastructure",
      subs: [
        { title: "Civil & Infrastructure Engineering", desc: "Civil engineering; structural systems; construction; infrastructure; transportation; resilient infrastructure." },
        { title: "Mechanical Engineering", desc: "Mechanical systems; thermofluids; manufacturing; design; energy systems." },
        { title: "Electrical & Electronics Engineering", desc: "Electrical systems; electronics; power systems; control; sensors; embedded systems." },
        { title: "Chemical Engineering", desc: "Chemical processes; reaction engineering; process design; separation; industrial chemistry." },
        { title: "Industrial & Systems Engineering", desc: "Industrial systems; operations; productivity; optimization; quality; supply chains." },
        { title: "Environmental Engineering", desc: "Environmental engineering; pollution control; water treatment; wastewater; waste management." },
        { title: "Agricultural Engineering", desc: "Agricultural machinery; irrigation; farm systems; precision agriculture; AgriTech." },
        { title: "Biomedical Engineering", desc: "Biomedical devices; biosensors; diagnostics; medical technologies; rehabilitation technologies." }
      ]
    },
    {
      id: 4,
      name: "Computer Science, AI & Digital Technology",
      subs: [
        { title: "Computer Science", desc: "Computer science; algorithms; software systems; computing theory; information systems." },
        { title: "Artificial Intelligence & Machine Learning", desc: "AI; machine learning; deep learning; intelligent systems; computer vision; natural language processing." },
        { title: "Data Science & Analytics", desc: "Data science; big data; predictive analytics; statistical learning; business analytics." },
        { title: "Cybersecurity", desc: "Cybersecurity; information security; network security; privacy; cyber risk." },
        { title: "Cloud & Digital Systems", desc: "Cloud computing; distributed systems; digital infrastructure; enterprise systems." },
        { title: "Internet of Things & Automation", desc: "IoT; sensors; smart systems; automation; industrial automation." },
        { title: "Software & Platform Engineering", desc: "Software engineering; web development; mobile applications; digital platforms; e-commerce systems." }
      ]
    },
    {
      id: 5,
      name: "Life Sciences & Health",
      subs: [
        { title: "Biology & Biotechnology", desc: "Biology; molecular biology; biotechnology; microbiology; applied biosciences." },
        { title: "Biomedical Sciences", desc: "Biomedical science; diagnostics; disease research; translational research." },
        { title: "Pharmaceutical Sciences", desc: "Pharmaceutical research; drug development; pharmaceutical technologies; drug delivery." },
        { title: "Public Health", desc: "Public health; epidemiology; health systems; disease prevention; community health." }
      ]
    },
    {
      id: 6,
      name: "Agriculture, Food & Water",
      subs: [
        { title: "Agricultural Sciences & AgriTech", desc: "Agricultural science; sustainable agriculture; smart farming; crop production; AgriTech." },
        { title: "Food Science & Technology", desc: "Food science; food technology; food processing; food quality; food safety." },
        { title: "Soil & Crop Sciences", desc: "Soil science; crop science; soil health; crop productivity; sustainable inputs." },
        { title: "Irrigation & Water Security", desc: "Irrigation; water resources; water security; water management." },
        { title: "Water & Wastewater Research", desc: "Water treatment; wastewater treatment; water reuse; remediation; water quality; desalination." }
      ]
    },
    {
      id: 7,
      name: "Energy, Climate & Environment",
      subs: [
        { title: "Renewable Energy", desc: "Solar energy; wind energy; renewable technologies; sustainable energy systems." },
        { title: "Energy Storage & Batteries", desc: "Batteries; energy storage; electrochemical storage; energy materials." },
        { title: "Climate & Sustainability", desc: "Climate change; climate resilience; adaptation; sustainability; sustainable development." },
        { title: "Environmental Science & Pollution Control", desc: "Environmental science; pollution; remediation; environmental monitoring; ecological risk." },
        { title: "Waste Management & Circular Economy", desc: "Solid waste; waste valorization; recycling; circular economy; resource recovery." },
        { title: "Biodiversity & Ecosystem Studies", desc: "Biodiversity; ecosystems; conservation; ecology; natural-resource management." }
      ]
    },
    {
      id: 8,
      name: "Economics, Finance & Business",
      subs: [
         { title: "Economics", desc: "Economics; development economics; applied economics; economic policy; international economics." },
         { title: "Finance & Investment", desc: "Corporate finance; investment; financial markets; portfolio management; risk management." },
         { title: "Accounting", desc: "Financial accounting; management accounting; auditing; reporting; accounting analytics." },
         { title: "Banking & FinTech", desc: "Banking; financial technology; digital banking; payments; financial innovation." },
         { title: "Business Analytics", desc: "Business analytics; decision analytics; productivity; data-driven management." },
         { title: "Management & Strategy", desc: "Management; strategic management; organizational studies; operations management." },
         { title: "Marketing & Digital Commerce", desc: "Marketing; digital marketing; consumer research; e-commerce; market research." },
         { title: "Entrepreneurship & SME Development", desc: "Entrepreneurship; startups; SMEs; innovation management; business development." }
      ]
    },
    {
      id: 9,
      name: "Social Sciences, Education & Humanities",
      subs: [
        { title: "Education & Learning Sciences", desc: "Education; curriculum; pedagogy; educational technology; learning sciences; teacher development." },
        { title: "Psychology", desc: "Psychology; behavioural science; organizational psychology; social psychology." },
        { title: "Sociology & Social Development", desc: "Sociology; social development; social inclusion; poverty; community development." },
        { title: "Communication & Media", desc: "Communication; media studies; journalism; digital communication; strategic communication." },
        { title: "Languages & Linguistics", desc: "Languages; linguistics; applied linguistics; translation; language education." },
        { title: "Culture & History", desc: "Culture; history; heritage; cultural studies; development studies." }
      ]
    },
    {
      id: 10,
      name: "Law, Policy & International Development",
      subs: [
        { title: "Law & Legal Studies", desc: "Law; legal studies; institutional law; regulatory research." },
        { title: "Public Policy & Governance", desc: "Public policy; governance; institutional reform; public administration." },
        { title: "International Relations", desc: "International relations; diplomacy; international cooperation; global affairs." },
        { title: "Development Studies", desc: "Development studies; poverty; inclusion; sustainable development; development policy." },
        { title: "Human Rights & Social Policy", desc: "Human rights; social policy; inclusion; equality; social protection." }
      ]
    },
    {
      id: 11,
      name: "Research Capacity & Commercialization",
      subs: [
        { title: "Research Methodology & Statistics", desc: "Research design; qualitative methods; quantitative methods; statistics; research ethics." },
        { title: "Academic & Scientific Writing", desc: "Scientific writing; academic writing; manuscripts; theses; dissertations; books; book chapters; editing." },
        { title: "Research Grants & Development", desc: "Grant development; research proposals; funding strategy; consortium development." },
        { title: "Intellectual Property & Technology Transfer", desc: "Intellectual property; patents; licensing; technology transfer; research commercialization." },
        { title: "Innovation & Commercialization", desc: "Innovation management; prototypes; product development; market readiness; commercialization." }
      ]
    }
  ];

  return (
    <div className="py-20 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Academic Structure</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">Our Departments</h1>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore our 11 multidisciplinary research and innovation departments working towards a knowledge-driven economy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departmentsData.map((dept) => (
          <div key={dept.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all">
            {/* Card Header (Clickable) */}
            <div 
              className="p-8 cursor-pointer hover:bg-slate-50 transition-colors"
              onClick={() => setOpenDept(openDept === dept.id ? null : dept.id)}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 font-bold text-lg transition-colors ${openDept === dept.id ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                {dept.id}
              </div>
              <h2 className="text-xl font-bold text-slate-800 leading-snug">{dept.name}</h2>
              <div className="mt-4 text-blue-600 font-medium text-sm flex items-center">
                {openDept === dept.id ? 'Hide Sub-disciplines ↑' : 'View Sub-disciplines ↓'}
              </div>
            </div>

            {/* Dropdown Content */}
            {openDept === dept.id && (
              <div className="px-8 pb-8 border-t border-slate-100 bg-slate-50 pt-6">
                <ul className="space-y-4">
                  {dept.subs.map((sub, idx) => (
                    <li key={idx}>
                      <h3 className="font-semibold text-slate-800 text-sm">{sub.title}</h3>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{sub.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}