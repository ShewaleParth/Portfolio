import { motion } from 'framer-motion';
import { Award, Github, GraduationCap, Trophy, ExternalLink } from 'lucide-react';

const HACKATHONS = [
    {
        name: 'Gen AI Exchange Hackathon',
        organizer: 'Google × Hack2Skill',
        result: 'Qualified',
        year: '2024',
        color: '#10b981',
        description: 'Qualified for the Gen AI Exchange Hackathon by Google × Hack2Skill. Built a GenAI-powered solution using Google Gemini APIs in a competitive sprint.',
    },
    {
        name: 'Mumbai Hacks 2025',
        organizer: 'Mumbai Tech Community',
        result: 'Qualified',
        year: '2025',
        color: '#f59e0b',
        description: 'Qualified for one of Mumbai\'s largest hackathons, demonstrating competitive engineering skills.',
    },
];

const CERTIFICATIONS = [
    { name: 'Artificial Intelligence Fundamentals', issuer: 'Edunet Foundation', color: '#00d4ff' },
    { name: 'Gen AI Exchange Hackathon', issuer: 'Google × Hack2Skill', color: '#8b5cf6' },
    { name: 'IBM Data Science 101', issuer: 'IBM', color: '#10b981' },
    { name: 'Qualified — Mumbai Hacks 2025', issuer: 'Achievement', color: '#f59e0b' },
];

const GITHUB_STATS = [
    { label: 'Public Repos', val: '15+', color: '#00d4ff' },
    { label: 'Languages Used', val: '6+', color: '#8b5cf6' },
    { label: 'AI/ML Projects', val: '10+', color: '#10b981' },
    { label: 'Active Since', val: '2022', color: '#f59e0b' },
];

const EDUCATION_STATS = [
    { label: 'B.E. CGPA', val: '7.14', note: 'Overall', color: '#00d4ff' },
    { label: 'Current SGPA', val: '8.09', note: 'Improvement Trend ↑', color: '#10b981' },
    { label: 'SSC Score', val: '89.2%', note: 'Class 10', color: '#8b5cf6' },
];

const ProofSection = () => (
    <section id="proof" className="py-28 relative bg-[#07090f]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="section-eyebrow mb-4">verified record</div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                    Proof <span className="text-gradient-cyan">Section</span>
                </h2>
                <p className="text-white/40 mt-4 max-w-lg text-sm leading-relaxed">
                    Hackathon results, certifications, academic scores, and GitHub stats — verified skill.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">

                {/* Left Column */}
                <div className="space-y-6">
                    {/* Hackathon Results */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Trophy className="w-4 h-4 text-[#f59e0b]" />
                            <span className="font-mono-code text-xs text-white/40 tracking-[0.15em] uppercase">Hackathon Record</span>
                        </div>
                        <div className="space-y-3">
                            {HACKATHONS.map((h, i) => (
                                <motion.div
                                    key={h.name}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="sci-card p-5 group"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <div className="font-display font-semibold text-white text-sm">{h.name}</div>
                                            <div className="font-mono-code text-[10px] text-white/35 mt-0.5">{h.organizer}</div>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span
                                                className="px-2.5 py-1 rounded-full text-[9px] font-mono-code font-bold"
                                                style={{ background: `${h.color}15`, border: `1px solid ${h.color}35`, color: h.color }}
                                            >
                                                {h.result}
                                            </span>
                                            <span className="font-mono-code text-[9px] text-white/25">{h.year}</span>
                                        </div>
                                    </div>
                                    <p className="text-white/40 text-xs leading-relaxed">{h.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* GitHub Stats */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Github className="w-4 h-4 text-[#00d4ff]" />
                            <span className="font-mono-code text-xs text-white/40 tracking-[0.15em] uppercase">GitHub Activity</span>
                        </div>
                        <div className="sci-card p-5">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {GITHUB_STATS.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.08 }}
                                        className="text-center py-3 px-2 bg-white/[0.02] rounded-lg border border-white/[0.06]"
                                    >
                                        <div className="font-display font-bold text-xl mb-0.5" style={{ color: stat.color }}>{stat.val}</div>
                                        <div className="text-[9px] font-mono-code text-white/30 leading-tight">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                            <a
                                href="https://github.com/ShewaleParth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 justify-center py-2 px-4 bg-white/[0.03] border border-white/[0.07] rounded-lg hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/[0.04] transition-all group"
                            >
                                <Github className="w-3.5 h-3.5 text-white/40 group-hover:text-[#00d4ff] transition-colors" />
                                <span className="font-mono-code text-xs text-white/40 group-hover:text-[#00d4ff] transition-colors">github.com/ShewaleParth</span>
                                <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-[#00d4ff] transition-colors ml-1" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Certifications */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Award className="w-4 h-4 text-[#8b5cf6]" />
                            <span className="font-mono-code text-xs text-white/40 tracking-[0.15em] uppercase">Certifications</span>
                        </div>
                        <div className="space-y-3">
                            {CERTIFICATIONS.map((cert, i) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="sci-card p-4 flex items-center gap-4 group"
                                >
                                    <div
                                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                        style={{ background: `${cert.color}14`, border: `1px solid ${cert.color}30` }}
                                    >
                                        <Award className="w-4 h-4" style={{ color: cert.color }} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-medium text-white/85 text-sm truncate">{cert.name}</div>
                                        <div className="font-mono-code text-[10px] text-white/35 mt-0.5">{cert.issuer}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Academic Scores */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <GraduationCap className="w-4 h-4 text-[#10b981]" />
                            <span className="font-mono-code text-xs text-white/40 tracking-[0.15em] uppercase">Academic Record</span>
                        </div>
                        <div className="sci-card p-5">
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {EDUCATION_STATS.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center py-3 px-2 bg-white/[0.02] rounded-lg border border-white/[0.06]"
                                    >
                                        <div className="font-display font-bold text-xl mb-0.5" style={{ color: stat.color }}>{stat.val}</div>
                                        <div className="text-[9px] font-mono-code text-white/30 leading-tight">{stat.label}</div>
                                        <div className="text-[8px] text-white/20 mt-0.5">{stat.note}</div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="py-2 px-3 bg-[#10b981]/[0.05] border border-[#10b981]/20 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                                    <span className="font-mono-code text-[10px] text-[#10b981]">
                                        Terna Engineering College — B.E. AI & Data Science (2022–2026)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ProofSection;
