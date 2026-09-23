import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  // Grab the 5 core real projects
  const pasha = PROJECTS.find(p => p.id === 'the-pasha-atelier') || PROJECTS[0];
  const games = PROJECTS.find(p => p.id === 'games-studio') || PROJECTS[1];
  const onion = PROJECTS.find(p => p.id === 'onion-grader-ai') || PROJECTS[2];
  const pulse = PROJECTS.find(p => p.id === 'pulse-commerce') || PROJECTS[3];
  const netflix = PROJECTS.find(p => p.id === 'netflix-data-analysis') || PROJECTS[5];

  return (
    <section id="work" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full border-t border-white/[0.08]">
      {/* Section Introduction */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-24 pb-6 border-b border-white/[0.08] gap-6">
        <div>
          <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase block mb-2">
            INDEX // SELECTED ARCHIVE
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
            FEATURED WORK.
          </h2>
        </div>
        <div className="text-xs font-mono text-neutral-400 max-w-xs text-left sm:text-right">
          Production applications, e-commerce flagships, and spatial tools. Real deployments, real code.
        </div>
      </div>

      <div className="space-y-36 sm:space-y-44">
        {/* ========================================================
            PAGE 01: THE PASHA ATELIER (Full-bleed Hero Spread)
           ======================================================== */}
        <article className="space-y-8">
          {/* Top Identifier */}
          <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-4 text-xs font-mono">
            <span className="text-3xl font-display font-extrabold text-white">01</span>
            <span className="tracking-widest uppercase text-neutral-400">
              E-COMMERCE / DIGITAL ATELIER
            </span>
            <span className="text-neutral-500 hidden sm:inline">VERCEL // 2026</span>
          </div>

          {/* Huge Full Project Image */}
          <div
            onClick={() => onSelectProject(pasha)}
            className="group cursor-pointer relative overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-500"
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src={pasha.imageUrl}
                alt={pasha.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700 ease-out"
              />
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/85 backdrop-blur-sm px-3 py-1.5 border border-white/15 text-xs font-mono text-neutral-300">
              CLICK TO VIEW ARCHITECTURAL CASE STUDY
            </div>
          </div>

          {/* Underneath: Asymmetric Metadata Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-4 space-y-4">
              <h3
                onClick={() => onSelectProject(pasha)}
                className="font-display font-extrabold text-3xl sm:text-4xl text-white hover:text-neutral-300 transition-colors cursor-pointer tracking-tight"
              >
                {pasha.title}
              </h3>
              <div className="space-y-1 text-xs font-mono text-neutral-400">
                <div><span className="text-neutral-600">ROLE:</span> FULL-STACK ARCHITECT</div>
                <div><span className="text-neutral-600">STACK:</span> NEXT.JS / REACT / TAILWIND CSS</div>
                <div><span className="text-neutral-600">YEAR:</span> 2026</div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 text-sm text-neutral-300 leading-relaxed font-normal">
              <p>
                An editorial digital atelier engineered for an exclusive tailoring house. Built with fluid
                transitions, bespoke catalog displays, client consultation scheduling, and micro-interactions
                optimized for luxury brand conversion. Scored 99+ on Lighthouse.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-400">
                {pasha.technologies.map(t => (
                  <span key={t} className="px-2 py-0.5 border border-white/[0.08]">{t}</span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end gap-4 text-xs font-mono">
              <a
                href={pasha.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 border-b border-white pb-0.5 transition-colors"
              >
                <span>OPEN LIVE SITE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onSelectProject(pasha)}
                className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
              >
                [ READ FULL NOTES ]
              </button>
            </div>
          </div>
        </article>

        {/* ========================================================
            PAGE 02: NEXSTUDIO GAMES (Asymmetric Split Magazine Layout)
           ======================================================== */}
        <article className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-4 text-xs font-mono">
            <span className="text-3xl font-display font-extrabold text-white">02</span>
            <span className="tracking-widest uppercase text-neutral-400">
              INTERACTIVE 3D / WEBGL PRODUCTION
            </span>
            <span className="text-neutral-500 hidden sm:inline">THREE.JS // 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Deep Story & Specs */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <div>
                <h3
                  onClick={() => onSelectProject(games)}
                  className="font-display font-extrabold text-3xl sm:text-4xl text-white hover:text-neutral-300 transition-colors cursor-pointer tracking-tight"
                >
                  {games.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">
                  {games.subtitle}
                </p>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                An avant-garde gaming studio showcase featuring real-time WebGL viewports, custom lighting
                cues, and high-performance dark architecture running smoothly at 60 FPS across both mobile
                and desktop.
              </p>

              <div className="border-t border-b border-white/[0.08] py-3 space-y-1.5 text-xs font-mono text-neutral-400">
                <div className="flex justify-between">
                  <span className="text-neutral-600">ROLE</span>
                  <span className="text-neutral-200">Lead Frontend & Spatial</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">ENGINE</span>
                  <span className="text-neutral-200">Three.js / WebGL / React</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">PERFORMANCE</span>
                  <span className="text-neutral-200">60 FPS Stable Rendering</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono">
                <a
                  href={games.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 border-b border-white pb-0.5 transition-colors"
                >
                  <span>LIVE SHOWCASE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => onSelectProject(games)}
                  className="text-neutral-500 hover:text-white cursor-pointer"
                >
                  CASE STUDY
                </button>
              </div>
            </div>

            {/* Right: Offset Image */}
            <div
              onClick={() => onSelectProject(games)}
              className="lg:col-span-7 order-1 lg:order-2 group cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 transition-all bg-neutral-950 aspect-[16/10]"
            >
              <img
                src={games.imageUrl}
                alt={games.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </article>

        {/* ========================================================
            PAGE 03: ONION GRADER AI (Industrial Telemetry Spread)
           ======================================================== */}
        <article className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-4 text-xs font-mono">
            <span className="text-3xl font-display font-extrabold text-white">03</span>
            <span className="tracking-widest uppercase text-neutral-400">
              AI COMPUTER VISION & TELEMETRY
            </span>
            <span className="text-neutral-500 hidden sm:inline">PYTHON + REACT // 2026</span>
          </div>

          <div>
            <h3
              onClick={() => onSelectProject(onion)}
              className="font-display font-extrabold text-3xl sm:text-4xl text-white hover:text-neutral-300 transition-colors cursor-pointer tracking-tight"
            >
              {onion.title}
            </h3>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">
              AUTOMATED AGRICULTURAL INSPECTION & QUALITY SORTING
            </p>
          </div>

          {/* Panoramic Widescreen Image */}
          <div
            onClick={() => onSelectProject(onion)}
            className="group cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 transition-all bg-neutral-950 aspect-[21/9]"
          >
            <img
              src={onion.imageUrl}
              alt={onion.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700 ease-out"
            />
          </div>

          {/* 3-Column Technical Data Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs font-mono border-t border-white/[0.08] pt-6">
            <div className="space-y-2">
              <span className="text-neutral-500 uppercase block tracking-wider">[01] PROBLEM & PIPELINE</span>
              <p className="text-neutral-300 font-sans leading-relaxed text-xs">
                Bridging optical sorting cameras with a real-time web telemetry dashboard.
                Defect classification heuristics sorting crop batches into grade tiers.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-neutral-500 uppercase block tracking-wider">[02] STACK & LATENCY</span>
              <p className="text-neutral-300 font-sans leading-relaxed text-xs">
                Python computer vision pipeline paired with PostgreSQL and React dashboard.
                Sub-200ms inference processing cycle with 94% defect precision.
              </p>
            </div>

            <div className="space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-neutral-500 uppercase block tracking-wider">[03] SYSTEM ACCESS</span>
                <span className="text-neutral-400 block text-xs mt-1">Operator interface active</span>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={onion.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300 border-b border-white pb-0.5 inline-flex items-center gap-1"
                >
                  <span>LIVE SYSTEM</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => onSelectProject(onion)}
                  className="text-neutral-500 hover:text-white cursor-pointer"
                >
                  DETAILS
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* ========================================================
            PAGE 04: PULSE COMMERCE STORE (Streetwear Review Spread)
           ======================================================== */}
        <article className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-4 text-xs font-mono">
            <span className="text-3xl font-display font-extrabold text-white">04</span>
            <span className="tracking-widest uppercase text-neutral-400">
              FULL-STACK STREETWEAR COMMERCE
            </span>
            <span className="text-neutral-500 hidden sm:inline">FREELANCE CLIENTS // 2025</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Product Grid Screenshot */}
            <div
              onClick={() => onSelectProject(pulse)}
              className="lg:col-span-7 group cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 transition-all bg-neutral-950 aspect-[16/10]"
            >
              <img
                src={pulse.imageUrl}
                alt={pulse.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
            </div>

            {/* Right: Editorial Production Notes */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3
                  onClick={() => onSelectProject(pulse)}
                  className="font-display font-extrabold text-3xl sm:text-4xl text-white hover:text-neutral-300 transition-colors cursor-pointer tracking-tight"
                >
                  {pulse.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">
                  HIGH-CONVERSION APPAREL STOREFRONT
                </p>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Engineered for independent apparel labels requiring lean bundles, instant category filtering,
                and persistent cart sessions without third-party plugin bloat. Packaged and delivered to
                international clients on freelance platforms with 100% 5-star satisfaction.
              </p>

              <div className="space-y-2 text-xs font-mono border-t border-white/[0.08] pt-4 text-neutral-400">
                <div><span className="text-neutral-600">ROLE:</span> FULL-STACK DEVELOPER</div>
                <div><span className="text-neutral-600">STACK:</span> HTML5 / CSS3 / JAVASCRIPT / STORAGE</div>
                <div><span className="text-neutral-600">DELIVERY:</span> 15+ FREELANCE DEPLOYMENTS</div>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono pt-2">
                <a
                  href={pulse.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 border-b border-white pb-0.5 transition-colors"
                >
                  <span>LIVE STORE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => onSelectProject(pulse)}
                  className="text-neutral-500 hover:text-white cursor-pointer"
                >
                  CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* ========================================================
            PAGE 05: NETFLIX CATALOG INTELLIGENCE (SQL Data Ledger)
           ======================================================== */}
        <article className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-4 text-xs font-mono">
            <span className="text-3xl font-display font-extrabold text-white">05</span>
            <span className="tracking-widest uppercase text-neutral-400">
              SQL DATA MODELING & ANALYTICS
            </span>
            <span className="text-neutral-500 hidden sm:inline">POSTGRESQL + POWER BI // 2025</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h3
                onClick={() => onSelectProject(netflix)}
                className="font-display font-extrabold text-3xl sm:text-4xl text-white hover:text-neutral-300 transition-colors cursor-pointer tracking-tight"
              >
                {netflix.title}
              </h3>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                CATALOG INTELLIGENCE ENGINE
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Structured and queried over 8,800 records using advanced PostgreSQL queries (CTEs, window
                aggregations, multi-table joins). Synthesized findings into executive Power BI visual dashboards
                highlighting international content growth.
              </p>
            </div>

            {/* Engineering Terminal / Code Excerpt Box */}
            <div className="lg:col-span-7 bg-neutral-950 border border-white/10 p-5 font-mono text-xs text-neutral-300 space-y-3">
              <div className="flex items-center justify-between text-neutral-500 border-b border-white/[0.08] pb-2 text-[11px]">
                <span>QUERY_CATALOG_WINDOW.SQL</span>
                <span>POSTGRESQL // 8,800+ ROWS</span>
              </div>
              <pre className="text-neutral-400 overflow-x-auto text-[11px] leading-relaxed">
{`WITH GenreFrequency AS (
  SELECT unnest(string_to_array(listed_in, ', ')) AS genre,
         release_year,
         COUNT(*) as total_titles,
         RANK() OVER (PARTITION BY release_year ORDER BY COUNT(*) DESC) as rank
  FROM netflix_titles
  WHERE release_year >= 2018
  GROUP BY genre, release_year
)
SELECT genre, release_year, total_titles 
FROM GenreFrequency 
WHERE rank <= 3 ORDER BY release_year DESC, total_titles DESC;`}
              </pre>
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-xs">
                <span className="text-neutral-500">POWER BI DASHBOARD SYNTHESIS</span>
                <button
                  onClick={() => onSelectProject(netflix)}
                  className="text-white hover:underline cursor-pointer"
                >
                  VIEW CASE STUDY →
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
