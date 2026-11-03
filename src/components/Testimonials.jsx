import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  AlertCircle 
} from 'lucide-react';
import { testimonials } from '../data/hotelData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      className="section-padding" 
      id="testimonials" 
      aria-label="Guest Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Guest Impressions</span>
          </div>
          <h2 className="section-title">Words From Our Cherished Guests</h2>
          <p className="section-subtitle">
            Read representative feedback and heartfelt impressions from guests who experienced the serene hospitality of Hotel Rudraaksh Palace.
          </p>
          <div style={{ marginTop: '0.85rem' }}>
            <span className="demo-pill">
              <AlertCircle size={12} />
              Demonstration Testimonials (Illustrative Placeholder Feedback)
            </span>
          </div>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="testimonials-carousel-box">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="testimonial-card glass-panel"
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-quote-icon-wrap">
                <Quote size={36} color="var(--gold-primary)" />
              </div>

              {/* Star Rating */}
              <div className="testimonial-stars-row" aria-label={`${current.rating} stars rating`}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--gold-primary)" color="var(--gold-primary)" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote-text">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="testimonial-author-row">
                <div className="testimonial-avatar-wrap">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="testimonial-avatar"
                  />
                </div>
                <div>
                  <div className="testimonial-author-name">{current.name}</div>
                  <div className="testimonial-author-role">{current.role}</div>
                  <span className="testimonial-stay-badge">{current.stayType}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="testimonial-controls-bar">
            <button
              className="testimonial-nav-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-dots-row">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  className={`testimonial-dot ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonial-nav-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
