import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HomePortfolio from '../components/HomePortfolio';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HomePortfolio />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
