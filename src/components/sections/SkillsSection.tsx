import React from 'react';

export const SkillsSection: React.FC = () => {
  const skillsData = [
    {
      category: 'FRONTEND',
      number: '01',
      skills: ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / Tailwind', 'Three.js / WebGL']
    },
    {
      category: 'BACKEND',
      number: '02',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Supabase', 'Python']
    },
    {
      category: 'DATABASE',
      number: '03',
      skills: ['PostgreSQL', 'MongoDB', 'SQL Analytics (CTEs, Window Functions)']
    },
    {
      category: 'TOOLS',
      number: '04',
      skills: ['Git', 'GitHub', 'Vercel', 'Power BI', 'Figma']
    }
  ];

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full border-t border-white/[0.08]">
      {/* Top Ledger */}
      <div className="border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center justify-between">
        <span>03 // TECHNICAL COMPETENCIES</span>
        <span>PRODUCTION VERIFIED</span>
      </div>

      <div className="mb-20">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
          TECHNICAL STACK.
        </h2>
      </div>

      {/* Large Typographic List - Allowing Typography Itself To Create The Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {skillsData.map((group) => (
          <div key={group.category} className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-white/[0.12] pb-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                {group.category}
              </h3>
              <span className="font-mono text-[11px] text-neutral-600">
                {group.number}
              </span>
            </div>

            <ul className="space-y-3.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="font-display font-bold text-xl sm:text-2xl text-neutral-300 hover:text-white transition-colors cursor-default tracking-tight"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Small Technical Note */}
      <div className="mt-20 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <span>ALL TECHNOLOGIES TESTED IN PRODUCTION AND FREELANCE DELIVERIES</span>
        <span>STRICT TYPES · CLEAN COMMITS · ZERO BLOAT</span>
      </div>
    </section>
  );
};
