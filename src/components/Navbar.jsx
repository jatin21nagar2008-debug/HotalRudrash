import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  ChevronRight,
  Phone,
  X
} from 'lucide-react';
import { hotelInfo } from '../data/hotelData';
import HotelLogo from './HotelLogo';

// Official SVG WhatsApp Icon with crisp high-contrast path
export const WhatsAppIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Official SVG Instagram Icon
export const InstagramIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key & manage body scroll
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Suites', path: '/rooms', anchor: '#rooms' },
    { name: 'Dining', path: '/dining', anchor: '#dining' },
    { name: 'Amenities', path: '/#amenities', anchor: '#amenities' },
    { name: 'Gallery', path: '/gallery', anchor: '#gallery' },
    { name: 'About', path: '/about', anchor: '#about' },
    { name: 'Contact', path: '/contact', anchor: '#contact' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (item.anchor && location.pathname === '/') {
      const element = document.querySelector(item.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(item.path);
  };

  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Hotel%20Rudraaksh%20Palace%2C%20I%20would%20like%20to%20inquire%20about%20a%20room%20reservation";

  return (
    <>
      {/* Main Luxury Sticky Navbar */}
      <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo - Fixed Left, Never Collides */}
          <Link
            to="/"
            className="navbar-brand-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <HotelLogo size="md" showText={true} />
          </Link>

          {/* Center Navigation Links - Clean Spacing & Non-wrapping */}
          <nav aria-label="Main Navigation" className="navbar-nav-center">
            <ul className="nav-links-desktop">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name} className={`nav-link-item ${isActive ? 'active' : ''}`}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className="nav-link-btn"
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.span
                          className="nav-active-indicator"
                          layoutId="navActiveIndicator"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Buttons Group - Official WhatsApp & Instagram Badges & Book Stay */}
          <div className="nav-actions-group">
            {/* WhatsApp Official Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-pill nav-whatsapp-pill"
              title="Chat with Hotel Rudraaksh Palace on WhatsApp"
              aria-label="WhatsApp Chat"
            >
              <span className="nav-social-icon-circle whatsapp-circle">
                <WhatsAppIcon size={14} color="#ffffff" />
              </span>
              <span className="nav-social-label">WhatsApp</span>
            </a>

            {/* Instagram Official Button */}
            <a
              href={hotelInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-pill nav-instagram-pill"
              title="Follow Hotel Rudraaksh Palace on Instagram"
              aria-label="Instagram Profile"
            >
              <span className="nav-social-icon-circle insta-circle">
                <InstagramIcon size={14} color="#ffffff" />
              </span>
              <span className="nav-social-label">Instagram</span>
            </a>

            {/* Book Now Button with Gold Gradient */}
            <button
              className="btn-nav-book"
              onClick={onOpenBooking}
              id="navbar-book-now-btn"
              aria-label="Book your stay"
            >
              <Calendar size={14} />
              <span>Book Stay</span>
            </button>

            {/* Mobile Hamburger Button with Animated Morphing Lines */}
            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="modal-overlay mobile-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside
              className="mobile-nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              role="dialog"
              aria-label="Mobile Navigation"
            >
              <div className="mobile-drawer-top">
                <div className="mobile-nav-header">
                  <HotelLogo size="sm" showText={true} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="mobile-close-btn"
                    aria-label="Close mobile menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <ul className="mobile-nav-links">
                  {navItems.map((item, idx) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 + 0.05 }}
                      >
                        <button
                          onClick={() => handleNavClick(item)}
                          className={`mobile-nav-link-btn ${isActive ? 'active' : ''}`}
                        >
                          <span className="mobile-nav-link-text">
                            {item.name === 'Suites' ? 'Rooms & Suites' : item.name}
                          </span>
                          <ChevronRight size={16} className="mobile-nav-chevron" />
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div className="mobile-drawer-bottom">
                {/* Mobile Official WhatsApp & Instagram Full Pills */}
                <div className="mobile-social-grid">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-social-pill nav-whatsapp-pill"
                    style={{ justifyContent: 'center', padding: '0.65rem 0.85rem' }}
                  >
                    <span className="nav-social-icon-circle whatsapp-circle">
                      <WhatsAppIcon size={16} color="#ffffff" />
                    </span>
                    <span style={{ display: 'inline' }}>WhatsApp</span>
                  </a>

                  <a
                    href={hotelInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-social-pill nav-instagram-pill"
                    style={{ justifyContent: 'center', padding: '0.65rem 0.85rem' }}
                  >
                    <span className="nav-social-icon-circle insta-circle">
                      <InstagramIcon size={16} color="#ffffff" />
                    </span>
                    <span style={{ display: 'inline' }}>Instagram</span>
                  </a>
                </div>

                {/* 24/7 Front Desk Hotline */}
                <div className="mobile-contact-card">
                  <div className="mobile-contact-label">
                    <Phone size={13} color="var(--gold-primary)" />
                    <span>24/7 Front Desk Concierge</span>
                  </div>
                  <a href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`} className="mobile-phone-link">
                    {hotelInfo.phone}
                  </a>
                </div>

                {/* Book Stay CTA */}
                <button
                  className="btn btn-gold mobile-reserve-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                >
                  <Calendar size={16} />
                  <span>Reserve Your Stay</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
