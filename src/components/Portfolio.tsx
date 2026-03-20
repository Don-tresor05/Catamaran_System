import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const brandNames = [
  'Infinity Parker',
  'Omega Million',
  'WheelApp',
  'High Country Club',
  'EdgeKart',
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
    ],
  },
];

function PortfolioCard({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: string;
}) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03]">
        <img
          src={image}
          alt={title}
          className="aspect-[0.95] w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

export default function Portfolio() {
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
              </div>

              <div className="relative min-h-[320px]">
                <img
                  src="/assets/portfolio/portfolio.png"
                  alt="Portfolio feature photography"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative p-4 sm:p-6">
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-black">
                {/* <img
                  src="/assets/portfolio/portfolio.png"
                  alt="Featured portfolio collage"
                  className="h-[260px] w-full object-cover object-center sm:h-[360px] md:h-[420px]"
                /> */}
                <div className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/70 text-3xl text-white/60 backdrop-blur-sm">
                  ✦
                </div>
                <div className="absolute bottom-5 right-5 max-w-[160px] rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-[10px] tracking-[0.18em] text-gray-300 backdrop-blur-sm sm:text-xs">
                  SCROLL DOWN TO SEE THE WORKS
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 py-5 text-center">
            <p className="mb-4 text-xs tracking-[0.24em] text-gray-500">
              BRANDS I HAVE WORKED WITH
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg text-white/25 sm:text-2xl">
              {brandNames.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>

          <div className="space-y-14 py-12 md:space-y-20 md:py-16">
            {portfolioSections.map((section) => (
              <section key={section.title}>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <h2 className="text-3xl font-semibold text-gray-300 sm:text-5xl">
                    {section.title}
                  </h2>
                  <div className="flex gap-3">
                    <button className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {section.items.map((item) => (
                    <PortfolioCard key={item.title} {...item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
