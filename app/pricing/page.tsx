export default function Pricing() {
  const plans = [
    { title: "Starter", price: "$150", features: ["Data Entry", "PDF to Word", "Basic Formatting"] },
    { title: "Professional", price: "$450", features: ["Fast Typing", "Excel Automation", "Priority Support"] },
    { title: "Enterprise", price: "$850", features: ["Full Agency Website", "API Integration", "Advanced Branding"] }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-10 text-green-400">Our Services & Rates</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan) => (
          <div key={plan.title} className="border border-gray-700 p-8 rounded-2xl w-80 bg-[#112240] hover:border-green-400 transition-all">
            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-4xl font-bold text-green-400 mb-6">{plan.price}</p>
            <ul className="text-left space-y-3 text-gray-300">
              {plan.features.map(f => <li key={f}>✅ {f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
