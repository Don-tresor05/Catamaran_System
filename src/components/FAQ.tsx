import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?',
    answer:
      'I specialize in Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.',
  },
  {
    question: 'HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?',
    answer:
      'You can book a session by contacting me through the contact form, email, or phone. We will discuss your needs and schedule a convenient time.',
  },
  {
    question: 'WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?',
    answer:
      'I use professional-grade cameras, lenses, and lighting equipment to ensure the highest quality images for every project.',
  },
  {
    question: 'CAN I REQUEST A SPECIFIC LOCATION FOR A PHOTOSHOOT?',
    answer:
      'Absolutely! I am happy to work at locations of your choice, whether it is outdoors, in a studio, or at a venue of your preference.',
  },
  {
    question: 'WHAT IS YOUR EDITING PROCESS LIKE?',
    answer:
      'My editing process involves color correction, retouching, and enhancement to bring out the best in every photograph while maintaining a natural look.',
  },
  {
    question: 'ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?',
    answer:
      'Yes, digital files are included in all my packages. You will receive high-resolution images that you can use for prints and sharing.',
  },
  {
    question: 'DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?',
    answer:
      'Yes, prints are available for purchase. Explore the "Prints" section for more details on sizes and pricing.',
  },
  {
    question:
      'HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A SESSION?',
    answer:
      'Typically, edited photos are delivered within 2-3 weeks after the session, depending on the complexity and volume of images.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-400 text-sm tracking-widest mb-2">FAQ'S</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left p-6 flex justify-between items-start hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
