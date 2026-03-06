import { motion } from 'framer-motion';
import { Brain, Layers, Cpu, Target, Zap, Code2 } from 'lucide-react';

const MINDSET_ITEMS = [
    {
        icon: Layers,
        title: 'Systems Thinker',
        desc: 'I design end-to-end pipelines — not isolated models. Every component I build fits into a larger, deployable system.',
        color: '#00d4ff',
    },
    {
        icon: Target,
        title: 'Deployment Focused',
        desc: 'Theory means nothing without deployment. From FastAPI endpoints to Dockerized services — I build things that run in the real world.',
        color: '#8b5cf6',
    },
    {
        icon: Zap,
        title: 'Impact Driven',
        desc: 'Every project starts with a real problem. Misinformation, supply chain gaps, slow reporting — I target pain points with AI solutions.',
        color: '#10b981',
    },
    {
        icon: Code2,
        title: 'Engineer Mindset',
        desc: 'Clean code, modular architecture, reproducible experiments. I maintain production standards even in research projects.',
        color: '#f59e0b',
    },
];

const SPECIALIZATIONS = [
    { label: 'Multi-Agent LLM Systems', level: 88 },
    { label: 'Predictive ML Pipelines', level: 92 },
    { label: 'Computer Vision (YOLO/CV)', level: 85 },
    { label: 'RAG & GenAI Applications', level: 82 },
    { label: 'MLOps & API Deployment', level: 80 },
];

const SystemProfileSection = () => (
    <section id="about" className="py-28 relative bg-[#07090f]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <div className="section-eyebrow mb-4">system profile</div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                    Engineering <span className="text-gradient-cyan">Mindset</span>
                </h2>
                <p className="text-white/40 mt-4 max-w-xl text-sm leading-relaxed">
                    Not a student who knows algorithms. An engineer who builds systems that solve real problems.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left: Mindset Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {MINDSET_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="sci-card p-5 group"
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                style={{ background: `${item.color}14`, border: `1px solid ${item.color}30` }}
                            >
                                <item.icon className="w-5 h-5" style={{ color: item.color }} />
                            </div>
                            <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
                            <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Right: Profile + Specializations */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Identity Block */}
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <div className="terminal-dot bg-[#ff5f57]" />
                            <div className="terminal-dot bg-[#febc2e]" />
                            <div className="terminal-dot bg-[#28c840]" />
                            <span className="ml-3 font-mono-code text-xs text-white/30">system_profile.json</span>
                        </div>
                        <div className="terminal-body text-xs leading-[2]">
                            <div className="text-white/40">{'{'}</div>
                            <div className="pl-4">
                                <span className="text-[#8b5cf6]">"identity"</span>
                                <span className="text-white/40">: </span>
                                <span className="text-[#10b981]">"Applied AI Engineer"</span>
                                <span className="text-white/40">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-[#8b5cf6]">"location"</span>
                                <span className="text-white/40">: </span>
                                <span className="text-[#10b981]">"Thane, Maharashtra, India"</span>
                                <span className="text-white/40">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-[#8b5cf6]">"education"</span>
                                <span className="text-white/40">: </span>
                                <span className="text-[#10b981]">"B.E. AI &amp; Data Science, 2026"</span>
                                <span className="text-white/40">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-[#8b5cf6]">"philosophy"</span>
                                <span className="text-white/40">: </span>
                                <span className="text-[#10b981]">"Systems &gt; Models, Deployment &gt; Theory"</span>
                                <span className="text-white/40">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-[#8b5cf6]">"status"</span>
                                <span className="text-white/40">: </span>
                                <span className="text-[#00d4ff]">"open_to_work"</span>
                            </div>
                            <div className="text-white/40">{'}'}</div>
                        </div>
                    </div>

                    {/* Specialization Bars */}
                    <div className="sci-card p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <Brain className="w-4 h-4 text-[#00d4ff]" />
                            <span className="font-mono-code text-xs text-white/40 tracking-[0.15em] uppercase">Core Specializations</span>
                        </div>
                        <div className="space-y-4">
                            {SPECIALIZATIONS.map((spec, i) => (
                                <motion.div
                                    key={spec.label}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                >
                                    <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-white/70 text-xs font-medium">{spec.label}</span>
                                        <span className="font-mono-code text-[10px] text-[#00d4ff]">{spec.level}%</span>
                                    </div>
                                    <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${spec.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                                            className="h-full rounded-full"
                                            style={{
                                                background: 'linear-gradient(90deg, #00d4ff99, #00d4ff)',
                                                boxShadow: '0 0 8px rgba(0,212,255,0.4)',
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { val: '15+', label: 'Systems Built', color: '#00d4ff' },
                            { val: '95%', label: 'Top Accuracy', color: '#8b5cf6' },
                            { val: '2026', label: 'Grad Year', color: '#10b981' },
                        ].map((s) => (
                            <div key={s.label} className="sci-card p-4 text-center">
                                <div className="text-xl font-display font-bold mb-0.5" style={{ color: s.color }}>{s.val}</div>
                                <div className="text-[9px] font-mono-code text-white/30 leading-tight">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default SystemProfileSection;
