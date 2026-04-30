import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <nav className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-400">GlobalSkill.pk</h1>
      </nav>

      <main className="max-w-6xl mx-auto p-10 text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Master AI Skills for <span className="text-blue-500">Rs. 499/month</span>
        </h2>
        <p className="text-gray-400 text-xl mb-12">Join 1000+ students already learning and earning!</p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Web Solutions</h3>
            <p className="text-gray-400">Next.js aur React mein professional apps banana sikhain.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Digital Marketing</h3>
            <p className="text-gray-400">AI tools se business scale karna sikhain.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Data Management</h3>
            <p className="text-gray-400">Professional data entry aur analysis skills.</p>
          </div>
        </div>
      </main>

      {/* WhatsApp Button with your number 03008609486 */}
      <a 
        href="https://wa.me/923008609486?text=I%20want%20to%20join%20GlobalSkill" 
        className="fixed bottom-10 right-10 bg-green-500 p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 transition"
      >
        <span className="font-bold text-white px-2">Chat with us</span>
      </a>
    </div>
  );
}
