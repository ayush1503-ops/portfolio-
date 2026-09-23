/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/modals/ProjectModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#e4e4e7] font-sans selection:bg-white/20 selection:text-white antialiased relative">
      {/* Top Editorial Minimal Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Flow */}
      <main>
        {/* Magazine Editorial Hero with Physical 3D Studio Camera Lens */}
        <HeroSection />

        {/* Selected Works - The Core Focal Centerpiece (Every project has an individual editorial spread) */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Personal & Authentic About (No photos, no cards, pure typography & technical details) */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Large Typographic Stack List (No generic cards or pills) */}
        <SkillsSection />

        {/* Direct, Honest Contact */}
        <ContactSection />
      </main>

      {/* Quiet, Minimalist Studio Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
