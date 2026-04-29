export default function Pricing() {
  const webPlans = [
    { title: "Starter Business", price: "$150", desc: "Professional 1-page landing page." },
    { title: "Agency Pro", price: "$450", desc: "Complete business website (5 pages)." },
    { title: "Enterprise Hub", price: "$850", desc: "Full-scale agency website + API." }
  ];

  const dataPlans = [
    { title: "Basic Data Entry", price: "$10", desc: "2 hours of data entry or PDF conversion." },
    { title: "Standard VA", price: "$30", desc: "6 hours of web research & Excel formatting." },
    { title: "Premium Admin", price: "$100", desc: "Full day virtual assistant & complex tasks." }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-green-400 text-center">Services & Pricing</h1>
      
      <h2 className="text-2xl font-semibold mb-6 text-blue-400 border-b border-gray-700 pb-2">Web Development (Next.js)</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {webPlans.map((plan) => (
          <div key={plan.title} className="border border-gray-700 p-6 rounded-xl w-72 bg-[#112240]">
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold text-green-400 mb-4">{plan.price}</p>
            <p className="text-sm text-gray-400">{plan.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-purple-400 border-b border-gray-700 pb-2">Data Entry & Virtual Assistant</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {dataPlans.map((plan) => (
          <div key={plan.title} className="border border-gray-700 p-6 rounded-xl w-72 bg-[#112240]">
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold text-green-400 mb-4">{plan.price}</p>
            <p className="text-sm text-gray-400">{plan.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
