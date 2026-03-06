import { motion } from 'framer-motion';
import { Brain, Database, Cpu, Rocket, Code2, CheckCircle2 } from 'lucide-react';

const LAYERS = [
    {
        id: 'ai',
        icon: Brain,
        label: 'AI Layer',
        sublabel: 'Intelligence Core',
        color: '#00d4ff',
        skills: [
            { name: 'LangChain', level: 80 },
            { name: 'Gemini / GPT API', level: 78 },
            { name: 'Multi-Agent Systems', level: 75 },
            { name: 'Prompt Engineering', level: 82 },
        ],
        tags: ['LangChain', 'Gemini', 'LlamaIndex', 'RAG', 'Agents'],
    },
    {
        id: 'ml',
        icon: Cpu,
        label: 'ML Layer',
        sublabel: 'Learning Systems',
        color: '#8b5cf6',
        skills: [
            { name: 'TensorFlow / Keras', level: 90 },
            { name: 'PyTorch', level: 86 },
            { name: 'Scikit-learn', level: 93 },
            { name: 'YOLOv5 / OpenCV', level: 87 },
        ],
        tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'YOLO', 'NeuralProphet'],
    },
    {
        id: 'data',
        icon: Database,
        label: 'Data Layer',
        sublabel: 'Pipeline & Storage',
        color: '#10b981',
        skills: [
            { name: 'Python / Pandas', level: 95 },
            { name: 'SQL / MySQL', level: 85 },
            { name: 'NumPy', level: 96 },
            { name: 'Airflow / ETL', level: 72 },
        ],
        tags: ['Pandas', 'NumPy', 'SQL', 'Pinecone', 'Airflow'],
    },
    {
        id: 'deployment',
        icon: Rocket,
        label: 'Deployment Layer',
        sublabel: 'Production Systems',
        color: '#f59e0b',
        skills: [
            { name: 'FastAPI', level: 90 },
            { name: 'Flask', level: 88 },
            { name: 'Docker', level: 85 },
            { name: 'Git / GitHub', level: 92 },
        ],
        tags: ['FastAPI', 'Flask', 'Docker', 'GitHub', 'Streamlit'],
    },
    {
        id: 'interface',
        icon: Code2,
        label: 'Interface Layer',
        sublabel: 'User Interaction',
        color: '#ec4899',
        skills: [
            { name: 'React.js', level: 82 },
            { name: 'Streamlit', level: 92 },
            { name: 'HTML / CSS', level: 80 },
            { name: 'Python (scripting)', level: 95 },
        ],
        tags: ['React', 'Streamlit', 'HTML/CSS', 'TypeScript', 'Tailwind'],
    },
];

interface LayerCardProps {
    layer: typeof LAYERS[0];
    index: number;
}

const LayerCard = ({ layer, index }: LayerCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="sci-card p-6 group"
    >
        {/* Top accent */}
        <div
            className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(90deg, transparent, ${layer.color}, transparent)` }}
        />

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
            <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${layer.color}14`, border: `1px solid ${layer.color}30` }}
            >
                <layer.icon className="w-5 h-5" style={{ color: layer.color }} />
            </div>
            <div>
                <div className="font-display font-bold text-white text-sm">{layer.label}</div>
                <div className="font-mono-code text-[9px] text-white/30 tracking-[0.1em] uppercase mt-0.5">{layer.sublabel}</div>
            </div>
        </div>

        {/* Skill bars */}
        <div className="space-y-3 mb-5">
            {layer.skills.map((skill, si) => (
                <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-white/60 text-[11px] font-medium">{skill.name}</span>
                        <span className="font-mono-code text-[9px]" style={{ color: layer.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 + si * 0.07, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{
                                background: `linear-gradient(90deg, ${layer.color}80, ${layer.color})`,
                                boxShadow: `0 0 6px ${layer.color}50`,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
            {layer.tags.map((tag) => (
                <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[9px] font-mono-code"
                    style={{
                        background: `${layer.color}0d`,
                        border: `1px solid ${layer.color}25`,
                        color: `${layer.color}cc`,
                    }}
                >
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

const CapabilityMatrixSection = () => (
    <section id="skills" className="py-28 relative bg-[#050a0f]">
        <div className="absolute inset-0 bg-dot opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="section-eyebrow mb-4">technical architecture</div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                    Capability <span className="text-gradient-cyan">Matrix</span>
                </h2>
                <p className="text-white/40 mt-4 max-w-lg text-sm leading-relaxed">
                    Skills organized by system architecture layer — from intelligence core to user interface.
                </p>
            </motion.div>

            {/* Architecture diagram label */}
            <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.07] rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                    <span className="font-mono-code text-[10px] text-white/40">Full-stack AI System Architecture</span>
                </div>
            </div>

            {/* Layer Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {LAYERS.map((layer, index) => (
                    <LayerCard key={layer.id} layer={layer} index={index} />
                ))}
            </div>

            {/* Architecture Flow */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 sci-card p-5"
            >
                <div className="font-mono-code text-[10px] text-white/25 mb-3"># system data flow</div>
                <div className="flex flex-wrap items-center gap-2">
                    {LAYERS.map((l, i) => (
                        <div key={l.id} className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ background: `${l.color}0d`, border: `1px solid ${l.color}20` }}>
                                <l.icon className="w-3 h-3" style={{ color: l.color }} />
                                <span className="text-[10px] font-mono-code" style={{ color: l.color }}>{l.label}</span>
                            </div>
                            {i < LAYERS.length - 1 && (
                                <span className="text-white/20 font-mono-code text-xs">→</span>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default CapabilityMatrixSection;
