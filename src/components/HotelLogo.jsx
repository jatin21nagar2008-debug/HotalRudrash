import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export default function HotelLogo({ size = 'md', showText = true }) {
  const isLarge = size === 'lg';
  const imgDimension = isLarge ? 48 : 40;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
      {/* Real Hotel Image Logo Thumbnail with Gold Glow */}
      <div
        style={{
          width: `${imgDimension}px`,
          height: `${imgDimension}px`,
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1.5px solid var(--gold-primary)',
          boxShadow: '0 0 16px rgba(212, 175, 55, 0.45), 0 2px 8px rgba(0, 0, 0, 0.6)',
          background: '#0a0c12',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        <img
          src={getAssetUrl('/images/rudraaksh_palace_entrance.png')}
          alt="Hotel Rudraaksh Palace Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', flexShrink: 0 }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isLarge ? '1.35rem' : '1.15rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: '#ffffff',
              lineHeight: 1.15,
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Hotel Rudraaksh Palace
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isLarge ? '0.72rem' : '0.62rem',
              letterSpacing: '0.24em',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginTop: '0.2rem',
              whiteSpace: 'nowrap',
            }}
          >
            Luxury Hotel & Suites
          </span>
        </div>
      )}
    </div>
  );
}
