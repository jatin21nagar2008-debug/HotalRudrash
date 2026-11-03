import React, { useState } from 'react';
import { 
  Sparkles, 
  UtensilsCrossed, 
  BookOpen, 
  ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { diningFeatures, sampleMenu } from '../data/hotelData';
import MenuModal from '../components/MenuModal';

export default function DiningPage() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <div style={{ paddingTop: '7rem', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} />
            <span>Return to Home Showcase</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Culinary Masterpieces</span>
          </div>
          <h1 className="section-title">The Gastronomy of Rudrash</h1>
          <p className="section-subtitle">
            An orchestral symphony of flavors, aromas, and visual aesthetics. Discover fine dining sanctuaries honoring sustainable ingredients and ancestral techniques.
          </p>
          <div style={{ marginTop: '0.85rem' }}>
            <span className="demo-pill">Sample Gastronomic Showcase</span>
          </div>
        </div>

        {/* Featured Visual Hero */}
        <div
          style={{
            position: 'relative',
            height: '420px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '4.5rem',
            border: '1px solid rgba(212,175,55,0.25)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85"
            alt="The Rudrash Pavilion dining hall"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(11,12,16,0.3) 0%, rgba(11,12,16,0.88) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '2.5rem',
            }}
          >
            <span className="demo-pill" style={{ marginBottom: '0.75rem', width: 'fit-content' }}>
              Signature Royal Fine Dining
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#ffffff', marginBottom: '0.5rem' }}>
              The Rudrash Pavilion
            </h2>
            <p style={{ color: '#dedad0', maxWidth: '650px', fontSize: '1rem', marginBottom: '1.25rem' }}>
              Experience regal multi-course tasting menus paired with sommelier-selected rare vintage labels in an opulent dining hall lit by brass chandeliers.
            </p>
            <div>
              <button className="btn btn-gold" onClick={() => setMenuModalOpen(true)}>
                <BookOpen size={16} />
                <span>View À La Carte Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="dining-showcase-grid" style={{ marginBottom: '4.5rem' }}>
          {diningFeatures.map((venue) => (
            <div key={venue.id} className="dining-card">
              <div className="dining-card-img-wrap">
                <img src={venue.image} alt={venue.name} className="dining-card-img" />
                <span className="dining-type-badge">{venue.type}</span>
              </div>
              <div className="dining-card-body">
                <h3 className="dining-card-title">{venue.name}</h3>
                <div className="dining-card-timings">
                  <div>{venue.timings}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Attire: {venue.dressCode}</div>
                </div>
                <p className="dining-card-desc">{venue.description}</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <button className="btn btn-outline-gold btn-sm" style={{ width: '100%' }} onClick={() => setMenuModalOpen(true)}>
                    <span>Explore Offerings</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef Specials Preview */}
        <div className="glass-panel" style={{ padding: '3rem 2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">
              <UtensilsCrossed size={14} />
              <span>Epicurean Selection</span>
            </span>
            <h3 style={{ fontSize: '2rem', color: '#ffffff', marginTop: '0.25rem' }}>
              Signature Dishes of the Season
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Handcrafted selections curated by our Executive Culinary Brigade
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {sampleMenu.mains.map((main) => (
              <div
                key={main.name}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.15rem', color: '#ffffff' }}>{main.name}</h4>
                  <span style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-light)', fontWeight: 700, fontSize: '1.2rem' }}>
                    {main.price}
                  </span>
                </div>
                <span className="feature-chip" style={{ color: 'var(--gold-light)', marginBottom: '0.75rem', display: 'inline-block' }}>
                  {main.tag}
                </span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>{main.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn-gold" onClick={() => setMenuModalOpen(true)}>
              <span>View Complete Menu & Wine List</span>
            </button>
          </div>
        </div>
      </div>

      <MenuModal isOpen={menuModalOpen} onClose={() => setMenuModalOpen(false)} />
    </div>
  );
}
