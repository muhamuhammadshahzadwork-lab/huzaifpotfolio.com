import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Globe, Phone, MapPin, ArrowRight, Copy, Check, Sparkles, Send } from 'lucide-react';
import { laptopImg } from '../data/projectsData';

interface ContactSectionProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export default function ContactSection({ onStartProject, onViewWork }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'muhamuammadshahzadwork@gmail.com';
  const website = 'www.huzaif.dev';
  const phone = '+92 312 3456789';
  const location = 'Pakistan';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#050505] border-b border-[#1a1a1a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Contact Heading, Details, & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 font-mono-code text-[11px] font-bold tracking-[4px] uppercase">
                  GET IN TOUCH
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_6px_#FF0000]" />
              </div>

              <h2
                id="contact-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-[-2px] sm:tracking-[-3px] uppercase leading-none mb-6 flex items-center gap-3"
              >
                LET’S WORK<br />
                <span className="text-white">TOGETHER</span>
                <span className="text-red-500 text-4xl sm:text-5xl">✦</span>
              </h2>

              <p className="text-[#888888] text-base leading-relaxed max-w-lg font-body mb-8">
                I’m currently open for new client projects, UI/UX design, and creative frontend development. Let’s collaborate and build something remarkable.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8"
            >
              <button
                id="contact-start-project-btn"
                onClick={onStartProject}
                className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-mono-code font-bold text-xs tracking-[2px] uppercase transition-all shadow-md shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="contact-view-work-btn"
                onClick={onViewWork}
                className="px-6 py-3 bg-[#121212] hover:bg-[#1a1a1a] border border-[#1a1a1a] hover:border-[#444] text-white font-mono-code font-bold text-xs tracking-[2px] uppercase transition-all flex items-center justify-center cursor-pointer"
              >
                VIEW MY WORK
              </button>
            </motion.div>

            {/* Available For Freelance indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1a1a1a] bg-[#121212] text-[#888888] text-[10px] font-mono-code uppercase tracking-[1.5px]">
                <Globe className="w-3 h-3 text-red-500" />
                <span>AVAILABLE FOR FREELANCE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              </div>
            </motion.div>

            {/* Direct Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2.5 max-w-md"
            >
              {/* Email item */}
              <div className="flex items-center justify-between p-3 rounded bg-[#121212] border border-[#1a1a1a] hover:border-red-500/50 transition-all group">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-zinc-300 group-hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded bg-[#050505] border border-[#222] flex items-center justify-center text-red-500">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono-code truncate max-w-[220px] sm:max-w-[260px]">
                    {email}
                  </span>
                </a>
                <button
                  onClick={() => copyToClipboard(email)}
                  className="p-1 text-[#888888] hover:text-red-400 rounded hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Website item */}
              <div className="flex items-center justify-between p-3 rounded bg-[#121212] border border-[#1a1a1a] hover:border-red-500/50 transition-all group">
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 group-hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded bg-[#050505] border border-[#222] flex items-center justify-center text-red-500">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono-code">{website}</span>
                </a>
                <span className="text-[10px] font-mono-code text-[#888888] uppercase tracking-wider">Live</span>
              </div>

              {/* Phone item */}
              <div className="flex items-center justify-between p-3 rounded bg-[#121212] border border-[#1a1a1a] hover:border-red-500/50 transition-all group">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-zinc-300 group-hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded bg-[#050505] border border-[#222] flex items-center justify-center text-red-500">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono-code">{phone}</span>
                </a>
                <span className="text-[10px] font-mono-code text-[#888888] uppercase tracking-wider">WhatsApp</span>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-3 p-3 rounded bg-[#121212] border border-[#1a1a1a]">
                <div className="w-7 h-7 rounded bg-[#050505] border border-[#222] flex items-center justify-center text-red-500">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono-code text-zinc-300">{location}</span>
                <span className="ml-auto text-[10px] font-mono-code text-[#888888]">UTC+5 / Remote</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Sleek Editorial Visual Frame */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-lg overflow-hidden border border-[#1a1a1a] bg-[#121212] p-4 sm:p-5 shadow-2xl group"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_4px_#FF0000]" />
                  <span className="w-2 h-2 rounded-full bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-800" />
                  <span className="ml-2 text-[10px] font-mono-code text-[#888888]">huzaif-studio.design</span>
                </div>
                <span className="text-[10px] font-mono-code text-red-500 font-bold uppercase tracking-[2px]">
                  STUDIO DISPLAY
                </span>
              </div>

              {/* Laptop Showcase Image */}
              <div className="relative rounded overflow-hidden aspect-[16/10] bg-black border border-[#1a1a1a]">
                <img
                  src={laptopImg}
                  alt="Huzaif Digital Workstation Studio Display"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Floating Monogram Pill */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-[#1a1a1a] text-[10px] font-mono-code text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>HUZAIF STUDIO</span>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-4 p-3 bg-[#050505] rounded border border-[#1a1a1a] flex items-center justify-between">
                <span className="text-xs font-mono-code text-[#888888]">
                  Ready to turn your vision into a standout reality?
                </span>
                <button
                  onClick={onStartProject}
                  className="text-xs font-mono-code text-red-500 hover:text-red-400 font-bold flex items-center gap-1 cursor-pointer tracking-wider uppercase"
                >
                  <span>Let's talk</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
