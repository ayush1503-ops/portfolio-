import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setIstTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#09090b] py-14 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full text-xs font-mono text-neutral-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
        {/* Brand */}
        <div className="space-y-1">
          <span className="font-display font-bold text-lg text-white tracking-tight block">
            AYUSH THAKUR
          </span>
          <p className="text-neutral-400 font-sans text-xs">
            Full-Stack Developer · Delhi, India
          </p>
        </div>

        {/* Real-time Vitals */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-1.5 h-1.5 bg-neutral-300" />
            <span>DELHI, IN:</span>
            <span className="text-white font-mono">{istTime || '19:35:00'} IST</span>
          </div>
          <span className="text-neutral-600 hidden sm:inline">/</span>
          <span className="text-neutral-500 hidden sm:inline">UTC+05:30</span>
        </div>
      </div>

      {/* Bottom Sub-ledger */}
      <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-neutral-500">
        <div>
          © {new Date().getFullYear()} AYUSH THAKUR.
        </div>

        <div className="flex items-center gap-6">
          <span className="text-neutral-600">
            PERSONAL DIGITAL STUDIO
          </span>
          <button
            onClick={scrollToTop}
            className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
