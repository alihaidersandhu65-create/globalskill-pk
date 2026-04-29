import React from 'react';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ccd6f6', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      {/* Header Section */}
      <h1 style={{ fontSize: '3rem', color: '#64ffda', marginBottom: '10px' }}>GlobalSkill-PK</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
        expert freelancing & web solutions. We are building something amazing here.
      </p>

      {/* Services Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ border: '1px solid #64ffda', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#64ffda' }}>Web Development</h3>
          <p>Professional Next.js & React websites for your business.</p>
        </div>
        <div style={{ border: '1px solid #64ffda', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#64ffda' }}>Freelancing Training</h3>
          <p>Learn how to dominate Fiverr, Upwork, and more.</p>
        </div>
        <div style={{ border: '1px solid #64ffda', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#64ffda' }}>Digital Solutions</h3>
          <p>Custom tools and strategies to grow your digital presence.</p>
        </div>
      </div>

      {/* WhatsApp Button with your number */}
      <div style={{ marginTop: '50px' }}>
        <a href="https://wa.me/923008609486" target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>
          Chat on WhatsApp
        </a>
      </div>

    </main>
  );
}
