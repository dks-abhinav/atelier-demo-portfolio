import React from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { GALLERY_ARTWORKS, GalleryArtwork } from '../data/businessData';

interface HeroProps {
  onExploreGallery: () => void;
  onOpenArtworkModal: (artwork: GalleryArtwork) => void;
  onOrderNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreGallery,
  onOpenArtworkModal,
  onOrderNow,
}) => {
  const featuredArtwork = GALLERY_ARTWORKS.find((art) => art.featured) || GALLERY_ARTWORKS[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#F5F0E6] dark:bg-[#10251F] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Brand Statement & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Curatorial Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF] border border-[#DDD5C7] dark:border-[#285546] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD805B] dark:bg-[#D4956F]" />
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#173D32] dark:text-[#C2D1BF]">
                HANDMADE ART · BESPOKE PORTRAITS · DEVOTIONAL RELIEF · CREATIVE GIFTS
              </span>
            </div>

            {/* Editorial Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#173D32] dark:text-[#FAF6EF] font-normal tracking-tight leading-[1.16] text-balance">
              Art That Turns Moments <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#BD805B] dark:text-[#D4956F]">Into Memories</span>
            </h1>

            {/* Archival Narrative - Generic Demonstration Copy */}
            <div className="mt-6 space-y-4 text-base sm:text-lg text-[#243B32] dark:text-[#E8E2D8] leading-relaxed max-w-2xl font-light">
              <p>
                Welcome to Atelier Demo. This website showcases a multi-medium creative studio specializing in expressive graphite portraits, continuous spiral line art, vibrant watercolour and acrylic paintings, textured relief studies, and handcrafted celebration keepsakes.
              </p>
              <p>
                Crafted with creativity, our pieces celebrate traditional artistic methods alongside modern graphic disciplines, demonstrating fine art techniques and bespoke craft concepts.
              </p>
              <p className="font-serif italic font-medium text-[#173D32] dark:text-[#FAF6EF] pt-1">
                Your Ideas. Our Art. Your Memories.
              </p>
            </div>

            {/* Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreGallery}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F0E6] bg-[#173D32] hover:bg-[#10251F] dark:bg-[#1E483C] dark:hover:bg-[#265B4C] dark:text-[#FAF6EF] active:scale-[0.98] transition-all rounded shadow-xs border border-[#173D32] dark:border-[#356B5A] cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B]"
              >
                <span>Explore Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOrderNow}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] bg-[#FFFFFF]/60 dark:bg-transparent hover:bg-[#173D32] hover:text-[#F5F0E6] dark:hover:bg-[#173D32] dark:hover:border-[#D4956F] active:scale-[0.98] transition-all rounded border-2 border-[#173D32] dark:border-[#A9B9A2] shadow-xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B]"
                aria-label="Start Commission Inquiry"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Simulate Commission Inquiry</span>
              </button>
            </div>

            {/* Archival Trust Markers */}
            <div className="mt-10 pt-6 border-t border-[#DDD5C7] dark:border-[#22483C] flex flex-wrap items-center gap-y-2 text-xs text-[#3E5248] dark:text-[#C2D1BF]">
              <div className="flex items-center gap-1.5 mr-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD805B] dark:bg-[#D4956F]" />
                <span>Fine Art Studio Showcase</span>
              </div>
              <div className="flex items-center gap-1.5 mr-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD805B] dark:bg-[#D4956F]" />
                <span>Interactive Commission Form</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD805B] dark:bg-[#D4956F]" />
                <span>Client-Side Demonstration Mode</span>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Masterwork Museum Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#FFFFFF] dark:bg-[#16382E] p-4 sm:p-5 rounded-lg border border-[#DDD5C7] dark:border-[#285546] shadow-[0_4px_24px_rgba(23,61,50,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-lg transition-all">
              
              {/* Matboard Inset */}
              <div className="bg-[#F4EFE6] dark:bg-[#0E231C] p-3 sm:p-4 rounded border border-[#E5DDD0] dark:border-[#1E4236]">
                <div 
                  className="relative aspect-[4/5] overflow-hidden rounded cursor-pointer group bg-[#E3DBD0] dark:bg-[#091813] flex items-center justify-center p-1.5"
                  onClick={() => onOpenArtworkModal(featuredArtwork)}
                >
                  <img
                    src={featuredArtwork.image}
                    alt={featuredArtwork.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/studio/atelier_studio_view.svg';
                    }}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 bg-[#F5F0E6]/95 dark:bg-[#0D201A]/95 backdrop-blur-sm rounded text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] shadow-md border border-[#DDD5C7] dark:border-[#285546]">
                      Inspect Artwork
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Accession Metadata */}
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#173D32] dark:text-[#FAF6EF]">
                    {featuredArtwork.title}
                  </h3>
                  <p className="text-xs text-[#4D6358] dark:text-[#C2D1BF] mt-0.5">
                    {featuredArtwork.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#BD805B] dark:text-[#D4956F]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{featuredArtwork.categoryLabel}</span>
                </div>
              </div>

              {/* Quick Commission Button */}
              <div className="mt-4 pt-3 border-t border-[#DDD5C7] dark:border-[#285546] flex items-center justify-between text-xs">
                <span className="text-[#5E7268] dark:text-[#A9B9A2] font-mono">{featuredArtwork.refCode}</span>
                <button
                  onClick={onOrderNow}
                  className="text-[#173D32] dark:text-[#FAF6EF] hover:text-[#BD805B] dark:hover:text-[#D4956F] font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Commission Similar Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
