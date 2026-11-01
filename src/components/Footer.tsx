import React from 'react';
import { Palette, Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#E8DFD3] dark:bg-[#081511] border-t border-[#D5CABB] dark:border-[#1A382E] pt-16 pb-12 text-[#3B5247] dark:text-[#A9B9A2] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#D5CABB]/80 dark:border-[#1A382E]">
          
          {/* Column 1: Studio Wordmark & Mission */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-[#173D32] dark:text-[#FAF6EF] tracking-tight">
                Atelier Demo
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#BD805B] dark:text-[#D4956F] font-semibold -mt-0.5">
                CRAFTED WITH CREATIVITY
              </span>
            </div>

            <p className="text-xs text-[#3B5247] dark:text-[#C2D1BF] leading-relaxed font-normal">
              A demonstration website showcasing handmade artwork, multi-medium fine art studies, and custom creative project workflows.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#173D32] dark:text-[#FAF6EF]">
              <ShieldCheck className="w-4 h-4 text-[#BD805B] dark:text-[#D4956F]" />
              <span className="text-[11px] font-medium">Generic Portfolio Demonstration</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#173D32] dark:text-[#FAF6EF] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors cursor-pointer"
                >
                  Art Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors cursor-pointer"
                >
                  Art &amp; Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-orders')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors cursor-pointer"
                >
                  Custom Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors cursor-pointer"
                >
                  About Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors cursor-pointer"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Mediums & Offerings */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#173D32] dark:text-[#FAF6EF] mb-4">
              Mediums &amp; Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors text-left cursor-pointer"
                >
                  Pencil &amp; Colour-Pencil Drawings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors text-left cursor-pointer"
                >
                  Single-Spiral &amp; Contour Line Art
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors text-left cursor-pointer"
                >
                  Textured 3D Devotional Relief
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors text-left cursor-pointer"
                >
                  Natural Turmeric Pigments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#173D32] dark:hover:text-[#FAF6EF] transition-colors text-left cursor-pointer"
                >
                  Live Painting &amp; Celebration Keepsakes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Demonstration Info */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#173D32] dark:text-[#FAF6EF] mb-4">
              Portfolio Desk
            </h4>
            
            <div className="flex items-start gap-2 text-xs">
              <Palette className="w-3.5 h-3.5 text-[#BD805B] dark:text-[#D4956F] shrink-0 mt-0.5" />
              <p className="leading-relaxed text-[11px]">
                Online Creative Studio Showcase (Demonstration Only)
              </p>
            </div>

            <div className="flex items-start gap-2 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#BD805B] dark:text-[#D4956F] shrink-0 mt-0.5" />
              <p className="leading-relaxed text-[11px]">
                Interactive commission simulation running locally in the browser
              </p>
            </div>

            <div className="p-2.5 rounded bg-[#FAF6EE] dark:bg-[#122A22] border border-[#D5CABB] dark:border-[#204739] text-[10.5px] leading-relaxed">
              <span>All customer data, private photographs, and business numbers have been sanitized.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#4D6358] dark:text-[#A9B9A2]">
          <p>© {new Date().getFullYear()} Atelier Demo. Created as an open-source demonstration portfolio.</p>
          <div className="flex items-center gap-3">
            <span>Client-side demonstration mode</span>
            <span>·</span>
            <span>Zero external data transmission</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
