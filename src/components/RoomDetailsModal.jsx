import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Users, 
  Maximize2, 
  Bed, 
  Eye, 
  Check, 
  Calendar, 
  Sparkles, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function RoomDetailsModal({ room, isOpen, onClose, onBookNow }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!isOpen || !room) return null;

  const photos = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <AnimatePresence>
      <div 
        className="modal-overlay" 
        onClick={onClose} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="room-details-title"
      >
        <motion.div
          className="modal-content"
          style={{ maxWidth: '850px' }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(11, 12, 16, 0.75)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
            aria-label="Close room details"
          >
            <X size={20} />
          </button>

          {/* Photo Gallery Viewer */}
          <div style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
            <img
              src={photos[activePhotoIdx]}
              alt={`${room.name} photograph ${activePhotoIdx + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(11,12,16,0.3) 0%, transparent 60%, rgba(19,21,31,0.95) 100%)',
              }}
            />

            {/* Gallery Navigation Controls */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : photos.length - 1))}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1rem',
                    transform: 'translateY(-50%)',
                    background: 'rgba(11,12,16,0.7)',
                    border: '1px solid var(--gold-primary)',
                    color: 'var(--gold-light)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Previous room photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setActivePhotoIdx((prev) => (prev < photos.length - 1 ? prev + 1 : 0))}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '1rem',
                    transform: 'translateY(-50%)',
                    background: 'rgba(11,12,16,0.7)',
                    border: '1px solid var(--gold-primary)',
                    color: 'var(--gold-light)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Next room photo"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Tag Badge */}
            <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', zIndex: 5 }}>
              <span className="room-tag-badge">{room.tag}</span>
            </div>

            {/* Price Badge */}
            <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.5rem', zIndex: 5 }}>
              <div className="room-price-badge">
                <span className="room-price-val">{hotelInfo.currencySymbol}{room.price}</span>
                <span className="room-price-period">/ night (Sample rate)</span>
              </div>
            </div>
          </div>

          {/* Modal Body Content */}
          <div style={{ padding: '2rem 2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <h2 id="room-details-title" style={{ fontSize: '2rem', color: '#ffffff' }}>
                {room.name}
              </h2>
              <span className="demo-pill">Sample Room Inventory</span>
            </div>

            {/* Specs Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.25rem',
                margin: '1.25rem 0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={16} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Occupancy</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>{room.capacity}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Maximize2 size={16} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Floor Area</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>{room.size}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Bed size={16} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Bedding</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>{room.bed}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Eye size={16} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Outlook</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>{room.view}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{ color: '#d5d1c7', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.98rem' }}>
              {room.description}
            </p>

            {/* Features & Inclusions Checklist */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} color="var(--gold-primary)" />
                <span>Complimentary Room Inclusions & Amenities</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                {room.features.map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#e2ded5' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(212,175,55,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={12} color="var(--gold-primary)" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <button
                className="btn btn-gold"
                style={{ flex: 1 }}
                onClick={() => {
                  onClose();
                  onBookNow(room.id);
                }}
              >
                <Calendar size={16} />
                <span>Book This Room ({hotelInfo.currencySymbol}{room.price}/nt)</span>
              </button>
              <button className="btn btn-ghost" onClick={onClose}>
                <span>Close Details</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
