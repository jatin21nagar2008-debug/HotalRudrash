import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

/**
 * SiteBackground Component
 * Renders the hotel's authentic night facade
 * as the main website background with rich multi-stage dark luxury overlays,
 * warm gold ambient glows, and crisp HD presentation.
 * Ensures maximum text legibility and ultra-premium atmosphere.
 */
export default function SiteBackground() {
  return (
    <div className="site-luxury-bg-root" aria-hidden="true">
      {/* Background Palace Image - High Resolution Enhanced */}
      <img
        src={getAssetUrl('/images/rudraaksh_facade_lights.png')}
        alt="Hotel Rudraaksh Palace"
        className="site-luxury-bg-image"
        loading="eager"
        fetchPriority="high"
      />

      {/* Multi-layered dark luxury gradient overlay for pristine text contrast */}
      <div className="site-luxury-bg-overlay" />

      {/* Ambient warm gold lighting highlights */}
      <div className="site-luxury-bg-glow" />

      {/* Subtle fine vignette */}
      <div className="site-luxury-bg-vignette" />
    </div>
  );
}

