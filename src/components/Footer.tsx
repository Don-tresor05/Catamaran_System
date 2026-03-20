import { ArrowUpRight, Instagram } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
    { label: 'Beo', href: '#' },
    { label: 'Lionel', href: '#' },
    { label: "Stessy", href: '#' },
    { label: 'Shalom', href: '#' },
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
    <footer
      id="contact"
      className="border-t border-white/10 bg-black text-white pt-16 md:pt-20"
    >
      <div className="w-full px-4 sm:px-6">
        <div className="w-[90%] mx-auto">
          <div className="relative overflow-hidden border-y border-white/10 py-4">
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

          <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-[1.15fr_1fr_1fr_1fr_1fr]">
            <div>
              <p className="mb-6 text-xs tracking-[0.24em] text-gray-500">
                A MORE MEANINGFUL HOME FOR PHOTOGRAPHY
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-light sm:text-5xl">LET'S</span>
                <button
                  onClick={scrollToContact}
                  className="rounded-full bg-blue-600 p-4 text-white transition-colors hover:bg-blue-500"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 text-3xl font-light sm:text-5xl">
                WORK TOGETHER
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-200">
                HOME
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    ABOUT ME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    MY WORKS
                  </Link>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    TESTIMONIALS
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-200">
                CLIENTS
              </h3>
              <ul className="space-y-2">
                {footerLinks.clients.map((link, index) => (
                  <li key={index}>
                    <span className="text-sm text-gray-400">{link.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-200">
                PORTFOLIO
              </h3>
              <ul className="space-y-2">
                {footerLinks.portfolio.map((link, index) => (
                  <li key={index}>
                    <Link
                      to="/portfolio"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-200">
                SERVICES
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to="/services"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
            </div>

            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/catamaran__studio/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-gray-400 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-gray-500">
              © 2026 CATAMARAN STUDIO Photography. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
