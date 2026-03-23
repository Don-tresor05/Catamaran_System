import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Faces of Resilience',
    date: 'March 2022',
    image: '/assets/portfolio/portfolio-1.png',
  },
  {
    title: 'A Wedding Tale',
    date: 'January 2020',
    image: '/assets/portfolio/portfolio-2.png',
  },
  {
    title: 'Product Elegance',
    date: 'January 2020',
    image: '/assets/portfolio/portfolio-3.png',
  },
];

export default function HomePortfolio() {
  return (
    <section id="portfolio" className="min-h-screen bg-neutral-900 text-white py-16 md:py-20">
      <div className="w-full px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-12">
            <div>
              <p className="text-gray-400 text-sm tracking-widest mb-2">
                PORTFOLIO
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                EXPLORE MY PHOTOGRAPHY WORK.
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
                View All Works →
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group"
              >
                <div className="media-card rounded-2xl aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-white/10 py-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">{project.date}</p>
                  </div>
                  <button className="mt-1 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-gray-300 transition-colors hover:text-white">
                    VIEW PROJECT <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
