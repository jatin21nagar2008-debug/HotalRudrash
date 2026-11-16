import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export default function HotelLogo({ size = 'md', showText = true }) {
  const isLarge = size === 'lg';

  return (
    <div className={`hotel-logo-container ${isLarge ? 'logo-lg' : 'logo-md'}`}>
      {/* Real Hotel Image Logo Thumbnail with Gold Glow */}
      <div className="hotel-logo-img-wrapper">
        <img
          src={getAssetUrl('/images/rudraaksh_palace_entrance.png')}
          alt="Hotel Rudraaksh Palace Logo"
          className="hotel-logo-img"
        />
      </div>

      {showText && (
        <div className="hotel-logo-text-block">
          <span className="hotel-logo-title">
            Hotel Rudraaksh Palace
          </span>
          <span className="hotel-logo-subtitle">
            Luxury Hotel & Suites
          </span>
        </div>
      )}
    </div>
  );
}
