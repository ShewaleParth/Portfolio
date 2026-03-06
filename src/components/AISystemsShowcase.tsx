import React, { useState, ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bot, BarChart3, FileText, Github, ChevronDown,
    ArrowUpRight, Shield, Target, Layers, Zap, Server
} from 'lucide-react';

interface Project {
    id: string;
    title: string;
    category: string;
    tagline: string;
    description: string;
    problem: string;
    architecture: string[];
    modelLogic: string;
    deployment: string;
    impact: string;
    stack: string[];
    highlights: string[];
    icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
    github: string;
    status: 'deployed' | 'prototype' | 'in-dev';
}

const PROJECTS: Project[] = [
    {
        id: 'misinfoguard',
        title: 'MisinfoGuard AI',
        category: 'Agentic AI System',
        tagline: 'Automated fact-checking with multi-agent LLM orchestration',
        description: 'Multi-agent LLM system for automated fact-checking and credibility scoring using autonomous retrieval and explainable AI workflows.',
        problem: 'Misinformation spreads faster than manual fact-checkers can respond. News sources need real-time verification at scale.',
        architecture: [
            'Input Layer: Claim intake via FastAPI REST endpoint',
            'Agent Layer: LangChain orchestrator spawns 3 specialist agents',
            'Retrieval Layer: Web search + vector DB lookup with Gemini embeddings',
            'Verdict Layer: Scoring engine with confidence intervals',
            'Output Layer: React dashboard with explainable reasoning chains',
        ],
        modelLogic: 'Uses a Chain-of-Thought prompting strategy where each agent independently verifies the claim, then a meta-agent aggregates votes weighted by source credibility scores.',
        deployment: 'FastAPI backend containerized with Docker. React frontend served via Vite. LangChain agents orchestrated asynchronously.',
        impact: 'Processes claims in under 3 seconds with multi-source verification. Transparency through visible reasoning chains reduces trust deficit.',
        stack: ['Python', 'FastAPI', 'React', 'LangChain', 'Gemini', 'Docker'],
        highlights: ['Multi-agent workflows', 'Autonomous retrieval', 'Explainable AI', 'Real-time verification'],
        icon: Shield,
        color: '#00d4ff',
        github: 'https://github.com/ShewaleParth',
        status: 'prototype',
    },
    {
        id: 'predictive-inventory',
        title: 'Predictive Inventory',
        category: 'ML Forecasting Pipeline',
        tagline: 'NeuralProphet-powered demand forecasting for enterprise supply chains',
        description: 'ML pipeline for predictive stock depletion and demand forecasting with anomaly detection and real-time alert system.',
        problem: 'Retail chains lose millions annually to stockouts and overstock situations. Traditional forecasting fails with irregular demand spikes.',
        architecture: [
            'Ingestion: SQL database → Pandas ETL pipeline',
            'Feature Engineering: Lag features, rolling averages, seasonality flags',
            'Model: NeuralProphet with PyTorch backend for time-series forecasting',
            'Anomaly Detection: Isolation Forest for outlier identification',
            'Output: Streamlit dashboard + automated email alerts',
        ],
        modelLogic: 'NeuralProphet decomposes demand into trend, seasonality, and event effects. PyTorch handles the neural components for complex patterns. Isolation Forest flags anomalous consumption within 2-sigma bounds.',
        deployment: 'Streamlit app deployed locally with SQL backend. Automated alert system via Python scheduler. Modular pipeline ready for cloud lift.',
        impact: 'Reduced projected stockout risk by 30%+ in test scenarios. Alert system enables proactive restocking 3–5 days in advance.',
        stack: ['Python', 'PyTorch', 'NeuralProphet', 'Streamlit', 'SQL', 'Pandas'],
        highlights: ['Demand forecasting', 'Anomaly detection', 'Real-time alerts', 'Time-series ML'],
        icon: BarChart3,
        color: '#8b5cf6',
        github: 'https://github.com/ShewaleParth',
        status: 'prototype',
    },
    {
        id: 'genai-reports',
        title: 'GenAI Reports',
        category: 'Automated Intelligence',
        tagline: 'RAG-powered executive report generation from enterprise data',
        description: 'GenAI assistant that auto-generates executive reports from enterprise data using RAG pipeline, Pinecone vector DB, and Airflow scheduling.',
        problem: 'Executives spend hours compiling data into reports. Business analysts waste time on formatting instead of insight generation.',
        architecture: [
            'Data Sources: SQL databases, CSV exports, API feeds',
            'Vector Indexing: Pinecone for semantic document storage',
            'RAG Pipeline: LangChain retrieval → Llama-3 generation',
            'Orchestration: Apache Airflow for scheduled report runs',
            'Output: PDF generation with executive summaries + KPI charts',
        ],
        modelLogic: 'Llama-3 LLM receives retrieved context chunks from Pinecone (top-k=10) and generates structured reports following a defined template. Temperature=0.3 for consistency.',
        deployment: 'Airflow DAGs schedule nightly report generation. Python generates PDF artifacts. FastAPI endpoint for on-demand generation.',
        impact: 'Reduced report generation time by 80%+ in test scenarios. Consistent formatting eliminates human error in executive communications.',
        stack: ['Python', 'LangChain', 'Llama-3', 'Pinecone', 'Airflow', 'FastAPI'],
        highlights: ['RAG Pipeline', 'PDF generation', 'KPI tracking', 'Scheduled automation'],
        icon: FileText,
        color: '#10b981',
        github: 'https://github.com/ShewaleParth',
        status: 'in-dev',
    },
];

