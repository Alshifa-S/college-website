import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { galleryData } from '../data/collegeData';
import { Image, Maximize2, X } from 'lucide-react';

export function Gallery({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Campus', 'Classrooms', 'Laboratory', 'Events', 'Sports'];

  const filteredImages = galleryData.filter(img => {
    if (activeCategory === 'All') return true;
    return img.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div>
      <Breadcrumb pageTitle="Campus Photo Gallery" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <Image size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              Campus Life in Focus
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Campus Photo Gallery</h1>
          <p className="page-banner-desc">
            Take a visual tour through our historic quadrangles, advanced computing suites, cultural amphitheaters, and Olympic athletic facilities.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section style={{ padding: '60px 0 90px', background: 'var(--bg-main)' }}>
        <div className="container">
          <div className="filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat === 'All' ? `All Visuals (${galleryData.length})` : cat}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {filteredImages.map(item => (
              <div
                key={item.id}
                className="card"
                style={{ cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => setLightboxImage(item)}
              >
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#0d213f' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10, 25, 47, 0.45)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                  className="gallery-overlay"
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; }}
                  >
                    <div style={{ background: 'rgba(212, 175, 55, 0.9)', padding: '10px', borderRadius: '50%', color: '#0a192f' }}>
                      <Maximize2 size={24} />
                    </div>
                  </div>

                  <span className="card-tag">{item.category}</span>
                </div>

                <div style={{ padding: '16px 18px' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="modal-backdrop" onClick={() => setLightboxImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '900px', background: '#0a192f', color: '#ffffff', padding: 0, overflow: 'hidden' }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover' }}
              />
              <button
                onClick={() => setLightboxImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: 'none',
                  color: '#ffffff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '24px' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {lightboxImage.category}
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '4px', marginBottom: '8px' }}>
                {lightboxImage.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
