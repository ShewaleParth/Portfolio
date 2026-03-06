import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Terminal } from 'lucide-react';
import { toast } from 'sonner';

const CONTACT_INFO = [
    { icon: Mail, label: 'email', value: 'sparth7972@gmail.com', href: 'mailto:sparth7972@gmail.com' },
    { icon: Phone, label: 'phone', value: '+91 97673 52892', href: 'tel:+919767352892' },
    { icon: MapPin, label: 'location', value: 'Thane, Maharashtra, India', href: '#' },
];

const SOCIALS = [
    { icon: Github, label: 'github', value: 'ShewaleParth', href: 'https://github.com/ShewaleParth', color: '#00d4ff' },
    { icon: Linkedin, label: 'linkedin', value: 'parth-shewale', href: 'https://linkedin.com/in/parth-shewale', color: '#0077b5' },
];

const TERMINAL_LINES = [
    { delay: 0.2, text: '$ ssh recruit@parth-shewale.ai', color: '#00d4ff' },
    { delay: 0.8, text: '> connecting to talent server...', color: 'rgba(255,255,255,0.4)' },
    { delay: 1.3, text: '> authentication: open_to_work = True', color: '#10b981' },
    { delay: 1.8, text: '> session established successfully', color: '#10b981' },
    { delay: 2.3, text: '$ connect --parth --type=hire', color: '#00d4ff' },
];

