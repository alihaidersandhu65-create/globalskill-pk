import React from 'react';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ccd6f6', minHeight: '100vh', fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#112240', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #233554' }}>
        <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#64ffda' }}>GlobalSkill-PK</div>
        <div style={{ display: 'flex', gap: '25px' }}>
          <a href="#" style={{ color: '#ccd6f6', textDecoration: 'none' }}>Home</a>
          <a href="#training" style={{ color: '#ccd6f6', textDecoration: 'none' }}>Training</a>
          <a href="#pricing" style={{ color: '#ccd6f6', textDecoration: 'none' }}>Pricing</a>
        </div>
      </nav>

      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#64ffda', marginBottom: '10px' }}>GlobalSkill-PK</h1>
        <p style={{ fontSize: '1.2rem', color: '#8892b0', marginBottom: '40px' }}>Premium Web Solutions & Freelancing Excellence.</p>

        {/* Fiverr & WhatsApp Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/923008609486" target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 35px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
            WhatsApp Us
          </a>
          {/* Aapki Fiverr Profile ka link yahan aayega */}
          <a href="https://www.fiverr.com/alisandhupro" target="_blank" style={{ backgroundColor: '#1dbf73', color: 'white', padding: '15px 35px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
            Order on Fiverr
          </a>
        </div>

        {/* Training Section */}
        <section id="training" style={{ background: '#112240', padding: '40px', borderRadius: '20px', maxWidth: '800px', margin: '0 auto 60px', textAlign: 'left', border: '1px solid #64ffda' }}>
          <h2 style={{ color: '#64ffda' }}>Freelance Training</h2>
          <p>Learn to dominate Fiverr & Upwork with Ali Sandhu.</p>
          <ul style={{ color: '#8892b0', marginTop: '10px' }}>
            <li>✓ Profile & Gig Optimization</li>
            <li>✓ Order Closing Techniques</li>
            <li>✓ Modern Tech Stack (Next.js)</li>
          </ul>
        </section>

      </div>

      <footer style={{ textAlign: 'center', padding: '40px', background: '#020c1b', borderTop: '1px solid #233554' }}>
        <p>© 2026 GlobalSkill-PK | Built by Ali Sandhu</p>
      </footer>
    </main>
  );
}
