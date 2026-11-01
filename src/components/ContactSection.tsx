import React from 'react';
import { 
  Palette, 
  MapPin, 
  Clock, 
  Info,
  ShieldCheck 
} from 'lucide-react';
import { CustomCommissionForm } from './CustomCommissionForm';
import { GalleryArtwork, ServiceItem } from '../data/businessData';

interface ContactSectionProps {
  preselectedArtwork?: GalleryArtwork | null;
  preselectedService?: ServiceItem | null;
  onClearPreselection?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedArtwork,
  preselectedService,
  onClearPreselection,
}) => {
  return (
    <section id="contact-section" className="py-12 sm:py-16 lg:py-20 bg-[#F5F0E6] dark:bg-[#10251F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#BD805B] dark:text-[#D4956F] block mb-1.5">
            Demonstration Desk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#173D32] dark:text-[#FAF6EF] font-normal tracking-tight">
            Commission Inquiry &amp; Studio Desk
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#3E5248] dark:text-[#C2D1BF] font-light">
            Interactive demonstration interface. All commission parameters and formatted summaries are processed locally in your browser.
          </p>
        </div>

        {/* 2-Column Split: Info Cards on Left, Commission Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Studio Information Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Online Studio Desk Card */}
            <div className="bg-[#FFFFFF] dark:bg-[#16382E] rounded-lg p-5 border border-[#DDD5C7] dark:border-[#285546] shadow-[0_2px_12px_rgba(23,61,50,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-colors duration-200">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded bg-[#BD805B]/15 dark:bg-[#BD805B]/20 flex items-center justify-center shrink-0">
                  <Palette className="w-5 h-5 text-[#BD805B] dark:text-[#D4956F]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] block">
                    Online Studio Desk
                  </span>
                  <p className="font-serif text-lg font-medium text-[#173D32] dark:text-[#FAF6EF] mt-0.5">
                    Demonstration Mode
                  </p>
                  <p className="text-xs text-[#4D6358] dark:text-[#C2D1BF] mt-1 font-light leading-relaxed">
                    External phone calls and messaging links are disabled in this portfolio build.
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Address Card */}
            <div className="bg-[#FFFFFF] dark:bg-[#16382E] rounded-lg p-5 border border-[#DDD5C7] dark:border-[#285546] shadow-[0_2px_12px_rgba(23,61,50,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-colors duration-200">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded bg-[#F4EFE6] dark:bg-[#1E483C] flex items-center justify-center shrink-0 border border-[#E5DDD0] dark:border-[#2C5D4E]">
                  <MapPin className="w-5 h-5 text-[#173D32] dark:text-[#FAF6EF]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] block">
                    Studio Location
                  </span>
                  <p className="text-xs sm:text-sm text-[#243B32] dark:text-[#E8E2D8] mt-1 leading-relaxed font-light">
                    Online Creative Atelier (Portfolio Demonstration — No physical storefront).
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#FFFFFF] dark:bg-[#16382E] rounded-lg p-5 border border-[#DDD5C7] dark:border-[#285546] shadow-[0_2px_12px_rgba(23,61,50,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-colors duration-200">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded bg-[#F4EFE6] dark:bg-[#1E483C] flex items-center justify-center shrink-0 border border-[#E5DDD0] dark:border-[#2C5D4E]">
                  <Clock className="w-5 h-5 text-[#173D32] dark:text-[#FAF6EF]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] block">
                    Showcase Availability
                  </span>

                  <div className="mt-2 text-xs space-y-1.5 font-light">
                    <div className="flex justify-between py-0.5 border-b border-[#DDD5C7]/60 dark:border-[#285546]/60">
                      <span className="text-[#4D6358] dark:text-[#A9B9A2]">Online Showcase:</span>
                      <span className="font-mono text-[#243B32] dark:text-[#FAF6EF]">Accessible 24/7</span>
                    </div>
                    <div className="flex justify-between py-0.5 text-[#BD805B] dark:text-[#D4956F] font-medium">
                      <span>Status:</span>
                      <span className="uppercase tracking-wider">Demonstration Mode</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Security Disclosure */}
            <div className="p-3.5 rounded bg-[#F3EFE7] dark:bg-[#1E463A]/70 border border-[#DDD5C7] dark:border-[#274C3F] flex items-start gap-2.5 text-[11px] text-[#45574F] dark:text-[#C7D4C3] transition-colors duration-200">
              <ShieldCheck className="w-4 h-4 text-[#BD805B] shrink-0 mt-0.5" />
              <p>
                <strong>Privacy Disclosure:</strong> This project is a portfolio demonstration. No personal data, telephone numbers, or uploaded images are transmitted or saved.
              </p>
            </div>

          </div>

          {/* Right Column: Custom Commission Form */}
          <div className="lg:col-span-7">
            <CustomCommissionForm
              preselectedArtwork={preselectedArtwork}
              preselectedService={preselectedService}
              onClearPreselection={onClearPreselection}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