const ContactConsole = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [visibleLines, setVisibleLines] = useState(0);
    const [inputHistory, setInputHistory] = useState<string[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [terminalActive, setTerminalActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        TERMINAL_LINES.forEach((line, i) => {
            setTimeout(() => {
                setVisibleLines(i + 1);
                if (i === TERMINAL_LINES.length - 1) {
                    setTimeout(() => setTerminalActive(true), 600);
                }
            }, line.delay * 1000);
        });
    }, []);

    const handleTerminalInput = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && currentInput.trim()) {
            const cmd = currentInput.trim().toLowerCase();
            let response = '';
            if (cmd.includes('connect') || cmd.includes('hire') || cmd.includes('contact')) {
                response = '> Redirecting to contact form below...';
                setTimeout(() => {
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 400);
            } else if (cmd.includes('help')) {
                response = '> Available: connect, hire, status, skills, projects';
            } else if (cmd.includes('status')) {
                response = '> status: OPEN_TO_WORK | roles: ML Engineer, Data Scientist | available: Immediately';
            } else if (cmd.includes('skills')) {
                response = '> skills: Python, TensorFlow, PyTorch, LangChain, FastAPI, Docker...';
            } else {
                response = `> command: "${currentInput}" — try "help" for available commands`;
            }
            setInputHistory((prev) => [...prev, `$ ${currentInput}`, response]);
            setCurrentInput('');
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        await new Promise((r) => setTimeout(r, 1000));
        toast.success('Message transmitted! I\'ll respond within 24 hours.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSending(false);
    };

    return (
        <section id="contact" className="py-28 relative bg-[#050a0f]">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="section-eyebrow mb-4">contact console</div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                        Open a <span className="text-gradient-purple">Connection</span>
                    </h2>
                    <p className="text-white/40 mt-4 max-w-md text-sm leading-relaxed">
                        Available for full-time AI/ML roles, internships, and research collaborations.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left: Terminal + Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {/* Interactive Terminal */}
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-dot bg-[#ff5f57]" />
                                <div className="terminal-dot bg-[#febc2e]" />
                                <div className="terminal-dot bg-[#28c840]" />
                                <div className="flex items-center gap-1.5 ml-3">
                                    <Terminal className="w-3 h-3 text-white/30" />
                                    <span className="font-mono-code text-xs text-white/30">connect.sh</span>
                                </div>
                            </div>
                            <div className="terminal-body text-xs min-h-[180px]">
                                {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="mb-1"
                                        style={{ color: line.color }}
                                    >
                                        {line.text}
                                        {i === visibleLines - 1 && !terminalActive && (
                                            <span className="animate-blink text-[#00d4ff] ml-0.5">█</span>
                                        )}
                                    </motion.div>
                                ))}

                                {/* Input history */}
                                {inputHistory.map((line, i) => (
                                    <div
                                        key={i}
                                        className="mb-1"
                                        style={{ color: line.startsWith('$') ? '#00d4ff' : '#10b981' }}
                                    >
                                        {line}
                                    </div>
                                ))}

                                {/* Live input */}
                                {terminalActive && (
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-[#00d4ff]">$</span>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={currentInput}
                                            onChange={(e) => setCurrentInput(e.target.value)}
                                            onKeyDown={handleTerminalInput}
                                            placeholder="type a command..."
                                            className="flex-1 bg-transparent text-white/80 outline-none border-none font-mono-code text-xs placeholder:text-white/20"
                                        />
                                        <span className="animate-blink text-[#00d4ff]">█</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2">
                            {CONTACT_INFO.map((info) => (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    className="sci-card p-4 flex items-center gap-4 group no-underline"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <info.icon className="w-4 h-4 text-[#8b5cf6]" />
                                    </div>
                                    <div>
                                        <div className="font-mono-code text-[10px] text-white/30 mb-0.5">{info.label}</div>
                                        <div className="text-white/80 text-sm font-medium">{info.value}</div>
                                    </div>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 ml-auto transition-colors" />
                                </a>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="flex gap-3">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sci-card flex-1 p-4 flex items-center gap-3 group no-underline"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-[#00d4ff]/30 transition-colors">
                                        <s.icon className="w-3.5 h-3.5 text-white/50 group-hover:text-[#00d4ff] transition-colors" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-white/70 text-xs font-medium">{s.label}</div>
                                        <div className="font-mono-code text-[9px] text-white/25 truncate">{s.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="sci-card p-4 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                            <span className="font-mono-code text-xs text-white/40">
                                status: <span className="text-[#10b981]">open_to_work = True</span>
                                {' | '}roles: <span className="text-[#00d4ff]">ML Engineer, Data Scientist</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.form
                        id="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="sci-card p-6 flex flex-col gap-4"
                    >
                        <div className="font-mono-code text-[10px] text-white/25 border-b border-white/[0.06] pb-4">
              // transmit_message.py — open_channel(parth)
                        </div>

                        {[
                            { id: 'name', label: 'name', type: 'text', placeholder: 'John Doe', key: 'name' as const },
                            { id: 'email', label: 'email', type: 'email', placeholder: 'recruiter@company.com', key: 'email' as const },
                            { id: 'subject', label: 'subject', type: 'text', placeholder: 'Opportunity for AI/ML Engineer role', key: 'subject' as const },
                        ].map((field) => (
                            <div key={field.id} className="space-y-1.5">
                                <label htmlFor={field.id} className="block font-mono-code text-xs text-white/40">
                                    {field.label} <span className="text-[#00d4ff]">*</span>
                                </label>
                                <input
                                    id={field.id}
                                    type={field.type}
                                    required
                                    value={formData[field.key]}
                                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                    placeholder={field.placeholder}
                                    className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white/90 text-sm placeholder:text-white/20 font-mono-code focus:outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.06] transition-all"
                                />
                            </div>
                        ))}

                        <div className="space-y-1.5">
                            <label htmlFor="message" className="block font-mono-code text-xs text-white/40">
                                message <span className="text-[#00d4ff]">*</span>
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Hi Parth, I came across your portfolio and would like to discuss..."
                                className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white/90 text-sm placeholder:text-white/20 font-mono-code focus:outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.06] transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                        >
                            {sending ? (
                                <>
                                    <span className="w-3.5 h-3.5 border border-[#050a0f]/40 border-t-[#050a0f] rounded-full animate-spin" />
                                    Transmitting...
                                </>
                            ) : (
                                <>
                                    <Terminal className="w-3.5 h-3.5" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactConsole;
