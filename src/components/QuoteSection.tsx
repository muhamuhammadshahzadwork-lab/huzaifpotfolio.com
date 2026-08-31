import { Quote } from 'lucide-react';

export default function QuoteSection() {
  return (
    <div className="bg-[#121212] border border-[#1a1a1a] hover:border-red-500/40 rounded-lg p-6 sm:p-8 transition-all shadow-xl h-full flex flex-col justify-between relative overflow-hidden group">
      {/* Ambient background glow */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Giant Red Quotation Mark */}
        <div className="text-red-500 mb-4 opacity-90">
          <Quote className="w-8 h-8 sm:w-10 sm:h-10 fill-red-500/20 text-red-500" />
        </div>

        {/* Quote Statement in editorial serif */}
        <blockquote className="font-editorial text-2xl sm:text-3xl font-normal italic text-white leading-snug tracking-tight mb-6">
          “Good design is not just how it looks, but how it works.”
        </blockquote>

        {/* Huzaif Signature */}
        <div className="mt-4">
          <div className="font-signature text-4xl sm:text-5xl font-bold text-red-500 tracking-wide select-none transform -rotate-3 hover:scale-105 transition-transform duration-300 inline-block">
            Huzaif
          </div>
          <p className="text-[#888888] text-xs font-mono-code uppercase tracking-wider mt-1">
            Freelance Web Designer
          </p>
        </div>
      </div>

      {/* Bottom Editorial Slogan & Divider */}
      <div className="mt-8 pt-4 border-t border-[#1a1a1a]">
        <div className="w-8 h-[2px] bg-red-600 mb-3" />
        <p className="font-display text-xs sm:text-sm font-bold text-zinc-300 uppercase tracking-[2px] leading-relaxed">
          LET’S CREATE SOMETHING GREAT TOGETHER.
        </p>
        <span className="text-red-500 text-base mt-1 inline-block">✦</span>
      </div>
    </div>
  );
}
