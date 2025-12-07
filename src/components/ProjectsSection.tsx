import { ExternalLink, Github, Bot, BarChart3, FileText } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Misinformation Detection System',
      subtitle: 'Agentic AI for Fact Verification',
      description:
        'Built an Agentic AI misinformation detection system using multi-agent LLM workflows (Gemini + Groq/OpenAI) for claim verification, stance analysis, and credibility scoring.',
      techStack: [
        'Python',
        'FastAPI',
        'React.js',
        'LangChain',
        'Gemini',
        'Groq',
        'Docker',
        'Tailwind',
      ],
      highlights: [
        'Multi-agent LLM workflows',
        'Autonomous evidence retrieval',
        'Explainable AI outputs',
      ],
      icon: Bot,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI-Based Inventory Control',
      subtitle: 'Predictive Analytics for Depot Management',
      description:
        'Designed ML models for predictive stock depletion and demand forecasting using PyTorch Forecasting & NeuralProphet with real-time anomaly detection.',
      techStack: [
        'Python',
        'PyTorch',
        'NeuralProphet',
        'FastAPI',
        'Streamlit',
        'SQL',
        'Docker',
      ],
      highlights: [
        'Real-time anomaly detection',
        'Demand forecasting',
        'Automated alerts system',
      ],
      icon: BarChart3,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'GenAI Business Reports',
      subtitle: 'Automated Executive Insights',
      description:
        'Built a GenAI-powered assistant to auto-generate executive reports and business insights from structured and unstructured data using RAG pipeline.',
      techStack: [
        'Python',
        'Snowflake',
        'LangChain',
        'Llama-3',
        'Pinecone',
        'FastAPI',
        'Airflow',
        'Docker',
      ],
      highlights: [
        'RAG with LangChain & Pinecone',
        'Automated PDF generation',
        'Real-time KPI tracking',
      ],
      icon: FileText,
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">{'// Featured Projects'}</p>
            <h2 className="section-title">
              Things I've <span className="text-gradient">Built</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of AI/ML projects showcasing my skills in building end-to-end
              intelligent systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group relative overflow-hidden"
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
                />

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-primary font-mono">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="font-mono text-sm text-primary mb-4">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