const STATUS_CONFIG = {
    deployed: { label: 'Live', color: '#10b981' },
    prototype: { label: 'Prototype', color: '#f59e0b' },
    'in-dev': { label: 'In Dev', color: '#8b5cf6' },
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [expanded, setExpanded] = useState(false);
    const status = STATUS_CONFIG[project.status];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            className="sci-card overflow-hidden group"
        >
            {/* Top accent line */}
            <div
                className="h-px w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
            />

            {/* Card Header — always visible */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{ background: `${project.color}14`, border: `1px solid ${project.color}30` }}
                        >
                            <project.icon className="w-5 h-5" style={{ color: project.color }} />
                        </div>
                        <div>
                            <div className="font-mono-code text-[9px] tracking-[0.15em] mb-0.5 uppercase" style={{ color: project.color }}>
                                {project.category}
                            </div>
                            <div
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono-code"
                                style={{ background: `${status.color}12`, border: `1px solid ${status.color}30`, color: status.color }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: status.color }} />
                                {status.label}
                            </div>
                        </div>
                    </div>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.07] text-white/30 hover:text-white hover:border-white/20 transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Github className="w-3.5 h-3.5" />
                    </a>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {project.title}
                </h3>
                <p className="text-white/40 text-xs font-mono-code mb-3">{project.tagline}</p>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[9px] font-mono-code text-white/40 bg-white/[0.04] border border-white/[0.07]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Feature Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.highlights.map((h) => (
                        <span
                            key={h}
                            className="px-2.5 py-1 rounded-full text-[10px] font-mono-code"
                            style={{ background: `${project.color}10`, border: `1px solid ${project.color}25`, color: `${project.color}cc` }}
                        >
                            {h}
                        </span>
                    ))}
                </div>

                {/* Expand Toggle */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 text-xs font-mono-code transition-colors duration-200 w-full"
                    style={{ color: expanded ? project.color : 'rgba(255,255,255,0.3)' }}
                >
                    <span>{expanded ? 'Hide Case Study' : 'View Case Study'}</span>
                    <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-3.5 h-3.5" />
                    </motion.div>
                    <div className="flex-1 h-px bg-white/[0.06] ml-2" />
                </button>
            </div>

            {/* Expandable Case Study */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 border-t border-white/[0.06]">
                            <div className="grid md:grid-cols-2 gap-4 mt-5">

                                {/* Problem */}
                                <div className="sci-card p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Target className="w-3.5 h-3.5" style={{ color: project.color }} />
                                        <span className="font-mono-code text-[10px] text-white/40 uppercase tracking-[0.15em]">Problem Statement</span>
                                    </div>
                                    <p className="text-white/60 text-xs leading-relaxed">{project.problem}</p>
                                </div>

                                {/* Model Logic */}
                                <div className="sci-card p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Bot className="w-3.5 h-3.5" style={{ color: project.color }} />
                                        <span className="font-mono-code text-[10px] text-white/40 uppercase tracking-[0.15em]">Model Logic</span>
                                    </div>
                                    <p className="text-white/60 text-xs leading-relaxed">{project.modelLogic}</p>
                                </div>

                                {/* Architecture */}
                                <div className="sci-card p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Layers className="w-3.5 h-3.5" style={{ color: project.color }} />
                                        <span className="font-mono-code text-[10px] text-white/40 uppercase tracking-[0.15em]">System Architecture</span>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {project.architecture.map((step, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="font-mono-code text-[9px] mt-0.5 flex-shrink-0" style={{ color: project.color }}>
                                                    {String(i + 1).padStart(2, '0')}.
                                                </span>
                                                <span className="text-white/50 text-[11px] leading-relaxed">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Deployment + Impact */}
                                <div className="space-y-3">
                                    <div className="sci-card p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Server className="w-3.5 h-3.5" style={{ color: project.color }} />
                                            <span className="font-mono-code text-[10px] text-white/40 uppercase tracking-[0.15em]">Deployment</span>
                                        </div>
                                        <p className="text-white/60 text-xs leading-relaxed">{project.deployment}</p>
                                    </div>
                                    <div className="sci-card p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Zap className="w-3.5 h-3.5" style={{ color: project.color }} />
                                            <span className="font-mono-code text-[10px] text-white/40 uppercase tracking-[0.15em]">Real-World Impact</span>
                                        </div>
                                        <p className="text-white/60 text-xs leading-relaxed">{project.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const AISystemsShowcase = () => (
    <section id="projects" className="py-28 relative bg-[#07090f]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
            >
                <div>
                    <div className="section-eyebrow mb-4">ai systems showcase</div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                        Built <span className="text-gradient-purple">Systems</span>
                    </h2>
                    <p className="text-white/40 mt-3 max-w-lg text-sm leading-relaxed">
                        Each project presented as a case study — problem, architecture, logic, deployment, impact.
                    </p>
                </div>
                <a
                    href="https://github.com/ShewaleParth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-2.5 self-start flex items-center gap-2"
                >
                    <Github className="w-3.5 h-3.5" /> View GitHub
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </motion.div>

            {/* Project Cards */}
            <div className="space-y-4">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    </section>
);

export default AISystemsShowcase;
