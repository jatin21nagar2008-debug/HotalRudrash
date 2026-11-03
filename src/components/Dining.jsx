import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Clock, 
  Info, 
  BookOpen
} from 'lucide-react';
import { diningFeatures } from '../data/hotelData';
import MenuModal from './MenuModal';

export default function Dining() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <section className="section-padding" id="dining" aria-label="Restaurant and Dining">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Gastronomy & Libations</span>
          </div>
          <h2 className="section-title">Epicurean Dining Experiences</h2>
          <p className="section-subtitle">
            Indulge your palate in culinary celebrations crafted by master chefs, from royal candlelit banquets to artisanal botanical cocktails and sunlit garden patisseries.
          </p>
          <div style={{ marginTop: '0.85rem' }}>
            <span className="demo-pill">
              <Info size={12} />
              Sample Culinary Showcase & Representative Offerings
            </span>
          </div>
        </div>

        {/* Dining Venues Grid with 3D Card Hover */}
        <div className="dining-showcase-grid">
          {diningFeatures.map((venue, index) => (
            <motion.div
              key={venue.id}
              className="dining-card glass-panel"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              <div className="dining-card-img-wrap">
                <img
                  src={venue.image}
                  alt={`${venue.name} atmosphere`}
                  className="dining-card-img"
                  loading="lazy"
                />
                <div className="dining-card-gradient" />
                <span className="dining-type-badge">{venue.type}</span>
              </div>

              <div className="dining-card-body">
                <h3 className="dining-card-title">{venue.name}</h3>

                <div className="dining-card-timings">
                  <div className="dining-timing-row">
                    <Clock size={13} color="var(--gold-primary)" />
                    <span>{venue.timings}</span>
                  </div>
                  <span className="dining-dress-code">Dress: {venue.dressCode}</span>
                </div>

                <p className="dining-card-desc">{venue.description}</p>

                <div className="dining-card-cta-wrap">
                  <button
                    className="btn btn-outline-gold btn-sm"
                    style={{ width: '100%' }}
                    onClick={() => setMenuModalOpen(true)}
                  >
                    <BookOpen size={14} />
                    <span>Explore Tasting Menu</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Sample Dining Menu */}
        <MenuModal
          isOpen={menuModalOpen}
          onClose={() => setMenuModalOpen(false)}
        />
      </div>
    </section>
  );
}
