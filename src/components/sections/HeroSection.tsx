import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { AYUSH_HERO_ROLES, AYUSH_STATS, AYUSH_INFO } from '../../data/ayushData';

const DynamicInteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const numParticles = Math.min(75, Math.floor(width / 22));
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2
    }));

    let time = 0;

    const render = () => {
      time += 0.012;
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      const mouseX = mouseRef.current.x * width;
      const mouseY = mouseRef.current.y * height;

      ctx.clearRect(0, 0, width, height);

      // Subtle horizontal cybernetic waves
      const linesCount = 5;
      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();
        const baseY = height * 0.45 + (i - 2) * 55;
        const waveAmp = 20 + i * 5;
        const waveFreq = 0.0022;

        ctx.strokeStyle = `rgba(0, 71, 255, ${0.035 + (1 - i / linesCount) * 0.03})`;
        ctx.lineWidth = 1;

        for (let x = 0; x <= width; x += 20) {
          const distToMouse = Math.hypot(x - mouseX, baseY - mouseY);
          const mouseFactor = Math.max(0, 1 - distToMouse / 300) * 35;
          const y = baseY + Math.sin(x * waveFreq + time + i * 0.7) * waveAmp - mouseFactor;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Particles & connection links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulse += 0.025;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          p.x -= (dx / dist) * force * 1.2;
          p.y -= (dy / dist) * force * 1.2;
        }

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.5;
        const alpha = p.opacity * (0.6 + Math.sin(p.pulse) * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? `rgba(56, 189, 248, ${alpha})` : `rgba(255, 255, 255, ${alpha * 0.7})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist2 / 110) * 0.07})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
};

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % AYUSH_HERO_ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[100svh] flex flex-col justify-between pt-28 md:pt-36 pb-16 px-4 md:px-8 bg-[#050505] overflow-hidden">
      {/* Background Interactive Canvas Scene & Radial Vignettes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicInteractiveCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_100%)] opacity-80" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#0047ff]/8 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center my-auto">
        {/* Availability Badge with Portrait */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl hover:border-white/20 transition-all"
        >
          <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20 shrink-0">
            <img
              src={AYUSH_INFO.portraitImage}
              alt={AYUSH_INFO.name}
              className="w-full h-full object-cover object-top"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-black animate-pulse" />
          </div>
          <span className="text-xs md:text-sm font-medium text-gray-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
            Available for Projects &amp; High-Impact Contracts
          </span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4"
          style={{ textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 0 60px rgba(0,71,255,0.25)' }}
        >
          {AYUSH_INFO.name}
        </motion.h1>

        {/* Animated Role Ticker */}
        <div className="h-10 md:h-12 flex items-center justify-center overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-3xl font-light text-gray-300 tracking-wide flex items-center gap-2"
            >
              <span className="text-[#0047ff] font-mono font-semibold">/</span>
              <span>{AYUSH_HERO_ROLES[roleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Clear Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed px-2"
        >
          I craft modern, scalable, and visually engaging digital experiences that feel different — engineering high-performance web applications, interactive 3D systems, and creative video platforms.
        </motion.p>

        {/* Call to Actions & Verified Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-2 text-sm md:text-base cursor-pointer"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white/[0.05] hover:bg-white/10 text-white font-medium rounded-full border border-white/15 hover:border-white/40 transition-all duration-300 text-sm md:text-base cursor-pointer"
          >
            Get In Touch
          </a>
          <a
            href={AYUSH_INFO.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-semibold hover:bg-emerald-500/20 transition-all flex items-center gap-2"
          >
            <span>Fiverr 5.0★ Seller Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Clean Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4"
        >
          {AYUSH_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-4 md:p-5 flex flex-col items-center justify-center group hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white group-hover:scale-105 transition-transform duration-300 text-gradient mb-1">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-200 uppercase tracking-wider text-center">
                {stat.label}
              </span>
              <span className="text-[10px] text-gray-400 font-mono mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400 mb-2">
          Scroll to Explore
        </span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-white/70 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
