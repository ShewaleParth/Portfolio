import { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'profile', num: '01' },
    { href: '#skills', label: 'capabilities', num: '02' },
    { href: '#projects', label: 'systems', num: '03' },
    { href: '#simulator', label: 'simulator', num: '04' },
    { href: '#proof', label: 'proof', num: '05' },
    { href: '#contact', label: 'connect', num: '06' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#050a0f]/90 backdrop-blur-xl border-b border-white/[0.06]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 border border-[#00d4ff]/40 rounded-md flex items-center justify-center group-hover:border-[#00d4ff] group-hover:bg-[#00d4ff]/10 transition-all duration-300">
            <Terminal className="w-3.5 h-3.5 text-[#00d4ff]" />
          </div>
          <span className="font-mono-code text-white/90 font-semibold text-sm tracking-wide group-hover:text-[#00d4ff] transition-colors">
            parth<span className="text-[#00d4ff]">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-white/50 hover:text-white/90 transition-colors duration-200 group font-mono-code"
            >
              <span className="text-[#00d4ff]/60 text-xs mr-1">{link.num}.</span>
              {link.label}
              <span className="absolute bottom-0 left-4 right-4 h-px bg-[#00d4ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2 px-5"
          >
            resume.pdf
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0d1117] border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 py-3 text-white/60 hover:text-white transition-colors font-mono-code text-sm border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-[#00d4ff]/60 text-xs">{link.num}.</span>
                  {link.label}
                </motion.a>
              ))}
              <a href="/resume.pdf" className="btn-outline text-xs py-2.5 mt-3 justify-center">
                resume.pdf
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
