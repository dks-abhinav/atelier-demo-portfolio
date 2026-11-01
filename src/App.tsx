/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesShowcase } from './components/ServicesShowcase';
import { GallerySection } from './components/GallerySection';
import { HowOrderingWorks } from './components/HowOrderingWorks';
import { ClientFeedback } from './components/ClientFeedback';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';
import { GalleryArtwork, ServiceItem, GALLERY_ARTWORKS } from './data/businessData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedArtworkForModal, setSelectedArtworkForModal] = useState<GalleryArtwork | null>(null);
  const [preselectedArtworkForOrder, setPreselectedArtworkForOrder] = useState<GalleryArtwork | null>(null);
  const [preselectedServiceForOrder, setPreselectedServiceForOrder] = useState<ServiceItem | null>(null);

  // Handle navigation tab changes
  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When user clicks "Enquire" on an artwork
  const handleEnquireArtwork = (artwork: GalleryArtwork) => {
    setPreselectedArtworkForOrder(artwork);
    setPreselectedServiceForOrder(null);
    setActiveTab('custom-orders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When user selects a service for order
  const handleSelectServiceForOrder = (service: ServiceItem) => {
    setPreselectedServiceForOrder(service);
    setPreselectedArtworkForOrder(null);
    setActiveTab('custom-orders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearPreselection = () => {
    setPreselectedArtworkForOrder(null);
    setPreselectedServiceForOrder(null);
  };

  const handleNextArtwork = () => {
    if (!selectedArtworkForModal) return;
    const idx = GALLERY_ARTWORKS.findIndex((a) => a.id === selectedArtworkForModal.id);
    if (idx !== -1) {
      const nextIdx = (idx + 1) % GALLERY_ARTWORKS.length;
      setSelectedArtworkForModal(GALLERY_ARTWORKS[nextIdx]);
    }
  };

  const handlePrevArtwork = () => {
    if (!selectedArtworkForModal) return;
    const idx = GALLERY_ARTWORKS.findIndex((a) => a.id === selectedArtworkForModal.id);
    if (idx !== -1) {
      const prevIdx = (idx - 1 + GALLERY_ARTWORKS.length) % GALLERY_ARTWORKS.length;
      setSelectedArtworkForModal(GALLERY_ARTWORKS[prevIdx]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] dark:bg-[#10251F] text-[#173D32] dark:text-[#F5F0E6] transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* HOME VIEW: Full Atelier Presentation */}
        {activeTab === 'home' && (
          <>
            <Hero
              onExploreGallery={() => {
                const el = document.getElementById('gallery-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('gallery');
              }}
              onOpenArtworkModal={(artwork) => setSelectedArtworkForModal(artwork)}
              onOrderNow={() => {
                const el = document.getElementById('contact-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('custom-orders');
              }}
            />

            <ServicesShowcase
              onSelectServiceForOrder={handleSelectServiceForOrder}
            />

            <GallerySection
              onOpenArtworkModal={(artwork) => setSelectedArtworkForModal(artwork)}
              onEnquireArtwork={handleEnquireArtwork}
            />

            <HowOrderingWorks />

            <ClientFeedback />

            <AboutSection />

            <ContactSection
              preselectedArtwork={preselectedArtworkForOrder}
              preselectedService={preselectedServiceForOrder}
              onClearPreselection={handleClearPreselection}
            />
          </>
        )}

        {/* ART GALLERY VIEW */}
        {activeTab === 'gallery' && (
          <div className="pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#BD805B] dark:text-[#D4956F] font-semibold block mb-2">
                Curated Atelier Archive
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] dark:text-[#F5F0E6] font-normal tracking-tight">
                Art Gallery & Medium Folios
              </h1>
              <p className="text-sm sm:text-base text-[#576960] dark:text-[#A9B9A2] font-light mt-2 max-w-2xl leading-relaxed">
                Browse our complete collection of commissioned graphite studies, charcoal chiaroscuro, natural turmeric pigments, single-spiral line art, and 3D devotional sanctum pieces.
              </p>
            </div>

            <GallerySection
              onOpenArtworkModal={(artwork) => setSelectedArtworkForModal(artwork)}
              onEnquireArtwork={handleEnquireArtwork}
            />

            <HowOrderingWorks />
          </div>
        )}

        {/* ART & SERVICES VIEW */}
        {activeTab === 'services' && (
          <div className="pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#BD805B] dark:text-[#D4956F] font-semibold block mb-2">
                Studio Capabilities
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] dark:text-[#F5F0E6] font-normal tracking-tight">
                Art & Services Catalog
              </h1>
              <p className="text-sm sm:text-base text-[#576960] dark:text-[#A9B9A2] font-light mt-2 max-w-2xl leading-relaxed">
                From intimate heirloom pencil drawings on 300 GSM cotton rag to real-time wedding live canvas paintings and custom mugs, explore each discipline with full specs.
              </p>
            </div>

            <ServicesShowcase
              onSelectServiceForOrder={handleSelectServiceForOrder}
            />

            <HowOrderingWorks />
          </div>
        )}

        {/* CUSTOM ORDERS VIEW */}
        {activeTab === 'custom-orders' && (
          <div className="pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs uppercase tracking-[0.2em] text-[#BD805B] dark:text-[#D4956F] font-semibold block mb-2">
                  Bespoke Commission Desk
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] dark:text-[#F5F0E6] font-normal tracking-tight">
                  Start Your Custom Order
                </h1>
                <p className="mt-2 text-sm sm:text-base text-[#576960] dark:text-[#A9B9A2] font-light leading-relaxed">
                  Submit your details below to simulate generating a formatted commission brief and specification summary.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <ContactSection
                  preselectedArtwork={preselectedArtworkForOrder}
                  preselectedService={preselectedServiceForOrder}
                  onClearPreselection={handleClearPreselection}
                />
              </div>
            </div>
          </div>
        )}

        {/* ABOUT VIEW */}
        {activeTab === 'about' && (
          <div className="pt-6">
            <AboutSection />
            <ClientFeedback />
          </div>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="pt-6">
            <ContactSection
              preselectedArtwork={preselectedArtworkForOrder}
              preselectedService={preselectedServiceForOrder}
              onClearPreselection={handleClearPreselection}
            />
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        artwork={selectedArtworkForModal}
        onClose={() => setSelectedArtworkForModal(null)}
        onCommissionSimilar={handleEnquireArtwork}
        onNext={handleNextArtwork}
        onPrev={handlePrevArtwork}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
