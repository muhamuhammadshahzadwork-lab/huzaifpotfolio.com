import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/projectsData';

interface SelectedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function SelectedProjects({ onSelectProject }: SelectedProjectsProps) {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterCategories = ['ALL', 'ANIMATED', 'BUSINESS', 'LUXURY', 'FITNESS', 'TRAVEL'];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (selectedFilter === 'ANIMATED') return p.category.includes('ANIMATED') || p.category.includes('COFFEE');
        if (selectedFilter === 'BUSINESS') return p.category.includes('BUSINESS');
        if (selectedFilter === 'LUXURY') return p.category.includes('INTERIOR') || p.category.includes('PREMIUM');
        if (selectedFilter === 'FITNESS') return p.category.includes('FITNESS');
        if (selectedFilter === 'TRAVEL') return p.category.includes('TRAVEL');
        return true;
      });

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#050505] border-b border-[#1a1a1a] relative">
      {/* Background ambient editorial wireframe accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Title Row - Editorial Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1a1a1a]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 font-mono-code text-[11px] font-bold tracking-[4px] uppercase">
                SELECTED PROJECTS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_6px_#FF0000]" />
            </div>
            <h2
              id="selected-projects-title"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-[-2px] sm:tracking-[-3px] uppercase flex items-center gap-3"
            >
              FEATURED WORK
              <span className="text-red-500 text-3xl sm:text-4xl">✦</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1 text-[10px] font-mono-code uppercase tracking-[2px] transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-red-600 border border-red-500 text-white font-bold shadow-md shadow-red-950/50'
                    : 'bg-[#121212] border border-[#1a1a1a] text-[#888888] hover:text-white hover:border-[#333]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Project Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProjectId === project.id;
            return (
              <motion.article
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => onSelectProject(project)}
                className="group flex flex-col bg-[#121212] hover:bg-[#181818] border border-[#1a1a1a] hover:border-red-500/60 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black hover:-translate-y-1"
              >
                {/* Visual Preview Image with Window Bar */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden border-b border-[#1a1a1a]">
                  {/* Window Controls Bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 bg-black/70 backdrop-blur-md px-2.5 py-1.5 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_4px_#FF0000]" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="w-2 h-2 rounded-full bg-zinc-800" />
                    </div>
                    <span className="text-[9px] font-mono-code text-[#888888] tracking-wider truncate max-w-[110px]">
                      {project.id}.huzaif.dev
                    </span>
                  </div>

                  {/* Thumbnail Image with Zoom */}
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Hover Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-[2px] text-white bg-red-600 px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                      <span>EXPLORE</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Number & Arrow Row */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono-code text-xs font-bold text-red-500 tracking-[2px]">
                        {project.number}
                      </span>
                      <span className="text-red-500 font-bold text-base group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-base font-bold text-white uppercase tracking-tight group-hover:text-red-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Category */}
                    <p className="text-[10px] font-mono-code text-[#888888] uppercase tracking-[1.5px] mt-1 line-clamp-1">
                      {project.category}
                    </p>
                  </div>

                  {/* Bottom Tech pills preview */}
                  <div className="mt-3 pt-2.5 border-t border-[#1a1a1a] flex items-center gap-1.5 flex-wrap">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono-code text-zinc-300 bg-[#050505] px-2 py-0.5 border border-[#222]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-[9px] font-mono-code text-red-500 font-semibold">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer Sub-Note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-[#888888] text-xs font-mono-code">
          <span>Click any card to review full interactive case study, live architecture & UX metrics</span>
          <span className="text-red-500">✦</span>
        </div>

      </div>
    </section>
  );
}
