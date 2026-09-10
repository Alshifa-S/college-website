import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { coursesData } from '../data/collegeData';

export function ApplyModal({ isOpen, onClose, defaultCourse = "" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: defaultCourse || (coursesData[0]?.id || ''),
    qualification: '12th Grade / Intermediate',
    percentage: '',
    city: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.percentage.trim()) {
      newErrors.percentage = 'Percentage / CGPA is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const appNumber = `ASAU-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const selectedCourseObj = coursesData.find(c => c.id === formData.courseId);
      setSubmittedData({
        ...formData,
        appNumber,
        courseName: selectedCourseObj ? selectedCourseObj.name : 'Selected Program',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      });
    }, 900);
  };

  const handleResetAndClose = () => {
    setSubmittedData(null);
    setErrors({});
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleResetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} color="var(--accent-gold)" />
            <h3 className="modal-title">
              {submittedData ? 'Application Submitted' : 'Online Admission Application (2026-27)'}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={handleResetAndClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {submittedData ? (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.12)',
                color: 'var(--success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px'
              }}>
                <CheckCircle2 size={40} />
              </div>

              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '8px' }}>
                Application Received Successfully!
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                Thank you, <strong>{submittedData.fullName}</strong>. Your provisional application has been registered with the admissions office.
              </p>

              {/* Receipt Box */}
              <div style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px dashed #cbd5e1', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Application Reference:</span>
                  <strong style={{ color: 'var(--primary-800)', fontFamily: 'monospace', fontSize: '1rem' }}>{submittedData.appNumber}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Candidate Name:</span>
                  <span style={{ fontWeight: 600 }}>{submittedData.fullName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Program Applied:</span>
                  <span style={{ fontWeight: 600 }}>{submittedData.courseName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Contact Email:</span>
                  <span style={{ fontWeight: 600 }}>{submittedData.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Submission Date:</span>
                  <span style={{ fontWeight: 600 }}>{submittedData.date}</span>
                </div>
              </div>

              <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '12px 16px', borderRadius: '8px', fontSize: '0.86rem', color: '#1e40af', marginBottom: '24px' }}>
                ℹ️ An acknowledgment email with document submission guidelines and counselor details has been dispatched to <strong>{submittedData.email}</strong>.
              </div>

              <button className="btn btn-primary btn-block" onClick={handleResetAndClose}>
                Done & Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Join over 12,000 students at Alshifa University. Fill the form below to initiate your 2026-27 admission counseling.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address <span className="req">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Mobile Number <span className="req">*</span></label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <div className="form-error">{errors.phone}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">City / State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Chicago, IL"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Select Desired Program <span className="req">*</span></label>
                <select
                  className="form-control"
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                >
                  <optgroup label="Undergraduate (UG) Programs">
                    {coursesData.filter(c => c.level === 'UG').map(c => (
                      <option key={c.id} value={c.id}>{c.name} ({c.duration})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Postgraduate (PG) Programs">
                    {coursesData.filter(c => c.level === 'PG').map(c => (
                      <option key={c.id} value={c.id}>{c.name} ({c.duration})</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Qualifying Examination</label>
                  <select
                    className="form-control"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  >
                    <option value="12th Grade / Intermediate">10+2 / High School Diploma</option>
                    <option value="B.Tech / B.E. / BCA">Undergraduate Degree (B.Tech / BCA / B.Sc)</option>
                    <option value="B.Com / BBA">Commerce / Management Degree</option>
                    <option value="Other">Other Equivalent Qualification</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Aggregate Marks / CGPA <span className="req">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 88% or 8.8 CGPA"
                    value={formData.percentage}
                    onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                  />
                  {errors.percentage && <div className="form-error">{errors.percentage}</div>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Questions or Remarks (Optional)</label>
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="Mention scholarship queries, hostel requirements, or entrance test scores..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  className="btn btn-outline-navy"
                  onClick={handleResetAndClose}
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ flex: 2 }}
                >
                  {isSubmitting ? (
                    'Processing Application...'
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Submit Application <Send size={16} />
                    </span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
