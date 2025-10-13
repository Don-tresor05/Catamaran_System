import React from 'react';
import Navbar from '../components/common/Navbar';
import { ArrowUpRight } from 'lucide-react';

const Homepage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#131316', minHeight: '100vh', paddingTop: '80px' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', position: 'relative' }}>
        {/* Background Pattern */}
        <div style={{ position: 'absolute', left: '2rem', top: '2rem', opacity: '0.1' }}>
          <div style={{ width: '300px', height: '300px', border: '1px solid #374151', borderRadius: '50%', marginBottom: '1rem' }}></div>
          <div style={{ width: '250px', height: '250px', border: '1px solid #374151', borderRadius: '50%', marginBottom: '1rem' }}></div>
          <div style={{ width: '200px', height: '200px', border: '1px solid #374151', borderRadius: '50%' }}></div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: '10' }}>
          {/* Left Side - Text */}
          <div>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              STUNNING PHOTOGRAPHY BY
            </p>
            <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 'bold', lineHeight: '1', marginBottom: '0' }}>
              DAMIEN BRAUN
            </h1>
          </div>
          
          {/* Right Side - CTA */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              LET'S WORK TOGETHER
            </p>
            <button style={{
              background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer'
            }}>
              <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Photography Categories */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>EVENT PHOTOGRAPHY</span>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#a855f7', borderRadius: '50%' }}></div>
          <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>COMERCIAL PHOTOGRAPHY</span>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#a855f7', borderRadius: '50%' }}></div>
          <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PRODUCT PHOTOGRAPHY</span>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#a855f7', borderRadius: '50%' }}></div>
          <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>WEDDING PHOTOGRAPHY</span>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#a855f7', borderRadius: '50%' }}></div>
          <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>LANDSCAPE PHOTOGRAPHY</span>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#a855f7', borderRadius: '50%' }}></div>
          <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>BRANDING PHOTOGRAPHY</span>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#a855f7', borderRadius: '50%' }}></div>
          <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PORTRAIT PHOTO</span>
        </div>
      </section>

      {/* Image Gallery - Single Apple Image */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img 
            src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800&h=600&fit=crop&crop=center" 
            alt="Red apple" 
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover',
              borderRadius: '1rem',
              backgroundColor: 'white'
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Homepage;