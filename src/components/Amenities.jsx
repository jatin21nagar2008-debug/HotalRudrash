import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Wifi, 
  UtensilsCrossed, 
  Clock, 
  Car, 
  Wind, 
  Users, 
  ShieldCheck, 
  Briefcase, 
  Waves, 
  Sparkles as SparklesIcon,
  Info,
  ChevronDown
} from 'lucide-react';
import { amenitiesList } from '../data/hotelData';

export default function Amenities() {
  const [expandedId, setExpandedId] = useState(null);

  const getAmenityIcon = (iconName) => {
    switch (iconName) {
      case 'Wifi': return <Wifi size={24} />;
      case 'UtensilsCrossed': return <UtensilsCrossed size={24} />;
      case 'Clock': return <Clock size={24} />;
      case 'Car': return <Car size={24} />;
      case 'Wind': return <Wind size={24} />;
      case 'Users': return <Users size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Briefcase': return <Briefcase size={24} />;
      case 'Waves': return <Waves size={24} />;
      default: return <SparklesIcon size={24} />;
    }
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section-padding" id="amenities" aria-label="Hotel Amenities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Curated Privileges</span>
          </div>
          <h2 className="section-title">World-Class Amenities</h2>
          <p className="section-subtitle">
            Designed to anticipate your every desire, from high-speed fiber connectivity to relaxing holistic spa rituals and 24-hour dedicated butler care.
          </p>
          <div style={{ marginTop: '0.85rem' }}>
            <span className="demo-pill">
              <Info size={12} />
              Sample Hotel Facilities Catalog (Editable by Hotelier)
            </span>
          </div>
        </div>

        {/* Amenities Grid with 3D Card Hover */}
        <div className="amenities-grid">
          {amenitiesList.map((amenity, index) => {
            const isExpanded = expandedId === amenity.id;
            return (
              <motion.div
                key={amenity.id}
                className={`amenity-card glass-panel ${isExpanded ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.015 }}
                layout
              >
                <div className="amenity-card-header">
                  <div className="amenity-icon-box">
                    {getAmenityIcon(amenity.icon)}
                  </div>
                  <span className="amenity-category-badge">{amenity.category}</span>
                </div>

                <h3 className="amenity-name">{amenity.name}</h3>
                <p className="amenity-short-desc">{amenity.shortDesc}</p>

                {/* Expandable Detailed Overview */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="amenity-detail-box"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="amenity-detail-text">{amenity.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  className="amenity-toggle-btn"
                  onClick={() => toggleExpand(amenity.id)}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? 'Less Details' : 'Explore Privilege'}</span>
                  <ChevronDown
                    size={15}
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
