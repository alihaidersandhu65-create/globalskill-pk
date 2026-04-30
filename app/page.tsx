export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">GlobalSkill Professional Portfolio</h1>
      <p className="text-xl text-gray-400 mb-8">Data Entry & MS Word Expert</p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <a href="/specialist-work.pdf" target="_blank" className="bg-blue-600 text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          View My MS Word Work
        </a>
        <a href="https://www.fiverr.com/alihaidersandhu" target="_blank" className="bg-[#1dbf73] text-center py-3 rounded-lg font-bold hover:bg-[#19a463] transition">
          Order on Fiverr
        </a>
      </div>

      <footer className="mt-auto pt-10 text-gray-500 text-sm">
        © 2026 GlobalSkill - Professional Freelance Services
      </footer>
    </main>
  );
}
