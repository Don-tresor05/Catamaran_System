import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const highlights = [
  'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS, AND MORE',
  'SKILLED PHOTOGRAPHERS WHO KNOW HOW TO SEIZE THE MOMENT',
  'A MIX OF CANDID AND POSED SHOTS FOR A COMPREHENSIVE STORY',
  "QUICK TURNAROUND FOR YOU TO RELIVE THE DAY'S HIGHLIGHTS",
];

const slides = [
  '/assets/services/services-1.png',
  '/assets/hero/hero-7.png',
  '/assets/portfolio/portfolio-2.png',
];

export default function Services() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const changeSlide = (direction: 1 | -1) => {
    setSlideIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStart === null) return;
    const diff = clientX - touchStart;
    if (diff > 60) {
      changeSlide(-1);
    } else if (diff < -60) {
      changeSlide(1);
    }
    setTouchStart(null);
  };

  return (
    <section id="services" className="min-h-screen bg-black text-white py-16 md:py-20">
      <div className="w-full px-4 sm:px-6">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mb-12">
            <div>
              <p className="text-gray-400 text-sm tracking-widest mb-2">
                SERVICES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                MY PHOTOGRAPHY SERVICES
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white">
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="text-white/80 hover:text-white md:ml-4 transition-colors">
                View All Services →
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold">EVENTS</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8">
                Our event photography service is dedicated to capturing the magic
                of your special occasions. Whether it's a wedding, corporate
                event, or milestone celebration, we're there to document every
                heartfelt moment. We blend into the background, ensuring natural
                and candid shots that reflect the emotions of the day.
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-white font-semibold mb-4">
                  Service Highlights
                </p>
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✦</span>
                    <p className="text-gray-400 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                className="media-card media-float relative rounded-[28px]"
                onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
                onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                {slides.map((slide, index) => (
                  <img
                    key={slide}
                    src={slide}
                    alt={`Event photography slide ${index + 1}`}
                    className={`aspect-[0.95] w-full object-cover transition-all duration-700 ${
                      index === slideIndex
                        ? 'relative opacity-100 scale-100'
                        : 'absolute inset-0 opacity-0 scale-110'
                    }`}
                  />
                ))}

                <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-between px-4">
                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={`event-slide-${index}`}
                        onClick={() => setSlideIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === slideIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                        }`}
                        aria-label={`Show event photography slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2 rounded-full border border-white/10 bg-black/65 px-2 py-2 backdrop-blur-sm">
                    <button
                      onClick={() => changeSlide(-1)}
                      className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                      aria-label="Previous service image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => changeSlide(1)}
                      className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                      aria-label="Next service image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs tracking-[0.2em] text-gray-500">
                SWIPE THE IMAGE OR USE THE ARROWS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
