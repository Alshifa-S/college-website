import React from 'react';
import { X, BookOpen, FlaskConical, Users, ArrowRight } from 'lucide-react';

export function DepartmentModal({ department, onClose, onApply, onNavigateFaculty }) {
  if (!department) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <div className="modal-header" style={{ background: 'linear-gradient(135deg, var(--primary-900), var(--primary-800))', color: '#ffffff' }}>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Department Profile • Estd. {department.established}
            </div>
            <h3 className="modal-title" style={{ color: '#ffffff', marginTop: '4px' }}>
              {department.name} ({department.code})
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close" style={{ color: '#ffffff' }}>
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {/* Department banner image */}
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '220px', marginBottom: '22px' }}>
            <img src={department.image} alt={department.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Quick Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '22px' }}>
            <div style={{ background: 'var(--bg-subtle)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>Head of Dept</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--primary-900)' }}>{department.hod}</div>
            </div>
            <div style={{ background: 'var(--bg-subtle)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>Core Faculty</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--primary-900)' }}>{department.facultyCount} Members</div>
            </div>
            <div style={{ background: 'var(--bg-subtle)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>Active Scholars</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--primary-900)' }}>{department.studentsCount}+ Enrolled</div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '8px' }}>
              About the Department
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
              {department.fullDesc}
            </p>
          </div>

          {/* Programs Offered */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} color="var(--primary-600)" /> Programs & Degrees Offered
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {department.coursesOffered.map((c, idx) => (
                <li key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '10px 14px', borderRadius: '6px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
                  <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Labs */}
          <div style={{ marginBottom: '26px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FlaskConical size={18} color="var(--accent-gold-dark)" /> Research Centers & Specialized Labs
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {department.labs.map((lab, idx) => (
                <span key={idx} style={{ background: 'rgba(37, 99, 235, 0.08)', color: 'var(--primary-700)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.84rem', fontWeight: 600 }}>
                  🔬 {lab}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '18px' }}>
            <button
              onClick={() => { onClose(); onNavigateFaculty(); }}
              className="btn btn-outline-navy"
              style={{ flex: 1 }}
            >
              <Users size={16} /> View Faculty
            </button>
            <button
              onClick={() => { onClose(); onApply(); }}
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              Apply for Admission <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
