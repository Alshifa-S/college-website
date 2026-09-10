import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { departmentsData } from '../data/collegeData';
import { DepartmentCard } from '../components/DepartmentCard';
import { Building2 } from 'lucide-react';

export function Departments({ onNavigate, onSelectDepartment }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDepartments = departmentsData.filter(dept => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'tech') return dept.category === 'tech';
    if (activeFilter === 'commerce') return dept.category === 'commerce';
    if (activeFilter === 'science') return dept.category === 'science';
    if (activeFilter === 'humanities') return dept.category === 'humanities';
    return true;
  });

  return (
    <div>
      <Breadcrumb pageTitle="Departments" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <Building2 size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              8 Autonomous Academic Departments
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Academic Departments</h1>
          <p className="page-banner-desc">
            Explore our specialized departments offering state-of-the-art laboratory research, renowned faculty mentorship, and industry-oriented degree curricula.
          </p>
        </div>
      </section>

      {/* Department Directory Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          {/* Category Filters */}
          <div className="filter-bar">
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            >
              All Departments ({departmentsData.length})
            </button>
            <button
              onClick={() => setActiveFilter('tech')}
              className={`filter-btn ${activeFilter === 'tech' ? 'active' : ''}`}
            >
              Technology & Computing (2)
            </button>
            <button
              onClick={() => setActiveFilter('commerce')}
              className={`filter-btn ${activeFilter === 'commerce' ? 'active' : ''}`}
            >
              Management & Commerce (2)
            </button>
            <button
              onClick={() => setActiveFilter('science')}
              className={`filter-btn ${activeFilter === 'science' ? 'active' : ''}`}
            >
              Sciences & Mathematics (3)
            </button>
            <button
              onClick={() => setActiveFilter('humanities')}
              className={`filter-btn ${activeFilter === 'humanities' ? 'active' : ''}`}
            >
              Humanities & Media (1)
            </button>
          </div>

          {/* Departments Grid */}
          <div className="grid-3" style={{ marginBottom: '60px' }}>
            {filteredDepartments.map(dept => (
              <DepartmentCard
                key={dept.id}
                department={dept}
                onLearnMore={() => onSelectDepartment(dept)}
              />
            ))}
          </div>

          {/* Department Highlights Box */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-900) 0%, var(--primary-800) 100%)',
            color: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-gold)' }}>8</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>Departments</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff' }}>24+</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>Specialized Research Labs</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff' }}>480+</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>Distinguished Faculty</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-gold)' }}>16+</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>Degree Programs Offered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
