import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UtensilsCrossed, AlertCircle, Check } from 'lucide-react';
import { sampleMenu } from '../data/hotelData';

export default function MenuModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('starters');
  const [tableInquirySent, setTableInquirySent] = useState(false);

  if (!isOpen) return null;

  const currentItems = sampleMenu[activeTab] || [];

  const handleInquiry = () => {
    setTableInquirySent(true);
    setTimeout(() => {
      setTableInquirySent(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div 
        className="modal-overlay" 
        onClick={onClose} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="menu-modal-title"
      >
        <motion.div
          className="modal-content"
          style={{ maxWidth: '840px', padding: '2.5rem 2rem' }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="lightbox-close-btn"
            aria-label="Close Tasting Menu"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="section-eyebrow">
              <UtensilsCrossed size={14} />
              <span>Epicurean Selection</span>
            </div>
            <h2 id="menu-modal-title" className="section-title" style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
              The Rudrash Pavilion Menu
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              A curated sampling of representative culinary creations crafted by Executive Chef team.
            </p>
            <div style={{ marginTop: '0.65rem' }}>
              <span className="demo-pill">
                <AlertCircle size={12} />
                Representative Tasting Selection (Sample Data)
              </span>
            </div>
          </div>

          {/* Menu Categories Tab */}
          <div className="filter-tabs-wrapper" style={{ marginBottom: '2rem' }}>
            {['starters', 'mains', 'desserts'].map((tab) => (
              <button
                key={tab}
                className={`filter-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{ textTransform: 'capitalize' }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dishes List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.25rem' }}>
            {currentItems.map((dish) => (
              <div
                key={dish.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  paddingBottom: '1.1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  gap: '1.5rem',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 600 }}>{dish.name}</h4>
                    {dish.tag && (
                      <span className="demo-pill" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                        {dish.tag}
                      </span>
                    )}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
                    {dish.desc}
                  </p>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--gold-light)', fontWeight: 700, flexShrink: 0 }}>
                  {dish.price}
                </div>
              </div>
            ))}
          </div>

          {/* Table Reservation CTA */}
          <div style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', color: '#ded9cd', marginBottom: '0.85rem' }}>
              Would you like to reserve a VIP dinner table or arrange private in-suite catering?
            </p>
            {tableInquirySent ? (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.9rem', fontWeight: 600 }}>
                <Check size={18} />
                <span>Priority Table Inquiry Forwarded to Maitre d'</span>
              </div>
            ) : (
              <button
                className="btn btn-gold btn-sm"
                onClick={handleInquiry}
              >
                <UtensilsCrossed size={14} />
                <span>Reserve Table Inquiry</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
