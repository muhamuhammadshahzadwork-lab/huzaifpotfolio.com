import AboutAndSkills from './AboutAndSkills';
import WorkProcess from './WorkProcess';
import QuoteSection from './QuoteSection';

export default function AboutProcessSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#050505] border-b border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* 3-Column Layout matching the visual mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
          
          {/* Column 1: Education & Skills (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <AboutAndSkills />
          </div>

          {/* Column 2: Work Process Timeline (5 cols) */}
          <div id="process" className="lg:col-span-5 flex flex-col">
            <WorkProcess />
          </div>

          {/* Column 3: Quote & Philosophy (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <QuoteSection />
          </div>

        </div>

      </div>
    </section>
  );
}
