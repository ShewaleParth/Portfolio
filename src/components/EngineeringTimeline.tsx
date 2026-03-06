import { motion } from 'framer-motion';
import { GraduationCap, Code2, Cpu, Briefcase } from 'lucide-react';

const TIMELINE_PHASES = [
    {
        phase: '01',
        title: 'Student',
        period: '2022 – 2023',
        icon: GraduationCap,
        color: '#00d4ff',
        description: 'Joined B.E. AI & Data Science at Terna Engineering College. First exposure to ML fundamentals, Python, and data structures.',
        milestones: [
            'Learned Python, NumPy, Pandas',
            'First ML models with Scikit-learn',
            'Core CS & AI fundamentals',
            'CGPA: 7.14 overall',
        ],
        status: 'complete',
    },
    {
        phase: '02',
        title: 'Builder',
        period: '2023 – 2024',
        icon: Code2,
        color: '#8b5cf6',
        description: 'Started building real projects. Moved from tutorials to full applications — computer vision, APIs, and data pipelines.',
        milestones: [
            'First computer vision project (YOLOv5)',
            'Built FastAPI & Flask backends',
            'Completed IBM Data Science 101',
            'Joined Google Gen AI Hackathon',
        ],
        status: 'complete',
    },
    {
        phase: '03',
        title: 'Engineer',
        period: '2024 – 2025',
        icon: Cpu,
        color: '#10b981',
        description: 'Leveled up to system thinking. Multi-agent LLMs, RAG pipelines, and production-grade deployments. SGPA jumped to 8.09.',
        milestones: [
            'MisinfoGuard AI — multi-agent LLM',
            'Predictive Inventory — NeuralProphet',
            'GenAI Reports — RAG + Llama-3',
            'Qualified Mumbai Hacks 2025',
            'SGPA: 8.09 (current semester)',
        ],
        status: 'complete',
    },
    {
        phase: '04',
        title: 'Professional',
        period: '2025 – 2026',
        icon: Briefcase,
        color: '#f59e0b',
        description: 'Target: Full-time AI/ML Engineer role. Deploying production systems. Building portfolio for top-tier placement.',
        milestones: [
            'Production-grade AI deployments',
            'Open source contributions',
            'Full-time role at AI product company',
            'Graduation: 2026',
        ],
        status: 'active',
    },
];

const EngineeringTimeline = () => (
    <section id="timeline" className="py-28 relative bg-[#050a0f]">
        <div className="absolute inset-0 bg-dot opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="section-eyebrow mb-4">growth trajectory</div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                    Engineering <span className="text-gradient-green">Timeline</span>
                </h2>
                <p className="text-white/40 mt-4 max-w-lg text-sm leading-relaxed">
                    The path from student to applied AI engineer — phase by phase.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Connecting line (desktop) */}
                <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-gradient-to-r from-[#00d4ff]/40 via-[#8b5cf6]/40 via-[#10b981]/40 to-[#f59e0b]/40" />

                <div className="grid lg:grid-cols-4 gap-6 lg:gap-4">
                    {TIMELINE_PHASES.map((phase, index) => (
                        <motion.div
                            key={phase.phase}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative"
                        >
                            {/* Phase connector dot (desktop) */}
                            <div className="hidden lg:flex justify-center mb-6">
                                <div
                                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center relative z-10"
                                    style={{
                                        background: phase.status === 'active' ? phase.color : '#050a0f',
                                        borderColor: phase.color,
                                        boxShadow: phase.status === 'active' ? `0 0 16px ${phase.color}80` : 'none',
                                    }}
                                >
                                    {phase.status === 'active' && (
                                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: phase.color }} />
                                    )}
                                </div>
                            </div>

                            {/* Card */}
                            <div
                                className="sci-card p-5 h-full group relative overflow-hidden"
                                style={phase.status === 'active' ? { borderColor: `${phase.color}30` } : {}}
                            >
                                {phase.status === 'active' && (
                                    <div
                                        className="absolute top-0 left-0 right-0 h-px"
                                        style={{ background: `linear-gradient(90deg, transparent, ${phase.color}, transparent)` }}
                                    />
                                )}

                                {/* Phase Label */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono-code text-[10px] tracking-[0.2em] text-white/30">PHASE {phase.phase}</span>
                                    {phase.status === 'active' && (
                                        <span
                                            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono-code"
                                            style={{ background: `${phase.color}12`, border: `1px solid ${phase.color}30`, color: phase.color }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: phase.color }} />
                                            Active
                                        </span>
                                    )}
                                </div>

                                {/* Icon + Title */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ background: `${phase.color}14`, border: `1px solid ${phase.color}30` }}
                                    >
                                        <phase.icon className="w-5 h-5" style={{ color: phase.color }} />
                                    </div>
                                    <div>
                                        <div className="font-display font-bold text-white text-base">{phase.title}</div>
                                        <div className="font-mono-code text-[10px] text-white/30">{phase.period}</div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white/45 text-xs leading-relaxed mb-4">{phase.description}</p>

                                {/* Milestones */}
                                <ul className="space-y-2">
                                    {phase.milestones.map((m, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -8 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + i * 0.06 }}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: phase.color }} />
                                            <span className="text-white/50 text-[11px] leading-relaxed">{m}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Summary bar */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-10 sci-card p-5 flex flex-wrap items-center gap-6"
            >
                <div className="font-mono-code text-[10px] text-white/25">// trajectory_summary</div>
                <div className="flex flex-wrap gap-4">
                    {[
                        { label: 'Semesters Completed', val: '6/8', color: '#00d4ff' },
                        { label: 'Projects Built', val: '15+', color: '#8b5cf6' },
                        { label: 'Growth Rate (SGPA)', val: '+1.07', color: '#10b981' },
                        { label: 'Target Year', val: '2026', color: '#f59e0b' },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <div className="font-display font-bold text-lg" style={{ color: s.color }}>{s.val}</div>
                            <div className="text-[9px] font-mono-code text-white/30">{s.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default EngineeringTimeline;
