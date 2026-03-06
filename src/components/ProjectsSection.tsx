import React, { ComponentType, useRef, useEffect } from 'react';
import { Github, Bot, BarChart3, FileText, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'MisinfoGuard AI',
    category: 'Agentic AI System',
    description:
      'Multi-agent LLM system for automated fact-checking and credibility scoring using autonomous retrieval and explainable AI workflows.',
    stack: ['Python', 'FastAPI', 'React', 'LangChain', 'Gemini'],
    highlights: ['Multi-agent workflows', 'Autonomous retrieval', 'Explainable AI'],
    icon: Bot,
    color: '#00d4ff',
    github: 'https://github.com/ShewaleParth',
  },
  {
    title: 'Predictive Inventory',
    category: 'ML Forecasting',
    description:
      'ML pipeline for predictive stock depletion and demand forecasting with anomaly detection and real-time alert system using NeuralProphet.',
    stack: ['Python', 'PyTorch', 'NeuralProphet', 'Streamlit', 'SQL'],
    highlights: ['Anomaly detection', 'Demand forecasting', 'Alerts system'],
    icon: BarChart3,
    color: '#8b5cf6',
    github: 'https://github.com/ShewaleParth',
  },
  {
    title: 'GenAI Reports',
    category: 'Automated Insights',
    description:
      'GenAI-powered assistant that auto-generates executive reports from enterprise data using RAG pipeline, Pinecone vector DB, and Airflow scheduling.',
    stack: ['Python', 'LangChain', 'Llama-3', 'Pinecone', 'Airflow'],
    highlights: ['RAG Pipeline', 'PDF generation', 'KPI tracking'],
    icon: FileText,
    color: '#10b981',
    github: 'https://github.com/ShewaleParth',
  },
];

interface Project {
  title: string; category: string; description: string;
  stack: string[]; highlights: string[]; color: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>; github: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ctx = gsap.context(() => {
      gsap.from(card, {
        opacity: 0, y: 40, duration: 0.7, delay: index * 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 82%', toggleActions: 'play none none none' },
      });
    }, card);
    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="sci-card p-6 flex flex-col h-full group relative overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${project.color}14`, border: `1px solid ${project.color}30` }}
        >
          <project.icon className="w-5 h-5" style={{ color: project.color }} />
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.07] text-white/30 hover:text-white hover:border-white/20 transition-all"
        >
          <Github className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Category */}
      <div className="font-mono-code text-[10px] tracking-[0.15em] mb-2" style={{ color: project.color }}>
        {project.category.toUpperCase()}
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-white transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-white/45 text-sm leading-relaxed flex-grow mb-5">
        {project.description}
      </p>

      {/* Highlights */}
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

      {/* Stack */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] font-mono-code text-white/30 px-2 py-0.5 bg-white/[0.04] rounded">
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-[10px] font-mono-code text-white/30 px-2 py-0.5 bg-white/[0.04] rounded">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:scale-110 transition-all" />
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-28 relative bg-[#050a0f]">
    <div className="absolute inset-0 bg-dot opacity-20" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
      >
        <div>
          <div className="section-eyebrow mb-4">featured work</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Selected <span className="text-gradient-purple">Projects</span>
          </h2>
        </div>
        <a
          href="https://github.com/ShewaleParth"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-xs py-2.5 self-start flex items-center gap-2"
        >
          <Github className="w-3.5 h-3.5" /> View GitHub
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
