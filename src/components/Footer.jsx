import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Send, 
  Check, 
  Phone,
  Mail
} from 'lucide-react';
import { hotelInfo } from '../data/hotelData';
import HotelLogo from './HotelLogo';
import { WhatsAppIcon, InstagramIcon } from './Navbar';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

const currentYear = 2026;

export default function Footer({ onOpenBooking }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Hotel%20Rudraaksh%20Palace%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay";

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" role="contentinfo">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-logo-link" onClick={scrollToTop}>
              <HotelLogo size="md" showText={true} />
            </Link>

            <p className="footer-bio-text">
              {hotelInfo.subTagline} An exclusive sovereign sanctuary celebrating modern luxury, bespoke hospitality, and unforgettable celebrations.
            </p>

            {/* Official Social Links with Brand Colors & Glowing Hover */}
            <div className="social-links-row" aria-label="Official Social Channels">
              {/* WhatsApp Official Button */}
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn social-btn-whatsapp" 
                aria-label="Hotel Rudraaksh Palace on WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon size={18} color="#ffffff" />
              </a>

              {/* Instagram Official Button */}
              <a 
                href={hotelInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn social-btn-instagram" 
                aria-label="Hotel Rudraaksh Palace on Instagram"
                title="Follow on Instagram"
              >
                <InstagramIcon size={18} color="#ffffff" />
              </a>

              {/* Facebook */}
              <a 
                href="#facebook" 
                className="social-icon-btn" 
                aria-label="Hotel Rudraaksh Palace on Facebook"
                title="Facebook"
              >
                <FacebookIcon />
              </a>

              {/* Twitter */}
              <a 
                href="#twitter" 
                className="social-icon-btn" 
                aria-label="Hotel Rudraaksh Palace on Twitter"
                title="Twitter"
              >
                <TwitterIcon />
              </a>

              {/* YouTube */}
              <a 
                href="#youtube" 
                className="social-icon-btn" 
                aria-label="Hotel Rudraaksh Palace on YouTube"
                title="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>

            {/* Instagram Quick Handle Tag */}
            <div className="footer-social-meta">
              <a 
                href={hotelInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-handle-link"
              >
                <span className="insta-dot-badge" />
                <span>Instagram: {hotelInfo.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Showcase</Link></li>
              <li><Link to="/about">About Our Heritage</Link></li>
              <li><Link to="/rooms">Rooms & Signature Suites</Link></li>
              <li><Link to="/dining">Dining & Mixology</Link></li>
              <li><Link to="/gallery">Photography Gallery</Link></li>
              <li><Link to="/contact">Concierge & Directions</Link></li>
            </ul>
          </div>

          {/* Column 3: Amenities & Experiences */}
          <div>
            <h4 className="footer-col-title">Experiences</h4>
            <ul className="footer-links-list">
              <li><a href="#amenities">Lotus Spa & Wellness</a></li>
              <li><a href="#dining">The Rudrash Pavilion</a></li>
              <li><a href="#amenities">Heated Infinity Pool</a></li>
              <li><a href="#amenities">Grand Ballroom & Banquets</a></li>
              <li><a href="#rooms">Executive Club Lounge</a></li>
              <li>
                <button 
                  onClick={onOpenBooking} 
                  className="footer-book-link"
                >
                  Book Direct & Save
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Inquiries */}
          <div>
            <h4 className="footer-col-title">Exclusive Dispatch</h4>
            <p className="footer-newsletter-desc">
              Receive seasonal privilege invitations, limited culinary tastings, and private suite offers.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form" noValidate>
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-input"
                  aria-label="Email for dispatch newsletter"
                />
                <button 
                  type="submit" 
                  className="newsletter-submit-btn" 
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={15} />
                </button>
              </div>

              {newsletterError && (
                <p className="newsletter-error-msg">{newsletterError}</p>
              )}

              {newsletterSubscribed && (
                <div className="newsletter-success-box">
                  <Check size={14} color="var(--gold-primary)" />
                  <span>Welcome to the Rudraaksh Guest Circle.</span>
                </div>
              )}
            </form>

            <div className="footer-direct-contact">
              <div className="footer-contact-row">
                <Phone size={13} color="var(--gold-primary)" />
                <span>{hotelInfo.phone}</span>
              </div>
              <div className="footer-contact-row">
                <Mail size={13} color="var(--gold-primary)" />
                <span>{hotelInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back To Top Floating Action */}
        <div className="footer-back-to-top-wrap">
          <button 
            onClick={scrollToTop} 
            className="footer-back-to-top-btn" 
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
            <span>Return to Top</span>
          </button>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} <strong>{hotelInfo.name}</strong>. All rights reserved.
            <span className="footer-tagline-sub">
              {hotelInfo.tagline}
            </span>
          </div>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Hospitality</a>
            <span>•</span>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
