import React from 'react';
import { BookOpen, Users, ArrowRight } from 'lucide-react';

export function DepartmentCard({ department, onLearnMore }) {
  return (
    <div className="card">
      <div className="card-img-wrap">
        <img src={department.image} alt={department.name} className="card-img" />
        <span className="card-tag">{department.code}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">
          {department.name}
        </h3>

        <p className="card-desc">
          {department.shortDesc}
        </p>

        {/* Quick Stats Banner */}
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px', background: 'var(--bg-subtle)', padding: '8px 12px', borderRadius: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Users size={14} color="var(--primary-600)" />
            <span><strong>{department.facultyCount}</strong> Faculty</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <BookOpen size={14} color="var(--accent-gold-dark)" />
            <span><strong>{department.coursesOffered.length}</strong> Programs</span>
          </div>
        </div>

        {/* Courses List Preview */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-light)', marginBottom: '6px' }}>
            Popular Programs:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {department.coursesOffered.slice(0, 2).map((c, i) => (
              <span key={i} style={{ fontSize: '0.76rem', background: '#f1f5f9', color: 'var(--text-main)', padding: '2px 8px', borderRadius: '4px' }}>
                {c}
              </span>
            ))}
            {department.coursesOffered.length > 2 && (
              <span style={{ fontSize: '0.76rem', color: 'var(--primary-600)', fontWeight: 600 }}>
                +{department.coursesOffered.length - 2} more
              </span>
            )}
          </div>
        </div>

        <div className="card-footer">
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            HOD: <strong style={{ color: 'var(--primary-900)' }}>{department.hod}</strong>
          </span>
          <button
            onClick={() => onLearnMore(department)}
            className="btn btn-outline-navy btn-sm"
          >
            Learn More <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
