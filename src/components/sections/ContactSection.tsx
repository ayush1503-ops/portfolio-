import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { AYUSH_INFO } from '../../data/ayushData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative w-full py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Info Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase mb-4">
            / GET IN TOUCH
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl min-[375px]:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight"
          >
            Let's Build Something{' '}
            <span className="text-gradient">Exceptional</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg mb-8"
          >
            Available for custom full-stack web builds, luxury e-commerce platforms, interactive 3D web applications, and creative video collaborations.
          </motion.p>

          {/* Contact Details List */}
          <div className="flex flex-col gap-4 mb-8">
            <a
              href={`mailto:${AYUSH_INFO.email}`}
              className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.03] group-hover:border-[#0047ff] group-hover:bg-[#0047ff]/10 transition-colors">
                <Mail className="w-4 h-4 text-[#0047ff]" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email Directly</div>
                <div className="text-sm font-medium">{AYUSH_INFO.email}</div>
              </div>
            </a>

            <a
              href={`tel:${AYUSH_INFO.phone}`}
              className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.03] group-hover:border-[#0047ff] group-hover:bg-[#0047ff]/10 transition-colors">
                <Phone className="w-4 h-4 text-[#0047ff]" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Call / WhatsApp</div>
                <div className="text-sm font-medium">{AYUSH_INFO.phone}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.03]">
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Location</div>
                <div className="text-sm font-medium">{AYUSH_INFO.location}</div>
              </div>
            </div>
          </div>

          {/* Quick Platform Link */}
          <div className="flex flex-wrap gap-3">
            <a
              href={AYUSH_INFO.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
            >
              <span>Fiverr 5.0★ Seller Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <form
            onSubmit={handleSubmit}
            className="glass p-6 md:p-12 rounded-[2rem] flex flex-col gap-5 md:gap-6 relative overflow-hidden group w-full"
          >
            {/* Ambient Electric Blue Radial Spot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0047ff] rounded-full blur-[100px] opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity duration-700" />

            {/* Input Row: Name & Email */}
            <div className="relative z-10 flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-widest pl-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Miller"
                  className="w-full text-base bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-white outline-none focus:bg-white/10 focus:border-[#0047ff] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-widest pl-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="w-full text-base bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-white outline-none focus:bg-white/10 focus:border-[#0047ff] transition-all duration-300"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-mono text-gray-400 uppercase tracking-widest pl-2">
                Project Type
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Web App / E-Commerce / Video Portfolio"
                className="w-full text-base bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-white outline-none focus:bg-white/10 focus:border-[#0047ff] transition-all duration-300"
              />
            </div>

            {/* Message Area */}
            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-widest pl-2">
                Message Details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your vision, timeline, goals, or requirements..."
                className="w-full text-base bg-white/5 border border-white/10 rounded-3xl px-5 py-3.5 text-white outline-none focus:bg-white/10 focus:border-[#0047ff] transition-all duration-300 resize-none"
              />
            </div>

            {/* Success notification banner */}
            {submitted && (
              <div className="relative z-10 flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-full">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message received! I'll get back to you within 24 hours.</span>
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative z-10 mt-2 md:mt-4 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden group/btn hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] disabled:opacity-50 w-full md:w-auto self-start cursor-pointer"
            >
              <span className="relative z-20">
                {loading ? 'Sending Message...' : "Send Inquiry"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
