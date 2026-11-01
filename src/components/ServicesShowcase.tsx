import React, { useState, useMemo } from 'react';
import { 
  SERVICES_LIST, 
  ServiceItem 
} from '../data/businessData';
import { 
  PenTool, 
  Palette, 
  Droplet, 
  Compass, 
  Sparkles, 
  Flower2, 
  Scissors, 
  Brush, 
  Coffee, 
  Gift,
  ArrowUpRight,
  Disc,
  Heart,
  Layers,
  Image as ImageIcon,
  Square,
  Maximize2,
  Layout,
  Video,
  Circle,
  Repeat,
  Shirt,
  Feather,
  BookOpen,
  Baby,
  Search,
  X
} from 'lucide-react';

interface ServicesShowcaseProps {
  onSelectServiceForOrder: (service: ServiceItem) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectServiceForOrder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getServiceIcon = (id: string) => {
    const iconClass = "w-5 h-5 text-[#173D32] dark:text-[#F5F0E6]";
    switch (id) {
      case 'pencil-art':
        return <PenTool className={iconClass} />;
      case 'blood-art':
        return <Droplet className={iconClass} />;
      case 'watercolour-painting':
        return <Brush className={iconClass} />;
      case 'acrylic-painting':
        return <Palette className={iconClass} />;
      case 'line-art':
        return <Compass className={iconClass} />;
      case 'spiral-art':
        return <Disc className={iconClass} />;
      case 'paper-cut-art':
        return <Scissors className={iconClass} />;
      case 'resin-art':
        return <Sparkles className={iconClass} />;
      case 'blood-bangles':
        return <Heart className={iconClass} />;
      case 'thread-art':
        return <Layers className={iconClass} />;
      case 'mug-printing':
        return <Coffee className={iconClass} />;
      case 'photo-printing':
        return <ImageIcon className={iconClass} />;
      case 'pillow-printing':
        return <Square className={iconClass} />;
      case 'pencil-miniature-art':
        return <Maximize2 className={iconClass} />;
      case 'marriage-essentials':
        return <Gift className={iconClass} />;
      case 'wall-painting':
        return <Layout className={iconClass} />;
      case 'turmeric-art':
        return <Flower2 className={iconClass} />;
      case 'live-painting':
        return <Video className={iconClass} />;
      case 'resin-bangles':
        return <Circle className={iconClass} />;
      case 'thread-bangles':
        return <Repeat className={iconClass} />;
      case 'blouse-painting':
        return <Shirt className={iconClass} />;
      case 'saree-painting':
        return <Feather className={iconClass} />;
      case 'colour-pencil-art':
        return <Palette className={iconClass} />;
      case 'shirt-painting':
        return <Shirt className={iconClass} />;
      case 'vidyarambham-ceremony':
        return <BookOpen className={iconClass} />;
      case 'baby-shower':
        return <Baby className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) {
      return SERVICES_LIST;
    }
    const q = searchQuery.toLowerCase().trim();
    return SERVICES_LIST.filter(s => 
      s.title.toLowerCase().includes(q) || 
      s.description.toLowerCase().includes(q) || 
      s.medium.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <section id="services-section" className="py-12 sm:py-16 lg:py-20 bg-[#E8EFE6] dark:bg-[#0B1B16] border-t border-b border-[#D2DDD0] dark:border-[#1C3A2F] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-5">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#BD805B] dark:text-[#D4956F] block mb-1.5">
              Portfolio Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#173D32] dark:text-[#FAF6EF] font-normal tracking-tight">
              Art &amp; Services Portfolio
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#3E5248] dark:text-[#C2D1BF] font-light">
              Explore 26 handcrafted art disciplines, specialized custom mediums, and creative project concepts.
            </p>
          </div>

          {/* Quick Search & Total Count Badge */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 26 services..."
                className="w-full sm:w-56 pl-8 pr-7 py-2 rounded text-xs bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF] border border-[#DDD5C7] dark:border-[#285546] placeholder:text-[#5E7268]/70 dark:placeholder:text-[#A9B9A2]/70 focus:outline-none focus:border-[#BD805B] dark:focus:border-[#D4956F] transition-colors shadow-2xs"
              />
              <Search className="w-3.5 h-3.5 text-[#5E7268] dark:text-[#A9B9A2] absolute left-2.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#5E7268] hover:text-[#173D32] dark:text-[#A9B9A2] dark:hover:text-[#FAF6EF]"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#173D32] dark:text-[#FAF6EF] bg-[#FFFFFF] dark:bg-[#16382E] px-3.5 py-2 rounded border border-[#DDD5C7] dark:border-[#285546] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#BD805B] dark:bg-[#D4956F]" />
              <span>Showing {filteredServices.length} of {SERVICES_LIST.length} Services</span>
            </div>
          </div>
        </div>

        {/* 26 Services Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredServices.map((service) => {
            const globalIndex = SERVICES_LIST.findIndex(s => s.id === service.id) + 1;
            const numberFormatted = String(globalIndex).padStart(2, '0');

            return (
              <div
                key={service.id}
                onClick={() => onSelectServiceForOrder(service)}
                className="group relative bg-[#FFFFFF] dark:bg-[#15362C] rounded-lg p-5 sm:p-5.5 border border-[#DDD5C7] dark:border-[#265041] shadow-[0_2px_12px_rgba(23,61,50,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[#BD805B] dark:hover:border-[#D4956F] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer focus-within:ring-2 focus-within:ring-[#BD805B]"
              >
                <div>
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-md bg-[#F4EFE6] dark:bg-[#1E483C] flex items-center justify-center border border-[#E5DDD0] dark:border-[#2C5D4E] group-hover:border-[#BD805B] transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F4EFE6] dark:bg-[#1E483C] text-[#BD805B] dark:text-[#D4956F] border border-[#E5DDD0] dark:border-[#2C5D4E]">
                      #{numberFormatted}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#173D32] dark:text-[#FAF6EF] group-hover:text-[#BD805B] dark:group-hover:text-[#D4956F] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-[#2E4238] dark:text-[#E0E8DC] mt-2 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="mt-3.5 pt-2.5 border-t border-[#DDD5C7]/70 dark:border-[#265041]">
                    <span className="text-[11px] text-[#5E7268] dark:text-[#A9B9A2] block font-mono line-clamp-1">
                      Medium: {service.medium}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#DDD5C7]/70 dark:border-[#265041] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#173D32] dark:text-[#FAF6EF] group-hover:text-[#BD805B] dark:group-hover:text-[#D4956F] transition-colors flex items-center gap-0.5">
                    <span>Simulate Order</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] text-[#5E7268] dark:text-[#A9B9A2] font-mono">
                    Interactive
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
