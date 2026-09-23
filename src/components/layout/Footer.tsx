import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { AYUSH_INFO } from '../../data/ayushData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-24 pb-8 overflow-hidden flex flex-col items-center justify-between min-h-[50vh] border-t border-white/5">
      {/* Ambient Blue Bottom Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(0,71,255,0.06),transparent_60%)] pointer-events-none" />

      {/* Craft Note */}
      <div className="relative z-10 max-w-2xl text-center px-4 mb-12">
        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
          Crafted with care, engineered with clean, modular, and efficient code.
          <br />
          Thank you for exploring my work — let's build something exceptional together.
        </p>
      </div>

      {/* Navigation Quick Links */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16 px-4">
        {[
          { name: 'Home', href: '#home' },
          { name: 'Projects', href: '#projects' },
          { name: 'Services', href: '#services' },
          { name: 'Skills', href: '#skills' },
          { name: 'Journey', href: '#journey' },
          { name: 'Contact', href: '#contact' }
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-white text-xs uppercase tracking-widest font-mono transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Massive Brand Watermark */}
      <div className="relative z-0 w-full overflow-hidden flex justify-center items-center pointer-events-none select-none my-6">
        <span className="text-[20vw] font-black leading-none tracking-tighter text-[#101010] select-none">
          AYUSH
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto border-t border-white/5 pt-8">
        <p className="text-gray-500 text-xs font-light text-center md:text-left">
          © {currentYear}. All Rights Reserved By {AYUSH_INFO.name}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
          <a
            href={`mailto:${AYUSH_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{AYUSH_INFO.email}</span>
          </a>
          <span className="text-white/20">•</span>
          <a
            href={`tel:${AYUSH_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{AYUSH_INFO.phone}</span>
          </a>
        </div>

        <div className="flex items-center gap-5">
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
