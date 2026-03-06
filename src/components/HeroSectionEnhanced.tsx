import { ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const STATS = [
  { value: '15+', label: 'Projects Built' },
  { value: '95%', label: 'Model Accuracy' },
  { value: '3+', label: 'Certifications' },
  { value: 'B.E.', label: 'AI & Data Science' },
];

const HeroSection = () => {
  const roles = ['Data Scientist', 'ML Engineer', 'Python Developer', 'AI Researcher'];
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-particle', {
        opacity: 0, scale: 0, duration: 0.8,
        stagger: 0.15, ease: 'back.out(1.7)', delay: 1.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050a0f]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#00d4ff]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="hero-particle absolute rounded-full opacity-0"
          style={{
            width: `${[4, 6, 3, 5, 4, 6][i]}px`,
            height: `${[4, 6, 3, 5, 4, 6][i]}px`,
            background: i % 2 === 0 ? '#00d4ff' : '#8b5cf6',
            top: `${[20, 65, 40, 75, 30, 55][i]}%`,
            left: `${[10, 80, 55, 15, 75, 35][i]}%`,
            boxShadow: `0 0 12px ${i % 2 === 0 ? '#00d4ff' : '#8b5cf6'}`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Content ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="section-eyebrow mb-6"
            >
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-4"
            >
              Parth{' '}
              <span className="text-gradient-cyan">Shewale</span>
            </motion.h1>

            {/* Role Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="font-mono-code text-[#00d4ff]/60 text-sm">&gt;</span>
              <span className="font-mono-code text-[#00d4ff] text-lg md:text-xl font-medium">
                <TypeWriter words={roles} className="" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-10"
            >
              Final-year B.E. student in AI & Data Science building intelligent systems
              — from predictive ML models and RAG pipelines to computer vision and LLM agents.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-5"
            >
              {[
                { href: 'https://github.com/ShewaleParth', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/parth-shewale', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:sparth7972@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/[0.1] rounded-lg text-white/40 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/[0.06] transition-all duration-200"
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <span className="text-white/20 text-xs font-mono-code ml-2">// find me online</span>
            </motion.div>
          </div>

          {/* ── Right: Terminal + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Terminal Window */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-3 font-mono-code text-xs text-white/30">parth_shewale.py</span>
                <ExternalLink className="w-3 h-3 text-white/20 ml-auto" />
              </div>
              <div className="terminal-body text-xs leading-[1.9]">
                <div className="text-[#8b5cf6]">class <span className="text-[#00d4ff]">DataScientist</span>:</div>
                <div className="pl-4 text-white/50">  <span className="text-[#8b5cf6]">def</span> <span className="text-[#fbbf24]">__init__</span>(self):</div>
                <div className="pl-8 text-white/60">self.name = <span className="text-[#10b981]">"Parth Shewale"</span></div>
                <div className="pl-8 text-white/60">self.role = <span className="text-[#10b981]">"Data Scientist"</span></div>
                <div className="pl-8 text-white/60">self.stack = [<span className="text-[#10b981]">"Python"</span>, <span className="text-[#10b981]">"PyTorch"</span>, <span className="text-[#10b981]">"Pandas"</span>]</div>
                <div className="pl-8 text-white/60">self.passion = <span className="text-[#10b981]">"Turning data into insights"</span></div>
                <div className="mt-2 text-white/30">&nbsp;</div>
                <div className="pl-4 text-white/50">  <span className="text-[#8b5cf6]">def</span> <span className="text-[#fbbf24]">get_status</span>(self):</div>
                <div className="pl-8 text-[#10b981]">return <span className="text-white/60">"open_to_work = True"</span></div>
                <div className="mt-2 text-white/30">&nbsp;</div>
                <div className="text-white/40"><span className="text-[#00d4ff]">parth</span> = DataScientist()</div>
                <div className="flex items-center gap-1 text-white/40">
                  <span className="text-[#00d4ff]">&gt;&gt;&gt;</span> parth.get_status()
                  <span className="animate-blink text-[#00d4ff] ml-1">█</span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="sci-card p-4 text-center"
                >
                  <div className="text-xl font-display font-bold text-gradient-cyan mb-0.5">{stat.value}</div>
                  <div className="text-[10px] font-mono-code text-white/30 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono-code text-[10px] text-white/25 tracking-[0.2em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
