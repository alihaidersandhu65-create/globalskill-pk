import React from 'react';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ccd6f6', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      <h1 style={{ fontSize: '3.5rem', color: '#64ffda', marginBottom: '10px' }}>GlobalSkill-PK</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 40px', color: '#8892b0' }}>
        Premium Web Solutions & Freelancing Excellence. We transform your digital ideas into reality.
      </p>

      {/* Services Section */}
      <h2 style={{ color: '#64ffda', marginBottom: '30px' }}>Our Expertise</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto 60px' }}>
        <div style={{ border: '1px solid #233554', padding: '30px', borderRadius: '12px', background: '#112240' }}>
          <h3 style={{ color: '#64ffda' }}>Web Development</h3>
          <p>Modern, responsive websites using Next.js & React.</p>
        </div>
        <div style={{ border: '1px solid #233554', padding: '30px', borderRadius: '12px', background: '#112240' }}>
          <h3 style={{ color: '#64ffda' }}>Agency Training</h3>
          <p>Complete roadmap to dominate Fiverr and Upwork.</p>
        </div>
        <div style={{ border: '1px solid #233554', padding: '30px', borderRadius: '12px', background: '#112240' }}>
          <h3 style={{ color: '#64ffda' }}>Digital Growth</h3>
          <p>SEO and Branding strategies for global scaling.</p>
        </div>
      </div>

      {/* Pricing Section */}
      <h2 style={{ color: '#64ffda', marginBottom: '30px' }}>Service Packages</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', marginBottom: '60px' }}>
        <div style={{ width: '280px', padding: '25px', border: '2px solid #64ffda', borderRadius: '15px', background: '#0a192f' }}>
          <h3 style={{ color: '#64ffda' }}>Starter</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>$150</p>
          <ul style={{ textAlign: 'left', fontSize: '0.9rem', color: '#8892b0' }}>
            <li>Single Page Design</li>
            <li>Basic SEO</li>
            <li>Contact Form</li>
          </ul>
        </div>
        <div style={{ width: '280px', padding: '25px', border: '2px solid #64ffda', borderRadius: '15px', background: '#112240', transform: 'scale(1.05)' }}>
          <h3 style={{ color: '#64ffda' }}>Agency Pro</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>$450</p>
          <ul style={{ textAlign: 'left', fontSize: '0.9rem', color: '#8892b0' }}>
            <li>Full Website (5+ Pages)</li>
            <li>Custom Features</li>
            <li>Premium Support</li>
          </ul>
        </div>
        <div style={{ width: '280px', padding: '25px', border: '2px solid #64ffda', borderRadius: '15px', background: '#0a192f' }}>
          <h3 style={{ color: '#64ffda' }}>Training</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>$50</p>
          <ul style={{ textAlign: 'left', fontSize: '0.9rem', color: '#8892b0' }}>
            <li>1-on-1 Mentorship</li>
            <li>Fiverr Gig Audit</li>
            <li>Order Winning Tips</li>
          </ul>
        </div>
      </div>

      {/* Final Call to Action */}
      <div style={{ marginTop: '40px' }}>
        <a href="https://wa.me/923008609486" target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '18px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)' }}>
          Get Started Now
        </a>
      </div>

    </main>
  );
}
