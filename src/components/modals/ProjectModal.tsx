import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-[2rem] bg-[#0c0c0e]/95 border border-white/10 p-6 sm:p-10 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview Box */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mb-8 bg-neutral-950 border border-white/10">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white/80 border border-white/10">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Header Information */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-emerald-400">
            {project.metrics}
          </p>
        </div>

        {/* Narrative Description */}
        <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed mb-8">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Architecture Details & Features */}
        {project.keyFeatures && (
          <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
              Key Engineering Features
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff] mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Applied Technologies */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Visit Live Deployment</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
