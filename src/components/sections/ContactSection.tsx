import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full border-t border-white/[0.08]">
      {/* Top Ledger */}
      <div className="border-b border-white/[0.08] pb-4 mb-16 text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center justify-between">
        <span>04 // INITIATE CONTACT</span>
        <span>DELHI, INDIA</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        {/* Left Column: Direct Editorial Statement */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.92] mb-8 select-none">
              LET’S BUILD<br />
              SOMETHING<br />
              PROPER.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-lg">
              I'm open for select contracts, bespoke website builds, and engineering roles.
              If you value clean code and direct communication, send me an email.
            </p>
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-neutral-950 border border-white/10 hover:border-white/25 transition-colors">
              <div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase block">DIRECT EMAIL</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-sans text-base font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-between group"
              >
                <span className="text-neutral-300 group-hover:text-white">GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-between group"
              >
                <span className="text-neutral-300 group-hover:text-white">FIVERR</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-between group"
              >
                <span className="text-neutral-300 group-hover:text-white">LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean, Unadorned Note Box */}
        <div className="lg:col-span-5">
          <div className="border border-white/15 p-6 sm:p-8 bg-neutral-950">
            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                SEND A NOTE
              </span>
              <p className="text-xs text-neutral-500 mt-1">
                Typical reply turnaround is under 6 hours.
              </p>
            </div>

            {sent ? (
              <div className="py-10 text-center space-y-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                  NOTE RECEIVED
                </span>
                <h4 className="font-display text-2xl text-white font-bold">
                  Thanks, {formState.name}.
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  I will write back to you at{' '}
                  <span className="text-white font-mono">{formState.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="text-xs font-mono text-neutral-500 hover:text-white underline cursor-pointer pt-2 block mx-auto"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 text-xs font-sans focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 text-xs font-sans focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about what you are building..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 text-xs font-sans focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-mono tracking-widest uppercase text-black bg-white hover:bg-neutral-200 transition-colors font-semibold cursor-pointer"
                >
                  TRANSMIT MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
