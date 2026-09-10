import React from 'react';
import { Clock, Users, CheckCircle2 } from 'lucide-react';

export function FacilityCard({ facility }) {
  return (
    <div className="card" style={{ height: '100%' }}>
      <div className="card-img-wrap">
        <img src={facility.image} alt={facility.name} className="card-img" />
        <span className="card-tag">{facility.category}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">
          {facility.name}
        </h3>

        {/* Specs & Capacity */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '14px', background: 'var(--bg-subtle)', padding: '10px 12px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={14} color="var(--primary-600)" />
            <span><strong>Capacity:</strong> {facility.capacity}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={14} color="var(--accent-gold-dark)" />
            <span><strong>Hours:</strong> {facility.hours}</span>
          </div>
        </div>

        {/* Spec line */}
        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary-700)', marginBottom: '10px' }}>
          {facility.specs}
        </div>

        <p className="card-desc">
          {facility.description}
        </p>

        {/* Features Checklist */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
          {facility.features.map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-main)' }}>
              <CheckCircle2 size={13} color="var(--success)" style={{ flexShrink: 0 }} />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
