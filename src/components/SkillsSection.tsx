import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { id: 'all', label: 'All', color: '#00d4ff' },
  { id: 'languages', label: 'Languages', color: '#8b5cf6' },
  { id: 'ml', label: 'AI / ML', color: '#10b981' },
  { id: 'web', label: 'Web & APIs', color: '#f59e0b' },
  { id: 'tools', label: 'Tools & Data', color: '#ec4899' },
];

const SKILLS = [
  { name: 'Python', category: 'languages', level: 95, color: '#00d4ff' },
  { name: 'SQL', category: 'languages', level: 85, color: '#00d4ff' },
  { name: 'Java', category: 'languages', level: 72, color: '#00d4ff' },
  { name: 'HTML / CSS', category: 'languages', level: 80, color: '#00d4ff' },
  { name: 'TensorFlow', category: 'ml', level: 90, color: '#10b981' },
  { name: 'PyTorch', category: 'ml', level: 86, color: '#10b981' },
  { name: 'Scikit-learn', category: 'ml', level: 93, color: '#10b981' },
  { name: 'OpenCV', category: 'ml', level: 88, color: '#10b981' },
  { name: 'YOLOv5', category: 'ml', level: 85, color: '#10b981' },
  { name: 'LangChain', category: 'ml', level: 80, color: '#10b981' },
  { name: 'React.js', category: 'web', level: 82, color: '#f59e0b' },
  { name: 'FastAPI', category: 'web', level: 90, color: '#f59e0b' },
  { name: 'Flask', category: 'web', level: 88, color: '#f59e0b' },
  { name: 'Streamlit', category: 'web', level: 92, color: '#f59e0b' },
  { name: 'Docker', category: 'tools', level: 85, color: '#ec4899' },
  { name: 'Git / GitHub', category: 'tools', level: 92, color: '#ec4899' },
  { name: 'NumPy', category: 'tools', level: 96, color: '#ec4899' },
  { name: 'Pandas', category: 'tools', level: 95, color: '#ec4899' },
  { name: 'MySQL', category: 'tools', level: 85, color: '#ec4899' },
];

interface Skill { name: string; category: string; level: number; color: string; }

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const num = numRef.current;
    if (!bar || !num) return;

    const ctx = gsap.context(() => {
      gsap.from(bar, {
        width: 0, duration: 1.2, ease: 'power2.out', delay: index * 0.04,
        scrollTrigger: { trigger: bar, start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.fromTo(num, { textContent: 0 }, {
        textContent: skill.level, duration: 1.2, ease: 'power2.out',
        snap: { textContent: 1 }, delay: index * 0.04,
        scrollTrigger: { trigger: bar, start: 'top 85%', toggleActions: 'play none none none' },
      });
    }, bar);
    return () => ctx.revert();
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span ref={numRef} className="font-mono-code text-xs font-bold" style={{ color: skill.color }}>
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            width: `${skill.level}%`,
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  const activeCat = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="py-28 relative bg-[#07090f]">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-eyebrow mb-4">technical skills</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Tech <span className="text-gradient-cyan">Stack</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded-lg font-mono-code text-xs font-semibold transition-all duration-200"
              style={
                activeCategory === cat.id
                  ? { background: `${cat.color}18`, border: `1px solid ${cat.color}50`, color: cat.color }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          {filtered.map((skill, i) => (
            <SkillBar key={`${skill.name}-${activeCategory}`} skill={skill} index={i} />
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 sci-card"
        >
          <div className="font-mono-code text-xs text-white/30 mb-3"># primary focus areas</div>
          <div className="flex flex-wrap gap-2">
            {['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analysis', 'LLM / GenAI', 'Predictive Modeling', 'Data Pipelines', 'API Development'].map(tag => (
              <span key={tag} className="tech-badge">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
