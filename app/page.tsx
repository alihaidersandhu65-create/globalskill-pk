import React from 'react';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ccd6f6', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      <h1 style={{ fontSize: '3rem', color: '#64ffda', marginBottom: '10px' }}>GlobalSkill-PK</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
        expert freelancing & web solutions. We are building something amazing here.
      </p>

      {/* Services */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto 40px' }}>
        <div style={{ border: '1px solid #64ffda', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#64ffda' }}>Web Development</h3>
          <p>Professional Next.js & React websites.</p>
        </div>
        <div style={{ border: '1px solid #64ffda', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#64ffda' }}>Freelancing Training</h3>
          <p>Master Fiverr & Upwork strategies.</p>
        </div>
        <div style={{ border: '1px solid #64ffda', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#64ffda' }}>Digital Solutions</h3>
          <p>Grow your business digital presence.</p>
        </div>
      </div>

      {/* Portfolio Section */}
      <h2 style={{ color: '#64ffda', marginTop: '60px' }}>Our Featured Work</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <div style={{ width: '300px', background: '#112240', padding: '15px', borderRadius: '8px' }}>
          <div style={{ height: '150px', background: '#233554', borderRadius: '5px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Project 1</div>
          <h4 style={{ color: '#64ffda' }}>E-commerce Site</h4>
        </div>
        <div style={{ width: '300px', background: '#112240', padding: '15px', borderRadius: '8px' }}>
          <div style={{ height: '150px', background: '#233554', borderRadius: '5px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Project 2</div>
          <h4 style={{ color: '#64ffda' }}>Business Dashboard</h4>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <a href="https://wa.me/923008609486" target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>
          Chat on WhatsApp
        </a>
      </div>

    </main>
  );
}
