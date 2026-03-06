import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const EDUCATION = [
  {
    institution: 'Terna Engineering College',
    location: 'Navi Mumbai, Maharashtra',
    degree: 'Bachelor of Engineering — AI & Data Science',
    year: '2022 – 2026',
    score: 'CGPA 7.14  |  Current SGPA 8.09',
    isCurrent: true,
  },
  {
    institution: 'Ambrosia English Medium School',
    location: 'Nashik, Maharashtra',
    degree: 'Higher Secondary Education (12th)',
    year: '2020 – 2022',
    score: '75%',
    isCurrent: false,
  },
  {
    institution: 'Guru Gobind Singh Public School',
    location: 'Nashik, Maharashtra',
    degree: 'Secondary Education (10th)',
    year: '2018 – 2020',
    score: '89.20%',
    isCurrent: false,
  },
];

const CERTIFICATIONS = [
  { name: 'Artificial Intelligence Fundamentals', issuer: 'Edunet Foundation', color: '#00d4ff' },
  { name: 'Gen AI Exchange Hackathon', issuer: 'Google × Hack2Skill', color: '#8b5cf6' },
  { name: 'IBM Data Science 101', issuer: 'IBM', color: '#10b981' },
  { name: 'Qualified — Mumbai Hacks 2025', issuer: 'Achievement', color: '#f59e0b' },
];

const EducationSection = () => (
  <section id="education" className="py-28 relative bg-[#07090f]">
    <div className="absolute inset-0 bg-grid opacity-40" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="section-eyebrow mb-4">background</div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
          Education & <span className="text-gradient-green">Credentials</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-4 h-4 text-[#00d4ff]" />
            <span className="font-mono-code text-xs text-white/40 tracking-[0.15em] uppercase">Education</span>
          </div>

          <div className="relative space-y-6">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00d4ff]/50 via-white/10 to-transparent" />

            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 transition-all ${edu.isCurrent
                  ? 'bg-[#00d4ff] border-[#00d4ff] animate-pulse-glow'
                  : 'bg-[#07090f] border-white/20'
                  }`} />

                <div className="sci-card p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="font-display font-semibold text-white text-sm">{edu.institution}</h4>
                      <p className="text-white/35 text-xs font-mono-code mt-0.5">{edu.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      <Calendar className="w-3 h-3 text-[#00d4ff]/60 flex-shrink-0" />
                      <span className="font-mono-code text-[10px] text-[#00d4ff]/80">{edu.year}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-xs mb-2">{edu.degree}</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#00d4ff]/08 border border-[#00d4ff]/20 rounded-full">
                    <span className="font-mono-code text-[10px] text-[#00d4ff]">{edu.score}</span>
                  </div>
                  {edu.isCurrent && (
                    <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 bg-[#10b981]/10 border border-[#10b981]/25 rounded-full text-[10px] font-mono-code text-[#10b981]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                      current
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-4 h-4 text-[#8b5cf6]" />
            <span className="font-mono-code text-xs text-white/40 tracking-[0.15em] uppercase">Certifications & Achievements</span>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="sci-card p-5 flex items-center gap-4 group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cert.color}14`, border: `1px solid ${cert.color}30` }}
                >
                  <CheckCircle2 className="w-4 h-4" style={{ color: cert.color }} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-white/90 text-sm truncate">{cert.name}</h4>
                  <p className="font-mono-code text-[10px] text-white/35 mt-0.5">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
