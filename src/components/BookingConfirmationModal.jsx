import React, { useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Calendar, 
  Users, 
  Home, 
  X, 
  Printer, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { hotelInfo } from '../data/hotelData';

export default function BookingConfirmationModal({ isOpen, onClose, bookingDetails }) {
  const generatedId = useId();

  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F3E5AB', '#FFFFFF', '#AA8725'],
        });
      } catch {
        // Safe fallback if canvas is restricted
      }
    }
  }, [isOpen]);

  if (!isOpen || !bookingDetails) return null;

  const {
    checkIn,
    checkOut,
    guests,
    rooms,
    roomType,
    totalNights,
    estimatedTotal,
    confirmationId = `RDR-${generatedId.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase() || '748291'}`,
  } = bookingDetails;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="booking-confirmed-title">
        <motion.div
          className="modal-content"
          style={{ padding: '2.5rem 2rem' }}
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
            aria-label="Close Confirmation Dialog"
          >
            <X size={20} />
          </button>

          {/* Success Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1.5px solid #22c55e',
                color: '#4ade80',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                boxShadow: '0 0 25px rgba(34, 197, 94, 0.25)',
              }}
            >
              <CheckCircle2 size={34} />
            </div>

            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <span>Reservation Confirmed</span>
            </div>
            <h2 id="booking-confirmed-title" className="section-title" style={{ fontSize: '2.25rem', marginBottom: '0.4rem' }}>
              We Look Forward to Welcoming You
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              A confirmation dispatch has been logged in our demo reservation registry.
            </p>

            <div style={{ marginTop: '0.75rem' }}>
              <span className="demo-pill">
                <AlertCircle size={12} />
                Frontend Presentation Demo (No Payment Charged)
              </span>
            </div>
          </div>

          {/* Booking Summary Card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Confirmation Code
                </span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--gold-light)', fontWeight: 700 }}>
                  {confirmationId}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Estimated Demo Total
                </span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#ffffff', fontWeight: 700 }}>
                  {hotelInfo.currencySymbol}{estimatedTotal}
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  <Calendar size={13} />
                  <span>Stay Dates</span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 600 }}>
                  {checkIn} to {checkOut}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{totalNights} Night(s)</div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  <Home size={13} />
                  <span>Reserved Accommodation</span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 600 }}>
                  {roomType}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rooms} Room(s)</div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  <Users size={13} />
                  <span>Guests Attending</span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 600 }}>
                  {guests} Guest(s)
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Check-in from 14:00</div>
              </div>
            </div>
          </div>

          {/* Complimentary Privileges Reminder */}
          <div style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={24} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.84rem', color: '#dedad0', margin: 0, lineHeight: 1.5 }}>
              Your reservation includes complimentary valet parking, high-speed fiber Wi-Fi, full rooftop infinity pool privileges, and 24/7 dedicated butler service.
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button
              className="btn btn-ghost"
              onClick={handlePrint}
            >
              <Printer size={15} />
              <span>Print Summary</span>
            </button>

            <button
              className="btn btn-gold"
              onClick={onClose}
            >
              <span>Done</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
