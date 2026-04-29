import Link from 'next/link';

export default function Home() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Training', href: '/training' },
    { name: 'Pricing', href: '#pricing' }
  ];

  return (
    <main className="min-h-screen bg-[#0a192f] text-white">
      <nav className="p-6 flex justify-center gap-8">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="hover:text-green-400 transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>
      <section className="py-12 bg-[#112240] mt-10"> <div className="max-w-4xl mx-auto px-4"> <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">My Core Expertise</h2> <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> <div className="p-4 border border-gray-700 rounded-xl">🚀 Data Entry</div> <div className="p-4 border border-gray-700 rounded-xl">⌨️ Fast Typing</div> <div className="p-4 border border-gray-700 rounded-xl">📄 PDF Conversion</div> <div className="p-4 border border-gray-700 rounded-xl">🤖 AI Solutions</div> </div> </div> </section>
      <section className="py-16 px-4"> <h2 className="text-3xl font-bold text-center mb-12">How I Deliver Results</h2> <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"> <div className="p-6 bg-[#112240] rounded-2xl border-t-4 border-green-500"> <h3 className="text-xl font-bold mb-2">1. Analyze</h3> <p className="text-gray-400">Requirements ko achi tarah samajhna taake mistake na ho.</p> </div> <div className="p-6 bg-[#112240] rounded-2xl border-t-4 border-blue-500"> <h3 className="text-xl font-bold mb-2">2. Execute</h3> <p className="text-gray-400">100% accuracy aur fast speed ke sath kaam mukammal karna.</p> </div> <div className="p-6 bg-[#112240] rounded-2xl border-t-4 border-purple-500"> <h3 className="text-xl font-bold mb-2">3. Deliver</h3> <p className="text-gray-400">On-time delivery aur revision support taake aap satisfy hon.</p> </div> </div> </section>
      
      <div className="flex flex-col items-center justify-center pt-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">GlobalSkill.pk</h1>
        <p className="text-xl text-gray-400 mb-8">Best AI Skill Learning Platform in Pakistan</p>
        <Link href="/training" className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-bold transition-all">
          Start Training - Rs. 499
        </Link>
      </div>
      <section className="py-8 bg-[#0a192f] border-t border-gray-800"> <div className="max-w-4xl mx-auto px-4 flex justify-around items-center"> <div className="text-center"> <p className="text-gray-400 text-sm">Ethereum (ETH)</p> <p className="text-xl font-bold text-blue-400">Trading Live</p> </div> <div className="h-10 w-[1px] bg-gray-700"></div> <div className="text-center"> <p className="text-gray-400 text-sm">Solana (SOL)</p> <p className="text-xl font-bold text-purple-400">Market Active</p> </div> </div> </section>
      <footer className="bg-[#050d1a] py-12 border-t border-gray-800 text-center"> <div className="max-w-4xl mx-auto px-4"> <h3 className="text-xl font-bold text-green-400 mb-4">GlobalSkill.pk</h3> <p className="text-gray-400 mb-6">Expert Freelance Solutions | Data Entry | Crypto Analysis</p> <div className="flex justify-center gap-6 mb-8"> <a href="/training" className="text-gray-300 hover:text-white">Training</a> <a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a> <a href="https://wa.me/923413813819" className="text-gray-300 hover:text-white">Contact</a> </div> <p className="text-sm text-gray-600">© 2026 GlobalSkill.pk - All Rights Reserved.</p> </div> </footer>
    </main>
  );
}
