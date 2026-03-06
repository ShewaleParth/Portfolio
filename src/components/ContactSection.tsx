import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'sparth7972@gmail.com', href: 'mailto:sparth7972@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 97673 52892', href: 'tel:+919767352892' },
  { icon: MapPin, label: 'Location', value: 'Thane, Maharashtra, India', href: '#' },
];

const SOCIALS = [
  { icon: Github, label: 'GitHub', sub: 'github.com/ShewaleParth', href: 'https://github.com/ShewaleParth' },
  { icon: Linkedin, label: 'LinkedIn', sub: 'linkedin.com/in/parth-shewale', href: 'https://linkedin.com/in/parth-shewale' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    toast.success('Message sent! I\'ll get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#050a0f]">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-eyebrow mb-4">get in touch</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Let's <span className="text-gradient-purple">Connect</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md text-sm leading-relaxed">
            Open to full-time roles, internships, and interesting data science collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Contact items */}
            {CONTACT_INFO.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="sci-card p-4 flex items-center gap-4 group no-underline"
              >
                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <info.icon className="w-4 h-4 text-[#8b5cf6]" />
                </div>
                <div>
                  <div className="font-mono-code text-[10px] text-white/30 mb-0.5">{info.label}</div>
                  <div className="text-white/80 text-sm font-medium">{info.value}</div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 ml-auto transition-colors" />
              </a>
            ))}

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sci-card flex-1 p-4 flex items-center gap-3 group no-underline"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-[#00d4ff]/30 transition-colors">
                    <s.icon className="w-3.5 h-3.5 text-white/50 group-hover:text-[#00d4ff] transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white/70 text-xs font-medium">{s.label}</div>
                    <div className="font-mono-code text-[9px] text-white/25 truncate">{s.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="sci-card p-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="font-mono-code text-xs text-white/40">
                status: <span className="text-[#10b981]">open_to_work = True</span>
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sci-card p-6 flex flex-col gap-5"
          >
            <div className="font-mono-code text-[10px] text-white/25 border-b border-white/[0.06] pb-4">
              // send_message.py
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block font-mono-code text-xs text-white/40">
                name <span className="text-[#00d4ff]">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white/90 text-sm placeholder:text-white/20 font-mono-code focus:outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.06] transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-mono-code text-xs text-white/40">
                email <span className="text-[#00d4ff]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white/90 text-sm placeholder:text-white/20 font-mono-code focus:outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.06] transition-all"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block font-mono-code text-xs text-white/40">
                message <span className="text-[#00d4ff]">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Parth, I'd love to discuss..."
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white/90 text-sm placeholder:text-white/20 font-mono-code focus:outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.06] transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <span className="w-3.5 h-3.5 border border-[#050a0f]/40 border-t-[#050a0f] rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
