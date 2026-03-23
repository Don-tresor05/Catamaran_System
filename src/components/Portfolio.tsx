import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const brandNames = [
  'Infinity Parker',
  'Omega Million',
  'WheelApp',
  'High Country Club',
  'EdgeKart',
];

const heroSlides = [
  {
    image: '/assets/portfolio/portfolio.png',
    accent: 'from-cyan-500/20 via-transparent to-rose-500/30',
  },
  {
    image: '/assets/hero/hero-3.png',
    accent: 'from-indigo-500/20 via-transparent to-orange-500/25',
  },
  {
    image: '/assets/hero/hero-6.png',
    accent: 'from-amber-500/15 via-transparent to-cyan-500/20',
  },
];

const portfolioSections = [
  {
    title: 'PORTRAITS PHOTOGRAPHY',
    items: [
      {
        title: 'Faces of Resilience',
        date: 'March 2022',
        image: '/assets/portfolio/portfolio-1.png',
      },
      {
        title: 'Innocence Unveiled',
        date: 'January 2020',
        image: '/assets/hero/hero-2.png',
      },
      {
        title: 'Elegance in Monochrome',
        date: 'January 2020',
        image: '/assets/hero/hero-3.png',
      },
      {
        title: 'Midnight Glow',
        date: 'April 2021',
        image: '/assets/hero/hero-5.png',
      },
      {
        title: 'Quiet Confidence',
        date: 'October 2019',
        image: '/assets/about/about-1.png',
      },
    ],
  },
  {
    title: 'EVENTS PHOTOGRAPHY',
    items: [
      {
        title: 'A Wedding Tale',
        date: 'September 2021',
        image: '/assets/portfolio/portfolio-2.png',
      },
      {
        title: 'Corporate Excellence Summit',
        date: 'November 2019',
        image: '/assets/services/services-1.png',
      },
      {
        title: 'Festival of Colors',
        date: 'March 2018',
        image: '/assets/hero/hero-7.png',
      },
      {
        title: 'Runway Moments',
        date: 'July 2020',
        image: '/assets/hero/hero-8.png',
      },
      {
        title: 'Golden Hour Ceremony',
        date: 'May 2022',
        image: '/assets/hero/hero-1.png',
      },
    ],
  },
  {
    title: 'COMMERCIAL PHOTOGRAPHY',
    items: [
      {
        title: 'Product Elegance',
        date: 'August 2020',
        image: '/assets/portfolio/portfolio-3.png',
      },
      {
        title: 'Brand Storytelling',
        date: 'May 2019',
        image: '/assets/hero/hero-4.png',
      },
      {
        title: 'Culinary Delights',
        date: 'February 2017',
        image: '/assets/hero/hero-6.png',
      },
      {
        title: 'Studio Launch Kit',
        date: 'June 2021',
        image: '/assets/logo/bg.png',
      },
      {
        title: 'Retail Moodboard',
        date: 'December 2018',
        image: '/assets/hero/hero-7.png',
      },
    ],
  },
];

