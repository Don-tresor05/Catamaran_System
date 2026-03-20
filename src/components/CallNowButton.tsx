import { Phone } from 'lucide-react';
import { useState } from 'react';

export default function CallNowButton() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-40">
      {showOptions && (
        <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg p-2 space-y-2 min-w-[200px]">
          <a
            href="tel:+250788217387"
            className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
          >
            +250 788 217 387
          </a>
          <a
            href="tel:+250784809323"
            className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
          >
            +250 784 809 323
          </a>
        </div>
      )}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center gap-2"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="hidden md:inline font-semibold">Call Now</span>
      </button>
    </div>
  );
}
