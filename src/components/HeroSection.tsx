import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { useParallax } from '@/hooks/useParallax';
import { useMagneticCursor } from '@/hooks/useMagneticCursor';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const roles = ['AI/ML Engineer', 'Full-Stack Developer', 'Data Scientist', 'Nakama'];
  const parallax1 = useParallax({ speed: 0.1, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.2, direction: 'down' });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Generate manga speed lines or particles
  useEffect(() => {
    const generateParticles = () => {
      const particleCount = 20;
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background Manga Panels Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-3 h-full w-full gap-2 p-4">
          {/* Abstract panels */}
          <div className="border-4 border-black h-full bg-slate-100" />
          <div className="border-4 border-black h-full bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 speed-lines opacity-20" />
          </div>
          <div className="border-4 border-black h-full bg-slate-100 hidden md:block" />
        </div>
      </div>

      {/* Halftone Overlay */}
      <div className="absolute inset-0 halftone z-0 pointer-events-none" />

      {/* Floating Japanese SFX (Katakana) */}
      <div ref={parallax1.elementRef} className="absolute top-20 right-[10%] text-6xl font-black text-black opacity-20 select-none z-0 transform rotate-12">
        ゴゴゴ
      </div>
      <div ref={parallax2.elementRef} className="absolute bottom-40 left-[5%] text-8xl font-black text-primary opacity-10 select-none z-0 transform -rotate-6">
        ドーン
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content Area - Text */}
        <div className="flex-1 text-center md:text-left">

          {/* Greeting Tag */}
          <div className="inline-block border-2 border-black bg-primary text-white px-4 py-1 font-bold transform -rotate-2 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-fade-up">
            OPEN TO WORK
          </div>

          {/* Name Header */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-comic text-stroke font-extrabold mb-4 tracking-tighter leading-none animate-fade-up delay-100 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            PARTH<br /><span className="text-primary">SHEWALE</span>
          </h1>

          {/* Role / Typing */}
          <div className="text-2xl md:text-3xl font-marker bg-black text-white inline-block px-4 py-2 transform rotate-1 mb-8 shadow-[6px_6px_0px_0px_rgba(255,0,0,1)] animate-fade-up delay-200">
            <TypeWriter words={roles} className="" />
          </div>

          {/* Description Speech Bubble */}
          <div className="bg-white border-4 border-black p-6 rounded-2xl relative mb-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-fade-up delay-300 max-w-xl">
            <div className="absolute -left-3 top-6 w-6 h-6 bg-white border-l-4 border-b-4 border-black transform rotate-45 md:block hidden"></div>
            <p className="text-lg font-mono font-bold leading-relaxed text-black">
              "I build intelligent AI systems and scalable web apps. <br /> Let's create something suuuuper!"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-fade-up delay-400">
            <a href="#projects" className="hero-button">
              VIEW PROJECTS
            </a>
            <a href="#contact" className="hero-button-outline">
              CONTACT ME
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-12 animate-fade-up delay-500">
            <SocialIcon href="https://github.com/ShewaleParth" icon={Github} />
            <SocialIcon href="https://linkedin.com/in/parth-shewale" icon={Linkedin} />
            <SocialIcon href="mailto:sparth7972@gmail.com" icon={Mail} />
          </div>
        </div>

        {/* Right Content Area - Hero Image */}
        <div className="flex-1 relative w-full max-w-lg md:max-w-xl perspective-1000">
          {/* Power Aura */}
          <div className="absolute inset-0 bg-primary rounded-full blur-[80px] opacity-40 animate-pulse-glow transform scale-75"></div>

          {/* Luffy Image */}
          <div className="relative z-10 animate-float transform transition-transform duration-500 hover:scale-105">
            <img
              src="/hero-luffy.png"
              alt="Parth Hero Avatar"
              className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Floating geometric shapes/elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary border-4 border-black rounded-full z-0 animate-bounce delay-700 opacity-80"></div>
          <div className="absolute bottom-10 -left-10 w-16 h-16 bg-black z-20 animate-spin-slow opacity-80" style={{ animationDuration: '3s' }}></div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up delay-600">
        <a href="#about" className="flex flex-col items-center gap-2 font-comic text-black hover:text-primary transition-colors">
          <span className="text-xl">SCROLL DOWN</span>
          <ArrowDown className="w-8 h-8 animate-bounce border-2 border-black rounded-full p-1" />
        </a>
      </div>
    </section>
  );
};

// Separate component for social icons with magnetic effect & manga style
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: typeof Github }) => {
  const magnetic = useMagneticCursor({ strength: 0.3 });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={magnetic.elementRef}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className="p-3 bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none magnetic"
      style={{
        transform: `translate(${magnetic.position.x}px, ${magnetic.position.y}px)`,
      }}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
};

export default HeroSection;
