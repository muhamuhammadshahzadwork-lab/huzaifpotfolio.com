import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, CheckCircle2, MessageSquare, Briefcase, DollarSign, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { InquiryFormData } from '../types';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartProjectModal({ isOpen, onClose }: StartProjectModalProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    service: 'Full Website & Development',
    budget: '$1,000 - $3,000',
    timeline: '2 - 4 Weeks',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = [
    'Web Design & UI/UX',
    'Full Website & Development',
    'Web Animation & GSAP',
    'Custom Landing Page'
  ];

  const budgets = [
    '<$1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000+'
  ];

  const timelines = [
    'Urgent (< 2 weeks)',
    '2 - 4 Weeks',
    '1 - 2 Months',
    'Flexible'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ef4444', '#ffffff', '#dc2626', '#b91c1c']
      });
    } catch {
      // safe fallback
    }

    // Auto trigger mailto link after a brief pause
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name || 'Client'}: ${formData.service}`);
    const body = encodeURIComponent(
      `Hello Huzaif,\n\nI would like to start a project with you:\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    setTimeout(() => {
      window.open(`mailto:muhamuammadshahzadwork@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div
        id="start-project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto"
      >
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          id="start-project-modal"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-2xl bg-[#121212] border border-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden flex flex-col z-10 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a] bg-[#050505]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#050505] border border-[#222] flex items-center justify-center text-red-500">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                  START A PROJECT
                </h3>
                <p className="text-[10px] font-mono-code text-[#888888] uppercase tracking-wider">
                  Direct inquiry with Huzaif
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#888888] hover:text-red-500 rounded border border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh]">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-red-950/60 border border-red-500 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white uppercase">
                  INQUIRY PREPARED!
                </h4>
                <p className="text-[#888888] text-sm max-w-md mx-auto leading-relaxed font-body">
                  Your project details have been formulated. An email draft to <span className="text-red-400 font-mono-code">muhamuammadshahzadwork@gmail.com</span> is opening. Huzaif will reply within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#050505] border border-[#222] hover:bg-[#1a1a1a] text-white text-xs font-mono-code uppercase font-semibold transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-[10px] font-mono-code text-zinc-300 uppercase tracking-[2px] mb-2 flex items-center gap-1.5 font-bold">
                    <Briefcase className="w-3.5 h-3.5 text-red-500" />
                    SELECT SERVICE
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {services.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setFormData({ ...formData, service: srv })}
                        className={`p-2.5 text-xs font-mono-code text-left border transition-all cursor-pointer ${
                          formData.service === srv
                            ? 'bg-red-600 border-red-500 text-white font-semibold shadow-sm'
                            : 'bg-[#050505] border-[#1a1a1a] text-[#888888] hover:text-white hover:border-[#333]'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-[10px] font-mono-code text-zinc-300 uppercase tracking-[2px] mb-2 flex items-center gap-1.5 font-bold">
                    <DollarSign className="w-3.5 h-3.5 text-red-500" />
                    ESTIMATED BUDGET (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`p-2 text-xs font-mono-code text-center border transition-all cursor-pointer ${
                          formData.budget === b
                            ? 'bg-red-600 border-red-500 text-white font-semibold'
                            : 'bg-[#050505] border-[#1a1a1a] text-[#888888] hover:text-white hover:border-[#333]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div>
                  <label className="block text-[10px] font-mono-code text-zinc-300 uppercase tracking-[2px] mb-2 flex items-center gap-1.5 font-bold">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    DESIRED TIMELINE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelines.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`p-2 text-xs font-mono-code text-center border transition-all cursor-pointer ${
                          formData.timeline === t
                            ? 'bg-red-600 border-red-500 text-white font-semibold'
                            : 'bg-[#050505] border-[#1a1a1a] text-[#888888] hover:text-white hover:border-[#333]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono-code text-zinc-300 uppercase tracking-[2px] mb-1.5 font-bold">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-red-500 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-code text-zinc-300 uppercase tracking-[2px] mb-1.5 font-bold">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-red-500 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors font-body"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-[10px] font-mono-code text-zinc-300 uppercase tracking-[2px] mb-1.5 flex items-center gap-1.5 font-bold">
                    <MessageSquare className="w-3.5 h-3.5 text-red-500" />
                    PROJECT OVERVIEW & GOALS
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell me a bit about your brand, target audience, and any inspiration links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-red-500 rounded p-3.5 text-sm text-white focus:outline-none transition-colors font-body resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-mono-code font-bold text-xs tracking-[2px] uppercase transition-all shadow-md shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SUBMIT INQUIRY TO HUZAIF</span>
                </button>

                <p className="text-[10px] font-mono-code text-[#888888] text-center">
                  Direct dispatch to <span className="text-zinc-400">muhamuammadshahzadwork@gmail.com</span>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
