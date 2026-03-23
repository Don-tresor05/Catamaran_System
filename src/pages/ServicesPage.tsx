import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const portraitPackages: { title: string; price: string; items: (string | { size: string; price: string })[] }[] = [
  {
    title: 'Photoshoot Studio',
    price: '2,000 RWF',
    items: [
      'Per One Soft Copy Edited',
    ],
  },
  {
    title: 'Wooden Photo Frames All Sizes (⚠️ Negotiable)',
    price: '',
    items: [
      { size: 'A6 (10 X 15 cm)', price: '4,000 RWF' },
      { size: 'A5 (20 X 21 cm)', price: '6,000 RWF' },
      { size: 'A5 (20 X 25 cm)', price: '8,000 RWF' },
      { size: 'A4 (20 X 30 cm)', price: '10,000 RWF' },
      { size: 'A4 (27 X 35 cm)', price: '15,000 RWF' },
      { size: 'A3 (30 X 40 cm)', price: '20,000 RWF' },
      { size: 'A3 (30 X 45 cm)', price: '25,000 RWF' },
      { size: 'A3 (40 X 50 cm)', price: '40,000 RWF' },
      { size: 'A2 (40 X 60 cm)', price: '50,000 RWF' },
      { size: 'A2 (45 X 60 cm)', price: '55,000 RWF' },
      { size: 'A2 (50 X 60 cm)', price: '60,000 RWF' },
      { size: 'A2 (60 X 76 cm)', price: '70,000 RWF' },
      { size: 'A1 (60 X 90 cm)', price: '140,000 RWF' },
    ],
  },
];

const eventPackages = [
  {
    title: 'Wedding Coverage',
    price: '⚠️ Negotiable',
    items: [
      'Full-day coverage for your special day.',
      'Includes engagement session, ceremony, and reception.',
      'Delivers 100+ edited images with a custom online gallery.',
    ],
  },
  {
    title: 'Birthday Shoot',
    price: '2,000 RWF',
    items: [
      'Per One Soft Copy (Edited)',
    ],
  },
  {
    title: 'Graduation Photo',
    price: '2,000 RWF',
    items: [
      'Per One Soft Copy Edited',
    ],
  },
];

const commercialPackages = [
  {
    title: 'Business Card',
    price: '⚠️ Negotiable',
    items: [
    ],
  },
  {
    title: 'Wall Watch Clock',
    price: '⚠️ Negotiable',
    items: [
      'We put pictures in all kinds of wall clocks.',
    ],
  },
  {
    title: 'Key Chains',
    price: '⚠️ Negotiable',
    items: [
      'We put pictures on the key chains',
    ],
  },
  {
    title: 'White Sublimation Mugs',
    price: '15,000 RWF',
    items: [
      '',
    ],
  },
  {
    title: 'Crystal Awards',
    price: 'From 70,000-120,000 RWF',
    items: [
      'you can order from our many verieties Crystals for your beloved s gifts or award',
    ],
  },
];

type Item = string | { size: string; price: string };

const serviceShowcases = [
  {
    title: 'PORTRAIT PHOTOGRAPHY',
    description:
      'Our portrait photography service is all about showcasing your unique personality. We work closely with you to bring out your best angles and expressions.',
    slides: ['/assets/hero/hero-5.png', '/assets/about/about-1.png', '/assets/hero/hero-2.png'],
  },
  {
    title: 'EVENTS PHOTOGRAPHY',
    description:
      'We document every heartfelt moment while blending into the background, delivering natural and candid shots that reflect the emotions of the day.',
    slides: ['/assets/hero/hero-7.png', '/assets/services/services-1.png', '/assets/portfolio/portfolio-2.png'],
  },
  {
    title: 'COMMERCIAL PHOTOGRAPHY',
    description:
      'We create striking imagery for products, services, and brand campaigns that leave a lasting impact on your audience.',
    slides: ['/assets/portfolio/portfolio-1.png', '/assets/portfolio/portfolio-3.png', '/assets/logo/bg.png'],
  },
];

