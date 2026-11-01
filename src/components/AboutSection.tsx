import React from 'react';
import { Palette, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-12 sm:py-16 lg:py-20 bg-[#E8EFE6] dark:bg-[#0B1B16] border-t border-b border-[#D2DDD0] dark:border-[#1C3A2F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Atelier Presentation Frame */}
          <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
            <div className="w-full max-w-md bg-[#FFFFFF] dark:bg-[#16382E] p-4 sm:p-5 rounded-lg border border-[#DDD5C7] dark:border-[#285546] shadow-[0_4px_24px_rgba(23,61,50,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-200">
              <div className="bg-[#F4EFE6] dark:bg-[#0E231C] p-3 rounded border border-[#E5DDD0] dark:border-[#1E4236]">
                <div className="relative aspect-[4/5] rounded overflow-hidden bg-[#DDD5C7] dark:bg-[#091813]">
                  <img
                    src="/assets/artworks/demo/demo_devotional_relief.svg"
                    alt="Atelier Demo - Signature 3D Devotional Relief Study"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/studio/atelier_studio_view.svg';
                    }}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded bg-[#FFFFFF]/95 dark:bg-[#0D201A]/95 backdrop-blur-xs border border-[#DDD5C7] dark:border-[#285546] text-center transition-colors shadow-xs">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#BD805B] dark:text-[#D4956F] block">
                      Atelier Signature Work
                    </span>
                    <span className="text-xs font-serif font-medium text-[#173D32] dark:text-[#FAF6EF] block mt-0.5">
                      Textured Architectural Relief
                    </span>
                    <span className="text-[10px] text-[#5E7268] dark:text-[#A9B9A2] block mt-0.5">
                      Fine Art &amp; Creative Craft Portfolio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Story & Demonstration Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#BD805B] dark:text-[#D4956F] block mb-2">
              About Atelier Demo
            </span>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#173D32] dark:text-[#FAF6EF] font-normal tracking-tight leading-tight">
              Where Creativity Meets Meaningful Art
            </h2>

            {/* Narrative Paragraphs */}
            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#243B32] dark:text-[#E8E2D8] font-light leading-relaxed">
              <p>
                At Atelier Demo, we believe every artwork tells a story and every creation holds an emotion. Inspired by the beauty of handmade art, we transform ideas, memories, and imagination into unique works of art.
              </p>
              <p>
                Dedicated to showcasing handcrafted art disciplines, Atelier Demo explores 26 traditional and experimental mediums: from detailed pencil portraits and continuous single-line spiral art to contour line drawings, watercolor washes, rich acrylics, lightfast colored pencil studies, and organic turmeric pigments.
              </p>
              <p>
                We also feature demonstration designs for ceremonial wedding essentials, multi-layer paper-cut sculptures, and real-time live event canvas concepts.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="mt-8 p-5 sm:p-6 rounded-lg bg-[#FFFFFF] dark:bg-[#15362C] border-l-4 border-l-[#BD805B] border border-[#DDD5C7] dark:border-[#265041] w-full shadow-2xs transition-colors duration-200">
              <h3 className="font-serif text-xl sm:text-2xl text-[#173D32] dark:text-[#FAF6EF] font-medium tracking-tight mb-2">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#243B32] dark:text-[#E8E2D8] font-light leading-relaxed">
                Our mission is to make art meaningful, personal, and accessible. Whether looking for an intimate portrait study, decorative architectural mural, or celebratory heirloom, we celebrate the human touch behind fine craft.
              </p>
            </div>

            {/* Section: Made with Passion, Created for You */}
            <div className="mt-8 w-full">
              <h3 className="font-serif text-xl sm:text-2xl text-[#173D32] dark:text-[#FAF6EF] font-medium tracking-tight mb-3">
                Crafted with Creativity
              </h3>
              <p className="text-sm sm:text-base text-[#243B32] dark:text-[#E8E2D8] font-light leading-relaxed">
                Every artwork begins with an idea and develops through patient discipline, high-grade materials, and refined technical execution.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-6 p-4 sm:p-5 rounded-lg bg-[#F4EFE6] dark:bg-[#112B22] border border-[#E5DDD0] dark:border-[#1E4236] w-full text-center transition-colors duration-200">
              <p className="font-serif text-base sm:text-lg text-[#173D32] dark:text-[#FAF6EF] font-medium">
                Your imagination. Our creativity. A piece of art made just for you.
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              <div className="p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#15362C] border border-[#DDD5C7] dark:border-[#265041] flex items-start gap-3 shadow-2xs transition-colors duration-200">
                <div className="w-8 h-8 rounded bg-[#F4EFE6] dark:bg-[#1E483C] flex items-center justify-center shrink-0 border border-[#E5DDD0] dark:border-[#2C5D4E] mt-0.5">
                  <Palette className="w-4 h-4 text-[#BD805B] dark:text-[#D4956F]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#173D32] dark:text-[#FAF6EF] block leading-tight">
                    Multi-Medium Portfolio
                  </span>
                  <p className="text-xs text-[#243B32] dark:text-[#E8E2D8] mt-1 font-light">
                    26 curated craft disciplines and specialized handmade art styles.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#15362C] border border-[#DDD5C7] dark:border-[#265041] flex items-start gap-3 shadow-2xs transition-colors duration-200">
                <div className="w-8 h-8 rounded bg-[#F4EFE6] dark:bg-[#1E483C] flex items-center justify-center shrink-0 border border-[#E5DDD0] dark:border-[#2C5D4E] mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#BD805B] dark:text-[#D4956F]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#173D32] dark:text-[#FAF6EF] block leading-tight">
                    Interactive Demonstration
                  </span>
                  <p className="text-xs text-[#243B32] dark:text-[#E8E2D8] mt-1 font-light">
                    Client-side commission form simulation with live category preselection.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
