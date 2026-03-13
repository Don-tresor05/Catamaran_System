import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const portraitPackages = [
  {
    title: 'Individual Session',
    price: '$250',
    items: [
      'Ideal for capturing your unique personality and style.',
      'Includes a 2-hour photoshoot and 20 professionally edited images.',
      'Additional images can be purchased at $10 each.',
    ],
  },
  {
    title: 'Family Session',
    price: '$400',
    items: [
      'Perfect for creating lasting memories with your loved ones.',
      'Includes a 3-hour photoshoot and 30 professionally edited images.',
      'Additional images can be purchased at $10 each.',
    ],
  },
  {
    title: 'Couple Session',
    price: '$300',
    items: [
      'Celebrate your love story with an intimate photoshoot.',
      'Includes a 2.5-hour photoshoot and 25 professionally edited images.',
      'Additional images can be purchased at $10 each.',
    ],
  },
];

const eventPackages = [
  {
    title: 'Wedding Photography',
    price: '$1,500',
    items: [
      'Capture the magic of your special day.',
      'Includes full-day coverage, a second photographer, and 300+ edited images.',
      'Customizable packages are available for your wedding needs.',
    ],
  },
  {
    title: 'Party Coverage',
    price: '$800',
    items: [
      'Preserve the fun and excitement of your event.',
      'Includes up to 4 hours of coverage and 150+ edited images.',
      'Additional hours can be added at $150 per hour.',
    ],
  },
  {
    title: 'Corporate Events',
    price: 'Custom Pricing',
    items: [
      'Tailored solutions for corporate gatherings and conferences.',
      'Contact us for a personalized quote based on your requirements.',
      'Flexible coverage for single or multi-day events.',
    ],
  },
];

const commercialPackages = [
  {
    title: 'Product Photography',
    price: '$500',
    items: [
      'Showcase your products in the best light.',
      'Half-day shoot, 20 edited product images, and high-res files.',
      'Additional images can be purchased at $20 each.',
    ],
  },
  {
    title: 'Real Estate Photography',
    price: '$700',
    items: [
      'Highlight the beauty of your properties.',
      'Interior and exterior shots with 25 edited images.',
      'Additional images can be purchased at $20 each.',
    ],
  },
  {
    title: 'Brand Photography',
    price: 'Custom Pricing',
    items: [
      'Craft a visual narrative that aligns with your brand identity.',
      'Contact us to discuss your brand photography needs.',
      'Package tailored to campaign scope and deliverables.',
    ],
  },
];

function PackageRow({
  title,
  price,
  items,
}: {
  title: string;
  price: string;
  items: string[];
}) {
  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-6 border-t border-white/10 py-8">
      <div>
        <p className="text-sm text-gray-400 mb-2">{title}</p>
        <p className="text-3xl font-semibold">{price}</p>
        <button className="mt-2 text-xs text-white/70 hover:text-white inline-flex items-center gap-2">
          BOOK A CALL <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-gray-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <section className="pt-24 pb-16">
        <div className="w-full px-4 sm:px-6">
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-6 items-start">
              <div className="w-full rounded-3xl bg-black/70 border border-white/10 p-6">
                <p className="text-gray-400 text-sm tracking-widest mb-2">
                  SERVICES
                </p>
                <h1 className="text-3xl sm:text-4xl font-semibold">
                  DIVERSE PHOTOGRAPHY OFFERINGS
                </h1>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-3xl">
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
                    src="/assets/services/services-1.jpg"
                    alt="Studio setup"
                    className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
                  />
                  <div className="absolute left-6 bottom-6 h-12 w-12 rounded-full border border-white/15 bg-black/60 flex items-center justify-center">
                    <span className="text-lg text-white/70">✦</span>
                  </div>
                  <div className="absolute bottom-6 right-6 text-xs text-white/70">
                    SCROLL DOWN TO SEE ALL SERVICES
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div className="grid lg:grid-cols-[1fr_520px] gap-10 items-start">
              <div>
                <p className="text-gray-400 text-sm tracking-widest mb-2">
                  PORTRAIT PHOTOGRAPHY
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  Our portrait photography service is all about showcasing your
                  unique personality. We work closely with you to bring out
                  your best angles and expressions.
                </p>
                <button className="mt-4 text-xs text-white/70 hover:text-white inline-flex items-center gap-2">
                  VIEW PROJECTS <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square">
                  <img
                    src="/assets/hero/hero-5.jpg"
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-black/80 border border-white/10 px-3 py-2">
                  <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div className="space-y-2">
              {portraitPackages.map((pkg) => (
                <PackageRow key={pkg.title} {...pkg} />
              ))}
            </div>

            <div className="border-t border-white/10" />

            <div className="grid lg:grid-cols-[1fr_520px] gap-10 items-start">
              <div>
                <p className="text-gray-400 text-sm tracking-widest mb-2">
                  EVENTS PHOTOGRAPHY
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  We document every heartfelt moment while blending into the
                  background, delivering natural and candid shots that reflect
                  the emotions of the day.
                </p>
                <button className="mt-4 text-xs text-white/70 hover:text-white inline-flex items-center gap-2">
                  VIEW PROJECTS <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square">
                  <img
                    src="/assets/hero/hero-7.jpg"
                    alt="Event photography"
                    className="w-full h-full object-cover"
                  />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-black/80 border border-white/10 px-3 py-2">
                  <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div className="space-y-2">
              {eventPackages.map((pkg) => (
                <PackageRow key={pkg.title} {...pkg} />
              ))}
            </div>

            <div className="border-t border-white/10" />

            <div className="grid lg:grid-cols-[1fr_520px] gap-10 items-start">
              <div>
                <p className="text-gray-400 text-sm tracking-widest mb-2">
                  COMMERCIAL PHOTOGRAPHY
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  We create striking imagery for products, services, and brand
                  campaigns that leave a lasting impact on your audience.
                </p>
                <button className="mt-4 text-xs text-white/70 hover:text-white inline-flex items-center gap-2">
                  VIEW PROJECTS <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square">
                  <img
                    src="/assets/portfolio/portfolio-1.jpg"
                    alt="Commercial photography"
                    className="w-full h-full object-cover"
                  />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-black/80 border border-white/10 px-3 py-2">
                  <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

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
        <div className="w-full px-4 sm:px-6">
          <FAQ />
        </div>
      </section>

      <Footer />
    </div>
  );
}
