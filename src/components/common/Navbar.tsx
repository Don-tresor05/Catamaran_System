import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header style={{ 
      width: '100vw', 
      backgroundColor: '#000000', 
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      margin: '0', 
      padding: '0',
      zIndex: '1000'
    }}>
      {/* Top border line */}
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', width: '100vw', height: '1px', backgroundColor: '#374151' }}></div>
      
      <div style={{ padding: '1.5rem 2rem', width: '100%', margin: '0' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Left Side - Logo */}
          <div style={{ display: 'flex', alignItems: 'center', minWidth: '120px' }}>
            <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>
              DAMIEN
            </div>
          </div>

          {/* Center - Navigation Container */}
          <div style={{ display: 'flex', alignItems: 'center', flex: '1', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#1f2937', borderRadius: '9999px', padding: '0.25rem 0.5rem', display: 'flex', alignItems: 'center' }}>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#374151', color: 'white', fontSize: '0.875rem', fontWeight: '500', borderRadius: '9999px', margin: '0', border: 'none', cursor: 'pointer' }}>
                Home
              </button>
              <button style={{ padding: '0.5rem 1rem', color: '#9ca3af', fontSize: '0.875rem', fontWeight: '500', borderRadius: '9999px', margin: '0', border: 'none', cursor: 'pointer', backgroundColor: 'transparent' }}>
                About Me
              </button>
              <button style={{ padding: '0.5rem 1rem', color: '#9ca3af', fontSize: '0.875rem', fontWeight: '500', borderRadius: '9999px', margin: '0', border: 'none', cursor: 'pointer', backgroundColor: 'transparent' }}>
                Portfolio
              </button>
              <button style={{ padding: '0.5rem 1rem', color: '#9ca3af', fontSize: '0.875rem', fontWeight: '500', borderRadius: '9999px', margin: '0', border: 'none', cursor: 'pointer', backgroundColor: 'transparent' }}>
                Services
              </button>
            </div>
          </div>

          {/* Right Side - Contact Me */}
          <div style={{ display: 'flex', alignItems: 'center', minWidth: '120px', justifyContent: 'flex-end' }}>
            <button style={{ padding: '0.625rem 1.5rem', backgroundColor: '#374151', color: 'white', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500', border: 'none', cursor: 'pointer' }}>
              Contact Me
            </button>
          </div>
        </nav>
      </div>
      
      {/* Bottom border line */}
      <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', width: '100vw', height: '1px', backgroundColor: '#374151' }}></div>
    </header>
  );
};

export default Navbar;