import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-[#0c0c0e] border border-white/20 p-6 sm:p-10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Media Preview Box */}
        <div className="relative w-full aspect-[16/9] overflow-hidden mb-8 bg-neutral-950 border border-white/10">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-3 left-3">
            <span className="text-[11px] font-mono px-2.5 py-1 bg-black/80 text-neutral-300 border border-white/10 uppercase">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Header Information */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span>{project.role}</span>
            <span>/</span>
            <span>{project.year}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
            {project.subtitle}
          </p>
        </div>

        {/* Comprehensive Case Study Narrative */}
        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed border-t border-white/[0.08] pt-8 mb-8">
          <div>
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
              ARCHITECTURAL SCOPE
            </h4>
            <p className="leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
              KEY DELIVERABLES & ENGINEERING DECISIONS
            </h4>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 border border-white/[0.06] bg-neutral-950/40 text-xs text-neutral-300">
                  <span className="text-neutral-500 font-mono">―</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance & Quality Metrics */}
          {project.metrics && (
            <div className="p-4 border border-white/[0.08] bg-neutral-950/40 text-xs font-mono">
              <span className="text-neutral-500 uppercase block mb-1">VERIFIED BENCHMARK</span>
              <span className="text-white font-medium">{project.metrics}</span>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
              TECHNOLOGIES DEPLOYED
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
              {project.technologies.map((t) => (
                <span key={t} className="py-1 px-2.5 border border-white/10 bg-neutral-900">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono">
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-black bg-white hover:bg-neutral-200 transition-colors font-semibold"
              >
                <span>OPEN LIVE SYSTEM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-neutral-300 hover:text-white border border-white/15 hover:border-white/35 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>SOURCE</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white underline cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
