import {
  Facebook,
  Twitter,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'USA, California',
    rating: 5,
    text: "Damien's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing.",
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'John Smith',
    role: 'USA, California',
    rating: 5,
    text: 'Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Samantha Davis',
    role: 'USA, California',
    rating: 4,
    text: "I was blown away by Damien's ability to capture the essence of our wedding day. His photographs are our cherished memories.",
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-900 text-white py-16 md:py-20">
      <div className="w-full px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-12">
            <div>
              <p className="text-gray-400 text-sm tracking-widest mb-2">
                TESTIMONIALS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                WHAT MY CLIENTS SAY
              </h2>
              <p className="text-gray-400">Total Reviews</p>
              <p className="text-4xl font-bold">323</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="text-white/80 hover:text-white md:ml-4 transition-colors">
                View All Testimonials →
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold mb-1">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={testimonial.social.facebook}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={testimonial.social.twitter}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={testimonial.social.linkedin}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
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

                <p className="text-gray-400 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
