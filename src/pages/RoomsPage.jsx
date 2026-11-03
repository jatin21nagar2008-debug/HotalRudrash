import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  Users, 
  Maximize2, 
  Calendar, 
  Eye, 
  ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { roomsData, hotelInfo } from '../data/hotelData';
import RoomDetailsModal from '../components/RoomDetailsModal';

export default function RoomsPage({ onBookRoom }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedRoomModal, setSelectedRoomModal] = useState(null);

  const categories = ['All', 'Deluxe', 'Premium', 'Suites', 'Signature'];

  const filtered = roomsData.filter((r) => {
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = r.price <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div style={{ paddingTop: '7rem', minHeight: '100vh' }}>
      <div className="container">
        {/* Breadcrumb / Back */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} />
            <span>Return to Home Showcase</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Exclusive Residences</span>
          </div>
          <h1 className="section-title">Rooms & Distinctive Suites</h1>
          <p className="section-subtitle">
            Discover your sanctuary of elegance. Each chamber at Hotel Rudraaksh Palace is masterfully conceived with artisanal furnishings, acoustic tranquility, and personalized butler hospitality.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div
          className="glass-panel"
          style={{
            padding: '1.75rem',
            marginBottom: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          {/* Keyword Search */}
          <div>
            <label style={{ fontSize: '0.76rem', color: 'var(--gold-light)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
              Search Amenities or Rooms
            </label>
            <div className="booking-input-wrap">
              <Search size={16} color="var(--gold-primary)" />
              <input
                type="text"
                placeholder="e.g. Balcony, King, Jacuzzi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label style={{ fontSize: '0.76rem', color: 'var(--gold-light)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
              Category Tier
            </label>
            <div className="booking-input-wrap">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c === 'All' ? 'All Collections' : c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Max Price Range Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--gold-light)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <span>Max Rate</span>
              <span>{hotelInfo.currencySymbol}{maxPrice}/night</span>
            </div>
            <input
              type="range"
              min={150}
              max={1000}
              step={25}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--gold-primary)', cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#c5c1b6' }}>
            Showing <strong>{filtered.length}</strong> distinctive residence{filtered.length === 1 ? '' : 's'}
          </span>
          <span className="demo-pill">Sample Room Inventory</span>
        </div>

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {filtered.map((room) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="room-card-image-wrap">
                <img
                  src={room.image}
                  alt={room.name}
                  className="room-card-image"
                  loading="lazy"
                />
                <span className="room-tag-badge">{room.tag}</span>
                <div className="room-price-badge">
                  <span className="room-price-val">{hotelInfo.currencySymbol}{room.price}</span>
                  <span className="room-price-period">/ night</span>
                </div>
              </div>

              <div className="room-card-body">
                <h3 className="room-card-title">{room.name}</h3>

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

                <p className="room-card-desc">{room.description}</p>

                <div className="room-card-features">
                  {room.features.slice(0, 4).map((f) => (
                    <span key={f} className="feature-chip">{f}</span>
                  ))}
                </div>

                <div className="room-card-actions">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setSelectedRoomModal(room)}
                  >
                    <Eye size={15} />
                    <span>Details</span>
                  </button>
                  <button
                    className="btn btn-gold btn-sm"
                    onClick={() => onBookRoom(room.id)}
                  >
                    <Calendar size={15} />
                    <span>Book Suite</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem' }}>No rooms match your filter criteria.</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Try adjusting your search terms or increasing the maximum price slider.</p>
            <button
              className="btn btn-gold btn-sm"
              style={{ marginTop: '1.5rem' }}
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setMaxPrice(1000);
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <RoomDetailsModal
        room={selectedRoomModal}
        isOpen={Boolean(selectedRoomModal)}
        onClose={() => setSelectedRoomModal(null)}
        onBookNow={onBookRoom}
      />
    </div>
  );
}
