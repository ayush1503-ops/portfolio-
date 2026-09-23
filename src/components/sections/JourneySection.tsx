import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, CodeXml, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { AYUSH_JOURNEY, JourneyMilestone } from '../../data/ayushData';

const milestoneIcons: Record<string, React.ReactNode> = {
  'Full-Stack Developer & Founder': <Cpu className="w-5 h-5 text-[#38bdf8]" />,
  'AI Computer Vision & Data Intelligence': <CodeXml className="w-5 h-5 text-[#38bdf8]" />,
  'Modern Full-Stack Architecture Mastery': <Briefcase className="w-5 h-5 text-[#38bdf8]" />,
  'The Inception & First Codebases': <GraduationCap className="w-5 h-5 text-[#38bdf8]" />
};

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-[#050505] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none opacity-[0.015]">
        <span className="text-[18vw] font-black tracking-tighter text-white whitespace-nowrap">
          EXPERIENCE
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Background &amp; Milestones
          </div>
          <h2 className="text-3xl min-[375px]:text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            My Journey
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
            Bridging aesthetic digital craft with production engineering. A progression of disciplined problem-solving, real client impact, and applied technology.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#0047ff] via-[#38bdf8]/40 to-transparent" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {AYUSH_JOURNEY.map((item: JourneyMilestone, idx: number) => {
              const isEven = idx % 2 === 0;
              const icon = milestoneIcons[item.role] || <Briefcase className="w-5 h-5 text-[#38bdf8]" />;

              return (
                <div
                  key={item.role}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node on the line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#0047ff] bg-[#050505] flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,71,255,0.6)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-2xl group"
                    >
                      {/* Top Meta */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center bg-white/[0.04]">
                            {icon}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block">
                              {item.company}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                              {item.role}
                            </h3>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-white/90 bg-white/10 border border-white/10 shrink-0">
                          {item.year}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="space-y-2 mb-5 pt-3 border-t border-white/5">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
