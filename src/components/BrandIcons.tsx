import React from 'react';

interface BrandIconProps {
  className?: string;
  size?: number;
}

/**
 * Official WhatsApp Brand Icon:
 * Vibrant WhatsApp green (#25D366) speech bubble with white telephone handset.
 * Recognizable at all sizes and distinct on both light and dark backgrounds.
 */
export const WhatsAppIcon: React.FC<BrandIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"
      fill="#25D366"
    />
    <path
      d="M17.47 14.39C17.18 14.25 15.73 13.54 15.46 13.44C15.19 13.34 14.99 13.29 14.8 13.58C14.6 13.88 14.03 14.54 13.85 14.74C13.68 14.94 13.5 14.96 13.21 14.82C12.92 14.68 12 14.38 10.92 13.42C10.08 12.67 9.52 11.75 9.35 11.46C9.18 11.17 9.33 11.02 9.48 10.87C9.61 10.74 9.77 10.53 9.92 10.36C10.06 10.19 10.11 10.06 10.21 9.87C10.31 9.67 10.26 9.5 10.19 9.36C10.11 9.21 9.53 7.78 9.29 7.19C9.05 6.62 8.81 6.7 8.63 6.69C8.46 6.68 8.27 6.68 8.07 6.68C7.88 6.68 7.57 6.75 7.3 7.04C7.04 7.33 6.3 8.02 6.3 9.44C6.3 10.86 7.33 12.23 7.48 12.43C7.62 12.62 9.52 15.55 12.44 16.81C13.13 17.11 13.67 17.29 14.09 17.42C14.79 17.65 15.42 17.62 15.93 17.54C16.49 17.46 17.66 16.83 17.9 16.15C18.15 15.47 18.15 14.89 18.07 14.77C18 14.65 17.8 14.54 17.47 14.39Z"
      fill="white"
    />
  </svg>
);

/**
 * Official Instagram Brand Icon:
 * Authentic radial/linear brand gradient with white camera glyph.
 */
export const InstagramIcon: React.FC<BrandIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ig-brand-gradient" x1="15%" y1="90%" x2="90%" y2="15%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="10%" stopColor="#FCAF45" />
        <stop offset="30%" stopColor="#F77737" />
        <stop offset="50%" stopColor="#F56040" />
        <stop offset="70%" stopColor="#FD1D1D" />
        <stop offset="85%" stopColor="#E1306C" />
        <stop offset="100%" stopColor="#C13584" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-brand-gradient)" />
    <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
    <circle cx="12" cy="12" r="3.2" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
    <circle cx="15.8" cy="8.2" r="1" fill="#FFFFFF" />
  </svg>
);

/**
 * Official Google Multi-color Brand Icon:
 * Authentic 4-color Google "G" for Google Reviews & Business Listing.
 */
export const GoogleGIcon: React.FC<BrandIconProps> = ({ className = 'w-4 h-4' }) => (
  <svg 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path 
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
      fill="#4285F4"
    />
    <path 
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
      fill="#34A853"
    />
    <path 
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" 
      fill="#FBBC05"
    />
    <path 
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" 
      fill="#EA4335"
    />
  </svg>
);

/**
 * Official Google Maps Red Pin Icon:
 * Authentic map pin for studio directions.
 */
export const GoogleMapsPinIcon: React.FC<BrandIconProps> = ({ className = 'w-4 h-4' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path 
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
      fill="#EA4335"
    />
    <circle cx="12" cy="9" r="2.8" fill="#FFFFFF" />
  </svg>
);
