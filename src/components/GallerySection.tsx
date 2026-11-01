import React, { useState, useMemo } from 'react';
import { 
  GALLERY_ARTWORKS, 
  GalleryArtwork, 
  SERVICES_LIST 
} from '../data/businessData';
import { ZoomIn, MessageSquare } from 'lucide-react';

interface GallerySectionProps {
  onOpenArtworkModal: (artwork: GalleryArtwork) => void;
  onEnquireArtwork: (artwork: GalleryArtwork) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenArtworkModal,
  onEnquireArtwork,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'turmeric', label: 'Turmeric Art' },
    { id: 'livepainting', label: 'Live Painting' },
    { id: 'wallpainting', label: 'Wall Painting' },
    { id: 'marriageessentials', label: 'Marriage Essentials' },
    { id: 'colourpencil', label: 'Colour Pencil Art' },
    { id: 'pencilminiature', label: 'Pencil Miniature Art' },
    { id: 'pencil', label: 'Pencil Art' },
    { id: 'blood', label: 'Blood Art' },
    { id: 'watercolour', label: 'Watercolour Painting' },
    { id: 'acrylic', label: 'Acrylic Painting' },
    { id: 'lineart', label: 'Line Art' },
    { id: 'spiral', label: 'Spiral Art' },
    { id: 'papercut', label: 'Paper-Cut Art' },
    { id: 'bloodbangles', label: 'Blood Bangles' },
    { id: 'threadart', label: 'Thread Art' },
    { id: 'devotional', label: 'Devotional Artwork' },
  ];

  const selectedCategoryService = useMemo(() => {
    if (selectedFilter === 'livepainting') {
      return SERVICES_LIST.find((s) => s.id === 'live-painting');
    }
    if (selectedFilter === 'wallpainting') {
      return SERVICES_LIST.find((s) => s.id === 'wall-painting');
    }
    if (selectedFilter === 'marriageessentials') {
      return SERVICES_LIST.find((s) => s.id === 'marriage-essentials');
    }
    if (selectedFilter === 'colourpencil') {
      return SERVICES_LIST.find((s) => s.id === 'colour-pencil-art');
    }
    if (selectedFilter === 'pencilminiature') {
      return SERVICES_LIST.find((s) => s.id === 'pencil-miniature-art');
    }
    if (selectedFilter === 'pencil') {
      return SERVICES_LIST.find((s) => s.id === 'pencil-art');
    }
    if (selectedFilter === 'blood') {
      return SERVICES_LIST.find((s) => s.id === 'blood-art');
    }
    if (selectedFilter === 'watercolour') {
      return SERVICES_LIST.find((s) => s.id === 'watercolour-painting');
    }
    if (selectedFilter === 'acrylic') {
      return SERVICES_LIST.find((s) => s.id === 'acrylic-painting');
    }
    if (selectedFilter === 'lineart') {
      return SERVICES_LIST.find((s) => s.id === 'line-art');
    }
    if (selectedFilter === 'spiral') {
      return SERVICES_LIST.find((s) => s.id === 'spiral-art');
    }
    if (selectedFilter === 'papercut') {
      return SERVICES_LIST.find((s) => s.id === 'paper-cut-art');
    }
    if (selectedFilter === 'bloodbangles') {
      return SERVICES_LIST.find((s) => s.id === 'blood-bangles');
    }
    if (selectedFilter === 'threadart') {
      return SERVICES_LIST.find((s) => s.id === 'thread-art');
    }
    if (selectedFilter === 'turmeric') {
      return SERVICES_LIST.find((s) => s.id === 'turmeric-art');
    }
    if (selectedFilter === 'devotional') {
      return SERVICES_LIST.find((s) => s.id === 'acrylic-painting');
    }
    return null;
  }, [selectedFilter]);

  const filteredArtworks = useMemo(() => {
    if (selectedFilter === 'all') {
      return GALLERY_ARTWORKS;
    }
    return GALLERY_ARTWORKS.filter((art) => art.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="gallery-section" className="py-12 sm:py-16 lg:py-20 bg-[#F5F0E6] dark:bg-[#10251F] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#BD805B] dark:text-[#D4956F] block mb-1.5">
              Gallery Preview
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#173D32] dark:text-[#FAF6EF] font-normal tracking-tight">
              Handcrafted Showcase
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-[#3E5248] dark:text-[#C2D1BF] font-light max-w-xl">
              Filter across traditional mediums, experimental techniques, and bespoke creative studies.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#173D32] dark:text-[#FAF6EF] bg-[#FFFFFF] dark:bg-[#16382E] px-3.5 py-1.5 rounded border border-[#DDD5C7] dark:border-[#285546] self-start sm:self-auto shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#BD805B] dark:bg-[#D4956F]" />
            <span>Showing {filteredArtworks.length} Masterworks</span>
          </div>
        </div>

        {/* Functional Filter Tabs Bar */}
        <div className="w-full overflow-hidden mb-6">
          <div 
            className="flex items-center gap-2 overflow-x-auto pb-2.5 max-w-full no-scrollbar focus-visible:outline-hidden overscroll-x-contain touch-pan-x" 
            role="tablist" 
            aria-label="Artwork categories"
          >
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`shrink-0 px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer border focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B] ${
                    isActive
                      ? 'bg-[#173D32] dark:bg-[#1E483C] text-[#F5F0E6] dark:text-[#FAF6EF] border-[#173D32] dark:border-[#356B5A] shadow-xs'
                      : 'bg-[#FFFFFF] dark:bg-[#15362C] text-[#243B32] dark:text-[#C2D1BF] hover:bg-[#F4EFE6] dark:hover:bg-[#1A3F33] hover:text-[#173D32] dark:hover:text-[#FAF6EF] border-[#DDD5C7] dark:border-[#265041]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Curated Category Description Banner */}
        {selectedCategoryService && (
          <div className="mb-6 p-4 sm:p-5 rounded-lg bg-[#FAF6EE] dark:bg-[#133027] border border-[#DDD5C7] dark:border-[#285546] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-1.5">
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#BD805B] dark:text-[#D4956F]">
                  {selectedCategoryService.title} — Demonstration Folio
                </span>
                <span className="text-xs font-mono text-[#5E7268] dark:text-[#A9B9A2]">
                  Medium: {selectedCategoryService.medium}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#243B32] dark:text-[#E8E2D8] font-light leading-relaxed max-w-4xl">
                {selectedCategoryService.description}
              </p>
            </div>
            {filteredArtworks.length > 0 && (
              <button
                onClick={() => onEnquireArtwork(filteredArtworks[0])}
                className="shrink-0 px-4 py-2.5 rounded bg-[#173D32] hover:bg-[#10251F] dark:bg-[#1E483C] dark:hover:bg-[#265B4C] text-[#F5F0E6] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer border border-[#173D32] dark:border-[#356B5A]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Simulate Commission Inquiry</span>
              </button>
            )}
          </div>
        )}

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <article
              key={artwork.id}
              className="bg-[#FFFFFF] dark:bg-[#16382E] rounded-lg border border-[#DDD5C7] dark:border-[#285546] shadow-[0_2px_12px_rgba(23,61,50,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:shadow-lg transition-all flex flex-col justify-between p-4 group"
            >
              <div>
                {/* Matboard Framing */}
                <div className="bg-[#F4EFE6] dark:bg-[#0E231C] p-3 rounded border border-[#E5DDD0] dark:border-[#1E4236]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded bg-[#E3DBD0] dark:bg-[#091813] flex items-center justify-center p-1">
                    <img
                      src={artwork.image}
                      alt={`${artwork.title} - ${artwork.description}`}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/studio/atelier_studio_view.svg';
                      }}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                    />

                    {/* Top Accession Tag */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-[#FFFFFF]/95 dark:bg-[#0D201A]/95 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-[#BD805B] dark:text-[#D4956F] border border-[#DDD5C7] dark:border-[#285546] shadow-2xs">
                      {artwork.categoryLabel}
                    </div>

                    {/* Quick Inspect Button */}
                    <button
                      onClick={() => onOpenArtworkModal(artwork)}
                      className="absolute bottom-2.5 right-2.5 px-3 py-1.5 rounded bg-[#173D32]/90 hover:bg-[#173D32] dark:bg-[#0D201A]/90 dark:hover:bg-[#0D201A] text-[#F5F0E6] text-[11px] font-medium tracking-wide flex items-center gap-1.5 backdrop-blur-xs shadow-sm transition-transform active:scale-95 cursor-pointer border border-[#DDD5C7]/20"
                      aria-label={`Inspect ${artwork.title}`}
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>

                {/* Content Meta */}
                <div className="pt-4 px-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="uppercase tracking-wider font-semibold text-[#BD805B] dark:text-[#D4956F]">
                      {artwork.medium}
                    </span>
                    <span className="font-mono text-[11px] text-[#5E7268] dark:text-[#A9B9A2]">{artwork.refCode}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#173D32] dark:text-[#FAF6EF] mt-1.5">
                    {artwork.title}
                  </h3>

                  <p className="text-xs text-[#243B32] dark:text-[#E8E2D8] mt-1.5 leading-relaxed line-clamp-3 font-light">
                    {artwork.description}
                  </p>

                  {/* Spec Metadata */}
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-[11px] text-[#5E7268] dark:text-[#A9B9A2]">
                    <span>{artwork.size}</span>
                    <span aria-hidden="true">·</span>
                    <span>{artwork.specs[0] || 'Handcrafted archival piece'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-[#DDD5C7] dark:border-[#285546] flex items-center gap-2">
                <button
                  onClick={() => onEnquireArtwork(artwork)}
                  className="flex-1 py-2.5 px-3 rounded bg-transparent hover:bg-[#173D32] hover:text-[#F5F0E6] text-[#173D32] dark:text-[#FAF6EF] dark:hover:bg-[#1E483C] text-xs font-semibold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 border border-[#173D32] dark:border-[#A9B9A2]/60 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Simulate Commission Inquiry</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
