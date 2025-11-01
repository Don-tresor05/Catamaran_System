import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/landingsections/HeroSection';

const Homepage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#131316', minHeight: '100vh', paddingTop: '80px' }}>
      <Navbar />
      <HeroSection />
      
    </div>
  );
};

export default Homepage;