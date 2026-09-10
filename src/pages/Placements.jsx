import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { placementsData } from '../data/collegeData';
import { TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export function Placements({ onNavigate, onOpenApply }) {
  return (
    <div>
      <Breadcrumb pageTitle="Training & Placements" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <TrendingUp size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              Corporate Relations & Career Cell
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Campus Placements</h1>
          <p className="page-banner-desc">
            Empowering students with rigorous coding bootcamps, executive communication grooming, and direct recruitment pathways to Fortune 500 enterprises.
          </p>
        </div>
      </section>

      {/* Headline Placement Statistics */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            textAlign: 'center'
          }}>
            <div style={{ padding: '24px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent-gold-dark)' }}>
                {placementsData.stats.placementPercentage}
              </div>
              <div style={{ fontWeight: 700, color: 'var(--primary-900)', marginTop: '4px' }}>Placement Track Record</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '2px' }}>Consistent Over 5 Years</div>
            </div>

            <div style={{ padding: '24px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary-800)' }}>
                {placementsData.stats.highestPackage}
              </div>
              <div style={{ fontWeight: 700, color: 'var(--primary-900)', marginTop: '4px' }}>Highest Annual Package</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '2px' }}>Offered by Global Tech Giant</div>
            </div>

            <div style={{ padding: '24px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary-800)' }}>
                {placementsData.stats.averagePackage}
              </div>
              <div style={{ fontWeight: 700, color: 'var(--primary-900)', marginTop: '4px' }}>Average Annual Package</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '2px' }}>Across All Disciplines</div>
            </div>

            <div style={{ padding: '24px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent-gold-dark)' }}>
                {placementsData.stats.totalCompanies}
              </div>
              <div style={{ fontWeight: 700, color: 'var(--primary-900)', marginTop: '4px' }}>Visiting Corporate Partners</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '2px' }}>Tech, Core, Finance & Consult</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiting Companies */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Corporate Network</span>
            <h2 className="section-title">Top Recruiting Companies</h2>
            <p className="section-subtitle">
              Prominent multinational technology organizations, investment banks, and consulting leaders that recruit on our campus annually.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
            gap: '16px',
            marginBottom: '40px'
          }}>
            {placementsData.topRecruiters.map((rec, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '22px 14px',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: 'var(--primary-900)',
                  letterSpacing: '0.3px',
                  marginBottom: '4px'
                }}>
                  {rec.logoText}
                </div>
                <span style={{
                  fontSize: '0.74rem',
                  color: 'var(--text-light)',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  {rec.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process Roadmap */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Campus Recruitment Roadmap</span>
            <h2 className="section-title">The 5-Step Placement Process</h2>
            <p className="section-subtitle">
              How our structured placement ecosystem transitions students into corporate roles.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '50px' }}>
            {placementsData.processSteps.map((step) => (
              <div
                key={step.step}
                className="card"
                style={{
                  padding: '24px 18px',
                  height: '100%',
                  borderTop: '4px solid var(--accent-gold)'
                }}
              >
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--primary-700)',
                  marginBottom: '10px'
                }}>
                  {step.step}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '8px', lineHeight: 1.35 }}>
                  {step.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.55 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Career Development */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Career Acceleration</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '16px' }}>
                Training & Career Development Cell (T&P)
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Our dedicated Training & Placement Directorate begins grooming scholars right from their sophomore year. We bridge classroom theory and corporate expectations through specialized technical certifications, competitive coding challenges, and mock HR boardrooms.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {placementsData.trainingHighlights.map((hl, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '4px', borderRadius: '50%', color: 'var(--success)', marginTop: '2px' }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <span style={{ fontSize: '0.94rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      {hl}
                    </span>
                  </div>
                ))}
              </div>

              <button onClick={onOpenApply} className="btn btn-primary btn-lg">
                Join Alshifa University & Launch Your Career <ArrowRight size={18} />
              </button>
            </div>

            {/* Placement Growth Table */}
            <div style={{ background: '#ffffff', padding: '32px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <TrendingUp size={22} color="var(--primary-700)" />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                  Year-over-Year Placement Growth
                </h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: 'var(--primary-800)', color: '#ffffff' }}>
                    <th style={{ padding: '12px 14px' }}>Batch</th>
                    <th style={{ padding: '12px 14px' }}>Placement %</th>
                    <th style={{ padding: '12px 14px' }}>Highest</th>
                    <th style={{ padding: '12px 14px' }}>Average</th>
                  </tr>
                </thead>
                <tbody>
                  {placementsData.yearlyGrowth.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--primary-900)' }}>Class of {row.year}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--success)', fontWeight: 700 }}>{row.placementRate}</td>
                      <td style={{ padding: '12px 14px', fontWeight: 600 }}>{row.highest}</td>
                      <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--primary-700)' }}>{row.avg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: '20px', background: '#eff6ff', padding: '12px 16px', borderRadius: '8px', fontSize: '0.84rem', color: '#1e40af' }}>
                ⚡ Over 450+ Day-1 recruitment offers received during the current Academic Year 2026 drive!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
