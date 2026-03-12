import { ArrowUpRight } from 'lucide-react';
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

export default function Hero() {
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
    <section id="home" className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm tracking-widest mb-4">
            STUNNING PHOTOGRAPHY BY
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-20">
            <div className="flex items-center gap-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 md:mb-0">
              MARTIN A.k.A(SIMBA🦁)
            </h1>
              <span className="text-2xl md:text-4xl font-light">LET'S</span>
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-colors"
              >
                <ArrowUpRight className="w-6 h-6" />
              </button>
              <span className="text-2xl md:text-4xl font-light">
                WORK TOGETHER
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden mb-12 w-full">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-hidden whitespace-nowrap w-full"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full auto-rows-[200px]">
            <div className="col-span-1 row-span-2">
              <img
                src="/assets/hero/hero-1.jpg"
                alt="Basketball player"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/hero/hero-2.jpg"
                alt="Portrait"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative">
              <img
                src="/assets/hero/hero-3.jpg"
                alt="Profile silhouette"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/hero/hero-4.jpg"
                alt="Fashion portrait"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden relative">
              <img
                src="/assets/hero/hero-5.jpg"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative">
              <img
                src="/assets/hero/hero-6.jpg"
                alt="Profile silhouette"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2">
              <img
                src="/assets/hero/hero-7.jpg"
                alt="Black and white portrait"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
