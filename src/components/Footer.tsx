import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-[#1a1a1a] py-8 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#888888]">
            <span>© 2026 HUZAIF. All rights reserved.</span>
            <span className="text-red-500">✦</span>
          </div>

          {/* Quick Footer Links */}
          <div className="flex items-center gap-6 text-[11px] font-mono-code text-[#888888] uppercase tracking-[1.5px]">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#work" className="hover:text-white transition-colors">WORK</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#process" className="hover:text-white transition-colors">PROCESS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>

          {/* Scroll to Top */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#1a1a1a] bg-[#121212] text-[#888888] hover:text-white hover:border-[#333] text-xs font-mono-code transition-all cursor-pointer group uppercase tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-red-500" />
          </button>

        </div>

      </div>
    </footer>
  );
}
