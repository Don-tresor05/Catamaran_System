import { ArrowUpRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function AboutPage() {
  const stats = [
    { value: '8+', label: 'Years In Business' },
    { value: '500+', label: 'Happy Clients' },
    { value: '100%', label: 'Photography Standard' },
    { value: '05+', label: 'hoots' },
    { value: '1,000+', label: 'Social Media Followers' },
    { value: '90%', label: 'Client Retention Rate' },
  ];

  const timeline = [
    {
      year: '2005',
      text:
        'Started exploring visual storytelling, capturing early projects and building a personal style.',
    },
    {
      year: '2010',
      text:
        'Formalized training in photography and refined lighting, composition, and narrative direction.',
    },
    {
      year: '2012',
      text:
        'First solo exhibition, showcasing portraits and editorial work across local venues.',
    },
    {
      year: '2015',
      text:
        'Launched the studio, offering portrait, event, and commercial photography services.',
    },
    {
      year: '2017',
      text:
        'Expanded internationally with travel assignments and destination projects.',
    },
    {
      year: '2020',
      text:
        'Recognized with multiple awards for creative direction and visual storytelling.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <section className="bg-neutral-950 text-white pt-24 pb-16 md:pb-20">
        <div className="w-[90%] mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-gray-400 text-sm tracking-widest mb-2">
                  ABOUT
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight">
                  ABOUT MARTIN
                </h1>
              </div>
              <button className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                Explore More <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="relative rounded-[32px] overflow-hidden bg-white/5 border border-white/10">
              <div className="absolute right-8 top-6 h-14 w-56 rounded-full bg-white/70 blur-[0.5px] opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
              <img
                src="/assets/about/about-1.png"
                alt="Martin Munyambo portrait"
                className="w-full h-[260px] sm:h-[360px] md:h-[440px] object-cover"
              />
              <div className="absolute left-6 bottom-6 h-12 w-12 rounded-full border border-white/15 bg-black/60 flex items-center justify-center">
                <span className="text-lg text-white/70">✦</span>
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-white/70">
                Scroll down to see my journey
              </div>
            </div>

            <div className="border-t border-white/10 pt-10" />

            <div className="flex flex-col gap-10">
              <div>
                <p className="text-gray-400 text-base tracking-widest mb-2">
                  MY BIOGRAPHY
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">THE STORY</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Martin's love affair with photography began at a young
                  age, nurtured by the captivating landscapes and vibrant
                  cultures surrounding her in the heart of the USA. Her passion
                  for storytelling through imagery led her to embark on a
                  photography journey that has spanned over 15 years. Driven by
                  an insatiable curiosity to explore the beauty in everyday
                  moments, Martin has honed her craft meticulously.
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-base tracking-widest mb-2">
                  JOURNEY
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  MARTIN'S JOURNEY - A TIMELINE
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {timeline.map((item) => (
                    <div
                      key={item.year}
                      className="rounded-2xl border border-white/10 bg-black/60 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    >
                      <p className="text-sm text-gray-400 mb-2">
                        YEAR - {item.year}
                      </p>
                      <p className="text-base text-gray-200 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-950">
        <div className="w-[90%] mx-auto px-4 sm:px-6">
          <div>
            <Testimonials />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
