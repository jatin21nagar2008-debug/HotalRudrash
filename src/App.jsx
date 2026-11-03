import React, { useState, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingConfirmationModal from './components/BookingConfirmationModal';
import SiteBackground from './components/SiteBackground';
import FloatingSocialConcierge from './components/FloatingSocialConcierge';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import RoomsPage from './pages/RoomsPage';
import AboutPage from './pages/AboutPage';
import DiningPage from './pages/DiningPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import './App.css';

// Animated wrapper for smooth page transitions
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="page-transition-wrap"
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState('deluxe-room');
  const [bookingConfirmationDetails, setBookingConfirmationDetails] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const bookingFormRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenBooking = () => {
    // If not on Home page, navigate to Home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('booking');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookRoom = (roomId) => {
    setSelectedRoomForBooking(roomId);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('booking');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConfirmBooking = (details) => {
    setBookingConfirmationDetails(details);
    setIsConfirmationOpen(true);
  };

  const handleApplyOffer = (_offer) => {
    handleOpenBooking();
  };

  return (
    <div className="app-layout">
      {/* Scroll to top automatically on route changes */}
      <ScrollToTop />

      {/* Main Website Luxury Background using /images/rudraaksh_facade_lights.png */}
      <SiteBackground />

      {/* Persistent Luxury Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Page Routing with Animated Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageWrapper>
                <Home 
                  bookingFormRef={bookingFormRef}
                  onOpenBooking={handleOpenBooking}
                  onBookRoom={handleBookRoom}
                  onConfirmBooking={handleConfirmBooking}
                  selectedRoomForBooking={selectedRoomForBooking}
                  onApplyOffer={handleApplyOffer}
                />
              </PageWrapper>
            } 
          />
          <Route 
            path="/rooms" 
            element={
              <PageWrapper>
                <RoomsPage onBookRoom={handleBookRoom} />
              </PageWrapper>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            } 
          />
          <Route 
            path="/dining" 
            element={
              <PageWrapper>
                <DiningPage />
              </PageWrapper>
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <PageWrapper>
                <GalleryPage />
              </PageWrapper>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            } 
          />
          <Route 
            path="*" 
            element={
              <PageWrapper>
                <Home 
                  bookingFormRef={bookingFormRef}
                  onOpenBooking={handleOpenBooking}
                  onBookRoom={handleBookRoom}
                  onConfirmBooking={handleConfirmBooking}
                  selectedRoomForBooking={selectedRoomForBooking}
                  onApplyOffer={handleApplyOffer}
                />
              </PageWrapper>
            } 
          />
        </Routes>
      </AnimatePresence>

      {/* Persistent Luxury Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Quick Connect Floating Social Dock (WhatsApp & Instagram) */}
      <FloatingSocialConcierge />

      {/* Booking Confirmation / Demo Summary Modal */}
      <BookingConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        bookingDetails={bookingConfirmationDetails}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
