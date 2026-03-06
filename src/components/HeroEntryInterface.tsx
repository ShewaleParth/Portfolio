import { ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronDown, Cpu } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const STATS = [
    { value: '15+', label: 'Systems Built', color: '#00d4ff' },
    { value: '95%', label: 'Top Accuracy', color: '#8b5cf6' },
    { value: '3+', label: 'Certifications', color: '#10b981' },
    { value: '2026', label: 'Grad Year', color: '#f59e0b' },
];

const IDENTITY_LINES = [
    'Applied AI Engineer',
    'Systems Builder',
    'ML Pipeline Architect',
    'LLM Systems Developer',
];

const HeroEntryInterface = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [gridNodes] = useState(() =>
        Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: [8, 20, 35, 50, 65, 78, 90, 15, 30, 55, 72, 88][i],
            y: [15, 70, 25, 80, 20, 65, 35, 50, 85, 45, 75, 55][i],
            delay: i * 0.3,
            size: [3, 4, 2, 5, 3, 4, 2, 3, 5, 4, 3, 2][i],
        }))
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-node', {
                opacity: 0, scale: 0, duration: 0.6,
                stagger: 0.12, ease: 'back.out(1.7)', delay: 0.8,
            });
            gsap.from('.hero-connector', {
                opacity: 0, duration: 1.2, delay: 1.5,
                stagger: 0.08,
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

            {/* Radial glows */}
            <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-[#00d4ff]/[0.03] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/[0.04] rounded-full blur-[120px] pointer-events-none" />

            {/* Scanline overlay */}
            <div className="scanline-overlay absolute inset-0 pointer-events-none" />

            {/* Floating network nodes */}
            {gridNodes.map((node) => (
                <div
                    key={node.id}
                    className="hero-node absolute rounded-full opacity-0"
                    style={{
                        width: `${node.size}px`,
                        height: `${node.size}px`,
                        background: node.id % 3 === 0 ? '#00d4ff' : node.id % 3 === 1 ? '#8b5cf6' : '#10b981',
                        top: `${node.y}%`,
                        left: `${node.x}%`,
                        boxShadow: `0 0 ${node.size * 4}px ${node.id % 3 === 0 ? '#00d4ff' : node.id % 3 === 1 ? '#8b5cf6' : '#10b981'}`,
                        animation: `float ${4 + (node.id % 3)}s ease-in-out infinite`,
                        animationDelay: `${node.delay}s`,
                    }}
                />
            ))}

            {/* System status badge (top) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-24 right-6 hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#10b981]/10 border border-[#10b981]/25 rounded-full"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="font-mono-code text-[10px] text-[#10b981]">SYSTEM ONLINE — OPEN TO HIRE</span>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* ── Left: Identity ── */}
                    <div>
                        {/* System boot line */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <Cpu className="w-4 h-4 text-[#00d4ff]" />
                            <span className="font-mono-code text-[11px] text-white/30 tracking-[0.2em] uppercase">
                                Intelligence Engine — Boot Sequence
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-4"
                        >
                            Parth{' '}
                            <span className="text-gradient-cyan">Shewale</span>
                        </motion.h1>

                        {/* Animated identity line */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.55 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="font-mono-code text-[#00d4ff]/60 text-sm">{'>'}</span>
                            <span className="font-mono-code text-[#00d4ff] text-lg md:text-xl font-medium">
                                <TypeWriter words={IDENTITY_LINES} className="" />
                            </span>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.65 }}
                            className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-10"
                        >
                            Final-year B.E. student in AI & Data Science building{' '}
                            <span className="text-white/75">deployable intelligent systems</span> —
                            from multi-agent LLMs and RAG pipelines to predictive ML and computer vision.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.75 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            <a href="#projects" className="btn-primary" id="hero-view-systems">
                                View AI Systems <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#simulator" className="btn-outline" id="hero-try-simulator">
                                Try AI Simulator
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 text-white/50 hover:text-white text-xs font-mono-code border border-white/[0.08] rounded-lg hover:border-white/20 hover:bg-white/[0.04] transition-all"
                                id="hero-resume"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                Resume
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex items-center gap-4"
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

                    {/* ── Right: System Console + Stats ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="hidden lg:flex flex-col gap-4"
                    >
                        {/* System Status Terminal */}
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-dot bg-[#ff5f57]" />
                                <div className="terminal-dot bg-[#febc2e]" />
                                <div className="terminal-dot bg-[#28c840]" />
                                <span className="ml-3 font-mono-code text-xs text-white/30">engineer_profile.py</span>
                                <ExternalLink className="w-3 h-3 text-white/20 ml-auto" />
                            </div>
                            <div className="terminal-body text-xs leading-[1.9]">
                                <div className="text-[#8b5cf6]">class <span className="text-[#00d4ff]">AppliedAIEngineer</span>:</div>
                                <div className="pl-4 text-white/50">  <span className="text-[#8b5cf6]">def</span> <span className="text-[#fbbf24]">__init__</span>(self):</div>
                                <div className="pl-8 text-white/60">self.name = <span className="text-[#10b981]">"Parth Shewale"</span></div>
                                <div className="pl-8 text-white/60">self.identity = <span className="text-[#10b981]">"Applied AI Engineer"</span></div>
                                <div className="pl-8 text-white/60">self.focus = <span className="text-[#10b981]">["Systems", "Deployment", "Impact"]</span></div>
                                <div className="pl-8 text-white/60">self.stack = <span className="text-[#10b981]">["Python", "PyTorch", "LangChain", "FastAPI"]</span></div>
                                <div className="mt-2 text-white/30">&nbsp;</div>
                                <div className="pl-4 text-white/50">  <span className="text-[#8b5cf6]">def</span> <span className="text-[#fbbf24]">philosophy</span>(self):</div>
                                <div className="pl-8 text-[#10b981]">return <span className="text-white/60">"Systems {'>'} Models | Deployment {'>'} Theory"</span></div>
                                <div className="mt-2 text-white/30">&nbsp;</div>
                                <div className="text-white/40"><span className="text-[#00d4ff]">parth</span> = AppliedAIEngineer()</div>
                                <div className="flex items-center gap-1 text-white/40">
                                    <span className="text-[#00d4ff]">&gt;&gt;&gt;</span> parth.philosophy()
                                    <span className="animate-blink text-[#00d4ff] ml-1">█</span>
                                </div>
                                <div className="text-[#10b981] pl-4 mt-1">'Systems {'>'} Models | Deployment {'>'} Theory'</div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-4 gap-3">
                            {STATS.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + i * 0.1 }}
                                    className="sci-card p-4 text-center group"
                                >
                                    <div
                                        className="text-xl font-display font-bold mb-0.5 transition-all duration-300 group-hover:scale-110"
                                        style={{ color: stat.color }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] font-mono-code text-white/30 leading-tight">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Identity keywords */}
                        <div className="sci-card p-4">
                            <div className="font-mono-code text-[10px] text-white/25 mb-3"># positioning</div>
                            <div className="flex flex-wrap gap-2">
                                {['Systems Thinker', 'AI Engineer', 'Deployment Focus', 'LLM Systems', 'ML Pipelines', 'Real-World Impact'].map((kw) => (
                                    <span key={kw} className="tech-badge text-[10px] py-0.5">{kw}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
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

export default HeroEntryInterface;
