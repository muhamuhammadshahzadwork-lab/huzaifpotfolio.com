import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onStartProject: () => void;
}

export default function Navbar({ onStartProject }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'work', 'about', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'PROCESS', href: '#process', id: 'process' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#1a1a1a] py-3.5 shadow-2xl'
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-[#1a1a1a]/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 focus:outline-none"
        >
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-[2px] text-white group-hover:text-red-500 transition-colors">
            HUZAIF
          </span>
          <span className="w-1.5 h-1.5 bg-red-600 shadow-[0_0_8px_#FF0000]" />
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-[11px] font-mono-code font-bold tracking-[2px] uppercase transition-colors py-1 ${
                  isActive ? 'text-white' : 'text-[#888888] hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Status Badge & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="nav-available-badge"
            onClick={onStartProject}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded border border-[#1a1a1a] bg-[#121212] text-[#888888] hover:text-white hover:border-[#333] transition-all cursor-pointer group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_6px_#FF0000]" />
            <span className="text-[10px] font-mono-code uppercase tracking-[1.5px] group-hover:text-red-400 transition-colors">
              AVAILABLE FOR FREELANCE
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white hover:bg-[#121212] rounded border border-[#1a1a1a] focus:outline-none transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#050505] border-b border-[#1a1a1a] px-6 py-6 overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs font-mono-code tracking-[2px] uppercase py-2.5 px-3 rounded border transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-[#121212] border-[#222]'
                        : 'text-[#888888] border-transparent hover:text-white hover:bg-[#121212]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#1a1a1a] flex flex-col gap-3">
                <button
                  id="mobile-nav-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartProject();
                  }}
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-mono-code font-bold text-xs tracking-[2px] uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-950/60"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>START A PROJECT</span>
                </button>

                <div className="flex items-center justify-center gap-2 py-2 text-[#888888] text-[10px] font-mono-code tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  AVAILABLE FOR FREELANCE
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
