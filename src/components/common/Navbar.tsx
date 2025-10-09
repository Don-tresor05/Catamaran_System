import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-black py-6 px-8">
      <nav className="w-full flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wider whitespace-nowrap">
          DAMIEN
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full p-2 flex-shrink-0">
          <button className="px-6 py-2.5 bg-[#2a2a2a] text-white rounded-full font-medium text-sm transition-all hover:bg-[#3a3a3a] whitespace-nowrap">
            Home
          </button>
          <button className="px-6 py-2.5 text-gray-400 rounded-full font-medium text-sm transition-all hover:text-white hover:bg-[#2a2a2a] whitespace-nowrap">
            About Me
          </button>
          <button className="px-6 py-2.5 text-gray-400 rounded-full font-medium text-sm transition-all hover:text-white hover:bg-[#2a2a2a] whitespace-nowrap">
            Portfolio
          </button>
          <button className="px-6 py-2.5 text-gray-400 rounded-full font-medium text-sm transition-all hover:text-white hover:bg-[#2a2a2a] whitespace-nowrap">
            Services
          </button>
        </div>

        {/* Contact Me Button */}
        <button className="px-6 py-2.5 bg-[#2a2a2a] text-white rounded-full font-medium text-sm border border-gray-800 transition-all hover:bg-[#3a3a3a] whitespace-nowrap flex-shrink-0">
          Contact Me
        </button>
      </nav>
    </header>
  );
};

export default Navbar;