import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Navigation
} from 'lucide-react';
import { hotelInfo } from '../data/hotelData';
import { WhatsAppIcon, InstagramIcon } from './Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Concierge Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Hotel%20Rudraaksh%20Palace%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay";

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include your inquiry message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Concierge Inquiry',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section className="section-padding" id="contact" aria-label="Contact and Location">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Connect & Arrive</span>
          </div>
          <h2 className="section-title">Location & Concierge Desk</h2>
          <p className="section-subtitle">
            Our guest relation specialists and dedicated 24/7 concierge are here to assist with tailored reservations, private transfers, and bespoke travel requests.
          </p>
          <div style={{ marginTop: '0.85rem' }}>
            <span className="demo-pill">
              <AlertCircle size={12} />
              Sample Contact Coordinates (Demo Presentation Data)
            </span>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Contact Cards & Map Preview */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Information Card */}
            <div className="contact-card-box glass-panel">
              <h3 className="contact-card-headline">
                <Compass size={20} color="var(--gold-primary)" />
                <span>Hotel Rudraaksh Palace</span>
              </h3>

              {/* Address */}
              <div className="contact-detail-row">
                <div className="contact-icon-wrap">
                  <MapPin size={20} color="var(--gold-primary)" />
                </div>
                <div>
                  <div className="contact-row-label">Physical Address</div>
                  <p className="contact-row-val">{hotelInfo.address}</p>
                  <span className="contact-row-sub">Prime Enclave District</span>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-row">
                <div className="contact-icon-wrap">
                  <Phone size={20} color="var(--gold-primary)" />
                </div>
                <div>
                  <div className="contact-row-label">Reservations & Front Desk</div>
                  <a href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-row-val contact-link">
                    {hotelInfo.phone}
                  </a>
                  <span className="contact-row-sub">Available 24 Hours Daily</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-row">
                <div className="contact-icon-wrap">
                  <Mail size={20} color="var(--gold-primary)" />
                </div>
                <div>
                  <div className="contact-row-label">Electronic Correspondence</div>
                  <p className="contact-row-val">{hotelInfo.email}</p>
                  <span className="contact-row-sub">Concierge: {hotelInfo.conciergeEmail}</span>
                </div>
              </div>

              {/* WhatsApp Instant Desk (Official Brand Colors & Glow) */}
              <div className="contact-detail-row contact-brand-row contact-whatsapp-row">
                <div className="contact-brand-icon-box whatsapp-box">
                  <WhatsAppIcon size={22} color="#ffffff" />
                </div>
                <div>
                  <div className="contact-row-label">Official WhatsApp Desk</div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-brand-link whatsapp-text"
                  >
                    <span>Chat on WhatsApp</span>
                    <span className="brand-link-arrow">↗</span>
                  </a>
                  <div className="contact-row-sub">Instant booking queries & room reservation support</div>
                </div>
              </div>

              {/* Instagram Official Channel (Official Brand Gradient & Glow) */}
              <div className="contact-detail-row contact-brand-row contact-instagram-row">
                <div className="contact-brand-icon-box instagram-box">
                  <InstagramIcon size={22} color="#ffffff" />
                </div>
                <div>
                  <div className="contact-row-label">Official Instagram Channel</div>
                  <a
                    href={hotelInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-brand-link insta-text"
                  >
                    <span>{hotelInfo.instagramHandle}</span>
                    <span className="brand-link-arrow">↗ Follow</span>
                  </a>
                  <div className="contact-row-sub">Follow for daily hotel stories, wedding banquets & suites</div>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-detail-row">
                <div className="contact-icon-wrap">
                  <Clock size={20} color="var(--gold-primary)" />
                </div>
                <div>
                  <div className="contact-row-label">Arrival & Departure Timings</div>
                  <p className="contact-row-val">
                    Check-in: {hotelInfo.checkInTime} | Check-out: {hotelInfo.checkOutTime}
                  </p>
                  <span className="contact-row-sub">Early arrival available upon request</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Preview Card */}
            <div className="map-preview-container glass-panel">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="Map topography placeholder"
                className="map-mockup-bg"
              />
              <div className="map-pin-overlay">
                <div className="map-pin-bubble">
                  <MapPin size={20} color="var(--gold-primary)" />
                  <div>
                    <div className="map-bubble-title">Hotel Rudraaksh Palace</div>
                    <div className="map-bubble-sub">Luxury Hospitality Boulevard</div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                  style={{ marginTop: '1rem' }}
                >
                  <Navigation size={14} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            className="contact-form-box glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-form-header">
              <span className="section-eyebrow" style={{ marginBottom: '0.35rem' }}>
                <Sparkles size={14} />
                <span>Inquiries & Reservations</span>
              </span>
              <h3 className="contact-form-title">Send a Private Note</h3>
              <p className="contact-form-sub">
                Whether scheduling a special occasion or requesting customized services, our team responds promptly.
              </p>
            </div>

            {/* Submission Success Alert */}
            {isSubmitted && (
              <motion.div 
                className="contact-success-alert"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 size={18} color="var(--gold-primary)" />
                <div>
                  <strong>Thank you for contacting Hotel Rudraaksh Palace.</strong>
                  <p style={{ fontSize: '0.84rem', marginTop: '0.2rem' }}>
                    Your message has been received by our concierge desk. We will respond within 4 hours.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-fields-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="e.g. Lord Alexander Wright"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    required
                  />
                  {errors.name && <span className="field-error-msg">{errors.name}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="alexander@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    required
                  />
                  {errors.email && <span className="field-error-msg">{errors.email}</span>}
                </div>

                {/* Telephone */}
                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Inquiry Subject */}
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Inquiry Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="General Concierge Inquiry">General Concierge Inquiry</option>
                    <option value="Suite & Penthouse Reservations">Suite & Penthouse Reservations</option>
                    <option value="Wedding & Grand Banquet Hosting">Wedding & Grand Banquet Hosting</option>
                    <option value="Corporate Retreat & Conferences">Corporate Retreat & Conferences</option>
                    <option value="Private Chef Dining & Catering">Private Chef Dining & Catering</option>
                    <option value="Airport Chauffeur Transfer">Airport Chauffeur Transfer</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <label htmlFor="contact-message" className="form-label">
                  Your Message or Special Request *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your upcoming visit, preferred dates, celebratory requirements, or bespoke preferences..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                  required
                />
                {errors.message && <span className="field-error-msg">{errors.message}</span>}
              </div>

              {/* Submit CTA */}
              <div className="form-action-wrap">
                <button
                  type="submit"
                  className="btn btn-gold btn-submit-inquiry"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Transmitting to Concierge...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Transmit Inquiries</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
