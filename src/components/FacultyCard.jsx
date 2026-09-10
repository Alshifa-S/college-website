import React from 'react';
import { Mail, GraduationCap, Briefcase } from 'lucide-react';

export function FacultyCard({ faculty }) {
  return (
    <div className="card" style={{ height: '100%' }}>
      {/* Faculty Photo Container */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#0d213f' }}>
        <img
          src={faculty.image}
          alt={faculty.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px 16px 12px',
          background: 'linear-gradient(to top, rgba(10, 25, 47, 0.95), transparent)',
          color: '#ffffff'
        }}>
          <span style={{
            fontSize: '0.74rem',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            color: 'var(--accent-gold)',
            fontWeight: 700
          }}>
            {faculty.department}
          </span>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
          {faculty.name}
        </h3>
        <div style={{ fontSize: '0.88rem', color: 'var(--primary-600)', fontWeight: 600, marginBottom: '14px' }}>
          {faculty.designation}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <GraduationCap size={16} color="var(--accent-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{faculty.qualification}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Briefcase size={16} color="var(--primary-600)" style={{ flexShrink: 0 }} />
            <span><strong>Experience:</strong> {faculty.experience}</span>
          </div>
        </div>

        {faculty.research && (
          <div style={{ marginBottom: '18px', flexGrow: 1 }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '4px' }}>
              Research & Specialization:
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, background: 'var(--bg-subtle)', padding: '8px 10px', borderRadius: '6px' }}>
              {faculty.research}
            </p>
          </div>
        )}

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
          <a
            href={`mailto:${faculty.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: 'var(--primary-700)',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <Mail size={14} /> {faculty.email}
          </a>
        </div>
      </div>
    </div>
  );
}
