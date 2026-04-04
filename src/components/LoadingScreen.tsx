import { useEffect, useState } from 'react';

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const totalDuration = 10000;
    const elapsed = Date.now() - ((window as any).__pageLoadTime ?? Date.now());
    const remaining = Math.max(totalDuration - elapsed, 500);
    const interval = 50;
    const steps = remaining / interval;
    const startProgress = Math.min(Math.round((elapsed / totalDuration) * 100), 99);
    let current = 0;

    setProgress(startProgress);

    const timer = setInterval(() => {
      current += 1;
      const p = startProgress + Math.round((current / steps) * (100 - startProgress));
      setProgress(Math.min(p, 100));
      if (current >= steps) {
        clearInterval(timer);
        setFadeOut(true);
        setTimeout(onDone, 800);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center gap-10">
        {/* Logo */}
        <img
          src="/assets/logo/logo2.png"
          alt="Catamaran Studio"
          className="h-24 w-auto animate-pulse"
        />

        {/* Studio name */}
        <div className="text-center">
          <p className="text-gray-500 text-sm tracking-[0.4em] mb-2">WELCOME TO</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest">
            CATAMARAN STUDIO
          </h1>
          <p className="text-gray-400 text-sm tracking-widest mt-2">PHOTOGRAPHY & DESIGN</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-96">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Loading experience...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Decorative dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-500"
              style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
