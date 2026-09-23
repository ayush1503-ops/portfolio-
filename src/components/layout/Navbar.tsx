import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-sm border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5 sm:py-6 flex items-baseline justify-between">
        {/* Editorial Monogram / Identity */}
        <a
          href="#home"
          className="text-white font-display font-extrabold text-lg sm:text-xl tracking-tight hover:text-neutral-300 transition-colors"
        >
          AYUSH
        </a>

        {/* Minimal Editorial Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-mono tracking-widest text-neutral-400">
          <a
            href="#work"
            className="hover:text-white transition-colors"
          >
            WORK
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors"
          >
            SKILLS
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors"
          >
            CONTACT
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-white transition-colors cursor-pointer text-neutral-500"
          >
            RESUME
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={onOpenResume}
            className="text-xs font-mono text-neutral-400 hover:text-white"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-400 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-white/[0.08] px-6 py-6 space-y-4 text-xs font-mono tracking-widest">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-white py-1"
          >
            WORK
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-white py-1"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-white py-1"
          >
            SKILLS
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-white py-1"
          >
            CONTACT
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="block text-neutral-400 hover:text-white py-1 cursor-pointer"
          >
            VIEW RESUME
          </button>
        </div>
      )}
    </header>
  );
};
