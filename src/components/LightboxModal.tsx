import React, { useEffect } from 'react';
import { GalleryArtwork } from '../data/businessData';
import { X, ArrowRight, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface LightboxModalProps {
  artwork: GalleryArtwork | null;
  onClose: () => void;
  onCommissionSimilar: (artwork: GalleryArtwork) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  artwork,
  onClose,
  onCommissionSimilar,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!artwork) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#F5F0E6] dark:bg-[#10251F] rounded-xl overflow-hidden shadow-2xl border border-[#DDD5C7] dark:border-[#274C3F] flex flex-col md:flex-row max-h-[90vh] transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#173D32]/80 hover:bg-[#173D32] dark:bg-[#10251F]/90 dark:hover:bg-[#10251F] text-white dark:text-[#F5F0E6] flex items-center justify-center transition-colors shadow-md cursor-pointer border border-[#DDD5C7]/20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Museum Matboard Image Viewer */}
        <div className="w-full md:w-3/5 bg-[#F4EFE6] dark:bg-[#0E231C] p-6 sm:p-8 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#DDD5C7] dark:border-[#285546] relative">
          {/* Previous Artwork Button */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-3 z-10 w-9 h-9 rounded-full bg-[#173D32]/80 hover:bg-[#173D32] dark:bg-[#10251F]/90 dark:hover:bg-[#10251F] text-white dark:text-[#F5F0E6] flex items-center justify-center transition-colors shadow-md cursor-pointer border border-[#DDD5C7]/20"
              aria-label="Previous artwork"
              title="Previous artwork (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Artwork Button */}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-2 sm:right-3 z-10 w-9 h-9 rounded-full bg-[#173D32]/80 hover:bg-[#173D32] dark:bg-[#10251F]/90 dark:hover:bg-[#10251F] text-white dark:text-[#F5F0E6] flex items-center justify-center transition-colors shadow-md cursor-pointer border border-[#DDD5C7]/20"
              aria-label="Next artwork"
              title="Next artwork (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          <div className="bg-[#FFFFFF] dark:bg-[#16382E] p-3 sm:p-4 rounded shadow-md border border-[#DDD5C7] dark:border-[#285546] max-w-full flex items-center justify-center">
            <img
              src={artwork.image}
              alt={`${artwork.title} - ${artwork.description}`}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/studio/atelier_studio_view.svg';
              }}
              className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain rounded"
            />
          </div>
        </div>

        {/* Right Side: Accession Curatorial Details */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#FFFFFF] dark:bg-[#16382E] transition-colors duration-200">
          <div>
            <div className="flex items-center justify-between text-xs text-[#5E7268] dark:text-[#A9B9A2]">
              <span className="uppercase tracking-widest font-semibold text-[#BD805B] dark:text-[#D4956F]">
                {artwork.categoryLabel}
              </span>
              <span className="font-mono">{artwork.refCode}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#173D32] dark:text-[#FAF6EF] font-normal mt-2">
              {artwork.title}
            </h3>

            <p className="text-xs uppercase tracking-wider text-[#BD805B] dark:text-[#D4956F] font-semibold mt-1">
              {artwork.medium}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#243B32] dark:text-[#E8E2D8] font-light leading-relaxed">
              {artwork.description}
            </p>

            {/* Archival Log & Specs */}
            <div className="mt-6 pt-4 border-t border-[#DDD5C7]/70 dark:border-[#285546]">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#BD805B] dark:text-[#D4956F] block mb-2">
                Atelier Specifications
              </span>
              <ul className="space-y-1.5 text-xs text-[#173D32] dark:text-[#FAF6EF]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BD805B] dark:bg-[#D4956F]" />
                  <span><strong>Dimensions:</strong> {artwork.size}</span>
                </li>
                {artwork.specs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BD805B] dark:bg-[#D4956F]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-4 border-t border-[#DDD5C7]/70 dark:border-[#285546] space-y-2.5">
            <button
              onClick={() => {
                onCommissionSimilar(artwork);
                onClose();
              }}
              className="w-full py-3 px-4 rounded bg-[#173D32] hover:bg-[#10251F] dark:bg-[#1E483C] dark:hover:bg-[#265B4C] text-[#FAF6EF] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer border border-[#173D32] dark:border-[#356B5A]"
            >
              <span>Simulate Commission Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="p-2 rounded bg-[#FAF6EE] dark:bg-[#0E231C] border border-[#DDD5C7]/60 dark:border-[#285546] text-center text-[11px] text-[#5E7268] dark:text-[#A9B9A2]">
              Demonstration Mode · Inquiry form preselection active
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
