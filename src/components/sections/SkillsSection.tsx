import React from 'react';
import { motion } from 'motion/react';
import { Code2, Server, Database, Brain, Terminal, Palette, Sparkles, Cpu } from 'lucide-react';
import { AYUSH_SKILL_CATEGORIES, AYUSH_INFO, SkillCategory } from '../../data/ayushData';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-[#38bdf8]" />,
  Server: <Server className="w-5 h-5 text-[#38bdf8]" />,
  Database: <Database className="w-5 h-5 text-[#38bdf8]" />,
  Brain: <Brain className="w-5 h-5 text-[#38bdf8]" />,
  Terminal: <Terminal className="w-5 h-5 text-[#38bdf8]" />,
  Palette: <Palette className="w-5 h-5 text-[#38bdf8]" />
};

const SkillCategoryCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  const icon = iconMap[category.iconName] || <Cpu className="w-5 h-5 text-[#38bdf8]" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl border border-white/10 flex items-center justify-center bg-white/[0.04] group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {category.title}
            </h3>
          </div>
          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
            {category.skills.length} Tools
          </span>
        </div>

        <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
          {category.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="px-3 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] group-hover:bg-white/[0.05] text-xs font-mono text-gray-200 flex items-center gap-2 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
            <span>{skill.name}</span>
            <span className="text-[10px] text-gray-500 font-sans">
              ({skill.level})
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-[#030303] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#0047ff]/5 blur-[200px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl min-[375px]:text-4xl md:text-6xl font-black text-white tracking-tighter">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-md leading-relaxed">
            A production-tested stack refined through building full-stack web applications, 3D WebGL scenes, computer vision algorithms, and database analytics.
          </p>
        </div>

        {/* Top Feature Spotlight: Core Architecture Visual Banner */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.03] via-black to-[#0047ff]/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest mb-2 block">
              ENGINEERING PHILOSOPHY
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Performance, Scalability &amp; Tactile Design
            </h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Every system I build is architected with type safety, clean separation of concerns, optimized query execution, and buttery-smooth 60fps interaction models.
            </p>
          </div>

          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(0,71,255,0.3)] shrink-0">
            <img
              src={AYUSH_INFO.skillsHologramImage}
              alt="Ayush Technical Core"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 6 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AYUSH_SKILL_CATEGORIES.map((category, idx) => (
            <SkillCategoryCard key={category.title} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
