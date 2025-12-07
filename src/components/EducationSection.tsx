import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: 'Terna Engineering College',
      location: 'Navi Mumbai, Maharashtra',
      degree: 'Bachelor of Engineering in AI & Data Science',
      year: '2022 - 2026',
      score: 'CGPA: 7.02 | Current SGPA: 8.09',
      isCurrent: true,
    },
    {
      institution: 'Ambrosia English Medium School',
      location: 'Nashik, Maharashtra',
      degree: 'Higher Secondary Education (12th)',
      year: '2020 - 2022',
      score: 'Percentage: 75%',
      isCurrent: false,
    },
    {
      institution: 'Guru Gobind Singh Public School',
      location: 'Nashik, Maharashtra',
      degree: 'Secondary Education (10th)',
      year: '2018 - 2020',
      score: 'Percentage: 89.20%',
      isCurrent: false,
    },
  ];

  const certifications = [
    { name: 'Artificial Intelligence Fundamentals', issuer: 'Edunet' },
    { name: 'Gen AI Exchange Google', issuer: 'Hack2Skill' },
    { name: 'IBM Data Science 101', issuer: 'IBM' },
    { name: 'Qualified for Mumbai Hacks 2025', issuer: 'Achievement' },
  ];

  return (
    <section id="education" className="py-24 relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">{'// Education & Certifications'}</p>
            <h2 className="section-title">
              My <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                Education
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border" />

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={edu.institution} className="relative pl-12">
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-2 top-2 w-5 h-5 rounded-full border-2 ${
                          edu.isCurrent
                            ? 'bg-primary border-primary animate-pulse-glow'
                            : 'bg-background border-primary/50'
                        }`}
                      />

                      <div className="project-card">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h4 className="font-bold">{edu.institution}</h4>
                          <span className="font-mono text-sm text-primary flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-1">{edu.location}</p>
                        <p className="text-foreground mb-2">{edu.degree}</p>
                        <p className="text-sm text-primary font-mono">{edu.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-primary" />
                Certifications & Achievements
              </h3>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className="project-card flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
