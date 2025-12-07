import { Code, Brain, Rocket, Database } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Building intelligent systems with TensorFlow, PyTorch, and cutting-edge LLMs.',
    },
    {
      icon: Code,
      title: 'Full-Stack Dev',
      description: 'Creating end-to-end applications with React, FastAPI, and modern web technologies.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Designing data pipelines with Snowflake, Kafka, and ETL processes.',
    },
    {
      icon: Rocket,
      title: 'Deployment Ready',
      description: 'Containerizing and deploying scalable solutions with Docker and cloud platforms.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">{'// About Me'}</p>
            <h2 className="section-title">
              Turning <span className="text-gradient">Ideas</span> Into Reality
            </h2>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a final-year B.E. student specializing in{' '}
                <span className="text-foreground font-medium">
                  Artificial Intelligence and Data Science
                </span>{' '}
                at Terna Engineering College, Mumbai. My journey in tech has been driven by a 
                passion for solving complex problems through innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in building and deploying full-stack AI/ML applications, 
                I specialize in creating systems that automate processes and extract meaningful 
                insights from data. From{' '}
                <span className="text-primary">computer vision</span> to{' '}
                <span className="text-primary">generative AI</span>, I love exploring the 
                cutting edge of technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new ML papers, contributing to 
                open-source projects, or participating in hackathons to push my limits.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="project-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
