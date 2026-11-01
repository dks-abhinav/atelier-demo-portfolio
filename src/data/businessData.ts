/**
 * Atelier Demo - Generic Fine Art Studio & Creative Portfolio Data
 * Clean demonstration dataset sanitized for public portfolio showcase.
 * No real customer names, private photographs, personal phone numbers, or physical addresses.
 */

export interface StudioInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  instagram: string;
  instagramHandle: string;
  address: string;
  shortAddress: string;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  googleListingUrl: string;
  openingHours: {
    weekdays: string;
    wednesday: string;
    sunday: string;
  };
}

export const STUDIO_INFO: StudioInfo = {
  name: "Atelier Demo",
  tagline: "Crafted with Creativity",
  phone: "",
  phoneDisplay: "Demonstration Only (No Active Phone)",
  instagram: "#",
  instagramHandle: "@atelier.demo",
  address: "Demonstration Studio Portfolio (Online Showcase — No Physical Storefront)",
  shortAddress: "Online Creative Studio Showcase",
  googleMapsUrl: "#",
  googleReviewsUrl: "#",
  googleListingUrl: "#",
  openingHours: {
    weekdays: "Online Showcase: Accessible 24/7",
    wednesday: "Online Showcase: Accessible 24/7",
    sunday: "Online Showcase: Accessible 24/7",
  },
};

export const APPROVED_SERVICE_CATEGORIES = [
  "Pencil Art",
  "Blood Art",
  "Watercolour Painting",
  "Acrylic Painting",
  "Line Art",
  "Spiral Art",
  "Paper-Cut Art",
  "Resin Art",
  "Blood Bangles",
  "Thread Art",
  "Mug Printing",
  "Photo Printing",
  "Pillow Printing",
  "Pencil Miniature Art",
  "Marriage Essentials",
  "Wall Painting",
  "Turmeric Art",
  "Live Painting",
  "Resin Bangles",
  "Thread Bangles",
  "Blouse Painting",
  "Saree Painting",
  "Colour Pencil Art",
  "Shirt Painting",
  "Vidyarambham Ceremony",
  "Baby Shower",
] as const;

export type ApprovedServiceCategory = typeof APPROVED_SERVICE_CATEGORIES[number];

export type ServiceCategory = "custom_artwork" | "experiences_gifts";

