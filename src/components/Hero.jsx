import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Compass, 
  Calendar, 
  ArrowRight, 
  CheckCircle2,
  Star,
  Shield,
  Award
} from 'lucide-react';
import { hotelInfo } from '../data/hotelData';
import { WhatsAppIcon, InstagramIcon } from './Navbar';
import { getAssetUrl } from '../utils/assetUrl';

const realPhotos = [
  {
    id: 1,
    title: 'Illuminated Palace Entrance',
    desc: 'Grand decorated reception and illuminated hotel marquee',
    badge: 'Palatial Grandeur',
    src: getAssetUrl('/images/rudraaksh_palace_entrance.png'),
  },
  {
    id: 2,
    title: 'Festive Facade by Night',
    desc: 'Luminous fairy light decorations on the grand multi-story facade',
    badge: 'Illuminated Night View',
    src: getAssetUrl('/images/rudraaksh_facade_lights.png'),
  },
  {
    id: 3,
    title: 'Contemporary Glass Elevation',
    desc: 'Modern architecture with glowing blue crown neon lettering',
    badge: 'Modern Architecture',
    src: getAssetUrl('/images/rudraaksh_blue_exterior.png'),
  },
];

export default function Hero({ onOpenBooking, onExploreRooms }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const currentPhoto = realPhotos[activePhotoIdx];

  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Hotel%20Rudraaksh%20Palace%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay";

  return (
    <section className="hero-prime-wrapper" id="home" aria-label="Hero Showcase">
      {/* Subtle Ambient Radial Lighting Glow */}
      <div className="hero-bg-prime">
        <div className="hero-backdrop-overlay" />
        <div className="hero-radial-glow" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-prime-grid">
          {/* Left Column: Headlines, Trust Badges, Buttons (Valora Heights Style) */}
          <motion.div
            className="hero-prime-text-col"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Luxury Brand Eyebrow Badge */}
            <motion.div 
              className="hero-badge-wrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <div className="hero-badge">
                <Sparkles size={14} color="var(--gold-primary)" />
                <span>Hotel Rudraaksh Palace • 5-Star Luxury Retreat</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline (Valora Heights Aesthetic) */}
            <motion.h1 
              className="hero-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              Experience Luxury.{' '}
              <span className="gold-gradient-text hero-headline-italic">Feel at Home.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="hero-subheadline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              Welcome to <strong>Hotel Rudraaksh Palace</strong>. Discover world-class luxury, opulent suites, grand wedding banquets, and unforgettable royal hospitality in an atmosphere of timeless elegance.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
            >
              <motion.button 
                className="btn btn-gold btn-lg-glow" 
                onClick={onOpenBooking}
                id="hero-book-stay-btn"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calendar size={18} />
                <span>Book Your Stay</span>
              </motion.button>

              <motion.button 
                className="btn btn-outline-gold" 
                onClick={onExploreRooms}
                id="hero-explore-rooms-btn"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Compass size={18} />
                <span>Explore Suites</span>
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>

            {/* Instant Connect Brand Pills: WhatsApp & Instagram */}
            <motion.div 
              className="hero-social-connect-bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              <span className="hero-social-label">
                Instant Concierge:
              </span>

              {/* WhatsApp Pill */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-pill nav-whatsapp-pill"
                title="Chat with Hotel Rudraaksh Palace on WhatsApp"
              >
                <span className="nav-social-icon-circle whatsapp-circle">
                  <WhatsAppIcon size={14} color="#ffffff" />
                </span>
                <span>WhatsApp Desk</span>
              </a>

              {/* Instagram Pill */}
              <a
                href={hotelInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-pill nav-instagram-pill"
                title="Follow Hotel Rudraaksh Palace on Instagram"
              >
                <span className="nav-social-icon-circle insta-circle">
                  <InstagramIcon size={14} color="#ffffff" />
                </span>
                <span>{hotelInfo.instagramHandle}</span>
              </a>
            </motion.div>

            {/* Key Trust Signals Ribbon */}
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <Star size={14} fill="var(--gold-primary)" color="var(--gold-primary)" />
                <span>5-Star Luxury Hospitality</span>
              </div>
              <span className="hero-trust-separator">•</span>
              <div className="hero-trust-item">
                <Shield size={14} color="var(--gold-primary)" />
                <span>Direct Booking Guarantee</span>
              </div>
              <span className="hero-trust-separator">•</span>
              <div className="hero-trust-item">
                <Award size={14} color="var(--gold-primary)" />
                <span>Top Guest Rated</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Crisp Hotel Showcase Card with 3D Specular Highlight */}
          <motion.div
            className="hero-showcase-card-col"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-showcase-card glass-panel-elevated">
              {/* Card Header Tag */}
              <div className="hero-showcase-header">
                <div className="hero-verified-tag">
                  <CheckCircle2 size={15} color="var(--gold-primary)" />
                  <span>Verified Hotel Rudraaksh Palace</span>
                </div>
                <span className="demo-pill">{currentPhoto.badge}</span>
              </div>

              {/* Main Image Frame (Crisp Native High-Res) */}
              <div className="hero-showcase-frame">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto.id}
                    src={currentPhoto.src}
                    alt={currentPhoto.title}
                    className="hero-showcase-img"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45 }}
                  />
                </AnimatePresence>
                <div className="hero-showcase-img-overlay" />
                <div className="hero-showcase-caption">
                  <div className="hero-caption-title">
                    {currentPhoto.title}
                  </div>
                  <div className="hero-caption-desc">
                    {currentPhoto.desc}
                  </div>
                </div>
              </div>

              {/* Thumbnail Selector to Switch Real Photos */}
              <div className="hero-thumb-grid">
                {realPhotos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`hero-thumb-btn ${activePhotoIdx === idx ? 'active' : ''}`}
                    aria-label={`View ${photo.title}`}
                  >
                    <img src={photo.src} alt={photo.title} />
                    {activePhotoIdx === idx && (
                      <span className="hero-thumb-active-dot" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
