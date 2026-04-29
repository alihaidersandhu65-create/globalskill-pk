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
      
      <div className="flex flex-col items-center justify-center pt-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">GlobalSkill.pk</h1>
        <p className="text-xl text-gray-400 mb-8">Best AI Skill Learning Platform in Pakistan</p>
        <Link href="/training" className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-bold transition-all">
          Start Training - Rs. 499
        </Link>
      </div>
    </main>
  );
}