export interface ServiceItem {
  id: string;
  title: ApprovedServiceCategory;
  category: ServiceCategory;
  medium: string;
  description: string;
  features?: string[];
  suggestedSizes?: string[];
  suitableFor?: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "pencil-art",
    title: "Pencil Art",
    category: "custom_artwork",
    medium: "Graphite & Charcoal on Archival Paper",
    description: "Detailed pencil illustrations crafted with precision, delicate shading, and tonal depth. A classic monochrome medium suitable for expressive portraits and fine art studies.",
    features: ["Fine artist graphites", "300 GSM cold-pressed paper", "Precision tonal shading", "Protective UV fixative seal"],
    suggestedSizes: ["A4 (8.3\" x 11.7\")", "A3 (11.7\" x 16.5\")", "A2 (16.5\" x 23.4\")"],
    suitableFor: "Portraits, character studies, architectural sketches, timeless art gifts",
  },
  {
    id: "blood-art",
    title: "Blood Art",
    category: "custom_artwork",
    medium: "Specialized Organic Carmine Medium",
    description: "Expressive artistic studies rendered in rich deep carmine tones on acid-free watercolor paper with archival sealant framing.",
    features: ["Carefully handled organic pigment", "Multi-layered archival sealant", "Specialist framing protocol"],
    suggestedSizes: ["A4 Bespoke", "A3 Bespoke"],
    suitableFor: "Dramatic monochrome studies and high-contrast expressive artwork",
  },
  {
    id: "watercolour-painting",
    title: "Watercolour Painting",
    category: "custom_artwork",
    medium: "Aquarelle on Fine Cotton Paper",
    description: "Luminous watercolour compositions blending delicate washes, translucent pigment layering, and textured cotton paper grain.",
    features: ["Fluid transparency washes", "Cold-pressed fine art paper", "Lightfast watercolor pigments"],
    suggestedSizes: ["A4 Format", "A3 Format", "14\" x 20\" Bespoke"],
    suitableFor: "Botanical studies, landscapes, still lifes, serene wall art",
  },
  {
    id: "acrylic-painting",
    title: "Acrylic Painting",
    category: "custom_artwork",
    medium: "Heavy Body Acrylic on Stretched Canvas",
    description: "Dynamic acrylic paintings featuring vivid palettes, rich impasto textures, and lasting protective varnish on stretched primed canvas.",
    features: ["Heavy body acrylic pigments", "Stretched primed canvas", "UV varnish finish"],
    suggestedSizes: ["12\" x 16\"", "16\" x 20\"", "24\" x 36\" Grand Canvas"],
    suitableFor: "Feature wall centerpieces, contemporary abstract art, decorative gifts",
  },
  {
    id: "line-art",
    title: "Line Art",
    category: "custom_artwork",
    medium: "Fine Ink on Archival Sheet",
    description: "Modernist optical line drawings utilizing rhythmic variable thickness and parallel contour lines that create volumetric forms.",
    features: ["Clean contour linework", "Minimalist contemporary aesthetic", "Archival drawing paper"],
    suggestedSizes: ["A4 Format", "A3 Format", "12\" x 16\""],
    suitableFor: "Modern interiors, minimalist aesthetic gifts, graphic silhouettes",
  },
  {
    id: "spiral-art",
    title: "Spiral Art",
    category: "custom_artwork",
    medium: "Continuous Single-Coil Ink on Art Paper",
    description: "Single continuous spiral line artwork where rhythmic line width variation creates hypnotic optical portraiture and geometric depth.",
    features: ["Single unbroken spiral line", "Hypnotic optical depth", "Smooth art paper finish"],
    suggestedSizes: ["A4 Format", "A3 Format", "14\" x 18\" Bespoke"],
    suitableFor: "Creative gifts, geometric art collectors, contemporary wall decor",
  },
  {
    id: "paper-cut-art",
    title: "Paper-Cut Art",
    category: "custom_artwork",
    medium: "Layered Precision Cutwork",
    description: "Multi-layered paper sculpture featuring hand-carved silhouettes and delicate filigree creating dimensional shadow depth.",
    features: ["Precision hand-carved layers", "Multi-dimensional depth effect", "Shadowbox framing ready"],
    suggestedSizes: ["8\" x 10\"", "12\" x 12\" Square", "A3 Format"],
    suitableFor: "Shadowbox display, decorative keepsakes, architectural silhouettes",
  },
  {
    id: "resin-art",
    title: "Resin Art",
    category: "custom_artwork",
    medium: "Handcrafted Cast Resin & Pigments",
    description: "Glossy, glass-like handcrafted resin creations featuring vibrant pigment swirls, gold leaf flakes, and lustrous durable finishes.",
    features: ["Crystal-clear protective resin", "Lustrous glossy finish", "Handcrafted pigment blending"],
    suggestedSizes: ["10\" Round Plaque", "12\" x 12\" Square", "16\" Round Wall Piece"],
    suitableFor: "Home decor, ocean & geode themes, personalized keepsake gifts",
  },
  {
    id: "blood-bangles",
    title: "Blood Bangles",
    category: "experiences_gifts",
    medium: "Custom Handcrafted Keepsake Bangles",
    description: "Artisan cast jewelry bangles blending deep amber-crimson resin with floating 24K gold flakes and high-gloss polish.",
    features: ["Custom handcrafted casting", "Protective crystal-clear resin", "Comfortable, smooth wearable finish"],
    suggestedSizes: ["Standard Bangle Sizes (2.4, 2.6, 2.8)"],
    suitableFor: "Commemorative keepsake jewelry, bespoke fashion accessories",
  },
  {
    id: "thread-art",
    title: "Thread Art",
    category: "custom_artwork",
    medium: "Fine Fiber & Silk Thread on Board",
    description: "Complex geometric string art created by winding thousands of fine threads across precision anchor pins on solid wooden backing.",
    features: ["Hand-woven thread geometry", "Multi-layered visual depth", "Solid wooden backing"],
    suggestedSizes: ["12\" x 12\" Circular Board", "16\" Round Board", "20\" Large Circular Board"],
    suitableFor: "Contemporary wall decor, creative portraits, geometric installations",
  },
  {
    id: "mug-printing",
    title: "Mug Printing",
    category: "experiences_gifts",
    medium: "High-Definition Sublimation Ceramic",
    description: "High-definition ceramic mugs customized with hand-drawn art, custom illustration, and commemorative graphics.",
    features: ["Dishwasher & microwave safe", "Vivid fade-resistant sublimation", "Glossy white ceramic body"],
    suggestedSizes: ["11 oz Standard", "15 oz Deluxe"],
    suitableFor: "Studio merchandise, commemorative tokens, bespoke gifts",
  },
  {
    id: "photo-printing",
    title: "Photo Printing",
    category: "experiences_gifts",
    medium: "Archival Photographic Print",
    description: "High-resolution fine art printing delivering rich contrast, accurate color reproduction, and lasting archival preservation.",
    features: ["High-resolution color fidelity", "Lustre / Matte photographic paper", "Smudge-resistant finish"],
    suggestedSizes: ["6\" x 8\"", "8\" x 12\" (A4)", "12\" x 18\" (A3)"],
    suitableFor: "Framed prints, gallery portfolio displays, exhibition prints",
  },
  {
    id: "pillow-printing",
    title: "Pillow Printing",
    category: "experiences_gifts",
    medium: "Fabric Dye-Sublimation Print",
    description: "Decorative cushion covers featuring custom artwork illustrations and vibrant textile prints on soft washable fabrics.",
    features: ["Soft plush fabric finish", "Vivid edge-to-edge sublimation", "Zippered washable cover"],
    suggestedSizes: ["12\" x 12\" Square", "16\" x 16\" Standard Cushion"],
    suitableFor: "Home comfort, interior accent styling, decorative keepsakes",
  },
  {
    id: "pencil-miniature-art",
    title: "Pencil Miniature Art",
    category: "custom_artwork",
    medium: "Micro-Carved Graphite & Lead",
    description: "Extreme precision miniature art featuring letters and symbols micro-sculpted directly from fragile 2mm graphite pencil lead.",
    features: ["Precision micro-carving", "High-detail miniature craftsmanship", "Protective display case"],
    suggestedSizes: ["Miniature Glass Display Dome", "Framed Shadow Case"],
    suitableFor: "Novelty collectors, micro-scale artwork, delicate keepsakes",
  },
  {
    id: "marriage-essentials",
    title: "Marriage Essentials",
    category: "experiences_gifts",
    medium: "Curated Keepsakes & Handcrafted Wedding Essentials",
    description: "Handcrafted ceremonial essentials, ornate keepsake platters, and decorative festive vessels designed for milestone wedding rituals.",
    features: ["Handcrafted decorative detailing", "Custom festive palettes", "Ornate beadwork & metallic accents"],
    suggestedSizes: ["Bespoke Wedding Sets", "Individual Ceremony Pieces"],
    suitableFor: "Traditional ceremonies, milestone weddings, bridal keepsakes",
  },
  {
    id: "wall-painting",
    title: "Wall Painting",
    category: "custom_artwork",
    medium: "Architectural Wall Acrylics & Murals",
    description: "Custom large-scale architectural wall murals and botanical feature themes painted on-site with durable lightfast pigments.",
    features: ["Durable interior wall paints", "Custom concept & scale design", "Hand-painted architectural execution"],
    suggestedSizes: ["Accent Wall (8' x 10')", "Custom Architectural Dimensions"],
    suitableFor: "Living room feature walls, cafe interiors, studio murals",
  },
  {
    id: "turmeric-art",
    title: "Turmeric Art",
    category: "custom_artwork",
    medium: "Natural Turmeric Pigment & Herbal Binders",
    description: "Traditional organic artwork crafted using the natural warm golden hues of turmeric pigments on deckled handmade cotton paper.",
    features: ["100% natural organic turmeric pigment", "Handmade deckled cotton paper", "Traditional warm golden aesthetics"],
    suggestedSizes: ["10\" x 12\"", "12\" x 16\"", "Bespoke Framed"],
    suitableFor: "Sacred spaces, traditional decor, auspicious organic gifts",
  },
  {
    id: "live-painting",
    title: "Live Painting",
    category: "experiences_gifts",
    medium: "On-Site Live Canvas Performance",
    description: "Live on-site canvas painting experiences capturing real-time celebratory energy on stretched easel-mounted archival canvas.",
    features: ["Live on-site event performance", "Completed keepsake on event day", "Engaging guest experience"],
    suggestedSizes: ["24\" x 36\" Stretched Canvas", "30\" x 40\" Grand Canvas"],
    suitableFor: "Weddings, milestone galas, cultural receptions",
  },
  {
    id: "resin-bangles",
    title: "Resin Bangles",
    category: "experiences_gifts",
    medium: "Handcrafted Cast Resin Jewelry",
    description: "Designer handcrafted resin bangles with embedded gold leaf flakes and botanical elements polished to a smooth finish.",
    features: ["Crystal resin with embedded accents", "Hand-polished smooth finish", "Custom color styling"],
    suggestedSizes: ["Standard Bangle Sizes (2.4, 2.6, 2.8)"],
    suitableFor: "Festive accessories, keepsake jewelry gifting",
  },
  {
    id: "thread-bangles",
    title: "Thread Bangles",
    category: "experiences_gifts",
    medium: "Hand-Wound Silk Thread & Embellishments",
    description: "Hand-wound silk thread bangles embellished with delicate pearl borders and handcrafted traditional motifs.",
    features: ["Vibrant silk thread wrapping", "Delicate pearl & stone accents", "Traditional color coordinates"],
    suggestedSizes: ["Custom Wrist Sizes / Set of 2 or 4"],
    suitableFor: "Festive wear, celebration gifts, bespoke traditional fashion",
  },
  {
    id: "blouse-painting",
    title: "Blouse Painting",
    category: "custom_artwork",
    medium: "Hand-Painted Permanent Fabric Art",
    description: "Custom permanent hand-painted artistry on fabric, featuring floral and decorative motifs tailored to garment compositions.",
    features: ["Wash-resistant fabric acrylics", "Intricate sleeve and neckline artwork", "Custom garment color coordination"],
    suggestedSizes: ["Custom Fabric / Unstitched / Stitched"],
    suitableFor: "Celebratory ethnic wear, bespoke textile art",
  },
  {
    id: "saree-painting",
    title: "Saree Painting",
    category: "custom_artwork",
    medium: "Hand-Painted Textile Art",
    description: "Bespoke hand-painted artwork rendered across textile borders and pallus using permanent fabric pigments.",
    features: ["Fine permanent fabric pigments", "Bespoke border compositions", "Delicate hand-stroked artistry"],
    suggestedSizes: ["Full Textile Border Composition"],
    suitableFor: "Festive celebrations, wearable textile art",
  },
  {
    id: "colour-pencil-art",
    title: "Colour Pencil Art",
    category: "custom_artwork",
    medium: "Lightfast Coloured Pencils on Archival Paper",
    description: "Rich, vibrant coloured pencil artwork featuring delicate tonal blending, smooth gradient transitions, and realistic fine details.",
    features: ["Lightfast pigment layering", "Rich tonal fidelity", "Warm natural archival finish"],
    suggestedSizes: ["A4 (8.3\" x 11.7\")", "A3 (11.7\" x 16.5\")", "A2 Bespoke"],
    suitableFor: "Vibrant illustrations, character studies, fine art gifts",
  },
  {
    id: "shirt-painting",
    title: "Shirt Painting",
    category: "custom_artwork",
    medium: "Hand-Painted Permanent Fabric Art on Apparel",
    description: "Custom hand-painted motifs and expressive illustrations rendered directly on cotton or linen shirts.",
    features: ["Wash-resistant fabric acrylics", "Custom front/pocket motif design", "Tailored to garment style"],
    suggestedSizes: ["Custom Shirt (Cotton / Linen / Blend)"],
    suitableFor: "Casual artistic wear, bespoke creative apparel",
  },
  {
    id: "vidyarambham-ceremony",
    title: "Vidyarambham Ceremony",
    category: "experiences_gifts",
    medium: "Custom Ceremony Keepsakes & Traditional Art",
    description: "Auspicious traditional ceremonial plaques and keepsakes celebrating educational milestone initiations.",
    features: ["Traditional auspicious motifs", "Commemorative milestone layout", "Archival presentation finish"],
    suggestedSizes: ["Ceremonial Keepsake Plaque", "Custom Framed Memento"],
    suitableFor: "Milestone initiation celebrations, auspicious family keepsakes",
  },
  {
    id: "baby-shower",
    title: "Baby Shower",
    category: "experiences_gifts",
    medium: "Handcrafted Celebration Keepsakes & Essentials",
    description: "Handcrafted commemorative plaques and celebratory decorative elements designed for welcoming new arrivals.",
    features: ["Gentle celebratory color palettes", "Personalized keepsake styling", "Handcrafted celebration decor"],
    suggestedSizes: ["Bespoke Celebration Sets", "Individual Commemorative Keepsakes"],
    suitableFor: "Celebratory gatherings, family milestones, welcoming celebrations",
  },
];

