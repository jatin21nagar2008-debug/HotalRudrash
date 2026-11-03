import React from 'react';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Dining from '../components/Dining';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Offers from '../components/Offers';
import Contact from '../components/Contact';

export default function Home({ 
  bookingFormRef, 
  onOpenBooking, 
  onBookRoom, 
  onConfirmBooking,
  selectedRoomForBooking,
  onApplyOffer
}) {
  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    if (bookingFormRef && bookingFormRef.current) {
      bookingFormRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 1. Full-screen Cinematic Hero */}
      <Hero 
        onOpenBooking={scrollToBooking} 
        onExploreRooms={scrollToRooms} 
      />

      {/* 2. Interactive Booking Bar */}
      <BookingForm 
        ref={bookingFormRef} 
        onConfirmBooking={onConfirmBooking} 
        initialRoom={selectedRoomForBooking}
      />

      {/* 3. About Us Section */}
      <About onExploreMore={scrollToRooms} />

      {/* 4. Rooms & Suites Showcase */}
      <Rooms onBookRoom={onBookRoom} />

      {/* 5. World-Class Amenities */}
      <Amenities />

      {/* 6. Signature Dining Experiences */}
      <Dining />

      {/* 7. Visual Media Gallery with Lightbox */}
      <Gallery />

      {/* 8. Cherished Guest Testimonials Carousel */}
      <Testimonials />

      {/* 9. Special Packages & Offers */}
      <Offers onApplyOffer={onApplyOffer} />

      {/* 10. Location, Map & Contact Inquiries */}
      <Contact />
    </main>
  );
}
