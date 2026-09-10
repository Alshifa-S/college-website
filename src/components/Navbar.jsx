import React, { useState } from 'react';
import { 
  Phone, Mail, Menu, X, GraduationCap, ChevronRight, Bell 
} from 'lucide-react';

export function Navbar({ currentPage, onNavigate, onOpenApply }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'departments', label: 'Departments' },
    { id: 'courses', label: 'Courses' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'placements', label: 'Placements' },
    { id: 'events', label: 'Events & News' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      {/* Top Notification / Ticker Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="badge-pulse">
              <Bell size={12} /> Admissions 2026-27 Open
            </span>
            <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
              Alshifa University • NAAC 'A++' Accredited (CGPA 3.84) • NIRF Rank #24 • NBA Approved
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+18004567890" className="top-bar-link">
              <Phone size={13} /> +1 (800) 456-7890
            </a>
            <a href="mailto:admissions@alshifa-university.edu" className="top-bar-link">
              <Mail size={13} /> admissions@alshifa-university.edu
            </a>
            <button 
              onClick={() => handleNavClick('portal')}
              className="nav-portal-badge"
              style={{ padding: '3px 10px', fontSize: '0.76rem' }}
            >
              <span className="dot"></span> Student Portal Demo
            </button>
          </div>
        </div>
      </div>

      {/* Grand University Masthead Header */}
      <div className="university-masthead">
        <div className="container university-masthead-inner">
          <div className="masthead-brand" onClick={() => handleNavClick('home')}>
            <img src="/crest.svg" alt="Alshifa University Crest" className="masthead-crest" />
            <div className="masthead-details">
              <div className="masthead-title-wrap">
                <h1 className="masthead-title font-serif">ALSHIFA UNIVERSITY</h1>
              </div>
              <div className="masthead-affiliations">
                <span>Autonomous Institution</span>
                <span className="sep">•</span>
                <span>Approved by UGC & AICTE</span>
                <span className="sep">•</span>
                <span>Govt. Recognized</span>
                <span className="sep">•</span>
                <span>Estd. 1984</span>
              </div>
              <div className="masthead-tagline">
                Excellence in Higher Education, Scientific Research & Global Innovation
              </div>
            </div>
          </div>

          <div className="masthead-meta">
            <div className="masthead-accreditations">
              <div className="accred-pill gold">
                <span className="accred-title">NAAC 'A++'</span>
                <span className="accred-sub">Grade (3.84)</span>
              </div>
              <div className="accred-pill navy">
                <span className="accred-title">NIRF #24</span>
                <span className="accred-sub">Top University</span>
              </div>
              <div className="accred-pill subtle">
                <span className="accred-title">NBA Tier-1</span>
                <span className="accred-sub">Accredited</span>
              </div>
            </div>

            <div className="masthead-action">
              <button 
                onClick={onOpenApply} 
                className="btn btn-primary btn-sm"
                style={{ boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)', padding: '10px 20px', fontWeight: 700 }}
              >
                Apply for 2026-27
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="navbar-sticky">
        <div className="container navbar-inner">
          {/* Mobile Menu Label for Small Screens */}
          <div className="mobile-only-label" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={20} color="var(--primary-700)" />
            <span>Navigation Menu</span>
          </div>

          {/* Desktop Navigation Links (Starts directly with Home) */}
          <ul className="nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-item-btn ${currentPage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              onClick={() => handleNavClick('portal')}
              className={`nav-portal-badge ${currentPage === 'portal' ? 'active' : ''}`}
              title="Open Student Dashboard"
            >
              <span className="dot"></span>
              <span>Portal</span>
            </button>

            <button 
              onClick={onOpenApply} 
              className="btn btn-primary btn-sm"
              style={{ boxShadow: '0 3px 12px rgba(212, 175, 55, 0.35)' }}
            >
              Apply Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <div style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: '8px', marginBottom: '8px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '4px' }}>
                🎓 Academic Year 2026-27
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Applications are now active for all UG and PG programs.
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-btn ${currentPage === item.id ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} />
              </button>
            ))}

            <button
              onClick={() => handleNavClick('portal')}
              className={`mobile-nav-btn ${currentPage === 'portal' ? 'active' : ''}`}
              style={{ background: 'var(--primary-900)', color: '#ffffff' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GraduationCap size={18} color="var(--accent-gold)" /> Student Dashboard
              </span>
              <ChevronRight size={16} />
            </button>

            <div style={{ marginTop: '12px' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenApply(); }} 
                className="btn btn-primary btn-block"
              >
                Apply for Admission 2026
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
