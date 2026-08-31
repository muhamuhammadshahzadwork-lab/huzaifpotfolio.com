import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Sparkles } from 'lucide-react';
import { SKILLS_LIST } from '../data/projectsData';

export default function AboutAndSkills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="bg-[#121212] border border-[#1a1a1a] hover:border-red-500/40 rounded-lg p-6 sm:p-8 transition-all shadow-xl h-full flex flex-col justify-between">
      <div>
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1a1a1a]">
          <div className="w-9 h-9 rounded bg-[#050505] border border-[#222] flex items-center justify-center text-red-500">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-red-500 font-mono-code text-[10px] font-bold tracking-[3px] uppercase block">
              EXPERTISE
            </span>
            <h3
              id="education-skills-heading"
              className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2"
            >
              EDUCATION & SKILLS
              <span className="text-red-500 text-lg">✦</span>
            </h3>
          </div>
        </div>

        {/* Education Sub-Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-500 font-mono-code text-[10px] font-bold tracking-[3px] uppercase">
              EDUCATION
            </span>
          </div>

          <div className="bg-[#050505] border border-[#1a1a1a] rounded p-4">
            <h4 className="font-display text-base font-bold text-white tracking-tight">
              Web Design & Development
            </h4>
            <p className="text-[#888888] text-xs leading-relaxed mt-1.5 font-body">
              Certified Specialist. Focused on modern, user-centric web applications, responsive architecture, and creative animations.
            </p>
          </div>
        </div>

        {/* Skills Sub-Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-red-500 font-mono-code text-[10px] font-bold tracking-[3px] uppercase">
              CORE SKILLS
            </span>
            <span className="text-[10px] font-mono-code text-[#888888] tracking-wider">
              10 TECHNOLOGIES
            </span>
          </div>

          {/* Interactive Skill Pills Grid - Editorial #222 boxes */}
          <div className="flex flex-wrap gap-2">
            {SKILLS_LIST.map((skill, index) => {
              const isActive = activeSkill === skill.name;
              return (
                <motion.button
                  key={skill.name}
                  id={`skill-pill-${index}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSkill(isActive ? null : skill.name)}
                  className={`px-3 py-1.5 text-[10px] font-mono-code font-bold uppercase tracking-[1.5px] transition-all cursor-pointer flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-red-600 border-red-500 text-white shadow-md shadow-red-950/60'
                      : 'bg-[#222222] border-[#333333] text-zinc-200 hover:text-white hover:border-red-500/50 hover:bg-[#282828]'
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full ${isActive ? 'bg-white' : 'bg-red-500'}`} />
                  <span>{skill.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Skill Note */}
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-[#050505] border border-red-500/40 rounded text-xs font-mono-code text-zinc-300 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>
                Proficient in <strong className="text-white">{activeSkill}</strong> for production-level interactive web projects.
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Sub-Label */}
      <div className="mt-6 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[#888888] text-[10px] font-mono-code uppercase tracking-wider">
        <span>Continuous Learning & Code Quality</span>
        <span className="text-red-500">60 FPS UI</span>
      </div>
    </div>
  );
}
