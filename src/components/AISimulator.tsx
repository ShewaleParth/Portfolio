import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Shield, BarChart3, FileText, ChevronRight } from 'lucide-react';

interface SimProject {
    id: string;
    name: string;
    icon: typeof Shield;
    color: string;
    description: string;
    inputPlaceholder: string;
    inputLabel: string;
    pipeline: string[];
    simulationSteps: ((input: string) => string)[];
    getOutput: (input: string) => string;
}

const SIM_PROJECTS: SimProject[] = [
    {
        id: 'misinfoguard',
        name: 'MisinfoGuard AI',
        icon: Shield,
        color: '#00d4ff',
        description: 'Fact-checking pipeline with multi-agent LLM verification',
        inputLabel: 'Enter a claim to verify:',
        inputPlaceholder: 'e.g. "India will become the world\'s largest economy by 2030"',
        pipeline: [
            'Claim Intake → FastAPI endpoint',
            'Agent 1: Web Search + Evidence Retrieval',
            'Agent 2: Source Credibility Scoring',
            'Agent 3: Cross-Reference Verification',
            'Meta-Agent: Weighted Vote Aggregation',
            'Verdict Engine → Confidence Score',
        ],
        simulationSteps: [
            () => '⟳ Claim received. Tokenizing and preprocessing...',
            () => '🔍 Agent-1 dispatched → Web search initiated across 12 sources...',
            (i) => `📊 Agent-2 analyzing credibility of ${Math.floor(Math.random() * 5) + 3} retrieved sources...`,
            () => '🔗 Agent-3 cross-referencing evidence with knowledge base...',
            () => '🧮 Meta-Agent aggregating votes [0.78, 0.82, 0.71] with credibility weights...',
            (i) => `✅ Verdict computed. Processing complete.`,
        ],
        getOutput: (input) => {
            const score = Math.floor(Math.random() * 30) + 55;
            const label = score > 75 ? 'PARTIALLY TRUE' : score > 60 ? 'UNVERIFIED' : 'QUESTIONABLE';
            return `CLAIM: "${input.substring(0, 60)}${input.length > 60 ? '...' : ''}"\n\nVERDICT: ${label}\nCONFIDENCE: ${score}%\nSOURCES: ${Math.floor(Math.random() * 5) + 8} cross-referenced\nREASONING: Multi-agent consensus via weighted credibility scoring.\nPROCESS TIME: ${(Math.random() * 2 + 1).toFixed(2)}s`;
        },
    },
    {
        id: 'inventory',
        name: 'Predictive Inventory',
        icon: BarChart3,
        color: '#8b5cf6',
        description: 'NeuralProphet demand forecasting with anomaly detection',
        inputLabel: 'Enter product + current stock:',
        inputPlaceholder: 'e.g. "Laptop Model X, stock: 45 units, daily avg: 8"',
        pipeline: [
            'SQL Ingestion → Historical demand data',
            'Feature Engineering: lag, rolling averages',
            'NeuralProphet: Trend + Seasonality decomposition',
            'PyTorch: Complex pattern recognition',
            'Isolation Forest: Anomaly detection',
            'Alert Engine → Restock recommendation',
        ],
        simulationSteps: [
            () => '⟳ Ingesting historical sales data from SQL database...',
            () => '🔧 Engineering lag-7, lag-30 features + seasonality flags...',
            () => '📈 NeuralProphet decomposing trend, seasonality, events...',
            () => '🧠 PyTorch neural components processing irregular patterns...',
            () => '⚡ Isolation Forest scanning for demand anomalies...',
            () => '📋 Generating restock recommendation report...',
        ],
        getOutput: (input) => {
            const days = Math.floor(Math.random() * 4) + 3;
            const units = Math.floor(Math.random() * 50) + 60;
            return `INPUT: ${input.substring(0, 60)}${input.length > 60 ? '...' : ''}\n\nFORECAST RESULT:\nEstimated stockout: ${days} days\nRecommended restock: ${units} units\nDemand trend: Slight upward (seasonal)\nAnomaly detected: None\nAlert: ⚠️ RESTOCK WITHIN ${days} DAYS\n\nMODEL: NeuralProphet v0.6 + Isolation Forest`;
        },
    },
    {
        id: 'genai-reports',
        name: 'GenAI Reports',
        icon: FileText,
        color: '#10b981',
        description: 'RAG pipeline → Llama-3 executive report generation',
        inputLabel: 'Enter report request:',
        inputPlaceholder: 'e.g. "Generate Q4 sales performance summary with KPIs"',
        pipeline: [
            'Request parsing → Intent extraction',
            'Pinecone: Semantic document retrieval (top-k=10)',
            'LangChain: Context assembly + chunking',
            'Llama-3: Structured report generation',
            'PDF Engine: Template formatting',
            'Output: Executive-ready report',
        ],
        simulationSteps: [
            () => '⟳ Parsing report request and extracting intent...',
            () => '🔍 Querying Pinecone vector DB (k=10 semantic matches)...',
            () => '🔗 LangChain assembling context chunks (4096 tokens)...',
            () => '🧠 Llama-3 generating structured executive report...',
            () => '📄 PDF engine applying executive template formatting...',
            () => '✅ Report generated successfully.',
        ],
        getOutput: (input) => {
            return `REQUEST: ${input.substring(0, 60)}${input.length > 60 ? '...' : ''}\n\n[EXECUTIVE REPORT - DRAFT]\n━━━━━━━━━━━━━━━━━━━━━━\nSECTION 1: Executive Summary\n[AI-generated based on retrieved context]\n\nKEY METRICS:\n• Revenue growth: +12.4% QoQ\n• Top performing segment: Enterprise\n• Risk identified: Supply chain delay\n\nSOURCES: 10 documents retrieved\nGENERATION TIME: ${(Math.random() * 3 + 2).toFixed(1)}s\nTOKENS USED: ${Math.floor(Math.random() * 800) + 3200}`;
        },
    },
];

