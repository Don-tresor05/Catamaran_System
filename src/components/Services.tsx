import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const highlights = [
  'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS, AND MORE',
  'SKILLED PHOTOGRAPHERS WHO KNOW HOW TO SEIZE THE MOMENT',
  'A MIX OF CANDID AND POSED SHOTS FOR A COMPREHENSIVE STORY',
  "QUICK TURNAROUND FOR YOU TO RELIVE THE DAY'S HIGHLIGHTS",
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen bg-black text-white py-16 md:py-20">
      <div className="w-full px-4 sm:px-6">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-12">
            <div>
              <p className="text-gray-400 text-sm tracking-widest mb-2">
                SERVICES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                MY PHOTOGRAPHY SERVICES
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

              <div className="space-y-4">
                <p className="text-white font-semibold mb-4">
                  Service Highlights
                </p>
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✦</span>
                    <p className="text-gray-400 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/assets/services/services-1.png"
                alt="Event Photography"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
