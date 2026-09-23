import React from 'react';
import { JOURNEY_MILESTONES } from '../../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-white/[0.08]">
      {/* Header */}
      <div className="mb-20">
        <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-3">
          04 // TRAJECTORY & EXPERIENCE
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
          THE JOURNEY.
        </h2>
      </div>

      {/* Minimalist Ledger Timeline */}
      <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
        {JOURNEY_MILESTONES.map((milestone, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 py-10 sm:py-12 gap-6 lg:gap-10 items-start hover:bg-white/[0.01] transition-colors"
          >
            {/* Year & Period */}
            <div className="lg:col-span-3">
              <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase block">
                {milestone.year}
              </span>
              <span className="text-[11px] font-mono text-neutral-600 block mt-1">
                {milestone.organization}
              </span>
            </div>

            {/* Title & Role */}
            <div className="lg:col-span-4 space-y-1">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                {milestone.title}
              </h3>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                {milestone.role}
              </p>
            </div>

            {/* Narrative & Concrete Deliverables */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                {milestone.description}
              </p>

              <div className="space-y-1.5 pt-1">
                {milestone.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                    <span className="text-neutral-600 select-none">―</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Tagline */}
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-neutral-500">
                {milestone.technologies.map((tech) => (
                  <span key={tech} className="px-1.5 py-0.5 border border-white/[0.06]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
