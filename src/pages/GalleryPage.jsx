import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div style={{ paddingTop: '7rem', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} />
            <span>Return to Home Showcase</span>
          </Link>
        </div>

        {/* Gallery Component */}
        <Gallery />
      </div>
    </div>
  );
}
