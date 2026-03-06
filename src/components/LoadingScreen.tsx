import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  { text: '> initializing portfolio...', color: 'text-white/40' },
  { text: '> loading data science modules...', color: 'text-white/40' },
  { text: '> import pandas, numpy, torch', color: 'text-[#00d4ff]/80' },
  { text: '> connecting to neural networks...', color: 'text-white/40' },
  { text: '✓ ready', color: 'text-[#10b981]' },
];

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((prev) => {
        if (prev >= LINES.length - 1) { clearInterval(lineTimer); return prev; }
        return prev + 1;
      });
    }, 280);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return Math.min(prev + Math.random() * 12 + 2, 100);
      });
    }, 90);

    return () => { clearInterval(lineTimer); clearInterval(progressTimer); };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-[#050a0f] flex items-center justify-center"
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-grid opacity-60" />

          {/* Glowing orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px]" />

          <div className="relative z-10 w-full max-w-sm px-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-10"
            >
              <div className="text-3xl font-display font-bold text-white mb-1 tracking-tight">
                Parth <span className="text-gradient-cyan">Shewale</span>
              </div>
              <div className="font-mono-code text-xs text-white/30 tracking-[0.25em] uppercase">Data Scientist</div>
            </motion.div>

            {/* Terminal lines */}
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-2 font-mono-code text-xs text-white/30">boot.sh</span>
              </div>
              <div className="terminal-body min-h-[120px]">
                {LINES.slice(0, lineIndex + 1).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${line.color} text-xs`}
                  >
                    {line.text}
                    {i === lineIndex && i < LINES.length - 1 && (
                      <span className="animate-blink ml-1 text-[#00d4ff]">█</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/[0.07] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                />
              </div>
              <span className="font-mono-code text-xs text-white/30 w-8 text-right">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
