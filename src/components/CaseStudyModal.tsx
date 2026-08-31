import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight, Sparkles, Layers, Cpu, Smartphone, Monitor, Tablet } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/projectsData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onStartProject: () => void;
}

export default function CaseStudyModal({ project, onClose, onSelectProject, onStartProject }: CaseStudyModalProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'results'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <AnimatePresence>
      <div id="case-study-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto">
        
        {/* Background Click to Dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          id="case-study-modal-container"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#121212] border border-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a] bg-[#050505]">
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-base font-bold text-red-500 tracking-[2px]">
                {project.number}
              </span>
              <span className="text-[#333]">/</span>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono-code text-[#888888] uppercase tracking-[1.5px]">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Quick Actions & Close */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 mr-3 border-r border-[#1a1a1a] pr-3">
                <button
                  onClick={() => onSelectProject(prevProject)}
                  className="p-1.5 text-[#888888] hover:text-white hover:bg-[#1a1a1a] rounded transition-colors"
                  title="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectProject(nextProject)}
                  className="p-1.5 text-[#888888] hover:text-white hover:bg-[#1a1a1a] rounded transition-colors"
                  title="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                id="case-study-close-btn"
                onClick={onClose}
                className="p-2 text-[#888888] hover:text-red-500 hover:bg-[#1a1a1a] rounded border border-[#1a1a1a] transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
            
            {/* Visual Hero Banner with Responsive Device Preview Toggle */}
            <div className="relative rounded border border-[#1a1a1a] bg-[#050505] overflow-hidden flex flex-col items-center p-4 sm:p-6">
              
              {/* Device Selector Controls */}
              <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-[#1a1a1a]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_4px_#FF0000]" />
                  <span className="text-[11px] font-mono-code text-zinc-300 uppercase tracking-wider">LIVE PREVIEW SIMULATION</span>
                </div>

                <div className="flex items-center gap-1 bg-[#121212] p-1 rounded border border-[#1a1a1a]">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                      deviceMode === 'desktop' ? 'bg-red-600 text-white font-bold' : 'text-[#888888] hover:text-white'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline font-mono-code text-[10px]">DESKTOP</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('tablet')}
                    className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                      deviceMode === 'tablet' ? 'bg-red-600 text-white font-bold' : 'text-[#888888] hover:text-white'
                    }`}
                    title="Tablet Preview"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline font-mono-code text-[10px]">TABLET</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                      deviceMode === 'mobile' ? 'bg-red-600 text-white font-bold' : 'text-[#888888] hover:text-white'
                    }`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline font-mono-code text-[10px]">MOBILE</span>
                  </button>
                </div>
              </div>

              {/* Preview Display Window */}
              <div
                className={`transition-all duration-300 rounded overflow-hidden border border-[#1a1a1a] shadow-2xl shadow-black relative bg-black ${
                  deviceMode === 'desktop' ? 'w-full aspect-[16/9]' : deviceMode === 'tablet' ? 'w-[75%] aspect-[4/3]' : 'w-[360px] aspect-[9/16]'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Floating Tag */}
                <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[11px] font-mono-code text-zinc-200">
                  ⚡ 60 FPS GSAP & Responsive Animation Stack
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#050505] border border-[#1a1a1a] p-4 rounded flex flex-col justify-between">
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase tracking-[1.5px]">{m.label}</span>
                    <span className="font-display text-2xl sm:text-3xl font-black text-red-500 mt-1">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Overview & Project Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Scope, Challenge & Solution */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-[11px] font-mono-code text-red-500 uppercase tracking-[3px] mb-2 font-bold">
                    PROJECT OVERVIEW
                  </h4>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#050505] border border-[#1a1a1a] p-4 rounded">
                    <h5 className="font-display text-xs font-bold text-white uppercase tracking-[1px] mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      THE CHALLENGE
                    </h5>
                    <p className="text-[#888888] text-xs leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="bg-[#050505] border border-[#1a1a1a] p-4 rounded">
                    <h5 className="font-display text-xs font-bold text-white uppercase tracking-[1px] mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      THE SOLUTION
                    </h5>
                    <p className="text-[#888888] text-xs leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="text-[11px] font-mono-code text-red-500 uppercase tracking-[3px] mb-3 font-bold">
                    CORE HIGHLIGHTS & ARCHITECTURE
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 bg-[#050505] p-2.5 rounded border border-[#1a1a1a]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Meta Info & CTAs */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Meta Box */}
                <div className="bg-[#050505] border border-[#1a1a1a] p-5 rounded space-y-4 font-mono-code text-xs">
                  <div>
                    <span className="text-[#888888] uppercase block mb-1 text-[10px] tracking-wider">ROLE</span>
                    <span className="text-white font-medium">{project.role}</span>
                  </div>
                  <div className="border-t border-[#1a1a1a] pt-3">
                    <span className="text-[#888888] uppercase block mb-1 text-[10px] tracking-wider">DELIVERED</span>
                    <span className="text-white font-medium">{project.year}</span>
                  </div>
                  <div className="border-t border-[#1a1a1a] pt-3">
                    <span className="text-[#888888] uppercase block mb-1 text-[10px] tracking-wider">DELIVERABLES</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.deliverables.map((deliv, i) => (
                        <span key={i} className="bg-[#121212] border border-[#222] text-zinc-300 px-2 py-0.5 rounded text-[10px]">
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-[#050505] border border-[#1a1a1a] p-5 rounded">
                  <h5 className="font-display text-xs font-bold text-white uppercase tracking-[1.5px] mb-3 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-red-500" />
                    TECHNOLOGIES USED
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-[10px] font-mono-code px-2 py-1 bg-[#121212] text-zinc-300 border border-[#222]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inquire for similar project */}
                <button
                  onClick={() => {
                    onClose();
                    onStartProject();
                  }}
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold font-mono-code text-xs tracking-[2px] uppercase transition-all shadow-md shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>START A SIMILAR PROJECT</span>
                </button>
              </div>

            </div>

          </div>

          {/* Footer Navigation */}
          <div className="px-6 py-4 bg-[#050505] border-t border-[#1a1a1a] flex items-center justify-between">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-2 text-xs font-mono-code text-[#888888] hover:text-red-400 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>PREV: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-2 text-xs font-mono-code text-[#888888] hover:text-red-400 transition-colors"
            >
              <span>NEXT: {nextProject.title}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
