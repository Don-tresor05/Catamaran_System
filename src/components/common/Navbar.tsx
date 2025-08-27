// src/components/layout/Header.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-[#131316] border-b border-[#1C1C21]">
      <div className="max-w-[1440px] mx-auto px-16 h-[89px]">
        <div className="flex justify-between items-center h-full relative">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-semibold">DAMIEN</span>
          </div>

          {/* Navigation Items - Center */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex rounded-2xl overflow-hidden border border-[#2A2A2F] bg-[#0E0E11]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-7 py-4 text-sm font-medium font-manrope border-r border-[#2A2A2F] last:border-r-0 transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'bg-[#1A1A1F] text-white'
                      : 'text-[#AFB0B6] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Contact Button - Right side */}
          <div className="flex items-center">
          <button className="bg-[#1C1C21] text-white px-6 py-3 rounded-xl text-sm font-medium font-manrope hover:bg-[#2C2C32]">
  Contact Me
</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;