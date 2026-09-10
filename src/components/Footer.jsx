import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { collegeInfo } from '../data/collegeData';

export function Footer({ onNavigate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const handleNav = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: College Intro & Badges */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/crest.svg" alt="Alshifa University" style={{ width: '44px', height: '44px' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.5px' }}>
                  ALSHIFA UNIVERSITY
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                  Excellence in Higher Education & Research
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              Founded in 1984, Alshifa University is an autonomous premier institution committed to global excellence in technological research, management innovation, and comprehensive student transformation.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.76rem', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--accent-gold-light)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                NAAC A++ (3.84)
              </span>
              <span style={{ fontSize: '0.76rem', background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                NIRF #24
              </span>
              <span style={{ fontSize: '0.76rem', background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                NBA Tier-1
              </span>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <LinkedinIcon size={18} />, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: <TwitterIcon size={18} />, label: "Twitter", href: "https://twitter.com" },
                { icon: <YoutubeIcon size={18} />, label: "YouTube", href: "https://youtube.com" },
                { icon: <InstagramIcon size={18} />, label: "Instagram", href: "https://instagram.com" },
                { icon: <FacebookIcon size={18} />, label: "Facebook", href: "https://facebook.com" }
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cbd5e1',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.color = '#0a192f'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#cbd5e1'; }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('about')} className="footer-link-btn"><ArrowRight size={13} /> About the Institute</button></li>
              <li><button onClick={() => handleNav('courses')} className="footer-link-btn"><ArrowRight size={13} /> Academic Programs (UG/PG)</button></li>
              <li><button onClick={() => handleNav('admissions')} className="footer-link-btn"><ArrowRight size={13} /> Admissions Procedure 2026</button></li>
              <li><button onClick={() => handleNav('faculty')} className="footer-link-btn"><ArrowRight size={13} /> Faculty Directory</button></li>
              <li><button onClick={() => handleNav('facilities')} className="footer-link-btn"><ArrowRight size={13} /> Campus Facilities</button></li>
              <li><button onClick={() => handleNav('placements')} className="footer-link-btn"><ArrowRight size={13} /> Training & Placements</button></li>
              <li><button onClick={() => handleNav('portal')} className="footer-link-btn"><ArrowRight size={13} /> Student Portal Dashboard</button></li>
            </ul>
          </div>

          {/* Column 3: Academic Departments */}
          <div>
            <h4 className="footer-col-title">Departments</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('departments')} className="footer-link-btn">Computer Science & Engg</button></li>
              <li><button onClick={() => handleNav('departments')} className="footer-link-btn">Information Technology</button></li>
              <li><button onClick={() => handleNav('departments')} className="footer-link-btn">Commerce & Finance</button></li>
              <li><button onClick={() => handleNav('departments')} className="footer-link-btn">Management Studies (MBA)</button></li>
              <li><button onClick={() => handleNav('departments')} className="footer-link-btn">Mathematics & Data Science</button></li>
              <li><button onClick={() => handleNav('departments')} className="footer-link-btn">Physics & Materials</button></li>
              <li><button onClick={() => handleNav('departments')} className="footer-link-btn">Chemical Sciences</button></li>
              <li><button onClick={() => handleNav('departments')} className="footer-link-btn">English & Cultural Studies</button></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="footer-col-title">Contact Information</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '22px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{collegeInfo.location}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>{collegeInfo.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>{collegeInfo.email}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Clock size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>Mon - Sat: 8:30 AM - 5:30 PM</span>
              </div>
            </div>

            <h5 style={{ color: '#ffffff', fontSize: '0.92rem', marginBottom: '10px', fontWeight: 600 }}>
              Subscribe to Campus Circulars
            </h5>
            {subscribed ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#6ee7b7', padding: '10px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} /> Subscribed successfully to circulars!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '6px' }}>
                <input
                  type="email"
                  placeholder="Your official email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#ffffff',
                    fontSize: '0.84rem'
                  }}
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Alshifa University. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <button onClick={() => handleNav('admissions')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.84rem' }}>
              Admissions Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNav('contact')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.84rem' }}>
              Privacy & Grievance
            </button>
            <span>•</span>
            <button onClick={() => handleNav('portal')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.84rem' }}>
              Student Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