const AISimulator = () => {
    const [selectedProject, setSelectedProject] = useState<SimProject>(SIM_PROJECTS[0]);
    const [input, setInput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [currentStep, setCurrentStep] = useState(-1);
    const [stepLogs, setStepLogs] = useState<string[]>([]);
    const [output, setOutput] = useState('');
    const [activePipelineStep, setActivePipelineStep] = useState(-1);
    const logsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logsRef.current) {
            logsRef.current.scrollTop = logsRef.current.scrollHeight;
        }
    }, [stepLogs]);

    const runSimulation = async () => {
        if (!input.trim() || isRunning) return;
        setIsRunning(true);
        setCurrentStep(0);
        setStepLogs([]);
        setOutput('');
        setActivePipelineStep(0);

        for (let i = 0; i < selectedProject.simulationSteps.length; i++) {
            setActivePipelineStep(i);
            const log = selectedProject.simulationSteps[i](input);
            setStepLogs((prev) => [...prev, log]);
            setCurrentStep(i);
            await new Promise((r) => setTimeout(r, 700 + Math.random() * 400));
        }

        await new Promise((r) => setTimeout(r, 300));
        setOutput(selectedProject.getOutput(input));
        setActivePipelineStep(-1);
        setIsRunning(false);
    };

    const reset = () => {
        setInput('');
        setIsRunning(false);
        setCurrentStep(-1);
        setStepLogs([]);
        setOutput('');
        setActivePipelineStep(-1);
    };

    return (
        <section id="simulator" className="py-28 relative bg-[#050a0f]">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00d4ff]/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="section-eyebrow mb-4">interactive demo</div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                        AI System <span className="text-gradient-cyan">Simulator</span>
                    </h2>
                    <p className="text-white/40 mt-4 max-w-lg text-sm leading-relaxed">
                        Select a project, provide an input, and watch the system pipeline process it in real-time.
                        This is how I think — in systems.
                    </p>
                </motion.div>

                {/* Project Selector */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {SIM_PROJECTS.map((proj) => (
                        <button
                            key={proj.id}
                            onClick={() => {
                                setSelectedProject(proj);
                                reset();
                            }}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono-code text-xs font-semibold transition-all duration-200"
                            style={
                                selectedProject.id === proj.id
                                    ? {
                                        background: `${proj.color}18`,
                                        border: `1px solid ${proj.color}50`,
                                        color: proj.color,
                                    }
                                    : {
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        color: 'rgba(255,255,255,0.4)',
                                    }
                            }
                        >
                            <proj.icon className="w-3.5 h-3.5" />
                            {proj.name}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left: Input + Pipeline */}
                    <div className="lg:col-span-1 space-y-4">
                        {/* Input Panel */}
                        <div className="sci-card p-5">
                            <div className="font-mono-code text-[10px] text-white/30 mb-3 pb-3 border-b border-white/[0.06]">
                // input console
                            </div>
                            <label className="block font-mono-code text-xs text-white/50 mb-2">
                                {selectedProject.inputLabel}
                            </label>
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={selectedProject.inputPlaceholder}
                                rows={4}
                                disabled={isRunning}
                                className="w-full px-3 py-2.5 bg-black/30 border border-white/[0.08] rounded-lg text-white/80 text-xs font-mono-code placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/40 transition-all resize-none disabled:opacity-50"
                            />
                            <div className="flex gap-2 mt-3">
                                <button
                                    onClick={runSimulation}
                                    disabled={isRunning || !input.trim()}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-mono-code text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                                    style={{
                                        background: selectedProject.color,
                                        color: '#050a0f',
                                    }}
                                >
                                    {isRunning ? (
                                        <>
                                            <span className="w-3 h-3 border-2 border-current/40 border-t-current rounded-full animate-spin" />
                                            Running...
                                        </>
                                    ) : (
                                        <>
                                            <Play className="w-3.5 h-3.5" />
                                            Run Pipeline
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={reset}
                                    className="p-2.5 rounded-lg border border-white/[0.08] text-white/30 hover:text-white hover:border-white/20 transition-all"
                                    title="Reset"
                                >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        {/* Pipeline Steps */}
                        <div className="sci-card p-5">
                            <div className="font-mono-code text-[10px] text-white/30 mb-3 pb-3 border-b border-white/[0.06]">
                // system_pipeline
                            </div>
                            <div className="space-y-2">
                                {selectedProject.pipeline.map((step, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-2 transition-all duration-300"
                                        style={{
                                            opacity: activePipelineStep === -1
                                                ? (output ? 1 : 0.4)
                                                : activePipelineStep >= i ? 1 : 0.3,
                                        }}
                                    >
                                        <div
                                            className="flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center mt-0.5 transition-all duration-300"
                                            style={{
                                                borderColor: activePipelineStep >= i && (activePipelineStep !== -1 || output)
                                                    ? selectedProject.color
                                                    : 'rgba(255,255,255,0.1)',
                                                background: activePipelineStep >= i && (activePipelineStep !== -1 || output)
                                                    ? `${selectedProject.color}20`
                                                    : 'transparent',
                                            }}
                                        >
                                            {(activePipelineStep > i || (output && activePipelineStep === -1)) && (
                                                <span className="text-[8px]" style={{ color: selectedProject.color }}>✓</span>
                                            )}
                                            {activePipelineStep === i && (
                                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: selectedProject.color }} />
                                            )}
                                        </div>
                                        <span className="text-[10px] font-mono-code text-white/50 leading-relaxed">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Log + Output */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Live Logs */}
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-dot bg-[#ff5f57]" />
                                <div className="terminal-dot bg-[#febc2e]" />
                                <div className="terminal-dot bg-[#28c840]" />
                                <span className="ml-3 font-mono-code text-xs text-white/30">pipeline_logs.py</span>
                                {isRunning && (
                                    <span className="ml-auto font-mono-code text-[10px] flex items-center gap-1.5" style={{ color: selectedProject.color }}>
                                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: selectedProject.color }} />
                                        RUNNING
                                    </span>
                                )}
                            </div>
                            <div
                                ref={logsRef}
                                className="terminal-body text-[11px] h-48 overflow-y-auto"
                            >
                                {stepLogs.length === 0 ? (
                                    <div className="text-white/20 italic">
                                        {'>'} Awaiting input... Select a project, enter data, click Run.
                                        <span className="animate-blink text-white/30 ml-1">█</span>
                                    </div>
                                ) : (
                                    <div className="space-y-1.5">
                                        {stepLogs.map((log, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="text-white/30 flex-shrink-0">[{String(i + 1).padStart(2, '0')}]</span>
                                                <span className="text-white/70">{log}</span>
                                            </motion.div>
                                        ))}
                                        {isRunning && (
                                            <div className="text-white/30 flex items-center gap-1">
                                                <span>{'>'}</span>
                                                <span className="animate-blink" style={{ color: selectedProject.color }}>█</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Output Panel */}
                        <AnimatePresence>
                            {output && (
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="sci-card overflow-hidden"
                                    style={{ borderColor: `${selectedProject.color}30` }}
                                >
                                    <div
                                        className="h-px w-full"
                                        style={{ background: `linear-gradient(90deg, transparent, ${selectedProject.color}, transparent)` }}
                                    />
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <ChevronRight className="w-3.5 h-3.5" style={{ color: selectedProject.color }} />
                                            <span className="font-mono-code text-[10px] uppercase tracking-[0.15em]" style={{ color: selectedProject.color }}>
                                                System Output
                                            </span>
                                        </div>
                                        <pre className="font-mono-code text-xs text-white/70 whitespace-pre-wrap leading-relaxed bg-black/20 p-4 rounded-lg border border-white/[0.06]">
                                            {output}
                                        </pre>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Description */}
                        {!output && !isRunning && (
                            <div className="sci-card p-5">
                                <div className="font-mono-code text-[10px] text-white/25 mb-2">// project_description</div>
                                <p className="text-white/40 text-sm leading-relaxed">{selectedProject.description}</p>
                                <p className="text-white/25 text-xs font-mono-code mt-3">
                                    Enter an input above and click "Run Pipeline" to see the system in action.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISimulator;
