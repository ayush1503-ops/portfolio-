import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { AYUSH_SERVICES } from '../../data/ayushData';

const categories = ['All Capabilities', 'Core Engineering', 'Creative Tech', 'Design Systems', 'AI & Data'];

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Capabilities');
  const [activeServiceId, setActiveServiceId] = useState(AYUSH_SERVICES[0].id);

  const filteredServices =
    selectedCategory === 'All Capabilities'
      ? AYUSH_SERVICES
      : AYUSH_SERVICES.filter((s) => s.category === selectedCategory);

  const activeService = AYUSH_SERVICES.find((s) => s.id === activeServiceId) || AYUSH_SERVICES[0];

  return (
    <section id="services" className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-[#040404] overflow-hidden">
      {/* Background Watermark - non-blocking, positioned carefully */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none opacity-[0.015]">
        <span className="text-[20vw] font-black tracking-tighter text-white whitespace-nowrap">
          SERVICES
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              What I Deliver
            </div>
            <h2 className="text-3xl min-[375px]:text-4xl md:text-6xl font-black text-white tracking-tighter">
              Services &amp; Capabilities
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-md leading-relaxed">
            Full-spectrum technical execution from bespoke frontend engineering and interactive 3D WebGL to robust backend architectures and AI computer vision systems.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Showcase Spotlight (Large Top Card) */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Info */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest">
                    SERVICE {activeService.id}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
                  <span className="text-xs font-mono text-gray-400">
                    {activeService.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {activeService.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  {activeService.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {activeService.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs md:text-sm hover:scale-105 transition-transform duration-300 w-fit"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.85, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/60">
                <span>AYUSH THAKUR / SYSTEM SOLUTIONS</span>
                <span className="text-emerald-400">100% PRODUCTION READY</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredServices.map((service) => {
            const isSelected = service.id === activeServiceId;
            return (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#0047ff] bg-white/[0.06] shadow-[0_0_30px_rgba(0,71,255,0.15)] -translate-y-1'
                    : 'border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-gray-500">{service.id}</span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-[#0047ff]/20 text-[#38bdf8] border border-[#0047ff]/40'
                          : 'bg-white/5 text-gray-400'
                      }`}
                    >
                      {service.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-3 mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-gray-400 group-hover:text-white">
                  <span>View Details</span>
                  <span className="text-[#0047ff] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
