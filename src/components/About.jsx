import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { hotelStats } from '../data/hotelData';
import { getAssetUrl } from '../utils/assetUrl';

export default function About() {
  return (
    <section className="section-padding" id="about" aria-label="About Hotel Rudrash">
      <div className="container">
        <div className="about-grid">
          {/* Left Visual Column */}
          <motion.div
            className="about-visual-column"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-primary-wrap">
              <img
                src={getAssetUrl('/images/rudraaksh_palace_entrance.png')}
                alt="Hotel Rudraaksh Palace grand entrance foyer and architecture"
                className="about-image-primary"
                loading="lazy"
              />
              <div className="about-image-gradient-overlay" />
            </div>

            {/* Floating Luxury Hospitality Card with 3D feel */}
            <motion.div 
              className="about-floating-card glass-panel"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="about-card-badge-row">
                <Award size={18} color="var(--gold-primary)" />
                <span className="about-card-badge-text">
                  Hospitality Excellence
                </span>
              </div>
              <p className="about-card-headline">
                Where Every Guest is Celebrated Royalty
              </p>
              <span className="demo-pill">Hotel Rudraaksh Palace</span>
            </motion.div>
          </motion.div>

          {/* Right Typography & Story Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-eyebrow">
              <Sparkles size={14} />
              <span>About Hotel Rudraaksh Palace</span>
            </div>

            <h2 className="section-title section-title-left">
              Where Comfort Meets <span className="gold-gradient-text">Exceptional Hospitality</span>
            </h2>

            <p className="about-lead-para">
              At <strong>Hotel Rudraaksh Palace</strong>, we believe true luxury is never merely about grand chandeliers or opulent architecture—it is discovered in thoughtful warmth, intuitive attention to detail, and creating an ambiance where guests instantly feel at home.
            </p>

            <p className="about-body-para">
              Nestled in a prime enclave, our sanctuary brings together bespoke contemporary design, world-class culinary journeys, serene wellness sanctuaries, and white-glove hospitality. Whether traveling for corporate distinction, a family reunion, or a romantic escape, our dedication remains steadfast: making every stay memorable.
            </p>

            {/* Feature Highlights Pills */}
            <div className="about-features-grid">
              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <ShieldCheck size={18} color="var(--gold-primary)" />
                </div>
                <span className="about-feature-title">Uncompromising Privacy</span>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <HeartHandshake size={18} color="var(--gold-primary)" />
                </div>
                <span className="about-feature-title">Bespoke Butler Care</span>
              </div>
            </div>

            {/* Animated Statistics */}
            <div className="about-stats-wrap">
              <div className="about-stats-header">
                <span className="about-stats-label">
                  Hotel Performance Benchmarks
                </span>
                <span className="demo-pill">Demo Presentation Metrics</span>
              </div>

              <div className="about-stats-grid">
                {hotelStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="stat-item-card glass-panel"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="stat-value gold-gradient-text">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-sub">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
