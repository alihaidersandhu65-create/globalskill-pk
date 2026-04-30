import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white font-sans p-4 md:p-10">
      {/* Header */}
      <nav className="flex justify-center space-x-6 mb-12 text-sm text-gray-400">
        <span>Home</span> <span>Training</span> <span>Pricing</span>
      </nav>

      {/* Core Expertise */}
      <section className="text-center mb-16">
        <h2 className="text-green-500 font-bold mb-8">My Core Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Data Entry', 'Fast Typing', 'PDF Conversion', 'AI Solutions'].map((skill) => (
            <span key={skill} className="bg-[#112240] px-4 py-2 rounded border border-gray-700 text-xs">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* MS Word Specialist Section */}
      <div className="max-w-4xl mx-auto bg-[#112240] p-6 rounded-xl border-l-4 border-blue-500 mb-16">
        <h3 className="font-bold mb-2 flex items-center">
          <span className="mr-2">📘</span> MS Word Specialist
        </h3>
        <p className="text-gray-400 text-sm mb-4">Detailed MS Word guide including history, features, and formatting tips.</p>
        <a href="#" className="text-green-400 text-xs underline">View Full Project (PDF)</a>
      </div>

      {/* Recent Portfolio */}
      <section className="text-center mb-16">
        <h2 className="text-green-500 font-bold mb-8 text-xl">My Recent Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#112240] p-6 rounded-xl text-left border border-gray-800 shadow-lg">
            <h4 className="font-bold mb-2">📊 Data Management</h4>
            <p className="text-gray-400 text-xs">Complex Excel formatting and data cleaning projects.</p>
          </div>
          <div className="bg-[#112240] p-6 rounded-xl text-left border border-gray-800 shadow-lg">
            <h4 className="font-bold mb-2">🌐 Web Solutions</h4>
            <p className="text-gray-400 text-xs">Modern & Responsive Next.js business websites.</p>
          </div>
          <div className="bg-[#112240] p-6 rounded-xl text-left border border-gray-800 shadow-lg">
            <h4 className="font-bold mb-2">📄 File Conversion</h4>
            <p className="text-gray-400 text-xs">High-accuracy PDF to Word/Excel conversions.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="flex justify-around mb-16 text-center border-y border-gray-800 py-10">
        <div><h5 className="text-green-500 font-bold text-xl">100+</h5><p className="text-xs text-gray-400">Projects Done</p></div>
        <div><h5 className="text-blue-500 font-bold text-xl">99%</h5><p className="text-xs text-gray-400">Accuracy</p></div>
        <div><h5 className="text-purple-500 font-bold text-xl">24/7</h5><p className="text-xs text-gray-400">Support</p></div>
        <div><h5 className="text-yellow-500 font-bold text-xl">5.0</h5><p className="text-xs text-gray-400">Fiverr Rating</p></div>
      </div>

      {/* Fiverr & Project Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
        <a href="https://www.fiverr.com/" className="bg-green-600 px-10 py-3 rounded-full font-bold text-center">Fiverr Profile</a>
        <button className="bg-blue-600 px-10 py-3 rounded-full font-bold text-center">View Projects</button>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/923008609486" 
        className="fixed bottom-6 right-6 bg-blue-600 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center"
      >
        Order Now
      </a>
    </div>
  );
}
