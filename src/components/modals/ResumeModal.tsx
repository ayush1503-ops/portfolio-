import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-[#0c0c0e] border border-white/20 p-6 sm:p-12 text-left text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              CURRICULUM VITAE // VERIFIED CREDENTIALS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white border border-white/15 hover:border-white/35 transition-colors cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 border border-white/15 hover:border-white/35 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="space-y-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1">
              Full-Stack Developer · Data Analyst · Creative Technologist
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-neutral-400 pt-3 border-t border-white/[0.08]">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-neutral-500" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              <span>github.com/ayush1503-ops</span>
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2 mb-8">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            PROFESSIONAL SUMMARY
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed font-normal">
            Detail-oriented full-stack software engineer with extensive hands-on production experience in modern
            web applications, relational database design (PostgreSQL), and performance-focused frontend architectures
            (React, Next.js, Three.js). Committed to clean, maintainable code, rigorous typography, and high-conversion UX.
          </p>
        </div>

        {/* Technical Skills Breakdown */}
        <div className="space-y-3 mb-8">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            CORE COMPETENCIES & STACK
          </h3>
          <div className="border border-white/[0.08] divide-y divide-white/[0.06] text-xs font-mono">
            <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-neutral-500 uppercase">Frontend:</span>
              <span className="sm:col-span-3 text-neutral-200">
                React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Three.js / WebGL, HTML5 / CSS3
              </span>
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-neutral-500 uppercase">Backend & APIs:</span>
              <span className="sm:col-span-3 text-neutral-200">
                Node.js, Express, RESTful APIs, Python, Token Auth, Middleware Pipelines
              </span>
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-neutral-500 uppercase">Databases:</span>
              <span className="sm:col-span-3 text-neutral-200">
                PostgreSQL, SQL (CTEs, Window Functions, Complex Joins), Supabase, MongoDB
              </span>
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-neutral-500 uppercase">Tools & Deployment:</span>
              <span className="sm:col-span-3 text-neutral-200">
                Git, GitHub, Vercel CI/CD, Power BI, Generative AI Coding Workflows
              </span>
            </div>
          </div>
        </div>

        {/* Featured Production Work */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            VERIFIED PRODUCTION PROJECTS
          </h3>
          <div className="space-y-3">
            <div className="p-4 border border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-2">
                <span className="font-bold text-white text-sm">The Pasha Atelier (thepashaatelier.vercel.app)</span>
                <span className="font-mono text-neutral-500">React · Next.js · Tailwind CSS</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Engineered a luxury bespoke atelier web application featuring fluid responsive interactions,
                custom inquiry consultation flows, and high-resolution catalog showcases scoring 99+ on Lighthouse.
              </p>
            </div>

            <div className="p-4 border border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-2">
                <span className="font-bold text-white text-sm">Netflix Catalog Intelligence & SQL Modeling</span>
                <span className="font-mono text-neutral-500">PostgreSQL · Python · Power BI</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Structured and queried over 8,800 records using advanced PostgreSQL queries (CTEs, window aggregations,
                multi-table joins). Synthesized findings into executive Power BI visual dashboards.
              </p>
            </div>

            <div className="p-4 border border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-2">
                <span className="font-bold text-white text-sm">Onion Grader AI & Operator Telemetry</span>
                <span className="font-mono text-neutral-500">Python · Computer Vision · React · PostgreSQL</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Automated agricultural inspection platform utilizing optical defect recognition heuristics with
                real-time telemetry dashboard achieving sub-200ms processing cycles.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Credentials */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div>
            <span className="text-neutral-500 uppercase block">EDUCATION</span>
            <span className="text-white font-medium">B.Tech in Computer Science & Engineering</span>
          </div>

          <div className="text-right">
            <span className="text-neutral-500 uppercase block">FREELANCE RECORD</span>
            <span className="text-emerald-400 font-medium">100% 5★ Verified Deliveries</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
          <span>AYUSH THAKUR · PORTFOLIO CV</span>
          <button
            onClick={onClose}
            className="text-white underline hover:text-neutral-300 cursor-pointer"
          >
            CLOSE WINDOW
          </button>
        </div>
      </div>
    </div>
  );
};
