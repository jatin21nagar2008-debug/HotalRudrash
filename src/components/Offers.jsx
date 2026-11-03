import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Check, 
  Copy, 
  CheckCheck, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { specialOffers } from '../data/hotelData';

export default function Offers({ onApplyOffer }) {
  const [copiedCode, setCopiedCode] = useState('');

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2500);
  };

  return (
    <section className="section-padding" id="offers" aria-label="Exclusive Offers and Packages">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Seasonal Privileges</span>
          </div>
          <h2 className="section-title">Special Curated Packages</h2>
          <p className="section-subtitle">
            Enhance your luxury journey with tailored hospitality packages offering complimentary gastronomic experiences, wellness credits, and extended relaxation.
          </p>
          <div style={{ marginTop: '0.85rem' }}>
            <span className="demo-pill">
              <AlertCircle size={12} />
              Sample Promotional Campaigns (Demo Content)
            </span>
          </div>
        </div>

        {/* Offers Grid with 3D Card Hover */}
        <div className="offers-grid">
          {specialOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="offer-card glass-panel"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              <div className="offer-img-wrap">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="offer-img"
                  loading="lazy"
                />
                <div className="offer-img-gradient" />
                <span className="offer-badge">{offer.discountBadge}</span>
              </div>

              <div className="offer-body">
                <span className="offer-tagline">
                  {offer.tagline}
                </span>

                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-desc">{offer.description}</p>

                {/* Inclusions */}
                <ul className="offer-perks-list">
                  {offer.perks.map((perk) => (
                    <li key={perk} className="offer-perk-item">
                      <Check size={14} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* Offer Action Footer */}
                <div className="offer-action-bar">
                  <div className="offer-code-box">
                    <span className="offer-code-label">PROMO CODE:</span>
                    <button
                      className="offer-copy-btn"
                      onClick={() => handleCopy(offer.code)}
                      title="Copy coupon code"
                    >
                      <span className="offer-code-text">{offer.code}</span>
                      {copiedCode === offer.code ? (
                        <CheckCheck size={14} color="#22c55e" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>

                  <button
                    className="btn btn-gold btn-sm"
                    onClick={() => onApplyOffer && onApplyOffer(offer)}
                    style={{ width: '100%', marginTop: '0.85rem' }}
                  >
                    <span>Claim Package</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