function PortfolioCard({
  title,
  date,
  image,
  isActive,
}: {
  title: string;
  date: string;
  image: string;
  isActive: boolean;
}) {
  return (
    <article
      className={`group transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-75 md:opacity-85'
      }`}
    >
      <div className="portfolio-card-glow relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03]">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
        <div className="portfolio-card-shine absolute inset-y-0 left-[-65%] z-20 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <img
          src={image}
          alt={title}
          className={`aspect-[0.86] w-full object-cover transition-transform duration-700 ${
            isActive ? 'scale-[1.02]' : 'scale-100'
          } group-hover:scale-110`}
        />
      </div>

      <div className="flex items-start justify-between gap-4 border-b border-white/10 py-4">
        <div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{date}</p>
        </div>
        <button className="mt-1 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-gray-300 transition-colors hover:text-white">
          VIEW PROJECT <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

function PortfolioCarousel({
  title,
  items,
}: {
  title: string;
  items: { title: string; date: string; image: string }[];
}) {
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

  useEffect(() => {
    const maxIndex = Math.max(items.length - cardsPerView, 0);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex, items.length]);

  const maxIndex = Math.max(items.length - cardsPerView, 0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handlePointerDown = (clientX: number) => {
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (clientX: number) => {
    if (dragStart === null) return;
    setDragOffset(clientX - dragStart);
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

  const translateBase = currentIndex * (100 / cardsPerView);
  const dragPercent = dragStart === null ? 0 : (dragOffset / 320) * (100 / cardsPerView);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-gray-300 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-sm tracking-[0.18em] text-gray-500">
            SWIPE OR TAP THROUGH THE COLLECTION
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white"
            aria-label={`Previous ${title.toLowerCase()}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white"
            aria-label={`Next ${title.toLowerCase()}`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        onMouseLeave={handlePointerUp}
        onMouseMove={(event) => handlePointerMove(event.clientX)}
        onMouseUp={handlePointerUp}
        onTouchEnd={handlePointerUp}
        onTouchMove={(event) => handlePointerMove(event.touches[0].clientX)}
      >
        <div
          className="flex touch-pan-y select-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translate3d(calc(-${translateBase}% + ${dragPercent}%), 0, 0)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex-none px-3"
              style={{ width: `${100 / cardsPerView}%` }}
              onMouseDown={(event) => handlePointerDown(event.clientX)}
              onTouchStart={(event) => handlePointerDown(event.touches[0].clientX)}
            >
              <PortfolioCard
                {...item}
                isActive={index >= currentIndex && index < currentIndex + cardsPerView}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={`${title}-${index}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to ${title.toLowerCase()} slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="portfolio" className="bg-black text-white pt-24 pb-8 md:pt-28">
      <div className="w-full px-4 sm:px-6">
        <div className="w-[90%] mx-auto">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-neutral-950">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-br-[36px] bg-black px-6 py-8 sm:px-10 sm:py-10 md:px-12">
                <p className="mb-4 text-xs tracking-[0.28em] text-gray-500">
                  PORTFOLIO
                </p>
                <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                  VISUAL POETRY IN PIXELS
                </h1>
                <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                  Step into a visual journey that celebrates the essence of my
                  lens. Each photograph in this portfolio is a narrative, a
                  frozen moment in time, and a testament to the artistry poured
                  into every frame. Explore the diverse tapestry of stories I
                  have had the privilege to capture and witness through my lens.
                </p>

                <div className="mt-8 flex gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={`hero-dot-${index}`}
                      onClick={() => setHeroIndex(index)}
                      aria-label={`Show featured portfolio image ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        heroIndex === index
                          ? 'w-10 bg-white'
                          : 'w-2 bg-white/25 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === heroIndex
                        ? 'scale-100 opacity-100'
                        : 'scale-110 opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt="Portfolio feature photography"
                      className="portfolio-hero-image h-full w-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-4 sm:p-6">
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-black">
                {heroSlides.map((slide, index) => (
                  <div
                    key={`featured-${slide.image}`}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === heroIndex
                        ? 'translate-x-0 scale-100 opacity-100'
                        : 'translate-x-8 scale-[1.04] opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt="Featured portfolio collage"
                      className="portfolio-hero-image h-[260px] w-full object-cover object-center sm:h-[360px] md:h-[420px]"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                ))}
                <div className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/70 text-3xl text-white/60 backdrop-blur-sm">
                  ✦
                </div>
                <div className="absolute bottom-5 right-5 max-w-[160px] rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-[10px] tracking-[0.18em] text-gray-300 backdrop-blur-sm sm:text-xs">
                  SCROLL DOWN TO SEE THE WORKS
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border-b border-white/10 py-5 text-center">
            <p className="mb-4 text-xs tracking-[0.24em] text-gray-500">
              BRANDS I HAVE WORKED WITH
            </p>
            <div className="portfolio-marquee flex w-max items-center gap-x-8 text-lg text-white/25 sm:text-2xl">
              {[...brandNames, ...brandNames].map((brand, index) => (
                <span key={`${brand}-${index}`}>{brand}</span>
              ))}
            </div>
          </div>

          <div className="space-y-14 py-12 md:space-y-20 md:py-16">
            {portfolioSections.map((section) => (
              <PortfolioCarousel
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
