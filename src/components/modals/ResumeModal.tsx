import React, { useEffect } from 'react';
import { X, Mail, Phone, MapPin, ExternalLink, Printer } from 'lucide-react';
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
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[2rem] bg-[#0c0c0e]/95 border border-white/10 p-6 sm:p-12 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Bar with Actions */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              Verified Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="space-y-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 font-light">
              {PERSONAL_INFO.title} · Freelance Web Developer
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
            <a href={PERSONAL_INFO.fiverr} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
              <span>Fiverr 5.0★ Seller Profile</span>
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2 mb-8">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            PROFESSIONAL SUMMARY
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed font-normal">
            Detail-oriented full-stack software engineer and creative web developer with hands-on production experience in modern
            web applications, responsive user interfaces, and performance-focused architectures (React, Next.js, Three.js, Tailwind CSS).
            Committed to clean, maintainable code, tactile typography, and 100% 5-star client satisfaction.
          </p>
        </div>

        {/* Technical Skills Breakdown */}
        <div className="space-y-3 mb-8">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            CORE COMPETENCIES &amp; STACK
          </h3>
          <div className="border border-white/[0.08] divide-y divide-white/[0.06] text-xs font-mono">
            <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-neutral-500 uppercase">Frontend:</span>
              <span className="sm:col-span-3 text-neutral-200">
                React, Next.js, JavaScript (ES6+), Tailwind CSS, Three.js / WebGL, HTML5 / CSS3
              </span>
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-neutral-500 uppercase">Backend &amp; APIs:</span>
              <span className="sm:col-span-3 text-neutral-200">
                Node.js, Express, RESTful APIs, Python, Structured JSON Services
              </span>
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-neutral-500 uppercase">Interactive &amp; AI:</span>
              <span className="sm:col-span-3 text-neutral-200">
                Three.js WebGL Viewports, Computer Vision (OpenCV), Video Post-Production &amp; Editing
              </span>
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-neutral-500 uppercase">Deployment:</span>
              <span className="sm:col-span-3 text-neutral-200">
                Vercel Production Deployments, Responsive UX Testing
              </span>
            </div>
          </div>
        </div>

        {/* Featured Production Work */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            VERIFIED PRODUCTION PROJECTS (LIVE ON VERCEL)
          </h3>
          <div className="space-y-3">
            <div className="p-4 border border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-2">
                <span className="font-bold text-white text-sm">The Pasha Atelier (thepashaatelier.vercel.app)</span>
                <span className="font-mono text-neutral-500">React · Next.js · Tailwind CSS</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Engineered a luxury bespoke atelier web application featuring fluid responsive interactions,
                custom inquiry consultation flows, and high-resolution catalog showcases.
              </p>
            </div>

            <div className="p-4 border border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-2">
                <span className="font-bold text-white text-sm">NexStudio Games (games-studio-smoky.vercel.app)</span>
                <span className="font-mono text-neutral-500">React · Three.js · WebGL</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Avant-garde gaming studio website featuring spatial Three.js viewports, real-time lighting cues,
                and buttery smooth 60fps animations.
              </p>
            </div>

            <div className="p-4 border border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-2">
                <span className="font-bold text-white text-sm">Onion Grader AI (onion-grader-2-pjdu.vercel.app)</span>
                <span className="font-mono text-neutral-500">Python · OpenCV · React Dashboard</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Automated agricultural inspection platform utilizing optical defect recognition heuristics with
                real-time telemetry dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Credentials */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div>
            <span className="text-neutral-500 uppercase block">EDUCATION</span>
            <span className="text-white font-medium">B.Tech in Computer Science &amp; Engineering</span>
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
