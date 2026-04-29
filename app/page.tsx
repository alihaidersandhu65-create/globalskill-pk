import React from 'react';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#020c1b', color: '#ccd6f6', minHeight: '100vh', fontFamily: "'Segoe UI', Roboto, sans-serif", scrollBehavior: 'smooth' }}>
      
      {/* AI Gradient Background Overlays */}
      <div style={{ position: 'fixed', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(100, 255, 218, 0.15) 0%, rgba(2, 12, 27, 0) 70%)', zIndex: -1 }}></div>
      <div style={{ position: 'fixed', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(136, 146, 176, 0.1) 0%, rgba(2, 12, 27, 0) 70%)', zIndex: -1 }}></div>

      {/* Navbar (AI Blurry Glass look) */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', background: 'rgba(17, 34, 64, 0.75)', backdropFilter: 'blur(10px)', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(100, 255, 218, 0.1)' }}>
        <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#64ffda', textShadow: '0 0 10px rgba(100, 255, 218, 0.4)' }}>GlobalSkill-PK</div>
        <div style={{ display: 'flex', gap: '25px' }}>
          {['Home', 'Training', 'Pricing'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#ccd6f6', textDecoration: 'none', fontSize: '0.9rem', position: 'relative', overflow: 'hidden' }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        
        {/* Header Section (AI Animated Text placeholder) */}
        <div style={{ marginBottom: '50px' }}>
            <span style={{ color: '#64ffda', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>Future of Learning & Web</span>
            <h1 style={{ fontSize: '4.2rem', color: '#e6f1ff', marginBottom: '10px', textShadow: '0 0 15px rgba(230, 241, 255, 0.2)' }}>GlobalSkill-PK</h1>
            <p style={{ fontSize: '1.3rem', color: '#8892b0', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
              Premium Web Solutions & <span style={{ color: '#64ffda' }}>Freelancing Excellence</span>, powered by Next.js.
            </p>
        </div>

        {/* Dynamic Buttons (Subtle Gradient & Glowing Hover) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '80px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/923008609486" target="_blank" style={{ 
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white', padding: '18px 45px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', transition: '0.3s', boxShadow: '0 10px 20px rgba(37, 211, 102, 0.3)' 
            }}
            onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.6)'; e.currentTarget.style.transform = 'translateY(-2px)'}}
            onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 10px 20px rgba(37, 211, 102, 0.3)'; e.currentTarget.style.transform = 'translateY(0px)'}}
          >
            WhatsApp Us
          </a>
          <a href="https://www.fiverr.com/alisandhupro" target="_blank" style={{ 
            background: 'linear-gradient(135deg, #1dbf73 0%, #19a463 100%)',
            color: 'white', padding: '18px 45px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', transition: '0.3s', boxShadow: '0 10px 20px rgba(29, 191, 115, 0.3)' 
            }}
            onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(29, 191, 115, 0.6)'; e.currentTarget.style.transform = 'translateY(-2px)'}}
            onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 10px 20px rgba(29, 191, 115, 0.3)'; e.currentTarget.style.transform = 'translateY(0px)'}}
          >
            Order on Fiverr
          </a>
        </div>

        {/* AI Training Section (Glow Card) */}
        <section id="training" style={{ background: 'rgba(17, 34, 64, 0.3)', padding: '50px', borderRadius: '25px', maxWidth: '850px', margin: '0 auto 60px', textAlign: 'left', border: '1px solid rgba(100, 255, 218, 0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', transition: '0.4s' }}
            onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 20px 50px rgba(100, 255, 218, 0.08)'; e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.3)'}}
            onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'; e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.1)'}}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <span style={{ fontSize: '1.5rem', color: '#64ffda' }}>✨</span>
            <h2 style={{ color: '#e6f1ff', margin: 0 }}>Freelance Training</h2>
          </div>
          <p style={{ color: '#ccd6f6', fontSize: '1.1rem' }}>Dominate <span style={{ color: '#64ffda', fontWeight: 'bold' }}>Fiverr & Upwork</span> with personalized guidance from Ali Sandhu.</p>
          <ul style={{ color: '#8892b0', marginTop: '20px', listStyleType: 'none', paddingLeft: '5px', lineHeight: '2.2' }}>
            <li><span style={{ color: '#64ffda', marginRight: '10px' }}>→</span> Profile & Gig Optimization</li>
            <li><span style={{ color: '#64ffda', marginRight: '10px' }}>→</span> High-Converting Pitching</li>
            <li><span style={{ color: '#64ffda', marginRight: '10px' }}>→</span> Next-Gen Web Stack (Next.js/AI tools)</li>
          </ul>
        </section>

      </div>

      <footer style={{ textAlign: 'center', padding: '50px', background: '#020c1b', borderTop: '1px solid rgba(100, 255, 218, 0.05)', color: '#8892b0', fontSize: '0.9rem' }}>
        <p>© 2026 GlobalSkill-PK | Built by Ali Sandhu</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Sargodha | Pakistan</p>
      </footer>
    </main>
  );
}
