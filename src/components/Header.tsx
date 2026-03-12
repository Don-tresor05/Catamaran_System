import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      setScrollY(y);
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

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
      <nav className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${
        isScrolled 
          ? 'w-[92%] md:w-[920px] bg-transparent backdrop-blur-sm rounded-full shadow-none py-2.5 border border-white/10' 
          : 'w-full py-4 bg-black/80 backdrop-blur-sm'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/assets/logo/logo2.png"
              alt="Catamaran Studio"
              className="h-14 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`${linkClass} transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`${linkClass} transition-colors`}
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`${linkClass} transition-colors`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`${linkClass} transition-colors`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${ctaClass} px-6 py-2 rounded-lg transition-colors`}
            >
              Contact Me
            </button>
          </div>

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
            <button
              onClick={() => scrollToSection('home')}
              className="block text-white/80 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-white/80 hover:text-white transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block text-white/80 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block text-white/80 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-white/80 hover:text-white transition-colors"
            >
              Contact Me
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
