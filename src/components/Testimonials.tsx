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
              <button className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white">
                View All Testimonials →
              </button>
            </div>
          </div>

          <div className="grid gap-4 py-8 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]"
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
            ))}
          </div>

          <div className="overflow-hidden border-t border-white/10 pt-10">
            <div className="text-center text-[72px] font-semibold leading-none tracking-tight text-white/10 sm:text-[120px] md:text-[160px]">
              CATAMARAN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
