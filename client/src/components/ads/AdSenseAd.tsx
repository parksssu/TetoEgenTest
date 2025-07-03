import React, { useEffect } from 'react';
import { AD_CONFIG, AdSlotType } from './ad-config';

interface AdSenseAdProps {
  adSlot: AdSlotType;
  format: 'horizontal' | 'square' | 'vertical';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({ adSlot, format, className = '' }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  const getAdStyle = () => {
    switch (format) {
      case 'horizontal':
        return { display: 'block', width: '100%', height: '90px' };
      case 'square':
        return { display: 'block', width: '300px', height: '250px' };
      case 'vertical':
        return { display: 'block', width: '160px', height: '600px' };
      default:
        return { display: 'block' };
    }
  };

  const getAdFormat = () => {
    switch (format) {
      case 'horizontal':
        return 'auto';
      case 'square':
        return 'rectangle';
      case 'vertical':
        return 'vertical';
      default:
        return 'auto';
    }
  };

  return (
    <div className={`ad-container ${className}`}>
      <div className="text-center text-xs text-gray-400 mb-1">광고</div>
      <ins
        className="adsbygoogle"
        style={getAdStyle()}
        data-ad-client={AD_CONFIG.CLIENT_ID}
        data-ad-slot={AD_CONFIG.AD_SLOTS[adSlot]}
        data-ad-format={getAdFormat()}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;