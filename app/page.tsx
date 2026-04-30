import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white font-sans">
      {/* Top Header */}
      <nav className="flex justify-center space-x-8 p-6 text-sm text-gray-400">
        <span>Home</span> <span>Training</span> <span>Pricing</span>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold mb-4">GlobalSkill.pk</h1>
        <p className="text-xl text-gray-300 mb-8">Best AI Skill Learning Platform in Pakistan</p>
        
        <div className="flex justify-center mb-12">
          <button className="bg-[#1dbf73] text-black font-bold px-8 py-3 rounded-md hover:bg-green-400 transition">
            Start Training - Rs. 499
          </button>
        </div>

        {/* Crypto Market Info from your video */}
        <div className="flex justify-center gap-12 text-sm">
          <div className="text-left">
            <p className="text-gray-500 uppercase">Ethereum (ETH)</p>
            <p className="text-blue-400 font-bold">Trading Live</p>
          </div>
          <div className="text-left">
            <p className="text-gray-500 uppercase">Solana (SOL)</p>
            <p className="text-purple-400 font-bold">Market Active</p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-green-500 font-bold text-center mb-8">My Core Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Data Entry', 'Fast Typing', 'PDF Conversion', 'AI Solutions'].map((skill) => (
            <div key={skill} className="bg-[#112240] p-4 rounded border border-gray-800 text-center text-xs">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-green-500 font-bold mb-10 text-xl">My Recent Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#112240] p-8 rounded-xl border border-gray-800 text-left">
            <h4 className="font-bold mb-2">📊 Data Management</h4>
            <p className="text-gray-400 text-xs leading-relaxed">Complex Excel formatting and data cleaning projects.</p>
          </div>
          <div className="bg-[#112240] p-8 rounded-xl border border-gray-800 text-left">
            <h4 className="font-bold mb-2">🌐 Web Solutions</h4>
            <p className="text-gray-400 text-xs leading-relaxed">Modern & Responsive Next.js business websites.</p>
          </div>
          <div className="bg-[#112240] p-8 rounded-xl border border-gray-800 text-left">
            <h4 className="font-bold mb-2">📄 File Conversion</h4>
            <p className="text-gray-400 text-xs leading-relaxed">High-accuracy PDF to Word/Excel conversions.</p>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-32">
        <a href="https://www.fiverr.com/" className="bg-[#1dbf73] text-black px-12 py-4 rounded-full font-bold w-64 text-center shadow-lg">
          Fiverr Profile
        </a>
        <a href="/portfolio.pdf" target="_blank" className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold w-64 text-center shadow-lg">
          View Projects
        </button>
      </div>

      {/* Results Section */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-white font-bold mb-10 text-2xl">How I Deliver Results</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-green-500 p-6 rounded-xl bg-[#112240]">
            <h4 className="font-bold mb-2 text-green-500">1. Analyze</h4>
            <p className="text-gray-400 text-xs">Requirements ko achi tarah samajhna taake mistake na ho.</p>
          </div>
          <div className="border border-blue-500 p-6 rounded-xl bg-[#112240]">
            <h4 className="font-bold mb-2 text-blue-500">2. Execute</h4>
            <p className="text-gray-400 text-xs">100% accuracy aur fast speed ke sath kaam mukammal karna.</p>
          </div>
          <div className="border border-purple-500 p-6 rounded-xl bg-[#112240]">
            <h4 className="font-bold mb-2 text-purple-500">3. Deliver</h4>
            <p className="text-gray-400 text-xs">On-time delivery aur revision support taake aap satisfy hon.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/923008609486" 
        className="fixed bottom-8 right-8 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl z-50 hover:bg-blue-500"
      >
        Order Now
      </a>
    </div>
  );
}
