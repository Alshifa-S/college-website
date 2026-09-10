import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { admissionsData, coursesData } from '../data/collegeData';
import { 
  CheckCircle2, Calendar, FileText, ChevronDown, ChevronUp, 
  Send, Sparkles 
} from 'lucide-react';

export function Admissions({ onNavigate, onOpenApply }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // In-page interactive application form state
  const [formData, setFormData] = useState({
    candidateName: '',
    candidateEmail: '',
    candidatePhone: '',
    programId: coursesData[0]?.id || '',
    category: 'General',
    dob: '',
    previousMarks: '',
    address: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [generatedRefId, setGeneratedRefId] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.candidateName.trim()) errs.candidateName = 'Full Name is required';
    if (!formData.candidateEmail.trim()) {
      errs.candidateEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.candidateEmail)) {
      errs.candidateEmail = 'Valid email is required';
    }
    if (!formData.candidatePhone.trim()) {
      errs.candidatePhone = 'Phone number is required';
    }
    if (!formData.previousMarks.trim()) {
      errs.previousMarks = 'Percentage or CGPA is required';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setGeneratedRefId(`ASAU-2026-${Math.floor(100000 + Math.random() * 900000)}`);
    setFormSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div>
      <Breadcrumb pageTitle="Admissions 2026-27" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <Sparkles size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              Admissions Open for Academic Session 2026-27
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Admissions Center</h1>
          <p className="page-banner-desc">
            Your gateway to premier technological, commercial, and scientific education. Learn about our merit criteria, important timelines, and submit your application online.
          </p>
        </div>
      </section>

      {/* Step-by-Step Procedure */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How to Apply</span>
            <h2 className="section-title">Admission Procedure 2026</h2>
            <p className="section-subtitle">
              A transparent, merit-driven 4-stage enrollment procedure designed for seamless onboarding.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '40px' }}>
            {admissionsData.procedureSteps.map((step) => (
              <div key={step.step} className="card" style={{ padding: '28px', height: '100%', position: 'relative' }}>
                <div style={{
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  color: 'rgba(212, 175, 55, 0.35)',
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  fontFamily: 'var(--font-serif)'
                }}>
                  0{step.step}
                </div>

                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--primary-800)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: '16px'
                }}>
                  Step {step.step}
                </div>

                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '10px', lineHeight: 1.35 }}>
                  {step.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={onOpenApply} className="btn btn-primary btn-lg">
              Start Online Application Now
            </button>
          </div>
        </div>
      </section>

      {/* Important Dates & Required Documents */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            {/* Left: Important Dates Timeline */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Calendar size={24} color="var(--primary-700)" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                  Important Admission Dates (2026)
                </h3>
              </div>

              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--primary-800)', color: '#ffffff' }}>
                      <th style={{ padding: '14px 18px', fontWeight: 600 }}>Milestone / Event</th>
                      <th style={{ padding: '14px 18px', fontWeight: 600 }}>Important Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admissionsData.importantDates.map((d, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)', background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                        <td style={{ padding: '14px 18px', fontWeight: 600, color: 'var(--primary-900)' }}>{d.event}</td>
                        <td style={{ padding: '14px 18px', color: 'var(--accent-gold-dark)', fontWeight: 700 }}>{d.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Required Documents Checklist */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <FileText size={24} color="var(--accent-gold-dark)" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                  Mandatory Document Checklist
                </h3>
              </div>

              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Please keep scanned self-attested copies of the following documents ready prior to online counseling:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {admissionsData.requiredDocuments.map((doc, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={16} color="var(--success)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Application Form Section */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Direct Application</span>
            <h2 className="section-title">Submit Online Admission Form</h2>
            <p className="section-subtitle">
              Fill in your academic details below. The Admissions Cell will review your profile and generate your counseling pass within 24 hours.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            boxShadow: 'var(--shadow-md)'
          }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <CheckCircle2 size={42} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '8px' }}>
                  Application Form Registered!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 24px' }}>
                  Congratulations, <strong>{formData.candidateName}</strong>! Your application has been logged into the admissions registry under Reference ID <strong>{generatedRefId}</strong>.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  <button onClick={() => setFormSubmitted(false)} className="btn btn-outline-navy">
                    Submit Another Application
                  </button>
                  <button onClick={() => onNavigate('portal')} className="btn btn-primary">
                    Go to Student Portal
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                  <div className="form-group">
                    <label className="form-label">Applicant's Full Name <span className="req">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Rachel Adams"
                      value={formData.candidateName}
                      onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                    />
                    {formErrors.candidateName && <div className="form-error">{formErrors.candidateName}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address <span className="req">*</span></label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="rachel.adams@example.com"
                      value={formData.candidateEmail}
                      onChange={(e) => setFormData({ ...formData, candidateEmail: e.target.value })}
                    />
                    {formErrors.candidateEmail && <div className="form-error">{formErrors.candidateEmail}</div>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp Number <span className="req">*</span></label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+1 (555) 234-5678"
                      value={formData.candidatePhone}
                      onChange={(e) => setFormData({ ...formData, candidatePhone: e.target.value })}
                    />
                    {formErrors.candidatePhone && <div className="form-error">{formErrors.candidatePhone}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Select Degree Program <span className="req">*</span></label>
                    <select
                      className="form-control"
                      value={formData.programId}
                      onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                    >
                      {coursesData.map(c => (
                        <option key={c.id} value={c.id}>{c.name} ({c.level})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select
                      className="form-control"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="General">General / Open Category</option>
                      <option value="Merit Scholar">Merit Scholarship Applicant</option>
                      <option value="Sports Quota">Sports Quota Medalist</option>
                      <option value="International">International Student</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Qualifying Exam Marks (%) / CGPA <span className="req">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. 91.5% or 9.2 CGPA"
                      value={formData.previousMarks}
                      onChange={(e) => setFormData({ ...formData, previousMarks: e.target.value })}
                    />
                    {formErrors.previousMarks && <div className="form-error">{formErrors.previousMarks}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Postal Address & City</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Enter current residential address and state..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  ></textarea>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    <Send size={18} /> Submit Application Form
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Accordion) */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Clarifications</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Have questions regarding seat matrix, financial aid, or campus residency? Find immediate answers here.
            </p>
          </div>

          <div>
            {admissionsData.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                  <div className="accordion-header" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="var(--primary-600)" /> : <ChevronDown size={20} color="var(--text-light)" />}
                  </div>
                  {isOpen && (
                    <div className="accordion-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
