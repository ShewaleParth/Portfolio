import { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'ml', label: 'ML/AI' },
    { id: 'web', label: 'Web Dev' },
    { id: 'tools', label: 'Tools' },
  ];

  const skills = [
    { name: 'Python', category: 'languages', level: 95 },
    { name: 'Java', category: 'languages', level: 75 },
    { name: 'SQL', category: 'languages', level: 85 },
    { name: 'HTML/CSS', category: 'languages', level: 80 },
    { name: 'TensorFlow', category: 'ml', level: 90 },
    { name: 'PyTorch', category: 'ml', level: 85 },
    { name: 'Scikit-learn', category: 'ml', level: 92 },
    { name: 'OpenCV', category: 'ml', level: 88 },
    { name: 'YOLOv5', category: 'ml', level: 85 },
    { name: 'LangChain', category: 'ml', level: 80 },
    { name: 'React.js', category: 'web', level: 82 },
    { name: 'FastAPI', category: 'web', level: 90 },
    { name: 'Flask', category: 'web', level: 88 },
    { name: 'Streamlit', category: 'web', level: 92 },
    { name: 'Tailwind CSS', category: 'web', level: 85 },
    { name: 'Docker', category: 'tools', level: 85 },
    { name: 'Git/GitHub', category: 'tools', level: 90 },
    { name: 'NumPy', category: 'tools', level: 95 },
    { name: 'Pandas', category: 'tools', level: 95 },
    { name: 'MySQL', category: 'tools', level: 85 },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="font-mono text-primary mb-2">{'// Technical Skills'}</p>
            <h2 className="section-title">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-primary text-primary-foreground glow-primary'
                    : 'glass hover:border-primary/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-tag text-center cursor-default"
                style={{
                  animationDelay: `${index * 50}ms`,
                  opacity: 0,
                  animation: 'scale-in 0.4s ease-out forwards',
                }}
              >
                <span className="block mb-1">{skill.name}</span>
                <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
