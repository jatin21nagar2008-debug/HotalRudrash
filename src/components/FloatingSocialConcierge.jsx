import React from 'react';
import { motion } from 'framer-motion';
import { hotelInfo } from '../data/hotelData';

// Official SVG WhatsApp Icon
export const WhatsAppIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Official SVG Instagram Icon
export const InstagramIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function FloatingSocialConcierge() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Hotel%20Rudraaksh%20Palace%2C%20I%20would%20like%20to%20inquire%20about%20a%20room%20reservation";

  return (
    <div className="floating-social-dock" aria-label="Quick Connect Concierge">
      <div className="floating-social-buttons">
        {/* WhatsApp Floating Action Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp"
          aria-label="Chat with Hotel Rudraaksh Palace on WhatsApp"
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.94 }}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <span className="floating-pulse-ring whatsapp-ring" />
          <WhatsAppIcon size={24} color="#ffffff" />
          <span className="floating-tooltip">WhatsApp Concierge</span>
        </motion.a>

        {/* Instagram Floating Action Button */}
        <motion.a
          href={hotelInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-instagram"
          aria-label="Follow Hotel Rudraaksh Palace on Instagram"
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.94 }}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <span className="floating-pulse-ring insta-ring" />
          <InstagramIcon size={24} color="#ffffff" />
          <span className="floating-tooltip">Official Instagram</span>
        </motion.a>
      </div>
    </div>
  );
}
