import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ExternalLink, Sparkles, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { AYUSH_PROJECTS, ProjectItem } from '../../data/ayushData';

const categories = [
  'All',
  'Web & E-Commerce',
  '3D & Interactive',
  'AI & Vision',
  'Creative Studio'
] as const;

type Category = (typeof categories)[number];

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl"
    >
      {/* 16:10 Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

        {/* Hover Sheen */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white font-mono bg-black/70 border border-white/15 backdrop-blur-md">
            {project.tag}
          </span>
          {project.metrics && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md">
              {project.metrics}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-7 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#38bdf8] transition-colors">
              {project.title}
            </h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.04] text-white/70 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0"
            >
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
            {project.desc}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mb-5">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 text-[11px] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white text-white hover:text-black text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
          >
            <span>Launch Live Experience</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'marquee'>('grid');

  const filteredProjects =
    activeCategory === 'All'
      ? AYUSH_PROJECTS
      : AYUSH_PROJECTS.filter((p) => p.category === activeCategory);

  const featuredProject = AYUSH_PROJECTS[0]; // The Pasha Atelier

  const marqueeRow1 = [...filteredProjects, ...filteredProjects];
  const marqueeRow2 = [...[...filteredProjects].reverse(), ...[...filteredProjects].reverse()];

  return (
    <section id="projects" className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-[#050505] overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0047ff]/6 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#38bdf8]/5 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              Verified Portfolio
            </div>
            <h2 className="text-3xl min-[375px]:text-4xl md:text-6xl font-black text-white tracking-tighter">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-md leading-relaxed">
            Real production applications, bespoke digital couture, interactive 3D WebGL experiences, and computer vision systems with live deployments.
          </p>
        </div>

        {/* Flagship Highlight Banner */}
        <div className="mb-14 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-black to-white/[0.01] p-6 md:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#0047ff]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Preview */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 relative group-hover:border-white/20 transition-all">
              <img
                src={featuredProject.img}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                  ● Flagship Live Project
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest mb-2 block">
                  {featuredProject.tag}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  {featuredProject.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2"
                >
                  <span>Explore Live Production</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & View Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'border-white/40 bg-white/10 text-white'
                  : 'border-white/5 text-gray-500 hover:text-gray-300'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('marquee')}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                viewMode === 'marquee'
                  ? 'border-white/40 bg-white/10 text-white'
                  : 'border-white/5 text-gray-500 hover:text-gray-300'
              }`}
              title="Continuous Marquee View"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects View */}
        {viewMode === 'grid' ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-6 overflow-hidden py-4">
            {/* Top Marquee */}
            <div className="overflow-hidden">
              <div className="animate-marquee-left flex gap-6 w-max">
                {marqueeRow1.map((p, i) => (
                  <div key={`m1-${p.id}-${i}`} className="w-[360px] shrink-0">
                    <ProjectCard project={p} />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Marquee */}
            <div className="overflow-hidden">
              <div className="animate-marquee-right flex gap-6 w-max">
                {marqueeRow2.map((p, i) => (
                  <div key={`m2-${p.id}-${i}`} className="w-[360px] shrink-0">
                    <ProjectCard project={p} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
