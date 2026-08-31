import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SelectedProjects from './components/SelectedProjects';
import AboutProcessSection from './components/AboutProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import StartProjectModal from './components/StartProjectModal';
import CustomCursor from './components/CustomCursor';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);

  const handleExploreWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-red-600 selection:text-white">
      {/* Subtle Custom Magnetic Glow Cursor */}
      <CustomCursor />

      {/* Top Fixed Header */}
      <Navbar onStartProject={() => setIsStartProjectOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onExploreWork={handleExploreWork}
          onStartProject={() => setIsStartProjectOpen(true)}
        />

        {/* Selected Projects Showcase */}
        <SelectedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* About, Skills, Process & Quote 3-Column Section */}
        <AboutProcessSection />

        {/* Contact Section */}
        <ContactSection
          onStartProject={() => setIsStartProjectOpen(true)}
          onViewWork={handleViewWork}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onStartProject={() => {
          setSelectedProject(null);
          setIsStartProjectOpen(true);
        }}
      />

      {/* Start Project Inquiry Modal */}
      <StartProjectModal
        isOpen={isStartProjectOpen}
        onClose={() => setIsStartProjectOpen(false)}
      />
    </div>
  );
}