function PackageRow({
  title,
  price,
  items,
}: {
  title: string;
  price: string;
  items: Item[];
}) {
  const isSizePricing = items.length > 0 && typeof items[0] === 'object';

  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-6 border-t border-white/10 py-8">
      <div>
        <p className="text-base text-gray-400 mb-2">{title}</p>
        {price && <p className="text-4xl font-semibold">{price}</p>}
        <button className="mt-2 text-sm text-white/70 hover:text-white inline-flex items-center gap-2">
          BOOK A CALL <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
      <div>
        {isSizePricing ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {(items as { size: string; price: string }[]).map((item) => (
              <div
                key={item.size}
                className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 flex flex-col gap-1"
              >
                <p className="text-sm text-gray-400">{item.size}</p>
                <p className="text-base font-semibold text-white">{item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {(items as string[]).filter(Boolean).map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-base text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ServiceShowcase({
  title,
  description,
  slides,
}: {
  title: string;
  description: string;
  slides: string[];
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goPrev = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStart === null) return;
    const diff = clientX - touchStart;
    if (diff > 60) {
      goPrev();
    } else if (diff < -60) {
      goNext();
    }
    setTouchStart(null);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_520px] gap-10 items-start">
      <div>
        <p className="text-gray-400 text-base tracking-widest mb-2">
          {title}
        </p>
        <p className="text-gray-300 text-base leading-relaxed max-w-xl">
          {description}
        </p>
        <button className="mt-4 text-sm text-white/70 hover:text-white inline-flex items-center gap-2">
          VIEW PROJECTS <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
      <div
        className="media-card relative rounded-2xl aspect-square"
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
      >
        {slides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              index === slideIndex
                ? 'relative opacity-100 scale-100'
                : 'absolute inset-0 opacity-0 scale-110'
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={`${title}-${index}`}
                onClick={() => setSlideIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === slideIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
                aria-label={`Show ${title.toLowerCase()} image ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2 rounded-full bg-black/80 border border-white/10 px-3 py-2">
            <button
              onClick={goPrev}
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"
              aria-label={`Previous ${title.toLowerCase()} image`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"
              aria-label={`Next ${title.toLowerCase()} image`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <section className="pt-24 pb-16">
        <div className="w-[90%] mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-10">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-gray-400 text-base tracking-widest mb-2">
                SERVICES
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                DIVERSE PHOTOGRAPHY OFFERINGS
              </h1>
              <p className="text-gray-300 mt-4 text-base leading-relaxed">
                Unlock the full spectrum of professional photography services
                tailored to your vision. From timeless portraits to
                captivating event coverage, I bring creativity and technical
                expertise to every project.
              </p>
            </div>
            <div className="w-full">
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5">
                <div className="absolute left-6 top-6 h-24 w-16 rounded-2xl bg-white/10" />
                <img
                  src="/assets/logo/bg.png"
                  alt="Studio setup"
                  className="w-full h-[200px] sm:h-[320px] md:h-[560px] object-cover"
                />
                <div className="absolute left-6 bottom-6 h-12 w-12 rounded-full border border-white/15 bg-black/60 flex items-center justify-center">
                  <span className="text-lg text-white/70">✦</span>
                </div>
                <div className="absolute bottom-6 right-6 text-xs text-white/70">
                  SCROLL DOWN TO SEE ALL SERVICES
                </div>
              </div>
            </div>

            <div className="border-t border-white/10" />

            <ServiceShowcase {...serviceShowcases[0]} />

            <div className="border-t border-white/10" />

            <div className="space-y-2">
              {portraitPackages.map((pkg) => (
                <PackageRow key={pkg.title} {...pkg} />
              ))}
            </div>

            <div className="border-t border-white/10" />

            <ServiceShowcase {...serviceShowcases[1]} />

            <div className="border-t border-white/10" />

            <div className="space-y-2">
              {eventPackages.map((pkg) => (
                <PackageRow key={pkg.title} {...pkg} />
              ))}
            </div>

            <div className="border-t border-white/10" />

            <ServiceShowcase {...serviceShowcases[2]} />

            <div className="border-t border-white/10" />

            <div className="space-y-2">
              {commercialPackages.map((pkg) => (
                <PackageRow key={pkg.title} {...pkg} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950">
        <div className="w-[90%] mx-auto px-4 sm:px-6">
          <FAQ />
        </div>
      </section>

      <Footer />
    </div>
  );
}
