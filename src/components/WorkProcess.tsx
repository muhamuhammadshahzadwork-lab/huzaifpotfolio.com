import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Lightbulb, PenTool, Code2, Send, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/projectsData';

export default function WorkProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-3.5 h-3.5" />;
      case 'lightbulb':
        return <Lightbulb className="w-3.5 h-3.5" />;
      case 'pen':
        return <PenTool className="w-3.5 h-3.5" />;
      case 'code':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'send':
        return <Send className="w-3.5 h-3.5" />;
      default:
        return <CheckCircle2 className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-[#121212] border border-[#1a1a1a] hover:border-red-500/40 rounded-lg p-6 sm:p-8 transition-all shadow-xl h-full flex flex-col justify-between">
      <div>
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1a1a1a]">
          <div className="w-9 h-9 rounded bg-[#050505] border border-[#222] flex items-center justify-center text-red-500">
            <Send className="w-4 h-4" />
          </div>
          <div>
            <span className="text-red-500 font-mono-code text-[10px] font-bold tracking-[3px] uppercase block">
              METHODOLOGY
            </span>
            <h3
              id="work-process-heading"
              className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2"
            >
              THE PROCESS
              <span className="text-red-500 text-lg">✦</span>
            </h3>
          </div>
        </div>

        {/* Vertical Timeline List - Editorial Grid */}
        <div className="relative pl-1 sm:pl-2 space-y-4">
          {/* Vertical connecting line */}
          <div className="absolute top-3 bottom-3 left-[1.8rem] sm:left-[2.1rem] w-[1px] bg-gradient-to-b from-red-600 via-red-900/40 to-[#1a1a1a]" />

          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={step.number}
                id={`process-step-${step.number}`}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                onClick={() => setActiveStep(isSelected ? null : index)}
                className="relative flex items-start gap-3 sm:gap-4 group cursor-pointer"
              >
                {/* Step Number */}
                <span className="font-mono-code text-xs font-bold text-red-500 tracking-[2px] pt-1.5 w-6 shrink-0">
                  {step.number}
                </span>

                {/* Circular/Square Icon Node */}
                <div className={`relative z-10 w-8 h-8 rounded flex items-center justify-center transition-all duration-300 shrink-0 ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/50 scale-105'
                    : 'bg-[#050505] border border-[#222] group-hover:border-red-500 text-zinc-300 group-hover:text-red-500'
                }`}>
                  {getIcon(step.iconName)}
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#050505] group-hover:bg-[#0a0a0a] border border-[#1a1a1a] group-hover:border-red-500/40 rounded p-3 transition-all">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-[1px] group-hover:text-red-400 transition-colors">
                      {step.title}
                    </h4>
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase">
                      STEP {step.number}
                    </span>
                  </div>
                  <p className="text-[#888888] text-xs mt-1 leading-relaxed font-body">
                    {step.description}
                  </p>

                  {/* Expanded detail on tap */}
                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2 text-[11px] font-mono-code text-zinc-300 pt-2 border-t border-[#1a1a1a] leading-relaxed"
                    >
                      {step.details}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Sub-Label */}
      <div className="mt-6 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[#888888] text-[10px] font-mono-code uppercase tracking-wider">
        <span>Agile & Milestone-Driven Workflow</span>
        <span className="text-red-500 font-bold">100% TRANSPARENCY</span>
      </div>
    </div>
  );
}
