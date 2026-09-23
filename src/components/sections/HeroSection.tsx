import React from 'react';
import { HeroScene3D } from '../3d/HeroScene3D';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full"
    >
      {/* Top Ledger: Small Technical Markers */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-5 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-neutral-300" />
          <span className="tracking-widest uppercase text-neutral-300">
            BASED IN INDIA
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-500 hidden sm:inline">28°36'N 77°12'E</span>
        </div>

        <div className="flex items-center gap-6 text-neutral-400">
          <span className="text-neutral-300">AVAILABLE FOR SELECT PROJECTS</span>
          <span className="text-neutral-600 hidden md:inline">/</span>
          <span className="text-neutral-500 hidden md:inline">FULL STACK · INTERACTION · DEVELOPMENT</span>
        </div>
      </div>

      {/* Main Center Editorial Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 lg:py-16">
        {/* Left: Magazine Typography Spread */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <div className="space-y-1 mb-8">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase block">
              AYUSH
            </span>
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase block">
              FULL-STACK DEVELOPER
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tighter text-white leading-[0.92] mb-8 select-none">
            DIGITAL<br />
            THINGS,<br />
            BUILT<br />
            PROPERLY.
          </h1>

          <p className="text-base text-neutral-400 font-normal leading-relaxed max-w-lg mb-10">
            I build websites and full-stack products that are fast, useful, and actually enjoyable
            to use. No bloated templates or decorative noise.
          </p>

          {/* Minimal Text Triggers */}
          <div className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-white hover:text-neutral-300 border-b border-white pb-1 transition-colors"
            >
              <span>SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Studio Camera Lens Optical Artifact */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-full aspect-square max-w-[440px]">
            <HeroScene3D />
          </div>

          <div className="w-full flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/[0.06]">
            <span>OBJECT: 50MM F/1.2 OPTIC</span>
            <span>THREE.JS PBR SHADER</span>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Spec Ledger */}
      <div className="border-t border-white/[0.08] pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-neutral-400">
        <div>
          <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">STACK</span>
          <span className="text-neutral-200 mt-1 block">React / Next.js / Node.js</span>
        </div>
        <div>
          <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">DATABASE</span>
          <span className="text-neutral-200 mt-1 block">PostgreSQL / Supabase</span>
        </div>
        <div>
          <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">SPATIAL</span>
          <span className="text-neutral-200 mt-1 block">Three.js / WebGL</span>
        </div>
        <div>
          <span className="text-neutral-600 block uppercase tracking-wider text-[10px]">STATUS</span>
          <span className="text-neutral-200 mt-1 block">100% 5★ Verified Deliveries</span>
        </div>
      </div>
    </section>
  );
};
