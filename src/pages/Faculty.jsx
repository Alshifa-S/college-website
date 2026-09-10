import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { facultyData, departmentsData } from '../data/collegeData';
import { FacultyCard } from '../components/FacultyCard';
import { Users, Search } from 'lucide-react';

export function Faculty({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredFaculty = facultyData.filter(fac => {
    const matchesSearch = fac.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          fac.research.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          fac.qualification.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'all' || fac.department.toLowerCase().includes(selectedDept.toLowerCase());
    return matchesSearch && matchesDept;
  });

  return (
    <div>
      <Breadcrumb pageTitle="Faculty Directory" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <Users size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              Distinguished Scholars & Researchers
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Distinguished Faculty</h1>
          <p className="page-banner-desc">
            Our professors are internationally published scientists, authors, and industry consultants holding Ph.D. degrees from top global institutions.
          </p>
        </div>
      </section>

      {/* Search & Department Filter */}
      <section style={{ padding: '36px 0 20px', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', flex: 1 }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)' }}>Filter Department:</span>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  background: '#ffffff',
                  fontSize: '0.9rem',
                  color: 'var(--text-main)',
                  fontWeight: 500
                }}
              >
                <option value="all">All Departments ({facultyData.length})</option>
                {departmentsData.map(d => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>

            <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
              <Search size={18} color="var(--text-light)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search faculty by name or research..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 38px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section style={{ padding: '60px 0 90px', background: 'var(--bg-main)' }}>
        <div className="container">
          {filteredFaculty.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: 'var(--radius-md)' }}>
              <Users size={48} color="var(--text-light)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)', marginBottom: '8px' }}>
                No faculty members match your query.
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                Try searching with a broader keyword or reset the department filter.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedDept('all'); }}
                className="btn btn-outline-navy"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid-3">
              {filteredFaculty.map(fac => (
                <FacultyCard key={fac.id} faculty={fac} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
