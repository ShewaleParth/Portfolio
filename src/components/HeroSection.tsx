import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';

const HeroSection = () => {
  const roles = ['AI/ML Engineer', 'Full-Stack Developer', 'Data Scientist', 'Problem Solver'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="font-mono text-primary mb-4 opacity-0 animate-fade-up">
            {'> Hello, World!'}
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up delay-100">
            I'm <span className="text-gradient">Parth Shewale</span>
          </h1>

          {/* Typing Effect */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 h-12 opacity-0 animate-fade-up delay-200">
            <TypeWriter words={roles} className="text-muted-foreground" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-300">
            Final-year B.E. student passionate about building AI/ML applications 
            that solve real-world problems through automation and data-driven insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-up delay-400">
            <a href="#projects" className="hero-button">
              View My Work
            </a>
            <a href="#contact" className="hero-button-outline">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 opacity-0 animate-fade-up delay-500">
            <a
              href="https://github.com/ShewaleParth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:border-primary/60 transition-all duration-300 hover:glow-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/parth-shewale"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:border-primary/60 transition-all duration-300 hover:glow-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sparth7972@gmail.com"
              className="p-3 glass rounded-full hover:border-primary/60 transition-all duration-300 hover:glow-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up delay-600">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm font-mono">scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