export interface GalleryArtwork {
  id: string;
  title: string;
  category: string; // for filter tabs
  categoryLabel: string;
  medium: string;
  size: string;
  refCode: string;
  image: string;
  description: string;
  specs: string[];
  featured?: boolean;
  video?: string;
  poster?: string;
  isVideo?: boolean;
}

export const GALLERY_ARTWORKS: GalleryArtwork[] = [
  {
    id: "art-demo-1",
    title: "Study in Graphite & Charcoal",
    category: "pencil",
    categoryLabel: "Pencil Art",
    medium: "Pencil & Graphite on Archival Rag",
    size: "A3 Format (11.7\" x 16.5\")",
    refCode: "REF #DEMO-PCL-01",
    image: "/assets/artworks/demo/demo_pencil_portrait.svg",
    description: "Demonstration graphite study demonstrating continuous tonal blending, delicate cross-hatching, and micro-precision facial contour shading on heavy cotton paper.",
    specs: ["300 GSM archival cotton surface", "Fine graphite layering", "Smudge-resistant UV fixative", "Museum matboard presentation"],
    featured: true,
  },
  {
    id: "art-demo-2",
    title: "Harmonic Coiled Ink Portrait",
    category: "spiral",
    categoryLabel: "Spiral Art",
    medium: "Single Unbroken Spiral Ink",
    size: "Framed Format (A4 / Custom)",
    refCode: "REF #DEMO-SPI-01",
    image: "/assets/artworks/demo/demo_spiral_art.svg",
    description: "Demonstration circular spiral study created from a single continuous coiling line with modulated line weight, yielding hypnotic optical density and depth.",
    specs: ["Single unbroken continuous line", "Hypnotic optical illusion", "Smooth archival drawing paper", "Black exhibition frame styling"],
    featured: true,
  },
  {
    id: "art-demo-3",
    title: "Layered Precision Silhouette",
    category: "papercut",
    categoryLabel: "Paper-Cut Art",
    medium: "Hand-Carved Multi-Layer Paper",
    size: "Shadowbox Format (12\" x 12\")",
    refCode: "REF #DEMO-PPC-01",
    image: "/assets/artworks/demo/demo_paper_cut.svg",
    description: "Demonstration multi-tier paper sculpture showcasing hand-carved negative space cuts, architectural silhouettes, and dimensional natural shadow depth.",
    specs: ["Precision hand-carved layers", "Dimensional shadow relief", "Archival heavyweight paper", "Ready for shadowbox framing"],
    featured: true,
  },
  {
    id: "art-demo-4",
    title: "Amber & Crimson Keepsake Cast",
    category: "bloodbangles",
    categoryLabel: "Blood Bangles",
    medium: "Handcrafted Jewelry Resin with Gold Leaf",
    size: "Pair Edition (Standard 2.6)",
    refCode: "REF #DEMO-BGL-01",
    image: "/assets/artworks/demo/demo_blood_bangles.svg",
    description: "Demonstration handcrafted jewelry resin bangles infused with warm crimson undertones and suspended 24K gold leaf flakes, hand-polished to a glass luster.",
    specs: ["Crystal jewelry-grade resin", "Floating gold leaf flake accents", "Ergonomic comfort inner curve", "High-gloss mirror finish"],
    featured: true,
  },
  {
    id: "art-demo-5",
    title: "Geometric String Matrix",
    category: "threadart",
    categoryLabel: "Thread Art",
    medium: "Woven Silk Thread on Anchor Board",
    size: "Circular Board Edition (16\" Diameter)",
    refCode: "REF #DEMO-THD-01",
    image: "/assets/artworks/demo/demo_thread_art.svg",
    description: "Demonstration geometric thread composition created through intersecting dark silk fibers strung across perimeter anchor points on circular wooden backing.",
    specs: ["Perimeter anchor pin matrix", "High-density woven silk threads", "Mathematical optical depth", "Solid wooden backing board"],
    featured: true,
  },
  {
    id: "art-demo-6",
    title: "Micro-Carved Graphite Inscription",
    category: "pencilminiature",
    categoryLabel: "Pencil Miniature Art",
    medium: "Micro-Sculpted Lead & Wood Casing",
    size: "Miniature Display Dome Enclosure",
    refCode: "REF #DEMO-MIN-01",
    image: "/assets/artworks/demo/demo_pencil_miniature.svg",
    description: "Demonstration miniature carving illustrating micro-scale relief sculpting along a fragile pencil tip lead, presented within a protective glass keepsake vial.",
    specs: ["Micro-sculpted relief lettering", "Intact 2mm graphite lead", "Protective glass keepsake vial", "Handcrafted gifting presentation"],
    featured: true,
  },
  {
    id: "art-demo-7",
    title: "Ceremonial Keepsake Ensemble",
    category: "marriageessentials",
    categoryLabel: "Marriage Essentials",
    medium: "Handcrafted Festive Keepsakes & Pot",
    size: "Bespoke Ceremonial Keepsake Set",
    refCode: "REF #DEMO-ME-01",
    image: "/assets/artworks/demo/demo_marriage_essentials.svg",
    description: "Demonstration wedding essentials collection featuring decorative heart-shaped keepsakes, seed pearl rims, and lustrous metallic embellishments.",
    specs: ["Hand-applied pearl & rhinestone borders", "Festive traditional color palette", "Multi-tiered ceremonial vessel styling", "Handcrafted presentation pedestal"],
    featured: true,
  },
  {
    id: "art-demo-8",
    title: "Layered Lightfast Colour Study",
    category: "colourpencil",
    categoryLabel: "Colour Pencil Art",
    medium: "Lightfast Coloured Pencil on Paper",
    size: "Framed Keepsake Edition (12\" x 16\")",
    refCode: "REF #DEMO-CP-01",
    image: "/assets/artworks/demo/demo_colour_pencil.svg",
    description: "Demonstration coloured pencil composition showcasing rich pigment layering, smooth skin tone shading, and delicate tonal gradations on fine art paper.",
    specs: ["Lightfast wax/oil pencil layering", "Smooth non-grainy gradient shading", "Museum matboard mounting", "Sleek exhibition frame styling"],
    featured: true,
  },
  {
    id: "art-demo-9",
    title: "Architectural Botanical Mural",
    category: "wallpainting",
    categoryLabel: "Wall Painting",
    medium: "Interior Acrylic & Pigment Mural",
    size: "Architectural Feature Wall (8' x 10')",
    refCode: "REF #DEMO-WP-01",
    image: "/assets/artworks/demo/demo_wall_mural.svg",
    description: "Demonstration large-scale architectural wall mural featuring tropical monstera foliage, warm ochre tones, and stylized avian silhouettes in an arched recess.",
    specs: ["Washable matte wall sealant", "Lightfast interior mural pigments", "Custom architectural scale composition", "Contemporary botanical styling"],
    featured: true,
  },
  {
    id: "art-demo-10",
    title: "Golden Herbal Pigment Study",
    category: "turmeric",
    categoryLabel: "Turmeric Art",
    medium: "Natural Turmeric & Organic Binder",
    size: "12\" x 16\" Studio Art Sheet",
    refCode: "REF #DEMO-TUR-01",
    image: "/assets/artworks/demo/demo_turmeric_art.svg",
    description: "Demonstration artwork painted using pure natural organic turmeric pigments and herbal gum binders, displaying rich amber-gold tonal modulation.",
    specs: ["100% natural organic turmeric pigment", "Handmade deckled cotton sheet", "Natural botanical color warmth", "Acid-free archival backing"],
    featured: true,
  },
  {
    id: "art-demo-11",
    title: "Live Event Easel Composition",
    category: "livepainting",
    categoryLabel: "Live Painting",
    medium: "Live Acrylic on Archival Canvas",
    size: "24\" x 36\" Studio Stretched Canvas",
    refCode: "REF #DEMO-LP-01",
    image: "/assets/artworks/demo/demo_live_painting.svg",
    description: "Demonstration live wedding canvas study illustrating on-site composition, ceremonial stage architecture, floral garlands, and live guest viewing presentation.",
    specs: ["On-site live execution concept", "Heavy body archival acrylics", "Protective semi-gloss finish", "Solid wood stretcher bars"],
    featured: true,
  },
  {
    id: "art-demo-12",
    title: "Sacred Architectural Relief",
    category: "devotional",
    categoryLabel: "Devotional Artwork",
    medium: "Textured Relief & Gold Foil",
    size: "20\" x 28\" Teak Framed",
    refCode: "REF #DEMO-DEV-01",
    image: "/assets/artworks/demo/demo_devotional_relief.svg",
    description: "Demonstration 3D textured relief painting featuring sacred architectural gopuram motifs, burnished gold foil leaf, and sanctum aesthetic details.",
    specs: ["Hand-sculpted tactile relief", "Burnished gold luster foil", "Teakwood finish gallery frame", "Climate sealed glass enclosure"],
    featured: true,
  },
  {
    id: "art-demo-13",
    title: "Atmospheric Horizon Wash",
    category: "watercolour",
    categoryLabel: "Watercolour Painting",
    medium: "Aquarelle on Fine Cotton Sheet",
    size: "A3 Format (11.7\" x 16.5\")",
    refCode: "REF #DEMO-WTR-01",
    image: "/assets/artworks/demo/demo_watercolour_landscape.svg",
    description: "Demonstration atmospheric watercolour landscape exploring wet-on-wet horizon washes, soft pigment diffusion, and natural paper grain textures.",
    specs: ["Fluid wet-on-wet washes", "Cold-pressed cotton paper grain", "Transparent pigment layers", "Acid-free museum backing"],
    featured: false,
  },
  {
    id: "art-demo-14",
    title: "Botanical Still Life in Aquarelle",
    category: "watercolour",
    categoryLabel: "Watercolour Painting",
    medium: "Watercolour on Cold-Pressed Rag",
    size: "12\" x 16\" Format",
    refCode: "REF #DEMO-WTR-02",
    image: "/assets/artworks/demo/demo_botanical_still_life.svg",
    description: "Demonstration botanical still life study illustrating delicate foliage contours, organic green washes, and subtle dry-brush detailing.",
    specs: ["Translucent green pigment washes", "Fine-point brushwork details", "100% rag archival paper", "UV-filtering framing glass ready"],
    featured: false,
  },
  {
    id: "art-demo-15",
    title: "Vibrant Chromatic Rhythm",
    category: "acrylic",
    categoryLabel: "Acrylic Painting",
    medium: "Heavy Body Acrylic on Canvas",
    size: "16\" x 20\" Stretched Canvas",
    refCode: "REF #DEMO-ACR-01",
    image: "/assets/artworks/demo/demo_acrylic_canvas.svg",
    description: "Demonstration contemporary acrylic canvas showcasing bold impasto textures, high-contrast color blocks, and structured geometric rhythms.",
    specs: ["Heavy body impasto texture", "Pre-primed heavy canvas", "UV satin protective varnish", "Gallery wrapped edges"],
    featured: false,
  },
  {
    id: "art-demo-16",
    title: "Geometric Modernist Study",
    category: "acrylic",
    categoryLabel: "Acrylic Painting",
    medium: "Acrylic on Stretched Canvas",
    size: "20\" x 20\" Square Canvas",
    refCode: "REF #DEMO-ACR-02",
    image: "/assets/artworks/demo/demo_geometric_harmony.svg",
    description: "Demonstration modernist acrylic composition exploring balanced geometric forms, muted earth tones, and clean hard-edge painting techniques.",
    specs: ["Precision hard-edge contours", "Satin archival finish", "Solid wood internal frame", "Modern minimalist aesthetic"],
    featured: false,
  },
  {
    id: "art-demo-17",
    title: "Contour Optical Study",
    category: "lineart",
    categoryLabel: "Line Art",
    medium: "Continuous Optical Line Ink",
    size: "A3 Format (11.7\" x 16.5\")",
    refCode: "REF #DEMO-LNE-01",
    image: "/assets/artworks/demo/demo_line_art.svg",
    description: "Demonstration optical line art composition utilizing rhythmic parallel line modulations to render depth and volume without traditional shading.",
    specs: ["Parallel line frequency variation", "High-contrast monochrome effect", "Heavyweight drawing sheet", "Contemporary graphic presence"],
    featured: false,
  },
  {
    id: "art-demo-18",
    title: "Monochrome Sentiment Study",
    category: "blood",
    categoryLabel: "Blood Art",
    medium: "Deep Carmine Organic Wash",
    size: "A4 Bespoke Presentation",
    refCode: "REF #DEMO-BLD-01",
    image: "/assets/artworks/demo/demo_blood_art.svg",
    description: "Demonstration monochrome study showcasing deep carmine pigment washes, layered tonal values, and archival sealant framing.",
    specs: ["Deep carmine tonal range", "Multi-layered sealant coating", "Archival acid-free paper", "Bespoke presentation matboard"],
    featured: false,
  },
  {
    id: "art-demo-19",
    title: "Lustrous Cast Resin Composition",
    category: "resin",
    categoryLabel: "Resin Art",
    medium: "Pigmented Resin with Gold Flakes",
    size: "12\" x 12\" Square Plaque",
    refCode: "REF #DEMO-RSN-01",
    image: "/assets/artworks/demo/demo_resin_art.svg",
    description: "Demonstration circular resin study highlighting high-gloss clarity, golden metallic swirls, and seamless fluid transitions.",
    specs: ["Crystal-clear cast resin", "Metallic golden pigment swirl", "Scratch-resistant topcoat", "Ready-to-hang wooden cradle"],
    featured: false,
  },
  {
    id: "art-demo-20",
    title: "Ornate Ceremonial Presentation Platter",
    category: "marriageessentials",
    categoryLabel: "Marriage Essentials",
    medium: "Brass-Gold Vessel with Pearl Accents",
    size: "Ceremonial Standard Platter",
    refCode: "REF #DEMO-ME-02",
    image: "/assets/artworks/demo/demo_ceremonial_platter.svg",
    description: "Demonstration handcrafted ceremonial platter featuring scalloped pearl garlands, metallic brass-gold finish, and celebratory gemstone motifs.",
    specs: ["Scalloped faux pearl borders", "Metallic golden vessel coating", "Ceremonial heirloom styling", "Studio demonstration craft"],
    featured: false,
  },
];

