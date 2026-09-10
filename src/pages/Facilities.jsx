import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { facilitiesData } from '../data/collegeData';
import { FacilityCard } from '../components/FacilityCard';
import { Building } from 'lucide-react';

export function Facilities({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Academic', 'Technical', 'Research', 'Cultural', 'Sports', 'Residential', 'Dining', 'Logistics', 'Technology'];

  const filteredFacilities = facilitiesData.filter(f => {
    if (activeCategory === 'all') return true;
    return f.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div>
      <Breadcrumb pageTitle="Campus Facilities" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <Building size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              85+ Acres Smart Green Infrastructure
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Campus Facilities</h1>
          <p className="page-banner-desc">
            Designed to foster collaborative discovery, academic excellence, athletic vigor, and an inspiring residential experience.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section style={{ padding: '36px 0 20px', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="filter-bar" style={{ marginBottom: 0 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                style={{ textTransform: 'capitalize' }}
              >
                {cat === 'all' ? `All 10 Facilities` : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section style={{ padding: '60px 0 90px', background: 'var(--bg-main)' }}>
        <div className="container">
          <div className="grid-3">
            {filteredFacilities.map(facility => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
