import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import CallNowButton from './components/CallNowButton';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// Remove the HTML initial loader once React is ready
const htmlLoader = document.getElementById('initial-loader');
if (htmlLoader) htmlLoader.style.display = 'none';

// Record when React mounted to offset the loading timer
(window as any).__reactMountTime = Date.now();

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div className={`w-full min-h-screen bg-black transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <CallNowButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
