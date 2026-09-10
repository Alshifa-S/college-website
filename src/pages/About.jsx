import React from 'react';
import { Award, Compass, Target, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { collegeInfo } from '../data/collegeData';
import { Breadcrumb } from '../components/Breadcrumb';

export function About({ onNavigate, onOpenApply }) {
  const milestones = [
    {
      year: "1984",
      title: "Founding of the Alshifa Educational Trust",
      desc: "Inaugurated by eminent scholars with undergraduate programs in Mathematics, Physics, Chemistry, and English Literature."
    },
    {
      year: "1992",
      title: "Launch of Computing & Engineering School",
      desc: "Pioneered early computer science degrees and established the first Unix-based computational laboratory in the region."
    },
    {
      year: "2004",
      title: "Attainment of Autonomous Status & NBA Accreditation",
      desc: "Granted autonomous academic curriculum status by UGC, enabling industry-benchmarked syllabi and collaborative research."
    },
    {
      year: "2016",
      title: "Expansion to 85-Acre Smart Green Campus",
      desc: "Inauguration of the Sir C.V. Raman Central Digital Library, Supercomputing Hub, and Olympic Sports Complex."
    },
    {
      year: "2026",
      title: "Historic NAAC 'A++' Grade & NIRF Top 25",
      desc: "Recognized nationwide as a benchmark institution with 96.4% placements, 340+ global recruiters, and $4.5M in research endowments."
    }
  ];

  const objectives = [
    {
      title: "Transformative Pedagogy",
      desc: "Fostering experiential, problem-oriented, and interdisciplinary learning supported by smart classrooms and research studios."
    },
    {
      title: "Cutting-Edge Applied Research",
      desc: "Pursuing high-impact technological and scientific solutions in Artificial Intelligence, Green Chemistry, Clean Energy, and FinTech."
    },
    {
      title: "Industry Immersion & Career Ready",
      desc: "Cultivating corporate synergy through live projects, executive internships, and dedicated aptitude bootcamps ensuring top-tier placements."
    },
    {
      title: "Ethical Leadership & Social Responsibility",
      desc: "Instilling uncompromising human integrity, sustainability awareness, and empathetic leadership committed to societal progress."
    }
  ];

  return (
    <div>
      <Breadcrumb pageTitle="About College" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <Award size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>Four Decades of Excellence (1984 - 2026)</span>
          </div>
          <h1 className="page-banner-title font-serif">About Alshifa University</h1>
          <p className="page-banner-desc">
            A premier autonomous institution dedicated to academic rigor, pioneering scientific inquiry, and nurturing principled leaders for tomorrow's global society.
          </p>
        </div>
      </section>

      {/* College Overview & Stats */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Institutional Profile</span>
              <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '18px', lineHeight: 1.25 }}>
                Empowering Intellects, Pioneering Technological Breakthroughs
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '18px' }}>
                Alshifa University was established in 1984 with a transcendent vision: to democratize high-caliber technological and scientific education while maintaining world-class academic integrity.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Over the past 42 years, the institute has evolved into a nationally recognized multi-disciplinary university ecosystem spanning 8 departments, 16+ UG & PG programs, and over 480 distinguished faculty members. With autonomous status, we continuously update our curriculum to match the rapid advancements in Artificial Intelligence, Quantitative Finance, Green Technologies, and Global Media.
              </p>

              {/* Quick Highlights list */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
                {[
                  "85-Acre Lush Wi-Fi 6 Campus",
                  "NAAC 'A++' Tier-1 Accreditation",
                  "Ranked #24 Nationwide in NIRF",
                  "Over 12,500 Active Enrolled Scholars",
                  "24 State-of-the-Art Research Labs",
                  "340+ Global Recruiter Network"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--primary-900)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--success)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <button onClick={onOpenApply} className="btn btn-primary btn-lg">
                  Apply for Admission 2026 <ArrowRight size={18} />
                </button>
                <button onClick={() => onNavigate('departments')} className="btn btn-outline-navy btn-lg">
                  Explore Departments
                </button>
              </div>
            </div>

            {/* Right: Campus Heritage Showcase */}
            <div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '4px solid #ffffff' }}>
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000"
                  alt="Alshifa University Heritage Quadrangle"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(10, 25, 47, 0.9) 0%, transparent 80%)', padding: '28px 24px', color: '#ffffff' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Alshifa Knowledge City
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    Heritage Quadrangle & Clock Tower
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Guiding Principles</span>
            <h2 className="section-title">Vision, Mission & Core Values</h2>
            <p className="section-subtitle">
              The ethical and philosophical foundation that drives our institutional trajectory.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '32px' }}>
            {/* Vision Card */}
            <div className="card" style={{ padding: '36px', height: '100%', borderTop: '4px solid var(--accent-gold)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Compass size={30} color="var(--accent-gold-dark)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '14px' }}>
                Our Vision
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                "To be a globally distinguished center of academic excellence and applied scientific innovation, celebrated for producing transformative leaders who solve complex societal challenges with ethical integrity and creative courage."
              </p>
            </div>

            {/* Mission Card */}
            <div className="card" style={{ padding: '36px', height: '100%', borderTop: '4px solid var(--primary-600)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target size={30} color="var(--primary-600)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '14px' }}>
                Our Mission
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary-600)', fontWeight: 800 }}>•</span>
                  Provide rigorous, cutting-edge education benchmarked against the finest international universities.
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary-600)', fontWeight: 800 }}>•</span>
                  Nurture an environment of high-impact research, patent creation, and venture incubation.
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary-600)', fontWeight: 800 }}>•</span>
                  Inculcate strong societal ethics, empathy, environmental stewardship, and lifelong inquiry.
                </li>
              </ul>
            </div>

            {/* Core Values */}
            <div className="card" style={{ padding: '36px', height: '100%', borderTop: '4px solid var(--success)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={30} color="var(--success)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '14px' }}>
                Core Values
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
                <div>
                  <strong style={{ color: 'var(--primary-900)' }}>Academic Integrity:</strong>
                  <div style={{ color: 'var(--text-muted)' }}>Uncompromising honesty in learning, assessment, and research conduct.</div>
                </div>
                <div>
                  <strong style={{ color: 'var(--primary-900)' }}>Inclusive Merit:</strong>
                  <div style={{ color: 'var(--text-muted)' }}>Equal opportunities for all talented minds regardless of economic background.</div>
                </div>
                <div>
                  <strong style={{ color: 'var(--primary-900)' }}>Innovation Mindset:</strong>
                  <div style={{ color: 'var(--text-muted)' }}>Relentless curiosity, experimentative courage, and willingness to disrupt.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Institutional Charter</span>
            <h2 className="section-title">Strategic Objectives</h2>
            <p className="section-subtitle">
              Key operational pillars that guide our governance, faculty appointments, and curriculum investments.
            </p>
          </div>

          <div className="grid-2">
            {objectives.map((obj, idx) => (
              <div key={idx} style={{ background: 'var(--bg-subtle)', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', gap: '18px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--primary-800)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  {idx + 1}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '8px' }}>
                    {obj.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional History / Milestones Timeline */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Legacy & Milestones</span>
            <h2 className="section-title">Our 40+ Year Journey</h2>
            <p className="section-subtitle">
              From a modest collegiate academy in 1984 to one of the nation's premier technological universities.
            </p>
          </div>

          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
            {/* Timeline center line */}
            <div style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '20px',
              width: '3px',
              background: 'linear-gradient(to bottom, var(--accent-gold), var(--primary-800))'
            }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {milestones.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', position: 'relative' }}>
                  {/* Dot */}
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--primary-800)',
                    border: '3px solid var(--accent-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    flexShrink: 0,
                    zIndex: 2
                  }}>
                    {m.year}
                  </div>

                  <div style={{ background: '#ffffff', padding: '22px 26px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', flexGrow: 1 }}>
                    <h4 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '6px' }}>
                      {m.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Principal's Message */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container container-narrow">
          <div style={{
            background: 'linear-gradient(135deg, #0d213f 0%, #0a192f 100%)',
            color: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            boxShadow: 'var(--shadow-xl)',
            border: '2px solid rgba(212, 175, 55, 0.4)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <img
                src={collegeInfo.principal.image}
                alt={collegeInfo.principal.name}
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-gold)' }}
              />
              <div>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                  Official Address
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                  Principal's Message to Aspiring Scholars
                </h3>
                <div style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
                  {collegeInfo.principal.name} — {collegeInfo.principal.qualification}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--accent-gold-light)', fontStyle: 'italic' }}>
                  {collegeInfo.principal.experience}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '1.02rem', color: '#e2e8f0', lineHeight: 1.8, marginBottom: '24px' }}>
              <p style={{ marginBottom: '16px' }}>
                "Dear Prospective Students, Parents, and Partners,
              </p>
              <p style={{ marginBottom: '16px' }}>
                {collegeInfo.principal.message}
              </p>
              <p style={{ marginBottom: '16px' }}>
                Our educational philosophy is anchored on active inquiry and problem formulation. We do not simply teach tools that may become obsolete in five years; we mentor students in the first principles of engineering, quantitative logic, commercial strategy, and humane ethics. When you graduate from Alshifa University, you walk into industry or academia not merely with a degree, but with intellectual resilience and proven creative grit.
              </p>
              <p>
                I warmly welcome you to explore our vibrant campus community and realize your fullest potential."
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '20px' }}>
              <div>
                <div style={{ fontWeight: 800, color: 'var(--accent-gold)', fontSize: '1.1rem' }}>{collegeInfo.principal.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Principal & Lead Academic Director, Alshifa University</div>
              </div>
              <button onClick={onOpenApply} className="btn btn-primary">
                Join Alshifa University <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations & Achievements Grid */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quality Assurances</span>
            <h2 className="section-title">Accreditations & National Recognitions</h2>
            <p className="section-subtitle">
              Independently verified standards of academic governance, research infrastructure, and graduate employability.
            </p>
          </div>

          <div className="grid-4">
            {collegeInfo.accreditations.map((acc, idx) => (
              <div key={idx} className="card" style={{ padding: '28px', textAlign: 'center', height: '100%' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Award size={28} color="var(--accent-gold-dark)" />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '8px' }}>
                  {acc.name}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {acc.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
