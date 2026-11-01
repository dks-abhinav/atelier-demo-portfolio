import React, { useState, useEffect } from 'react';
import { 
  SERVICES_LIST, 
  GalleryArtwork, 
  ServiceItem, 
  APPROVED_SERVICE_CATEGORIES,
  ApprovedServiceCategory
} from '../data/businessData';
import { 
  Send, 
  Upload, 
  X, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check,
  ShieldCheck 
} from 'lucide-react';

interface CustomCommissionFormProps {
  preselectedArtwork?: GalleryArtwork | null;
  preselectedService?: ServiceItem | null;
  onClearPreselection?: () => void;
}

export const CustomCommissionForm: React.FC<CustomCommissionFormProps> = ({
  preselectedArtwork,
  preselectedService,
  onClearPreselection,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState<ApprovedServiceCategory>(APPROVED_SERVICE_CATEGORIES[0]);
  const [sizePreference, setSizePreference] = useState('A3 (11.7" x 16.5") - Standard Portrait');
  const [occasion, setOccasion] = useState('Personal Keepsake');
  const [requirements, setRequirements] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState<{ name: string; url: string; size: string }[]>([]);
  
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync when preselection changes from props
  useEffect(() => {
    if (preselectedArtwork) {
      if (preselectedArtwork.category === 'pencil') {
        setServiceType('Pencil Art');
      } else if (preselectedArtwork.category === 'blood') {
        setServiceType('Blood Art');
      } else if (preselectedArtwork.category === 'watercolour') {
        setServiceType('Watercolour Painting');
      } else if (preselectedArtwork.category === 'acrylic') {
        setServiceType('Acrylic Painting');
      } else if (preselectedArtwork.category === 'lineart') {
        setServiceType('Line Art');
      } else if (preselectedArtwork.category === 'spiral') {
        setServiceType('Spiral Art');
      } else if (preselectedArtwork.category === 'papercut') {
        setServiceType('Paper-Cut Art');
      } else if (preselectedArtwork.category === 'bloodbangles') {
        setServiceType('Blood Bangles');
      } else if (preselectedArtwork.category === 'wallpainting' || preselectedArtwork.category === 'wall-painting') {
        setServiceType('Wall Painting');
      } else if (preselectedArtwork.category === 'marriageessentials' || preselectedArtwork.category === 'marriage-essentials') {
        setServiceType('Marriage Essentials');
      } else if (preselectedArtwork.category === 'colourpencil' || preselectedArtwork.category === 'colour-pencil') {
        setServiceType('Colour Pencil Art');
      } else if (preselectedArtwork.category === 'pencilminiature') {
        setServiceType('Pencil Miniature Art');
      } else if (preselectedArtwork.category === 'threadart' || preselectedArtwork.category === 'thread') {
        setServiceType('Thread Art');
      } else if (preselectedArtwork.category === 'turmeric') {
        setServiceType('Turmeric Art');
      } else if (preselectedArtwork.category === 'livepainting' || preselectedArtwork.category === 'live-painting') {
        setServiceType('Live Painting');
      } else if (preselectedArtwork.category === 'resin') {
        setServiceType('Resin Art');
      } else if (preselectedArtwork.category === 'devotional') {
        setServiceType('Acrylic Painting');
      } else {
        setServiceType('Pencil Art');
      }
      setSizePreference(preselectedArtwork.size);
      setRequirements(`I am inquiring about commissioning an artwork in the style of "${preselectedArtwork.title}" (${preselectedArtwork.refCode}, ${preselectedArtwork.medium}).`);
    } else if (preselectedService) {
      setServiceType(preselectedService.title);
      setSizePreference(preselectedService.suggestedSizes?.[0] || 'Standard Size');
      setRequirements(`I would like to inquire about commissioning ${preselectedService.title} (${preselectedService.medium}).`);
    }
  }, [preselectedArtwork, preselectedService]);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    
    const newPhotos = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
    }));

    setSelectedPhotos((prev) => [...prev, ...newPhotos]);
  };

  const removePhoto = (index: number) => {
    setSelectedPhotos((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].url);
      updated.splice(index, 1);
      return updated;
    });
  };

  const validate = () => {
    const errs: { fullName?: string; phone?: string } = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number (demo).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructFormattedMessage = () => {
    let msg = `*SIMULATED COMMISSION INQUIRY — ATELIER DEMO*\n\n`;
    msg += `• *Client Name:* ${fullName.trim()}\n`;
    msg += `• *Contact Phone (Demo):* ${phone.trim()}\n`;
    msg += `• *Service / Medium:* ${serviceType}\n`;
    msg += `• *Size / Dimensions:* ${sizePreference}\n`;
    msg += `• *Occasion / Dedication:* ${occasion}\n`;
    if (requirements.trim()) {
      msg += `• *Requirements / Notes:* ${requirements.trim()}\n`;
    }
    if (selectedPhotos.length > 0) {
      msg += `• *Reference Photos:* ${selectedPhotos.length} photo(s) selected locally.\n`;
    }
    msg += `\n_Demonstration mode: Simulated locally without external network transmission._`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructFormattedMessage();
    setSubmittedSummary(message);
  };

  const handleCopyMessage = () => {
    if (submittedSummary) {
      navigator.clipboard.writeText(submittedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#16382E] rounded-lg border border-[#DDD5C7] dark:border-[#285546] shadow-[0_2px_12px_rgba(23,61,50,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] p-5 sm:p-7 transition-colors duration-200">
      
      {/* Form Header */}
      <div className="mb-5">
        <h3 className="font-serif text-2xl font-medium text-[#173D32] dark:text-[#FAF6EF]">
          Commission Inquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-[#4D6358] dark:text-[#C2D1BF] mt-1 font-light">
          Simulate a commission inquiry below. This form runs entirely client-side for demonstration.
        </p>

        {(preselectedArtwork || preselectedService) && (
          <div className="mt-3 p-2.5 rounded bg-[#F4EFE6] dark:bg-[#1E483C] border border-[#DDD5C7] dark:border-[#285546] flex items-center justify-between text-xs text-[#173D32] dark:text-[#FAF6EF]">
            <span>
              Inquiring for: <strong>{preselectedArtwork?.title || preselectedService?.title}</strong>
            </span>
            {onClearPreselection && (
              <button
                type="button"
                onClick={onClearPreselection}
                className="text-[11px] underline text-[#4D6358] dark:text-[#C2D1BF] hover:text-[#173D32] dark:hover:text-[#FAF6EF] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] mb-1.5">
              Full Name <span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Alex Morgan"
              className={`w-full px-3.5 py-2.5 rounded bg-[#F7F4EE] dark:bg-[#0E231C] border text-sm text-[#173D32] dark:text-[#FAF6EF] placeholder:text-[#45574F]/60 dark:placeholder:text-[#A9B9A2]/60 focus:outline-none transition-colors ${
                errors.fullName ? 'border-red-600 focus:border-red-600' : 'border-[#DDD5C7] dark:border-[#244C3D] focus:border-[#173D32] dark:focus:border-[#D4956F] focus:bg-[#FFFFFF] dark:focus:bg-[#091813]'
              }`}
            />
            {errors.fullName && (
              <span className="text-[11px] text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] mb-1.5">
              Contact Phone (Demo) <span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 98765 43210"
              className={`w-full px-3.5 py-2.5 rounded bg-[#F7F4EE] dark:bg-[#0E231C] border text-sm text-[#173D32] dark:text-[#FAF6EF] placeholder:text-[#45574F]/60 dark:placeholder:text-[#A9B9A2]/60 focus:outline-none transition-colors ${
                errors.phone ? 'border-red-600 focus:border-red-600' : 'border-[#DDD5C7] dark:border-[#244C3D] focus:border-[#173D32] dark:focus:border-[#D4956F] focus:bg-[#FFFFFF] dark:focus:bg-[#091813]'
              }`}
            />
            {errors.phone && (
              <span className="text-[11px] text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </span>
            )}
          </div>
        </div>

        {/* Medium / Service & Sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] mb-1.5">
              Art Style / Service
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value as ApprovedServiceCategory)}
              className="w-full px-3.5 py-2.5 rounded bg-[#F7F4EE] dark:bg-[#0E231C] border border-[#DDD5C7] dark:border-[#244C3D] text-sm text-[#173D32] dark:text-[#FAF6EF] focus:outline-none focus:border-[#173D32] dark:focus:border-[#D4956F] transition-colors"
            >
              {APPROVED_SERVICE_CATEGORIES.map((categoryName) => (
                <option 
                  key={categoryName} 
                  value={categoryName} 
                  className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]"
                >
                  {categoryName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] mb-1.5">
              Artwork Size / Details
            </label>
            <select
              value={sizePreference}
              onChange={(e) => setSizePreference(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded bg-[#F7F4EE] dark:bg-[#0E231C] border border-[#DDD5C7] dark:border-[#244C3D] text-sm text-[#173D32] dark:text-[#FAF6EF] focus:outline-none focus:border-[#173D32] dark:focus:border-[#D4956F] transition-colors"
            >
              <option value={'A4 (8.3" x 11.7") - Solo / Intimate'} className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">A4 (8.3" x 11.7") - Solo / Intimate</option>
              <option value={'A3 (11.7" x 16.5") - Standard Portrait'} className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">A3 (11.7" x 16.5") - Standard Portrait</option>
              <option value={'A2 (16.5" x 23.4") - Family / Grand Study'} className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">A2 (16.5" x 23.4") - Family / Grand Study</option>
              <option value={'16" x 20" Stretched Canvas'} className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">16" x 20" Stretched Canvas</option>
              <option value={'20" x 28" Wooden Framed Sanctum'} className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">20" x 28" Wooden Framed Sanctum</option>
              <option value={'24" x 36" Live Event Canvas'} className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">24" x 36" Live Event Canvas</option>
              <option value="Custom Ceramic Mug (11oz / 15oz)" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Custom Ceramic Mug (11oz / 15oz)</option>
              <option value="Unsure / Need Artist Recommendation" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Unsure / Need Artist Recommendation</option>
            </select>
          </div>
        </div>

        {/* Occasion */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] mb-1.5">
            Occasion / Purpose
          </label>
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded bg-[#F7F4EE] dark:bg-[#0E231C] border border-[#DDD5C7] dark:border-[#244C3D] text-sm text-[#173D32] dark:text-[#FAF6EF] focus:outline-none focus:border-[#173D32] dark:focus:border-[#D4956F] transition-colors"
          >
            <option value="Wedding / Celebration Gift" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Wedding / Celebration Gift</option>
            <option value="Event Live Painting" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Event Live Painting</option>
            <option value="Anniversary Commemoration" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Anniversary Commemoration</option>
            <option value="Sacred Home Decor" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Sacred Home Decor</option>
            <option value="Birthday Surprise" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Birthday Surprise</option>
            <option value="Milestone Celebration" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Milestone Celebration</option>
            <option value="Personal Keepsake" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Personal Keepsake</option>
            <option value="Corporate / Special Gifting" className="bg-[#FFFFFF] dark:bg-[#16382E] text-[#173D32] dark:text-[#FAF6EF]">Corporate / Special Gifting</option>
          </select>
        </div>

        {/* Requirements Textarea */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] mb-1.5">
            Message &amp; Requirements
          </label>
          <textarea
            rows={3}
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="Describe reference preferences, dimensions, framing details, or creative concept..."
            className="w-full px-3.5 py-2.5 rounded bg-[#F7F4EE] dark:bg-[#0E231C] border border-[#DDD5C7] dark:border-[#244C3D] text-sm text-[#173D32] dark:text-[#FAF6EF] placeholder:text-[#45574F]/60 dark:placeholder:text-[#A9B9A2]/60 focus:outline-none focus:border-[#173D32] dark:focus:border-[#D4956F] focus:bg-[#FFFFFF] dark:focus:bg-[#091813] transition-colors resize-y"
          />
        </div>

        {/* Reference Photo Selection Interface */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] dark:text-[#FAF6EF] mb-1.5">
            Reference Photographs (Optional Demonstration)
          </label>
          
          <div className="border border-dashed border-[#DDD5C7] dark:border-[#285546] rounded-lg p-4 bg-[#F4EFE6]/70 dark:bg-[#0E231C]/80 text-center hover:bg-[#F4EFE6] dark:hover:bg-[#0E231C] transition-colors">
            <input
              type="file"
              id="photo-upload-input"
              multiple
              accept="image/*"
              onChange={handlePhotoSelect}
              className="hidden"
            />
            <label
              htmlFor="photo-upload-input"
              className="cursor-pointer flex flex-col items-center justify-center gap-1.5 py-2"
            >
              <Upload className="w-5 h-5 text-[#BD805B] dark:text-[#D4956F]" />
              <span className="text-xs font-semibold text-[#173D32] dark:text-[#FAF6EF]">
                Select local sample image from your device
              </span>
              <span className="text-[11px] text-[#4D6358] dark:text-[#A9B9A2]">
                Supports JPEG, PNG, WEBP (Processed locally on your device only)
              </span>
            </label>
          </div>

          {/* Selected Photo Thumbnails */}
          {selectedPhotos.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2.5">
              {selectedPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative group w-16 h-16 rounded overflow-hidden border border-[#DDD5C7] dark:border-[#285546] shadow-xs bg-[#FFFFFF] dark:bg-[#16382E]"
                >
                  <img
                    src={photo.url}
                    alt={photo.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 p-0.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
                    title="Remove photo"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 px-1 py-0.5 text-[9px] text-white truncate text-center">
                    {photo.size}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Action */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded bg-[#173D32] hover:bg-[#10251F] dark:bg-[#1E483C] dark:hover:bg-[#265B4C] text-[#FAF6EF] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer border border-[#173D32] dark:border-[#356B5A]"
          >
            <Send className="w-4 h-4" />
            <span>Generate Simulated Commission Summary</span>
          </button>
        </div>

      </form>

      {/* Confirmation & Summary Modal / Card */}
      {submittedSummary && (
        <div className="mt-6 p-4 rounded-lg bg-[#F4EFE6] dark:bg-[#0E231C] border border-[#DDD5C7] dark:border-[#285546] space-y-3 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#173D32] dark:text-[#FAF6EF] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Simulated Commission Summary Generated
            </span>
            <button
              onClick={handleCopyMessage}
              className="text-xs text-[#173D32] dark:text-[#FAF6EF] hover:text-[#BD805B] dark:hover:text-[#D4956F] flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Summary'}</span>
            </button>
          </div>

          <pre className="text-xs font-mono bg-[#FFFFFF] dark:bg-[#081511] p-3 rounded border border-[#DDD5C7] dark:border-[#244C3D] text-[#20332B] dark:text-[#FAF6EF] whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-48">
            {submittedSummary}
          </pre>

          <div className="flex items-center gap-2 text-[11px] text-[#4D6358] dark:text-[#A9B9A2]">
            <ShieldCheck className="w-4 h-4 text-[#BD805B] dark:text-[#D4956F] shrink-0" />
            <span>
              Demonstration Mode: This summary was created locally in the browser. No data was collected, stored, or transmitted to any external service.
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
