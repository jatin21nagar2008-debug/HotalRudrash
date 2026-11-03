import React, { useState, forwardRef } from 'react';
import { Calendar, Users, Home, Search, AlertCircle, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { roomsData, hotelInfo } from '../data/hotelData';

const formatDate = (date) => {
  return date.toISOString().split('T')[0];
};

const BookingForm = forwardRef(function BookingForm({ onConfirmBooking, initialRoom }, ref) {
  const [checkIn, setCheckIn] = useState(() => {
    const today = new Date();
    return formatDate(today);
  });
  const [checkOut, setCheckOut] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return formatDate(tomorrow);
  });
  const [guests, setGuests] = useState(2);
  const rooms = 1;
  const [selectedRoomId, setSelectedRoomId] = useState(initialRoom || 'deluxe-room');
  const [prevInitialRoom, setPrevInitialRoom] = useState(initialRoom);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Sync initialRoom when prop changes
  if (initialRoom && initialRoom !== prevInitialRoom) {
    setPrevInitialRoom(initialRoom);
    setSelectedRoomId(initialRoom);
  }

  const handleCheckInChange = (e) => {
    const val = e.target.value;
    setCheckIn(val);
    setErrorMessage('');
    // If checkOut is earlier than new checkIn, bump checkOut by 1 day
    if (new Date(val) >= new Date(checkOut)) {
      const nextDay = new Date(val);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(formatDate(nextDay));
    }
  };

  const handleCheckOutChange = (e) => {
    const val = e.target.value;
    setCheckOut(val);
    setErrorMessage('');
  };

  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dIn = new Date(checkIn);
    const dOut = new Date(checkOut);

    if (isNaN(dIn.getTime()) || isNaN(dOut.getTime())) {
      setErrorMessage('Please select valid check-in and check-out dates.');
      return;
    }

    if (dOut <= dIn) {
      setErrorMessage('Check-out date must be strictly after the check-in date.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    const roomObj = roomsData.find((r) => r.id === selectedRoomId) || roomsData[0];
    const nights = calculateNights();
    const subtotal = roomObj.price * nights * rooms;
    const taxes = Math.round(subtotal * 0.12);
    const estimatedTotal = subtotal + taxes;

    setTimeout(() => {
      setIsLoading(false);
      if (onConfirmBooking) {
        onConfirmBooking({
          checkIn,
          checkOut,
          guests: Number(guests),
          rooms: Number(rooms),
          roomType: roomObj.name,
          roomPrice: roomObj.price,
          totalNights: nights,
          estimatedTotal,
        });
      }
    }, 500);
  };

  return (
    <section className="booking-section-wrapper" id="booking" ref={ref} aria-label="Room Reservation Bar">
      <div className="valora-booking-container">
        {/* Subtle Luxury Header with Badges */}
        <div className="valora-booking-header">
          <div className="valora-booking-title-group">
            <Sparkles size={16} color="var(--gold-primary)" />
            <span className="valora-booking-headline">
              Reserve Your Palatial Stay
            </span>
          </div>
          <div className="valora-guarantee-badge">
            <ShieldCheck size={14} color="var(--gold-primary)" />
            <span>Best Direct Rate Guaranteed</span>
          </div>
        </div>

        {errorMessage && (
          <div 
            style={{
              background: 'rgba(239, 68, 68, 0.18)',
              border: '1px solid #ef4444',
              borderRadius: '12px',
              padding: '0.75rem 1.25rem',
              color: '#fca5a5',
              fontSize: '0.88rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
            role="alert"
          >
            <AlertCircle size={18} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Valora Heights Horizontal Capsule Booking Bar */}
        <div className="valora-booking-capsule">
          <form onSubmit={handleSubmit} className="valora-booking-form" noValidate>
            {/* Column 1: Check-In Date */}
            <div className="valora-field-unit">
              <label htmlFor="booking-checkin" className="valora-field-header">
                <Calendar size={14} color="var(--gold-primary)" />
                <span className="valora-field-label">Check-In</span>
              </label>
              <input
                type="date"
                id="booking-checkin"
                name="checkIn"
                className="valora-field-input"
                value={checkIn}
                onChange={handleCheckInChange}
                required
              />
            </div>

            {/* Column 2: Check-Out Date */}
            <div className="valora-field-unit">
              <label htmlFor="booking-checkout" className="valora-field-header">
                <Calendar size={14} color="var(--gold-primary)" />
                <span className="valora-field-label">Check-Out</span>
              </label>
              <input
                type="date"
                id="booking-checkout"
                name="checkOut"
                className="valora-field-input"
                min={checkIn}
                value={checkOut}
                onChange={handleCheckOutChange}
                required
              />
            </div>

            {/* Column 3: Guests */}
            <div className="valora-field-unit">
              <label htmlFor="booking-guests" className="valora-field-header">
                <Users size={14} color="var(--gold-primary)" />
                <span className="valora-field-label">Guests</span>
              </label>
              <select
                id="booking-guests"
                name="guests"
                className="valora-field-input"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
                <option value={3}>3 Adults / Family</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Large Group</option>
              </select>
            </div>

            {/* Column 4: Room Category */}
            <div className="valora-field-unit">
              <label htmlFor="booking-room-type" className="valora-field-header">
                <Home size={14} color="var(--gold-primary)" />
                <span className="valora-field-label">Suite Type</span>
              </label>
              <select
                id="booking-room-type"
                name="roomType"
                className="valora-field-input"
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
              >
                {roomsData.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} ({hotelInfo.currencySymbol}{room.price}/nt)
                  </option>
                ))}
              </select>
            </div>

            {/* Column 5: Submit Action Button */}
            <div className="valora-submit-col">
              <button
                type="submit"
                className="valora-capsule-submit-btn"
                disabled={isLoading}
                id="booking-check-avail-submit"
              >
                {isLoading ? (
                  <span>Checking...</span>
                ) : (
                  <>
                    <Search size={16} />
                    <span>Check Rates</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Trust Privileges Bar */}
        <div className="valora-trust-bar">
          <div className="valora-trust-item">
            <CheckCircle2 size={13} color="var(--gold-primary)" />
            <span>Instant Confirmation</span>
          </div>
          <span className="valora-trust-dot">•</span>
          <div className="valora-trust-item">
            <CheckCircle2 size={13} color="var(--gold-primary)" />
            <span>Complimentary High-Speed Wi-Fi</span>
          </div>
          <span className="valora-trust-dot">•</span>
          <div className="valora-trust-item">
            <CheckCircle2 size={13} color="var(--gold-primary)" />
            <span>24/7 Royal Concierge</span>
          </div>
          <span className="valora-trust-dot">•</span>
          <div className="valora-trust-item">
            <CheckCircle2 size={13} color="var(--gold-primary)" />
            <span>Pay at Hotel Available</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default BookingForm;
