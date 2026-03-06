import { Code2, Brain, Database, Rocket, MapPin, GraduationCap } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building predictive models with TensorFlow, PyTorch, and scikit-learn. Specialized in NLP & computer vision.',
    color: '#00d4ff',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Designing efficient data pipelines, ETL processes, and analytics workflows with SQL, Pandas & Kafka.',
    color: '#8b5cf6',
  },
  {
    icon: Code2,
    title: 'MLOps & APIs',
    description: 'Deploying scalable ML systems with FastAPI, Docker and cloud platforms. LangChain & RAG pipelines.',
    color: '#10b981',
  },
  {
    icon: Rocket,
    title: 'Generative AI',
    description: 'Building LLM-powered agents using LangChain, Gemini, and Llama with multi-agent workflows.',
    color: '#f59e0b',
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        opacity: 0, y: 30, duration: 0.7,
        stagger: 0.12, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-cards-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 relative bg-[#050a0f]">
      {/* subtle bg */}
      <div className="absolute inset-0 bg-dot opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-eyebrow mb-4">about me</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Who is <span className="text-gradient-cyan">Parth?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 text-white/60 text-base leading-relaxed mb-8">
              <p>
                Final-year B.E. student specializing in{' '}
                <span className="text-[#00d4ff] font-medium">Artificial Intelligence & Data Science</span>{' '}
                at Terna Engineering College, Mumbai.
              </p>
              <p>
                I turn raw datasets into meaningful insights — training ML models, building GenAI pipelines,
                and designing data-driven applications that create real-world impact.
              </p>
              <p>
                From computer vision systems to multi-agent LLM workflows, I treat every challenge as
                a new problem to solve with data.
              </p>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: 'Navi Mumbai, India' },
                { icon: GraduationCap, text: 'B.E. AI & DS — 2026' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.07] rounded-lg text-sm text-white/50">
                  <Icon className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span className="font-mono-code text-xs">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { val: '7.14', sub: 'CGPA', note: 'B.E. Overall' },
              { val: '8.09', sub: 'SGPA', note: 'Current Semester' },
              { val: '89%', sub: 'SSC Score', note: 'Class 10th' },
              { val: '15+', sub: 'Projects', note: 'ML & Web Apps' },
            ].map((m) => (
              <div key={m.sub} className="sci-card p-6">
                <div className="text-3xl font-display font-bold text-gradient-cyan mb-1">{m.val}</div>
                <div className="font-mono-code text-[#00d4ff]/80 text-xs font-semibold mb-0.5">{m.sub}</div>
                <div className="text-white/30 text-xs">{m.note}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="about-cards-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="about-card sci-card p-6 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}14`, border: `1px solid ${item.color}30` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
