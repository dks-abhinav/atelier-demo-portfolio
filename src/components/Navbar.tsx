import React, { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Art Gallery' },
    { id: 'services', label: 'Art & Services' },
    { id: 'custom-orders', label: 'Custom Orders' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleCommissionClick = () => {
    onNavigate('custom-orders');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5F0E6]/95 dark:bg-[#0D201A]/98 backdrop-blur-md border-b border-[#DDD5C7] dark:border-[#22483C] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[68px] sm:min-h-[74px] py-1.5 sm:py-2 gap-2 sm:gap-4 lg:gap-4 xl:gap-8">
          
          {/* Zone 1: Brand Logo Reference Panel */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B] rounded-lg cursor-pointer shrink-0 transition-transform active:scale-[0.99]"
            aria-label="Atelier Demo - Crafted with Creativity"
          >
            <div className="bg-[#FAF6EF] border border-[#DDD5C7] dark:border-[#BD805B]/40 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-xs group-hover:border-[#BD805B] transition-colors flex flex-col items-center text-center max-w-[190px] xs:max-w-[210px] sm:max-w-[230px]">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#173D32] leading-none">
                Atelier Demo
              </span>

              <div className="w-full h-[1px] bg-[#BD805B]/60 my-0.5 sm:my-1" />

              <span className="text-[7px] xs:text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.14em] font-bold text-[#BD805B] leading-tight whitespace-nowrap">
                CRAFTED WITH CREATIVITY
              </span>

              <span className="text-[6.5px] xs:text-[7px] sm:text-[8px] italic font-serif text-[#4B5E70] leading-tight mt-0.5 text-center">
                Handmade Artwork &amp; Creative Projects
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-6 shrink" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#BD805B] rounded-xs ${
                    isActive 
                      ? 'text-[#173D32] dark:text-[#FAF6EF] font-semibold' 
                      : 'text-[#3B5247] dark:text-[#A9B9A2] hover:text-[#173D32] dark:hover:text-[#FAF6EF]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BD805B] dark:bg-[#D4956F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Theme Toggle + Commission CTA) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <ThemeToggle />

            <button
              onClick={handleCommissionClick}
              className="inline-flex items-center gap-1.5 xl:gap-2 px-3 py-1.5 xl:px-4 xl:py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#F5F0E6] bg-[#173D32] hover:bg-[#10251F] dark:bg-[#1E483C] dark:hover:bg-[#265B4C] active:scale-[0.98] transition-all rounded shadow-xs border border-[#173D32] dark:border-[#2E5E50] cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B] whitespace-nowrap"
              aria-label="Start Commission Inquiry"
            >
              <MessageSquare className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
              <span>Simulate Order</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeToggle compact />
            
            <button
              onClick={handleCommissionClick}
              className="p-2 text-[#173D32] dark:text-[#FAF6EF] hover:bg-[#EFE9DF] dark:hover:bg-[#173D32] rounded transition-colors cursor-pointer flex items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B]"
              aria-label="Simulate Commission Order"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#173D32] dark:text-[#FAF6EF] hover:bg-[#EFE9DF] dark:hover:bg-[#173D32] rounded transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BD805B] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DDD5C7] dark:border-[#274C3F] bg-[#F5F0E6] dark:bg-[#0D201A] px-4 pt-3 pb-6 space-y-1 shadow-lg transition-colors">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3.5 py-3 rounded text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#EFE9DF] dark:bg-[#173D32] text-[#173D32] dark:text-[#F5F0E6] font-semibold'
                    : 'text-[#45574F] dark:text-[#A9B9A2] hover:bg-[#ECE4D6] dark:hover:bg-[#173D32]/60'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#BD805B]" />}
              </button>
            );
          })}
          
          <div className="pt-4 border-t border-[#DDD5C7] dark:border-[#274C3F] mt-3">
            <button
              onClick={handleCommissionClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#173D32] dark:bg-[#1E463A] text-[#F5F0E6] text-xs uppercase tracking-wider font-semibold shadow-xs cursor-pointer transition-colors border border-[#173D32] dark:border-[#2D5E50]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Simulate Commission Order</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
