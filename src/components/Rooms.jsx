import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Users, 
  Maximize2, 
  Eye, 
  CheckCircle2, 
  Info,
  Calendar
} from 'lucide-react';
import { roomsData, hotelInfo } from '../data/hotelData';
import RoomDetailsModal from './RoomDetailsModal';

export default function Rooms({ onBookRoom }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRoomForModal, setSelectedRoomForModal] = useState(null);

  const categories = ['All', 'Deluxe', 'Premium', 'Suites', 'Signature'];

  const filteredRooms = activeCategory === 'All'
    ? roomsData
    : roomsData.filter((r) => r.category === activeCategory);

  const handleBookNow = (roomId) => {
    if (onBookRoom) {
      onBookRoom(roomId);
    }
  };

  return (
    <section className="section-padding" id="rooms" aria-label="Accommodations and Suites">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Accommodations</span>
          </div>
          <h2 className="section-title">Rooms & Distinctive Suites</h2>
          <p className="section-subtitle">
            Immerse yourself in bespoke architectural elegance, custom Italian marble finishes, acoustic calm, and thoughtful luxury amenities.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <span className="demo-pill">
              <Info size={12} />
              Sample Accommodation Tiers & Rates
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-wrapper" role="tablist" aria-label="Room categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? 'All Accommodations' : cat}
            </button>
          ))}
        </div>

        {/* Rooms Grid with 3D Hover elevation */}
        <motion.div 
          className="rooms-grid"
          layout
        >
          <AnimatePresence>
            {filteredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                className="room-card glass-panel"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.015 }}
                layout
              >
                {/* Room Card Image with Zoom effect */}
                <div className="room-card-image-wrap">
                  <img
                    src={room.image}
                    alt={`${room.name} interior photography`}
                    className="room-card-image"
                    loading="lazy"
                  />
                  <div className="room-card-img-gradient" />
                  <span className="room-tag-badge">{room.tag}</span>
                  <div className="room-price-badge">
                    <span className="room-price-val">{hotelInfo.currencySymbol}{room.price}</span>
                    <span className="room-price-period">/ night*</span>
                  </div>
                </div>

                {/* Room Card Body */}
                <div className="room-card-body">
                  <h3 className="room-card-title">{room.name}</h3>

                  {/* Specs */}
                  <div className="room-card-specs">
                    <div className="room-card-spec-item">
                      <Users size={14} color="var(--gold-primary)" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="room-card-spec-item">
                      <Maximize2 size={14} color="var(--gold-primary)" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  <p className="room-card-desc">{room.shortDesc}</p>

                  {/* Key Features preview */}
                  <ul className="room-features-list">
                    {room.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="room-feature-item">
                        <CheckCircle2 size={13} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Actions */}
                  <div className="room-card-actions">
                    <button
                      className="btn btn-outline-gold btn-sm"
                      onClick={() => setSelectedRoomForModal(room)}
                      aria-label={`View details of ${room.name}`}
                    >
                      <Eye size={14} />
                      <span>Details</span>
                    </button>

                    <button
                      className="btn btn-gold btn-sm"
                      onClick={() => handleBookNow(room.id)}
                      aria-label={`Book ${room.name}`}
                    >
                      <Calendar size={14} />
                      <span>Reserve</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for In-depth Room Details */}
        <RoomDetailsModal
          room={selectedRoomForModal}
          isOpen={Boolean(selectedRoomForModal)}
          onClose={() => setSelectedRoomForModal(null)}
          onBookNow={(id) => {
            setSelectedRoomForModal(null);
            handleBookNow(id);
          }}
        />
      </div>
    </section>
  );
}
