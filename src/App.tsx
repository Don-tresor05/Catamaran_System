import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