export interface ClientReview {
  id: string;
  author: string;
  location: string;
  review: string;
  source: string;
  rating: number;
}

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "demo-rev-1",
    author: "Sample Client A",
    location: "Demonstration Showcase",
    review: "Sample feedback for demonstration purposes only. Illustrates customer testimonial layout and star rating components in the interface.",
    source: "Portfolio Demo",
    rating: 5,
  },
  {
    id: "demo-rev-2",
    author: "Sample Client B",
    location: "Demonstration Showcase",
    review: "Sample feedback for demonstration purposes only. Demonstrates card layout and review citation styling.",
    source: "Portfolio Demo",
    rating: 5,
  },
  {
    id: "demo-rev-3",
    author: "Sample Client C",
    location: "Demonstration Showcase",
    review: "Sample feedback for demonstration purposes only. Validates responsiveness of multi-column customer feedback section.",
    source: "Portfolio Demo",
    rating: 5,
  },
];

/**
 * Builds demonstration inquiry link (external messaging disabled)
 */
export function buildWhatsAppLink(text: string): string {
  // Demonstration portfolio: external navigation disabled
  return "#demo-inquiry";
}

export function buildArtworkEnquiryText(artwork: GalleryArtwork): string {
  return `Atelier Demo — Simulated Commission Inquiry:
• Artwork: ${artwork.title}
• Medium: ${artwork.medium}
• Reference Code: ${artwork.refCode}
• Note: Demonstration mode only. No external message transmitted.`;
}

export function buildServiceEnquiryText(service: ServiceItem): string {
  return `Atelier Demo — Simulated Service Inquiry:
• Service: ${service.title} (${service.medium})
• Note: Demonstration mode only. No external message transmitted.`;
}
