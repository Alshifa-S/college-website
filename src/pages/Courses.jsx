import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { coursesData } from '../data/collegeData';
import { CourseCard } from '../components/CourseCard';
import { BookOpen, Search, GraduationCap } from 'lucide-react';

export function Courses({ onNavigate, onOpenApply }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === 'all' || course.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div>
      <Breadcrumb pageTitle="Courses & Degree Programs" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <GraduationCap size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              Undergraduate & Postgraduate Degrees
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Academic Programs</h1>
          <p className="page-banner-desc">
            Discover our industry-aligned curricula designed to empower you with critical thinking, research mastery, and top-tier corporate placement readiness.
          </p>
        </div>
      </section>

      {/* Courses Search & Filter Bar */}
      <section style={{ padding: '40px 0 20px', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            {/* Level Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setLevelFilter('all')}
                className={`filter-btn ${levelFilter === 'all' ? 'active' : ''}`}
              >
                All Programs ({coursesData.length})
              </button>
              <button
                onClick={() => setLevelFilter('UG')}
                className={`filter-btn ${levelFilter === 'UG' ? 'active' : ''}`}
              >
                Undergraduate (UG) ({coursesData.filter(c => c.level === 'UG').length})
              </button>
              <button
                onClick={() => setLevelFilter('PG')}
                className={`filter-btn ${levelFilter === 'PG' ? 'active' : ''}`}
              >
                Postgraduate (PG) ({coursesData.filter(c => c.level === 'PG').length})
              </button>
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
              <Search size={18} color="var(--text-light)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search course by name or department..."
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

      {/* Courses Grid */}
      <section style={{ padding: '60px 0 90px', background: 'var(--bg-main)' }}>
        <div className="container">
          {filteredCourses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: 'var(--radius-md)' }}>
              <BookOpen size={48} color="var(--text-light)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)', marginBottom: '8px' }}>
                No courses match your search criteria.
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                Try adjusting your search terms or clearing the filter.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setLevelFilter('all'); }}
                className="btn btn-outline-navy"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid-3">
              {filteredCourses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onApply={() => onOpenApply(course.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
