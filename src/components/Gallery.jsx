import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Eye
} from 'lucide-react';
import { galleryItems } from '../data/hotelData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'dining', label: 'Dining & Bars' },
    { id: 'wellness', label: 'Pool & Wellness' },
    { id: 'exterior', label: 'Architecture & Lobby' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = useCallback(() => {
    setActiveLightboxIndex((prev) => 
      prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setActiveLightboxIndex((prev) => 
      prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [filteredItems.length]);

  const handleClose = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleClose, handlePrev, handleNext]);

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section className="section-padding" id="gallery" aria-label="Visual Hotel Gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Visual Showcase</span>
          </div>
          <h2 className="section-title">A Glimpse of Grandeur</h2>
          <p className="section-subtitle">
            Explore the architectural splendor, illuminated palace facade, and ambient suites of Hotel Rudraaksh Palace.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="filter-tabs-wrapper" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveLightboxIndex(null);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Photo Grid with Hover Sheen */}
        <motion.div 
          className="gallery-grid"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-card glass-panel"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setActiveLightboxIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`Open photo: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setActiveLightboxIndex(index);
                }}
                layout
              >
                <div className="gallery-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-cat-pill">{item.categoryLabel}</span>
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <div className="gallery-zoom-badge">
                      <Eye size={14} />
                      <span>View Fullscreen</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {currentItem && (
            <motion.div
              className="modal-overlay gallery-lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              role="dialog"
              aria-modal="true"
              aria-label="Image Lightbox"
            >
              <button
                className="lightbox-close-btn"
                onClick={handleClose}
                aria-label="Close Lightbox"
              >
                <X size={26} />
              </button>

              <button
                className="lightbox-nav-btn lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous Photo"
              >
                <ChevronLeft size={30} />
              </button>

              <button
                className="lightbox-nav-btn lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next Photo"
              >
                <ChevronRight size={30} />
              </button>

              <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="lightbox-img"
                />
                <div className="lightbox-caption-bar">
                  <div>
                    <span className="demo-pill" style={{ marginBottom: '0.4rem' }}>
                      {currentItem.categoryLabel}
                    </span>
                    <h3 className="lightbox-title">{currentItem.title}</h3>
                    <p className="lightbox-desc">{currentItem.caption}</p>
                  </div>
                  <span className="lightbox-counter">
                    {activeLightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
