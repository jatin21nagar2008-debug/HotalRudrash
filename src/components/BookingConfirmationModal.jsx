import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Calendar, 
  Users, 
  Home, 
  X, 
  Printer, 
  ShieldCheck, 
  AlertCircle,
  Download,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { hotelInfo } from '../data/hotelData';

export default function BookingConfirmationModal({ isOpen, onClose, bookingDetails }) {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Trigger celebration confetti when opened
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

  // Extract booking details safely with defaults
  const checkIn = bookingDetails?.checkIn || '2026-11-20';
  const checkOut = bookingDetails?.checkOut || '2026-11-23';
  const guests = bookingDetails?.guests || 2;
  const rooms = bookingDetails?.rooms || 1;
  const roomType = bookingDetails?.roomType || 'Deluxe Room';
  const totalNights = bookingDetails?.totalNights || 3;
  const estimatedTotal = bookingDetails?.estimatedTotal 
    ? Number(bookingDetails.estimatedTotal).toLocaleString('en-IN')
    : '28,500';

  // Stable unique luxury booking confirmation code
  const confirmationId = useMemo(() => {
    return bookingDetails?.confirmationId || 'RDR-847291';
  }, [bookingDetails?.confirmationId]);

  // Automatically save booking to localStorage so details are never lost
  useEffect(() => {
    if (isOpen && bookingDetails) {
      try {
        const history = JSON.parse(localStorage.getItem('rudraaksh_bookings') || '[]');
        const record = {
          ...bookingDetails,
          confirmationId,
          savedAt: new Date().toISOString(),
        };
        // Avoid duplicate by confirmationId
        const existingIdx = history.findIndex((b) => b.confirmationId === confirmationId);
        if (existingIdx === -1) {
          history.unshift(record);
          localStorage.setItem('rudraaksh_bookings', JSON.stringify(history.slice(0, 10)));
        }
      } catch {
        // Ignore localStorage restrictions if any
      }
    }
  }, [isOpen, bookingDetails, confirmationId]);

  // Copy confirmation code to clipboard with user feedback
  const handleCopyCode = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(confirmationId);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = confirmationId;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // Save/Download Booking Receipt voucher to device
  const handleSaveReceipt = () => {
    const textReceipt = `=====================================================
            HOTEL RUDRAAKSH PALACE
        Luxury Stays, Palatial Suites & Banquets
=====================================================
RESERVATION CONFIRMATION VOUCHER
Confirmation Code:  ${confirmationId}
Booking Status:     Confirmed (Verified Direct Reservation)
Date of Issue:      ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

GUEST & ACCOMMODATION DETAILS:
-----------------------------------------------------
Reserved Suite:     ${roomType}
Check-In Date:      ${checkIn} (from 14:00 hrs)
Check-Out Date:     ${checkOut} (until 11:00 hrs)
Length of Stay:     ${totalNights} Night(s)
Number of Rooms:    ${rooms} Room(s)
Total Guests:       ${guests} Guest(s)

BILLING ESTIMATE:
-----------------------------------------------------
Estimated Total:    ${hotelInfo.currencySymbol}${estimatedTotal}
Taxes & Surcharges: Included (12% GST)
Payment Status:     Pay at Property / Verified Demo

COMPLIMENTARY PALATIAL PRIVILEGES:
-----------------------------------------------------
• 24/7 Dedicated Royal Butler Concierge Service
• Complimentary Valet Parking with EV Charging Access
• Full Rooftop Infinity Pool & Skydeck Privileges
• High-Speed Fiber Wi-Fi Access throughout Property
• Royal Welcome Drink & Traditional Aarti on Arrival

HOTEL LOCATION & CONCIERGE:
-----------------------------------------------------
Property:   Hotel Rudraaksh Palace
Address:    ${hotelInfo.address}
Phone:      ${hotelInfo.phone}
WhatsApp:   +91 98765 43210
Instagram:  @hotelrudraakshpalace
Website:    https://jatin21nagar2008-debug.github.io/HotalRudrash/

Thank you for choosing Hotel Rudraaksh Palace.
We look forward to bestowing royal palatial hospitality upon you.
=====================================================`;

    try {
      const blob = new Blob([textReceipt], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Booking-Receipt-${confirmationId}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 2500);
    } catch (err) {
      console.error('Failed to download receipt', err);
    }
  };

  // Browser print / Save as PDF handler
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && bookingDetails && (
        <div 
          className="modal-overlay booking-confirmation-overlay" 
          onClick={onClose} 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="booking-confirmed-title"
        >
          <motion.div
            className="modal-content booking-confirmation-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
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
              <h2 id="booking-confirmed-title" className="section-title booking-modal-title" style={{ marginBottom: '0.4rem' }}>
                We Look Forward to Welcoming You
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '520px', margin: '0 auto' }}>
                Your reservation has been confirmed and registered in our luxury guest registry.
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
                padding: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              <div className="booking-summary-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Confirmation Code
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.15rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--gold-light)', fontWeight: 700 }}>
                      {confirmationId}
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="copy-code-btn"
                      style={{
                        background: copied ? 'rgba(34, 197, 94, 0.2)' : 'rgba(212, 175, 55, 0.15)',
                        border: copied ? '1px solid #22c55e' : '1px solid rgba(212, 175, 55, 0.35)',
                        color: copied ? '#4ade80' : 'var(--gold-light)',
                        padding: '0.25rem 0.55rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        transition: 'all 0.2s ease',
                      }}
                      title="Copy confirmation code"
                      aria-label="Copy confirmation code"
                    >
                      {copied ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Estimated Demo Total
                  </span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: '#ffffff', fontWeight: 700 }}>
                    {hotelInfo.currencySymbol}{estimatedTotal}
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem' }}>
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
                    <span>Accommodation</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 600 }}>
                    {roomType}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rooms} Room(s)</div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                    <Users size={13} />
                    <span>Guests</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 600 }}>
                    {guests} Guest(s)
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Check-in from 14:00</div>
                </div>
              </div>
            </div>

            {/* Complimentary Privileges Reminder */}
            <div style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: 'var(--radius-sm)', padding: '0.85rem 1rem', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck size={22} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.82rem', color: '#dedad0', margin: 0, lineHeight: 1.5 }}>
                Includes complimentary valet parking, high-speed fiber Wi-Fi, rooftop infinity pool privileges, and 24/7 dedicated butler service.
              </p>
            </div>

            {/* Action Buttons: Save Receipt, Print Summary, Done */}
            <div className="booking-modal-actions" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              {/* Primary Save / Download Receipt Button */}
              <button
                className="btn btn-gold"
                onClick={handleSaveReceipt}
                id="save-booking-receipt-btn"
                aria-label="Save and download booking receipt"
              >
                {downloadSuccess ? <Check size={15} /> : <Download size={15} />}
                <span>{downloadSuccess ? 'Receipt Saved!' : 'Save Receipt'}</span>
              </button>

              {/* Print / Save as PDF Button */}
              <button
                className="btn btn-ghost"
                onClick={handlePrint}
                aria-label="Print or Save as PDF"
              >
                <Printer size={15} />
                <span>Print / PDF</span>
              </button>

              {/* Done / Close Button */}
              <button
                className="btn btn-outline"
                onClick={onClose}
                aria-label="Close booking modal"
              >
                <span>Done</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
