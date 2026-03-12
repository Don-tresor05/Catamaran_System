import { ArrowUpRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';

const categories = [
  'EVENT PHOTOGRAPHY',
  'COMERCIAL PHOTOGRAPHY',
  'PRODUCT PHOTOGRAPHY',
  'WEDDING PHOTOGRAPHY',
  'LANDSCAPE PHOTOGRAPHY',
  'BRANDING PHOTOGRAPHY',
  'PORTRAIT PHOTOGRAPHY',
];

const footerLinks = {
  home: [
    { label: 'ABOUT ME', href: '#about' },
    { label: 'MY WORKS', href: '#portfolio' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
  ],
  clients: [
    { label: 'KLOVESTO', href: '#' },
    { label: 'NUKEWAY', href: '#' },
    { label: "CLOVEN's", href: '#' },
    { label: 'MENVOL', href: '#' },
  ],
  portfolio: [
    { label: 'EVENTS', href: '#' },
    { label: 'PORTRAIT', href: '#' },
    { label: 'BRANDING', href: '#' },
    { label: 'COMMERCIALE', href: '#' },
    { label: 'WEDDING', href: '#' },
  ],
  services: [
    { label: 'PORTRAITS', href: '#' },
    { label: 'EVENTS', href: '#' },
    { label: 'COMMERCIAL', href: '#' },
  ],
};

export default function Footer() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-16 md:pt-20 pb-8">
      <div className="w-full px-4 sm:px-6">
        <div className="w-full">
          <div className="text-center mb-12">
            <div className="text-[120px] md:text-[200px] font-bold opacity-10 leading-none">
              CATAMARAN STUDIO
            </div>
          </div>

          <div className="relative overflow-hidden mb-12">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-hidden whitespace-nowrap"
            >
              {[...categories, ...categories].map((category, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-blue-500">✦</span>
                  <span className="text-gray-400 text-sm tracking-wider">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm mb-6">
              A MORE MEANINGFUL HOME FOR PHOTOGRAPHY
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-3xl md:text-5xl font-light">LET'S</span>
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-colors"
              >
                <ArrowUpRight className="w-6 h-6" />
              </button>
              <span className="text-3xl md:text-5xl font-light">
                WORK TOGETHER
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">HOME</h3>
              <ul className="space-y-2">
                {footerLinks.home.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">CLIENTS</h3>
              <ul className="space-y-2">
                {footerLinks.clients.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">PORTFOLIO</h3>
              <ul className="space-y-2">
                {footerLinks.portfolio.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
            <div className="flex gap-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>

            <div className="flex gap-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              © 2026 CATAMARAN STUDIO Photography. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
