import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Star,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Beo',
    role: 'RWANDA, Kigali',
    rating: 5,
    text: "Martin's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing.",
    social: {
      instagram: 'https://www.instagram.com/catamaran__studio/',
    },
  },
  {
    name: 'Lionel',
    role: 'RWANDA, Kigali',
    rating: 5,
    text: 'Martin has an incredible talent for making every event feel effortless, and the results speak for themselves.',
    social: {
      instagram: 'https://www.instagram.com/catamaran__studio/',
    },
  },
  {
    name: 'Shalom',
    role: 'RWANDA, Kigali',
    rating: 4,
    text: "I was blown away by Martin's ability to capture the essence of our wedding day. His photographs are our cherished memories.",
    social: {
      instagram: 'https://www.instagram.com/catamaran__studio/',
    },
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
        return;
      }

      if (window.innerWidth < 1100) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(testimonials.length - cardsPerView, 0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handlePointerUp = () => {
    if (dragStart === null) return;

    if (dragOffset <= -60) {
      goNext();
    } else if (dragOffset >= 60) {
      goPrev();
    }

    setDragStart(null);
    setDragOffset(0);
  };

  const dragPercent = dragStart === null ? 0 : (dragOffset / 320) * (100 / cardsPerView);

  return (
    <section
      id="testimonials"
      className="bg-black text-white py-16 md:py-20"
    >
      <div className="w-full px-4 sm:px-6">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs tracking-[0.28em] text-gray-500">
                TESTIMONIALS
              </p>
              <h2 className="mb-5 text-3xl font-semibold sm:text-5xl">
                WHAT MY CLIENTS SAY
              </h2>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="text-3xl font-semibold text-white">323</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={goPrev}
                className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white">
                View All Testimonials →
              </button>
            </div>
          </div>

          <div
            className="overflow-hidden py-8"
            onMouseMove={(event) => {
              if (dragStart !== null) setDragOffset(event.clientX - dragStart);
            }}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchMove={(event) => {
              if (dragStart !== null) setDragOffset(event.touches[0].clientX - dragStart);
            }}
            onTouchEnd={handlePointerUp}
          >
            <div
              className="swipe-track flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translate3d(calc(-${currentIndex * (100 / cardsPerView)}% + ${dragPercent}%), 0, 0)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="flex-none px-2"
                  style={{ width: `${100 / cardsPerView}%` }}
                  onMouseDown={(event) => setDragStart(event.clientX)}
                  onTouchStart={(event) => setDragStart(event.touches[0].clientX)}
                >
                  <div
                    className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:bg-white/[0.06] ${
                      index >= currentIndex && index < currentIndex + cardsPerView
                        ? 'opacity-100'
                        : 'opacity-75'
                    }`}
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-1 text-base font-medium">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <div className="flex gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2">
                        <a
                          href={testimonial.social.instagram}
                          aria-label={`${testimonial.name} Instagram`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'fill-yellow-500 text-yellow-500'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-sm leading-7 text-gray-300">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={`testimonial-dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial group ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/25'
                }`}
              />
            ))}
          </div>

          <div className="overflow-hidden border-t border-white/10 pt-10 mt-10">
            <div className="text-center text-[72px] font-semibold leading-none tracking-tight text-white/10 sm:text-[120px] md:text-[160px]">
              CATAMARAN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
