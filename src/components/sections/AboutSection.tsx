import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full border-t border-white/[0.08]">
      {/* Top Ledger */}
      <div className="border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center justify-between">
        <span>02 // PHILOSOPHY & PROFILE</span>
        <span>DELHI, IN</span>
      </div>

      {/* Large Unconventional Typographic Statement */}
      <div className="mb-16">
        <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.92] select-none">
          I LIKE BUILDING<br />
          THINGS THAT<br />
          FEEL SIMPLE.
        </h2>
      </div>

      {/* Narrative & Technical Ledger Layout (Typography and Whitespace, Zero Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Real Paragraph */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
          <p>
            I'm Ayush Thakur. I build web applications and digital tools from Delhi, India.
            I care about speed, clean architecture, and making things work cleanly without
            bloated code or decorative fluff.
          </p>
          <p>
            I work across the entire stack—from designing relational PostgreSQL schemas and
            data intelligence queries to crafting tactile, responsive user interfaces with
            React, Next.js, and Three.js. I prefer simple solutions over complex abstractions,
            and I treat every client project with the care of an independent craftsman.
          </p>
          <p className="text-neutral-400 text-sm sm:text-base">
            When I'm not writing code, I'm analyzing data trends, exploring mechanical hardware
            design, or testing new rendering techniques in the browser.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-neutral-300 border-b border-white pb-1 transition-colors cursor-pointer"
            >
              <span>VIEW FULL RESUME & CREDENTIALS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Small Technical Details Around It (Whitespace & Minimal Borders) */}
        <div className="lg:col-span-5 space-y-8 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-12 pt-8 lg:pt-0 text-xs font-mono">
          <div className="space-y-1.5">
            <span className="text-neutral-500 uppercase tracking-widest block text-[11px]">
              LOCATION
            </span>
            <p className="text-neutral-200 font-sans text-sm">
              Delhi, India (IST / UTC+5:30)
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-neutral-500 uppercase tracking-widest block text-[11px]">
              CURRENTLY BUILDING
            </span>
            <p className="text-neutral-200 font-sans text-sm">
              Bespoke e-commerce flagships, WebGL viewports, and automated computer vision interfaces.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-neutral-500 uppercase tracking-widest block text-[11px]">
              CURRENTLY LEARNING
            </span>
            <p className="text-neutral-200 font-sans text-sm">
              Advanced GLSL custom shaders and distributed PostgreSQL replication architectures.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-neutral-500 uppercase tracking-widest block text-[11px]">
              TOOLS I USE DAILY
            </span>
            <p className="text-neutral-200 font-sans text-sm leading-relaxed">
              React, Next.js, Node.js, TypeScript, PostgreSQL, Tailwind CSS, Three.js, Git, Vercel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
