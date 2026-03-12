import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '15+', label: 'Years In Business' },
    { value: '500+', label: 'Happy Clients' },
    { value: '10+', label: 'Photography Awards' },
    { value: '05+', label: 'International Shoots' },
    { value: '10,000+', label: 'Social Media Followers' },
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
    <section
      id="about"
      className="min-h-screen bg-neutral-900 text-white py-16 md:py-20"
    >
      <div className="w-full px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-gray-400 text-sm tracking-widest mb-2">
                  ABOUT
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  ABOUT MARTIN MUNYAMPETA
                </h2>
              </div>
              <button className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                Explore More <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3"
                >
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
              <img
                src="/assets/about/about-1.jpg"
                alt="Martin Munyampeta portrait"
                className="w-full h-[260px] sm:h-[360px] md:h-[420px] object-cover"
              />
              <div className="absolute bottom-4 right-4 text-xs text-white/70">
                Scroll down to see my journey
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <p className="text-gray-400 text-sm tracking-widest mb-2">
                  MY BIOGRAPHY
                </p>
                <h3 className="text-2xl font-semibold mb-4">THE STORY</h3>
                <p className="text-gray-400 leading-relaxed">
                  My journey into photography started with a curiosity for
                  light and the stories hidden in everyday moments. Over the
                  years, I have focused on portraits and editorial work that
                  feels honest, cinematic, and timeless. Each session is built
                  on trust, direction, and a collaborative energy that brings
                  out the most authentic version of the subject.
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="text-gray-400 text-sm tracking-widest mb-2">
                  JOURNEY
                </p>
                <h3 className="text-2xl font-semibold mb-4">
                  MARTIN'S JOURNEY - A TIMELINE
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {timeline.map((item) => (
                    <div
                      key={item.year}
                      className="rounded-2xl border border-white/10 bg-black/40 p-4"
                    >
                      <p className="text-sm text-gray-400 mb-2">
                        YEAR - {item.year}
                      </p>
                      <p className="text-sm text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
