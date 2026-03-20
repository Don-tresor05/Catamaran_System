import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const getScrollY = () => {
      const root = document.getElementById('root');
      const scrollingEl = document.scrollingElement as HTMLElement | null;
      return Math.max(
        scrollingEl?.scrollTop ?? 0,
        document.documentElement.scrollTop ?? 0,
        document.body.scrollTop ?? 0,
        root?.scrollTop ?? 0,
        window.scrollY ?? 0,
        window.pageYOffset ?? 0
      );
    };

    const handleScroll = () => {
      const y = getScrollY();
      setIsScrolled(y > 50);
    };

    const opts = { passive: true } as AddEventListenerOptions;
    window.addEventListener('scroll', handleScroll, opts);
    const intervalId = window.setInterval(handleScroll, 100);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll, opts);
      window.clearInterval(intervalId);
    };
  }, []);

  const linkClass = isScrolled
    ? 'text-gray-300 font-bold hover:text-white'
    : 'text-white/80 hover:text-white';

  const ctaClass = isScrolled
    ? 'bg-white/10 hover:bg-white/20 text-gray-200 font-bold'
    : 'bg-white/10 hover:bg-white/20 text-white';

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'top-6' : 'top-0'
      }`}
    >
      <nav className={`transition-all duration-500 ${
        isScrolled 
          ? 'mx-auto max-w-6xl px-6 w-[92%] md:w-[920px] bg-black backdrop-blur-sm rounded-full shadow-none py-2.5 border border-white/50' 
          : 'w-[90%] mx-auto px-6 py-4 bg-black/80 backdrop-blur-sm'
      }`}>
        <div className="relative flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo/logo2.png"
              alt="Catamaran Studio"
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link to="/" className={`${linkClass} transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`${linkClass} transition-colors`}>
              About Me
            </Link>
            <Link to="/portfolio" className={`${linkClass} transition-colors`}>
              Portfolio
            </Link>
            <Link to="/services" className={`${linkClass} transition-colors`}>
              Services
            </Link>
          </div>

          <Link
            to="/contact"
            className={`hidden md:block ${ctaClass} px-6 py-2 rounded-lg transition-colors`}
          >
            Contact Me
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-200' : 'text-white'}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              to="/portfolio"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/services"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
