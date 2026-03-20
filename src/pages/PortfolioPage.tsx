import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Portfolio />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}
