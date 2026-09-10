import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { collegeInfo } from '../data/collegeData';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2 
} from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from '../components/SocialIcons';

export function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a message or query';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
  };

  return (
    <div>
      <Breadcrumb pageTitle="Contact Us" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <MapPin size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              Visit or Get in Touch
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Contact Our Campus</h1>
          <p className="page-banner-desc">
            We invite prospective students, parents, visiting scholars, and corporate recruiters to reach out or visit our 85-acre university campus.
          </p>
        </div>
      </section>

      {/* Contact Information & Interactive Form */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '56px' }}>
            {/* Left: Contact Info */}
            <div>
              <span className="section-tag">Campus Headquarters</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '20px' }}>
                We're Here to Assist You
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '32px' }}>
                Have questions regarding academic admission criteria, campus hostel accommodation, or corporate placement tie-ups? Our administrative helpdesk is open Monday through Saturday.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '36px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-600)', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>Campus Address</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {collegeInfo.location}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-dark)', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>Admissions Hotline</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {collegeInfo.phone}
                    </p>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Toll-Free Across All States</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>Official Email Correspondence</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Admissions: {collegeInfo.email}<br />
                      Registrar: {collegeInfo.registrarEmail}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-800)', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>Administrative Hours</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Monday – Friday: 8:30 AM – 5:30 PM<br />
                      Saturday: 9:00 AM – 2:00 PM (Closed on Sundays)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '12px' }}>
                  Connect on Social Media:
                </h4>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { icon: <LinkedinIcon size={18} />, href: "https://linkedin.com" },
                    { icon: <TwitterIcon size={18} />, href: "https://twitter.com" },
                    { icon: <YoutubeIcon size={18} />, href: "https://youtube.com" },
                    { icon: <InstagramIcon size={18} />, href: "https://instagram.com" },
                    { icon: <FacebookIcon size={18} />, href: "https://facebook.com" }
                  ].map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        background: 'var(--bg-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-800)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div style={{
                background: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px',
                boxShadow: 'var(--shadow-md)'
              }}>
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                    <div style={{ width: '68px', height: '68px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '8px' }}>
                      Inquiry Received!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '24px' }}>
                      Thank you for reaching out, <strong>{formData.name}</strong>. An administrative advisor will review your query regarding <em>"{formData.subject}"</em> and contact you shortly at <strong>{formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                      }}
                      className="btn btn-navy"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                      Send an Official Inquiry
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '22px' }}>
                      Fill the form below and our counseling department will respond within 24 business hours.
                    </p>

                    <div className="form-group">
                      <label className="form-label">Your Full Name <span className="req">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. David Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <div className="form-error">{errors.name}</div>}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Email Address <span className="req">*</span></label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="david@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <div className="form-error">{errors.email}</div>}
                      </div>

                      <div className="form-group">
                        <label className="form-label">Contact Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="+1 (555) 019-2834"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Nature of Inquiry</label>
                      <select
                        className="form-control"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="General Inquiry">General Admissions & Prospectus</option>
                        <option value="Course Syllabus">Degree Curriculum & Specializations</option>
                        <option value="Hostel Accommodation">Hostel & Campus Residency</option>
                        <option value="Corporate Placement">Corporate Recruitment & Placements</option>
                        <option value="Campus Tour Booking">Book Guided Campus Tour</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Detailed Message / Question <span className="req">*</span></label>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Write your questions or specify program interests..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                      {errors.message && <div className="form-error">{errors.message}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: '12px' }}>
                      <Send size={16} /> Send Inquiry to Helpdesk
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed / Interactive Campus Location */}
      <section style={{ padding: '0 0 80px', background: '#ffffff' }}>
        <div className="container">
          <div style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ padding: '20px 24px', background: 'var(--primary-900)', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Interactive Location Map
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Alshifa University Campus & Transit Routes</h3>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Sector 62, Metro Innovation Corridor</span>
            </div>

            {/* Styled Map Container */}
            <div style={{ height: '360px', width: '100%', position: 'relative', background: '#e2e8f0' }}>
              <iframe
                title="Alshifa University Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=360&amp;hl=en&amp;q=Alshifa%20University&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{ filter: 'grayscale(15%) contrast(1.1)' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
