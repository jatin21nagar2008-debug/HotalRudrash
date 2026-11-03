import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Compass, 
  Leaf, 
  ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { hotelStats } from '../data/hotelData';
import { getAssetUrl } from '../utils/assetUrl';

export default function AboutPage() {
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

        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>Heritage & Vision</span>
          </div>
          <h1 className="section-title">The Spirit of Hotel Rudraaksh Palace</h1>
          <p className="section-subtitle">
            Born from a profound passion for authentic hospitality, architectural refinement, and the timeless art of making guests feel deeply cherished.
          </p>
        </div>

        {/* Hero Visual Banner */}
        <div
          style={{
            position: 'relative',
            height: '420px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '4rem',
            border: '1px solid rgba(212,175,55,0.25)',
          }}
        >
          <img
            src={getAssetUrl('/images/rudraaksh_facade_lights.png')}
            alt="Hotel Rudraaksh Palace illuminated grand facade"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(11,12,16,0.3) 0%, rgba(11,12,16,0.85) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '2.5rem',
            }}
          >
            <span className="demo-pill" style={{ marginBottom: '0.75rem', width: 'fit-content' }}>
              Hotel Rudraaksh Palace
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#ffffff' }}>
              Where Comfort Meets Exceptional Hospitality
            </h2>
          </div>
        </div>

        {/* Story Section */}
        <div className="about-grid" style={{ marginBottom: '5rem' }}>
          <div>
            <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1.25rem' }}>
              An Architectural Overture to Serenity
            </h3>
            <p style={{ color: '#d8d4c9', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: '1.25rem' }}>
              Hotel Rudraaksh Palace was envisioned not simply as an accommodation, but as a celebratory sanctuary combining modern architectural aesthetics, hospitable warmth, and banquet grandeur. Every detail, from the luminous glass lobby to the illuminated exterior, was designed to celebrate every guest.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              From the whisper-quiet acoustic insulation of our guest chambers to our verdant courtyard fountains, every aspect of the estate encourages slow living and tranquil indulgence.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span className="demo-pill">5-Star Architecture</span>
              <span className="demo-pill">Acoustic Serenity</span>
              <span className="demo-pill">White-Glove Butler Service</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} color="var(--gold-primary)" />
              <span>Core Hospitality Pillars</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="amenity-icon-box" style={{ width: '44px', height: '44px', flexShrink: 0 }}>
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Intuitive Warmth</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>Anticipating guest desires before they are voiced with discretion and graciousness.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="amenity-icon-box" style={{ width: '44px', height: '44px', flexShrink: 0 }}>
                  <Compass size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Authentic Heritage</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>Honoring rich cultural traditions through culinary artistry, music, and ambient design.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="amenity-icon-box" style={{ width: '44px', height: '44px', flexShrink: 0 }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Conscious Sustainability</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>Zero-single-use plastics, energy-efficient geothermal cooling, and locally farmed produce.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '0.5rem' }}>Distinction in Numbers</h3>
          <span className="demo-pill" style={{ marginBottom: '2rem' }}>Demonstration Benchmarks</span>

          <div className="about-stats-grid">
            {hotelStats.map((stat) => (
              <div key={stat.label} className="stat-item-card">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
