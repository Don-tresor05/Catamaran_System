import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Faces of Resilience',
    date: 'March 2022',
    image: '/assets/portfolio/portfolio-1.png',
    bgColor: 'from-orange-900 to-orange-700',
  },
  {
    title: 'A Wedding Tale',
    date: 'January 2020',
    image: '/assets/portfolio/portfolio-2.png',
    bgColor: 'from-amber-200 to-amber-100',
  },
  {
    title: 'Product Elegance',
    date: 'January 2020',
    image: '/assets/portfolio/portfolio-3.png',
    bgColor: 'from-amber-600 to-amber-500',
  },
];

export default function Portfolio() {
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
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="text-white/80 hover:text-white md:ml-4 transition-colors">
                View All Works →
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br aspect-square"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{project.date}</p>
                      </div>
                      <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="mt-4 text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors">
                      VIEW PROJECT <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
