import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  const [mobileSlide, setMobileSlide] = useState(0);
  const heroImages = [
    '/assets/hero/hero-1.png',
    '/assets/hero/hero-2.png',
    '/assets/hero/hero-3.png',
    '/assets/hero/hero-4.png',
    '/assets/hero/hero-5.png',
    '/assets/hero/hero-6.png',
    '/assets/hero/hero-7.png',
  ];

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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setMobileSlide((prev) => (prev + 1) % heroImages.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [heroImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black text-white pt-20 md:pt-24">
      <div className="w-full px-4 sm:px-6 py-16 md:py-20">
        <div className="w-[90%] mx-auto">
          <p className="text-gray-400 text-sm tracking-widest mb-4">
            STUNNING PHOTOGRAPHY BY
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-20">
            <div className="flex flex-col gap-0">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                CATAMARAN
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                STUDIO
              </h1>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-2xl md:text-4xl font-light">LET'S</span>
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 sm:p-4 transition-colors"
              >
                <ArrowUpRight className="w-6 h-6" />
              </button>
              <span className="text-2xl md:text-4xl font-light">WORK TOGETHER</span>
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

          <div className="md:hidden">
            <div className="media-card media-float relative rounded-[28px]">
              {heroImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Hero slide ${index + 1}`}
                  className={`aspect-[0.92] w-full object-cover transition-all duration-700 ${
                    index === mobileSlide
                      ? 'relative scale-100 opacity-100'
                      : 'absolute inset-0 scale-110 opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={`hero-mobile-${index}`}
                      onClick={() => setMobileSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === mobileSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2 rounded-full border border-white/10 bg-black/65 px-2 py-2 backdrop-blur-sm">
                  <button
                    onClick={() =>
                      setMobileSlide((prev) =>
                        prev === 0 ? heroImages.length - 1 : prev - 1
                      )
                    }
                    className="rounded-full bg-white/10 p-2 text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setMobileSlide((prev) => (prev + 1) % heroImages.length)
                    }
                    className="rounded-full bg-white/10 p-2 text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full auto-rows-[160px] sm:auto-rows-[200px]">
            <div className="col-span-1 row-span-2">
              <div className="media-card media-float rounded-2xl h-full">
                <img
                  src="/assets/hero/hero-1.png"
                  alt="Basketball player"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="media-card rounded-2xl h-full">
                <img
                  src="/assets/hero/hero-2.png"
                  alt="Portrait"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative media-card media-float">
              <img
                src="/assets/hero/hero-3.png"
                alt="Profile silhouette"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1">
              <div className="media-card rounded-2xl h-full">
                <img
                  src="/assets/hero/hero-4.png"
                  alt="Fashion portrait"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden relative media-card">
              <img
                src="/assets/hero/hero-5.png"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative media-card media-float">
              <img
                src="/assets/hero/hero-6.png"
                alt="Profile silhouette"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2">
              <div className="media-card rounded-2xl h-full">
                <img
                  src="/assets/hero/hero-7.png"
                  alt="Black and white portrait"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
