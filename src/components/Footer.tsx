import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="bg-[#07090f] border-t border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">

        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 border border-[#00d4ff]/40 rounded-md flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-[#00d4ff]" />
            </div>
            <span className="font-mono-code text-white/80 font-semibold text-sm">
              parth<span className="text-[#00d4ff]">.dev</span>
            </span>
          </div>
          <p className="text-white/30 text-xs leading-relaxed font-mono-code">
            Data Scientist & ML Engineer based in Mumbai.
            Turning data into decisions, one model at a time.
          </p>
        </div>

        {/* Nav */}
        <div>
          <div className="font-mono-code text-[10px] text-white/25 tracking-[0.2em] uppercase mb-4">Navigation</div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono-code text-xs text-white/40 hover:text-[#00d4ff] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div>
          <div className="font-mono-code text-[10px] text-white/25 tracking-[0.2em] uppercase mb-4">Connect</div>
          <div className="flex flex-col gap-3">
            {[
              { href: 'https://github.com/ShewaleParth', icon: Github, label: 'github.com/ShewaleParth' },
              { href: 'https://linkedin.com/in/parth-shewale', icon: Linkedin, label: 'linkedin.com/in/parth-shewale' },
              { href: 'mailto:sparth7972@gmail.com', icon: Mail, label: 'sparth7972@gmail.com' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/35 hover:text-[#00d4ff] transition-colors group"
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono-code text-xs">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono-code text-[10px] text-white/20">
          © 2025 Parth Shewale. Built with React + Vite + TypeScript.
        </p>
        <a
          href="#home"
          className="flex items-center gap-1.5 font-mono-code text-[10px] text-white/25 hover:text-[#00d4ff] transition-colors group"
        >
          back to top
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
