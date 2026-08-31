import { useState, useRef, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Globe, Award, FolderKanban, Users, Code, Terminal, Sparkles, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export default function HeroSection({ onExploreWork }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js'>('html');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#050505] bg-editorial-grid border-b border-[#1a1a1a]"
    >
      {/* Background ambient editorial wireframes & accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <div className="editorial-grid-line absolute top-[22%]" />
        <div className="editorial-grid-line absolute top-[52%]" />
        <div className="editorial-grid-line absolute top-[82%]" />
        <div className="editorial-viz-box w-28 h-40 top-12 right-[12%] rotate-12 border-red-600/40" />
        <div className="editorial-viz-box w-48 h-48 bottom-12 left-[6%] -rotate-6 border-red-600/30" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Bio & Availability */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top labels - Editorial caps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="text-red-500 font-mono-code text-[11px] font-bold tracking-[4px] uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full inline-block shadow-[0_0_8px_#FF0000]" />
                WEB DESIGNER & CREATOR
              </span>
            </motion.div>

            {/* Giant Headline in Editorial Scale */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[110px] font-black tracking-[-4px] sm:tracking-[-6px] text-white leading-[0.9] uppercase select-none mb-4"
            >
              HUZAIF
            </motion.h1>

            {/* Bio */}
            <motion.p
              id="hero-bio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#888888] text-base sm:text-lg leading-relaxed max-w-xl font-body mb-8"
            >
              I design and build modern, responsive, and animated websites that combine clean visual design with smooth interactions and engaging user experiences.
            </motion.p>

            {/* Available For Freelance Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <div
                id="hero-available-badge"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-red-500/30 bg-[#121212] text-zinc-300 text-xs sm:text-sm font-mono-code tracking-wider shadow-lg shadow-black/80 backdrop-blur-sm group hover:border-red-500 transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_#FF0000] animate-pulse" />
                <span className="text-zinc-200 uppercase font-semibold text-[11px] tracking-[2px]">
                  AVAILABLE FOR FREELANCE
                </span>
                <Sparkles className="w-3.5 h-3.5 text-red-500 group-hover:rotate-12 transition-transform" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract 3D Web Design Workstation & Stats */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Interactive Abstract 3D Web Workstation Visual (Replacing Portrait) */}
              <motion.div
                id="hero-abstract-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
                className="md:col-span-8 relative bg-[#121212] border border-[#1a1a1a] hover:border-red-500/40 rounded-xl p-4 sm:p-5 shadow-2xl shadow-black/80 transition-colors group"
              >
                {/* Top Code/UI Badge Bar */}
                <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shadow-[0_0_6px_#FF0000]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 inline-block" />
                    <span className="ml-2 text-[10px] font-mono-code text-[#888888] uppercase tracking-wider">huzaif-experience.dev</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('html')}
                      className={`text-[10px] font-mono-code px-2 py-0.5 rounded transition-colors ${
                        activeCodeTab === 'html' ? 'bg-red-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      &lt;/&gt; HTML
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('css')}
                      className={`text-[10px] font-mono-code px-2 py-0.5 rounded transition-colors ${
                        activeCodeTab === 'css' ? 'bg-red-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      CSS
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('js')}
                      className={`text-[10px] font-mono-code px-2 py-0.5 rounded transition-colors ${
                        activeCodeTab === 'js' ? 'bg-red-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      JS
                    </button>
                  </div>
                </div>

                {/* Simulated Editor Content */}
                <div className="font-mono-code text-xs text-zinc-300 bg-[#050505] rounded-lg p-3.5 border border-[#1a1a1a] mb-4 overflow-hidden relative">
                  <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-zinc-600">
                    <Terminal className="w-3 h-3 text-red-500" />
                    <span>v2.6</span>
                  </div>

                  {activeCodeTab === 'html' && (
                    <div className="space-y-1 text-zinc-400 leading-relaxed text-[11px]">
                      <p className="text-zinc-600">1 <span className="text-red-500">&lt;html</span> <span className="text-zinc-300">lang</span>=<span className="text-white">"en"</span>&gt;</p>
                      <p className="text-zinc-600">2   <span className="text-red-500">&lt;head&gt;</span></p>
                      <p className="text-zinc-600">3     <span className="text-red-500">&lt;meta</span> <span className="text-zinc-300">charset</span>=<span className="text-white">"utf-8"</span> /&gt;</p>
                      <p className="text-zinc-600">4     <span className="text-red-500">&lt;title&gt;</span>Huzaif Portfolio<span className="text-red-500">&lt;/title&gt;</span></p>
                      <p className="text-zinc-600">5   <span className="text-red-500">&lt;/head&gt;</span></p>
                      <p className="text-zinc-600">6   <span className="text-red-500">&lt;body&gt;</span></p>
                      <p className="text-zinc-600">7     <span className="text-red-500">&lt;h1&gt;</span><span className="text-white font-bold">Welcome</span><span className="text-red-500">&lt;/h1&gt;</span></p>
                      <p className="text-zinc-600">8   <span className="text-red-500">&lt;/body&gt;</span></p>
                      <p className="text-zinc-600">9 <span className="text-red-500">&lt;/html&gt;</span></p>
                    </div>
                  )}

                  {activeCodeTab === 'css' && (
                    <div className="space-y-1 text-zinc-400 leading-relaxed text-[11px]">
                      <p className="text-zinc-600">1 <span className="text-red-500">.creative-experience</span> &#123;</p>
                      <p className="text-zinc-600">2   <span className="text-zinc-400">display</span>: <span className="text-white">grid</span>;</p>
                      <p className="text-zinc-600">3   <span className="text-zinc-400">accent-color</span>: <span className="text-red-500 font-bold">#FF0000</span>;</p>
                      <p className="text-zinc-600">4   <span className="text-zinc-400">letter-spacing</span>: <span className="text-white">-3px</span>;</p>
                      <p className="text-zinc-600">5 &#125;</p>
                    </div>
                  )}

                  {activeCodeTab === 'js' && (
                    <div className="space-y-1 text-zinc-400 leading-relaxed text-[11px]">
                      <p className="text-zinc-600">1 <span className="text-red-500">const</span> designer = &#123;</p>
                      <p className="text-zinc-600">2   name: <span className="text-white">'Huzaif'</span>,</p>
                      <p className="text-zinc-600">3   craft: <span className="text-red-500">'Editorial Web Experiences'</span>,</p>
                      <p className="text-zinc-600">4   available: <span className="text-white">true</span></p>
                      <p className="text-zinc-600">5 &#125;;</p>
                    </div>
                  )}
                </div>

                {/* Inner Central Showcase Window */}
                <div className="bg-[#050505] p-5 rounded-lg border border-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                  
                  <p className="text-[10px] font-mono-code text-red-500 font-bold tracking-[3px] uppercase mb-1">
                    CREATING MODERN
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight leading-tight uppercase mb-4">
                    <span className="text-red-500">WEB</span> EXPERIENCES
                  </h3>

                  <button
                    id="hero-explore-work-btn"
                    onClick={onExploreWork}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded text-xs font-bold font-mono-code tracking-widest uppercase transition-all shadow-md shadow-red-950/50 cursor-pointer group"
                  >
                    <span>EXPLORE WORK</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

                {/* Floating Abstract Badges */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-3 bg-[#121212] border border-red-500/50 text-white text-[11px] font-mono-code px-2.5 py-1 rounded shadow-xl flex items-center gap-1.5 backdrop-blur-md"
                >
                  <Code className="w-3 h-3 text-red-500" />
                  <span className="text-red-500 font-bold">&lt;/&gt;</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -top-3 -right-3 bg-[#121212] border border-[#222] text-zinc-200 text-[10px] font-mono-code px-2.5 py-1 rounded shadow-xl flex items-center gap-1"
                >
                  <span className="text-red-500 font-bold">CSS</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-3 -left-2 bg-[#121212] border border-[#222] text-zinc-200 text-[10px] font-mono-code px-2.5 py-1 rounded shadow-xl flex items-center gap-1.5"
                >
                  <span className="text-red-500 font-bold">JS</span>
                  <Sparkles className="w-3 h-3 text-red-500" />
                </motion.div>
              </motion.div>

              {/* Stats Block - Editorial Grid Box Style */}
              <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                {/* Stat 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-[#121212] border border-[#1a1a1a] hover:border-red-500/40 p-4 rounded-lg flex items-center gap-3.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded bg-[#050505] border border-[#222] group-hover:border-red-500/60 flex items-center justify-center text-red-500 transition-colors shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-black text-white tracking-tight">1+</div>
                    <div className="text-[10px] font-mono-code text-[#888888] tracking-[1.5px] uppercase">
                      YEAR EXPERIENCE
                    </div>
                  </div>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-[#121212] border border-[#1a1a1a] hover:border-red-500/40 p-4 rounded-lg flex items-center gap-3.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded bg-[#050505] border border-[#222] group-hover:border-red-500/60 flex items-center justify-center text-red-500 transition-colors shrink-0">
                    <FolderKanban className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-black text-white tracking-tight">15+</div>
                    <div className="text-[10px] font-mono-code text-[#888888] tracking-[1.5px] uppercase">
                      PROJECTS DONE
                    </div>
                  </div>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-[#121212] border border-[#1a1a1a] hover:border-red-500/40 p-4 rounded-lg flex items-center gap-3.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded bg-[#050505] border border-[#222] group-hover:border-red-500/60 flex items-center justify-center text-red-500 transition-colors shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-black text-white tracking-tight">10+</div>
                    <div className="text-[10px] font-mono-code text-[#888888] tracking-[1.5px] uppercase">
                      HAPPY CLIENTS
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
