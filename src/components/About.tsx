import { Instagram, Plus } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [showIntro, setShowIntro] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="about" className="min-h-screen bg-neutral-900 text-white py-16 md:py-20">
      <div className="w-full px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-12">
            <div>
              <p className="text-gray-400 text-sm tracking-widest mb-2">
                ABOUT
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">I AM MARTIN</h2>
            </div>
            <button className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
              Know More →
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-32 h-32 border-l-4 border-t-4 border-white/20 rounded-tl-[100px]"></div>
              <img
                src="/assets/about/about-1.jpg"
                alt="Martin Munyampeta"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div>
                <button
                  onClick={() => setShowIntro(!showIntro)}
                  className="flex items-center gap-3 text-xl font-semibold mb-4 hover:text-blue-400 transition-colors"
                >
                  <Plus
                    className={`w-5 h-5 transition-transform ${
                      showIntro ? 'rotate-45' : ''
                    }`}
                  />
                  Introduction
                </button>
                {showIntro && (
                  <p className="text-gray-400 leading-relaxed ml-4 sm:ml-8">
                    My journey as a photographer has been a lifelong quest to
                    capture the extraordinary in the ordinary. To freeze fleeting
                    moments in time, and to share the world's beauty as I see it.
                    Based in the enchanting landscapes of the RWANDA, I find
                    inspiration in every corner of this diverse and vibrant
                    country. Join me as we embark on a visual odyssey, where each
                    photograph tells a story, and every frame is a piece of my
                    heart.
                  </p>
                )}
              </div>

              <div>
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="flex items-center gap-3 text-xl font-semibold mb-4 hover:text-blue-400 transition-colors"
                >
                  <Plus
                    className={`w-5 h-5 transition-transform ${
                      showContact ? 'rotate-45' : ''
                    }`}
                  />
                  Contact Information
                </button>
                {showContact && (
                  <div className="ml-4 sm:ml-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Email</p>
                        <p className="text-white">catamaran@gmail.com</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">
                          Phone Number
                        </p>
                        <p className="text-white">+250 788 217 387</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors">
                        Let's Work
                      </button>
                      {/* <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors">
                        Download CV
                      </button> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
