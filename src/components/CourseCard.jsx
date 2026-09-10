import React from 'react';
import { Clock, GraduationCap, Check, ArrowRight } from 'lucide-react';

export function CourseCard({ course, onApply }) {
  return (
    <div className="card" style={{ height: '100%' }}>
      <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Badges */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            padding: '4px 10px',
            borderRadius: '4px',
            background: course.level === 'UG' ? 'rgba(37, 99, 235, 0.1)' : 'rgba(212, 175, 55, 0.18)',
            color: course.level === 'UG' ? 'var(--primary-600)' : 'var(--accent-gold-dark)'
          }}>
            {course.level === 'UG' ? 'Undergraduate Degree' : 'Postgraduate Degree'}
          </span>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-light)' }}>
            {course.seats} Seats Available
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '12px', minHeight: '52px', lineHeight: 1.35 }}>
          {course.name}
        </h3>

        {/* Specs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', background: 'var(--bg-subtle)', padding: '12px 14px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-main)' }}>
            <Clock size={16} color="var(--primary-600)" />
            <span><strong>Duration:</strong> {course.duration}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-main)' }}>
            <GraduationCap size={16} color="var(--accent-gold-dark)" />
            <span><strong>Annual Tuition:</strong> {course.fees}</span>
          </div>
        </div>

        {/* Eligibility */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
          <strong style={{ color: 'var(--text-main)' }}>Eligibility:</strong> {course.eligibility}
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '18px', flexGrow: 1 }}>
          {course.description}
        </p>

        {/* Highlights Pills */}
        {course.highlights && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
            {course.highlights.slice(0, 2).map((h, i) => (
              <span key={i} style={{ fontSize: '0.74rem', background: '#eff6ff', color: '#1e40af', padding: '3px 8px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Check size={12} /> {h}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
          <button
            onClick={() => onApply(course.id)}
            className="btn btn-primary btn-block btn-sm"
          >
            Apply Now <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
