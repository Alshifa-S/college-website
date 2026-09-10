import React from 'react';
import { Quote, Star } from 'lucide-react';

export function TestimonialCard({ testimonial }) {
  return (
    <div className="card" style={{ height: '100%', padding: '24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.15 }}>
        <Quote size={48} color="var(--primary-700)" />
      </div>

      <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} fill="var(--accent-gold)" color="var(--accent-gold)" />
        ))}
      </div>

      <p style={{ fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '22px', flexGrow: 1 }}>
        "{testimonial.quote}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-gold)' }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-900)' }}>
            {testimonial.name}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--primary-600)', fontWeight: 600 }}>
            {testimonial.role}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
            {testimonial.batch}
          </div>
        </div>
      </div>
    </div>
  );
}
