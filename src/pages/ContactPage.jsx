import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, HelpCircle } from 'lucide-react';
import Contact from '../components/Contact';
import { faqs } from '../data/hotelData';

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div style={{ paddingTop: '7rem', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} />
            <span>Return to Home Showcase</span>
          </Link>
        </div>

        {/* Contact Main Component */}
        <Contact />

        {/* FAQ Section */}
        <div style={{ marginTop: '5rem', maxWidth: '880px', margin: '5rem auto 0 auto' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">
              <HelpCircle size={14} />
              <span>Guest Inquiries</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers regarding arrival protocols, check-in policies, chauffeur arrangements, and hotel privileges.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: '#ffffff',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      cursor: 'pointer',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      color="var(--gold-primary)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s',
                        flexShrink: 0,
                        marginLeft: '1rem',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.5rem 1.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.92rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        paddingTop: '1rem',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
