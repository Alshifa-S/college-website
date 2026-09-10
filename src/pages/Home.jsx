import React from 'react';
import { 
  ArrowRight, Award, BookOpen, Users, Building, 
  Sparkles, ChevronRight, Calendar 
} from 'lucide-react';
import { collegeInfo, departmentsData, coursesData, facilitiesData, placementsData, eventsAndNewsData, testimonialsData } from '../data/collegeData';
import { CourseCard } from '../components/CourseCard';
import { DepartmentCard } from '../components/DepartmentCard';
import { FacilityCard } from '../components/FacilityCard';
import { NewsCard } from '../components/NewsCard';
import { TestimonialCard } from '../components/TestimonialCard';

export function Home({ onNavigate, onOpenApply, onSelectDepartment }) {
  const featuredCourses = coursesData.slice(0, 3);
  const featuredDepartments = departmentsData.slice(0, 4);
  const featuredFacilities = facilitiesData.slice(0, 3);
  const latestNews = eventsAndNewsData.news.slice(0, 3);

  return (
    <div>
      {/* Hero / Banner Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0a192f 0%, #0d213f 50%, #173863 100%)',
        color: '#ffffff',
        padding: '90px 0 110px',
        overflow: 'hidden'
      }}>
        {/* Decorative Grid and Glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
            <div>
              {/* Accreditation Badges */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(212, 175, 55, 0.35)', padding: '6px 14px', borderRadius: '30px', marginBottom: '22px' }}>
                <Sparkles size={16} color="var(--accent-gold)" />
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--accent-gold-light)' }}>
                  Autonomous Institution • NAAC 'A++' (CGPA 3.84) • NIRF Rank #24
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.5px',
                marginBottom: '20px'
              }}>
                Shaping Global Leaders Through <span style={{ color: 'var(--accent-gold)' }}>Excellence & Innovation</span>
              </h1>

              <p style={{ fontSize: '1.12rem', color: '#cbd5e1', lineHeight: 1.65, maxWidth: '620px', marginBottom: '32px' }}>
                Welcome to <strong>Alshifa University</strong>. For over four decades, we have empowered ambitious minds with world-class computing clusters, state-of-the-art research laboratories, distinguished global faculty, and an outstanding 96.4% placement record.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
                <button
                  onClick={onOpenApply}
                  className="btn btn-primary btn-lg"
                >
                  Apply for Admission 2026 <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onNavigate('courses')}
                  className="btn btn-outline-gold btn-lg"
                >
                  <BookOpen size={18} /> Explore Courses
                </button>
                <button
                  onClick={() => onNavigate('portal')}
                  className="btn btn-white btn-lg"
                  style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <Users size={18} /> Student Portal
                </button>
              </div>

              {/* Key Highlights Ticker */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '20px' }}>
                <div>
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-gold)' }}>96.4%</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Campus Placements</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#ffffff' }}>48.5 LPA</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Highest Package</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#ffffff' }}>85+ Acres</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Wi-Fi 6 Campus</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-gold)' }}>480+</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Ph.D. Faculty</div>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
                border: '4px solid rgba(212, 175, 55, 0.3)',
                position: 'relative',
                height: '460px'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000"
                  alt="Alshifa University Campus"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 25, 47, 0.85) 0%, transparent 60%)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  color: '#ffffff'
                }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Ranked Among Top 25 in Country
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '2px' }}>
                    Alshifa Knowledge City, Metro Corridor
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                background: '#ffffff',
                color: 'var(--primary-900)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-xl)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: '2px solid var(--accent-gold)'
              }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.15)', padding: '10px', borderRadius: '50%' }}>
                  <Award size={26} color="var(--accent-gold-dark)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>Statutory Grade</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-900)' }}>NAAC 'A++'</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Introduction & Principal's Message Preview */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            {/* Left: Introduction */}
            <div>
              <span className="section-tag">About Alshifa University</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '18px', lineHeight: 1.25 }}>
                A Legacy of Academic Prowess, Rigor & Human Values
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Established in 1984, our institution has emerged as an emblem of visionary higher learning. Spanning an 85-acre lush green smart campus, Alshifa University houses 8 academic departments, 24 specialized research centers, and over 12,500 active scholars.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '26px' }}>
                Our autonomous curriculum is continuously benchmarked against MIT, Stanford, and IIT syllabi, blending foundational rigor with real-world experiential engineering, FinTech incubation, and interdisciplinary humanities.
              </p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <button onClick={() => onNavigate('about')} className="btn btn-navy">
                  Read Full History & Vision <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('admissions')} className="btn btn-outline-navy">
                  Admission Procedure
                </button>
              </div>
            </div>

            {/* Right: Principal's Message Card */}
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              position: 'relative',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
                <img
                  src={collegeInfo.principal.image}
                  alt={collegeInfo.principal.name}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-gold)' }}
                />
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    From the Principal's Desk
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                    {collegeInfo.principal.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 500 }}>
                    {collegeInfo.principal.qualification}
                  </div>
                </div>
              </div>

              <blockquote style={{ fontSize: '0.96rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.65, marginBottom: '20px' }}>
                "{collegeInfo.principal.message.slice(0, 245)}..."
              </blockquote>

              <button
                onClick={() => onNavigate('about')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-600)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: 0
                }}
              >
                Read Principal's Complete Address <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Academic Excellence</span>
            <h2 className="section-title">Popular Degree Programs</h2>
            <p className="section-subtitle">
              Choose from industry-aligned undergraduate and postgraduate degrees developed in consultation with tech leaders and business executives.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '40px' }}>
            {featuredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onApply={() => onOpenApply(course.id)}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onNavigate('courses')}
              className="btn btn-navy btn-lg"
            >
              Explore All 16+ Degree Programs <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Academic Departments Overview */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Centres of Excellence</span>
            <h2 className="section-title">Academic Departments</h2>
            <p className="section-subtitle">
              Eight autonomous departments spearheading fundamental science, cutting-edge computing, and strategic corporate disciplines.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '40px' }}>
            {featuredDepartments.map(dept => (
              <DepartmentCard
                key={dept.id}
                department={dept}
                onLearnMore={() => onSelectDepartment(dept)}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onNavigate('departments')}
              className="btn btn-outline-navy btn-lg"
            >
              View All 8 Academic Departments <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Campus Facilities Highlight */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Campus Life</span>
            <h2 className="section-title">World-Class Campus Facilities</h2>
            <p className="section-subtitle">
              From supercomputing clusters and 24/7 digital libraries to Olympic sports arenas and residential hostels.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '40px' }}>
            {featuredFacilities.map(fac => (
              <FacilityCard key={fac.id} facility={fac} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onNavigate('facilities')}
              className="btn btn-navy btn-lg"
            >
              Explore All 10 Campus Facilities <Building size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, var(--primary-900) 0%, var(--primary-800) 100%)',
        color: '#ffffff'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 14px',
              borderRadius: '20px',
              background: 'rgba(212, 175, 55, 0.2)',
              color: 'var(--accent-gold)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px'
            }}>
              Career Development & Corporate Relations
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
              Campus Placement Highlights 2026
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
              Our graduates are recruited by Fortune 500 enterprises, innovative tech unicorns, and top research institutions.
            </p>
          </div>

          {/* Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 24px',
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                {placementsData.stats.placementPercentage}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '4px' }}>Placement Success Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff' }}>
                {placementsData.stats.highestPackage}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '4px' }}>Highest Annual Package</div>
            </div>
            <div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff' }}>
                {placementsData.stats.averagePackage}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '4px' }}>Average Annual Package</div>
            </div>
            <div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                {placementsData.stats.totalCompanies}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '4px' }}>Recruiting Companies</div>
            </div>
          </div>

          {/* Top Recruiters Badges */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontWeight: 600 }}>
              Top Recruiters Visiting Campus
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              {placementsData.topRecruiters.slice(0, 10).map((r, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    color: 'var(--primary-900)',
                    padding: '8px 18px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {r.name}
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onNavigate('placements')}
              className="btn btn-primary btn-lg"
            >
              View Full Placement Statistics & Roadmap <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Latest News & Upcoming Events */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Campus Bulletins</span>
            <h2 className="section-title">Latest News & Events</h2>
            <p className="section-subtitle">
              Stay informed with recent institutional breakthroughs, symposium schedules, and academic announcements.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '40px' }}>
            {latestNews.map(item => (
              <NewsCard
                key={item.id}
                newsItem={item}
                onReadMore={() => onNavigate('events')}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onNavigate('events')}
              className="btn btn-outline-navy btn-lg"
            >
              View All Campus Events & Circulars <Calendar size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Student Voices</span>
            <h2 className="section-title">What Our Scholars & Alumni Say</h2>
            <p className="section-subtitle">
              Hear directly from graduates who transitioned from our lecture halls into leading global organizations.
            </p>
          </div>

          <div className="grid-3">
            {testimonialsData.map(test => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA Banner */}
      <section style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
        color: 'var(--primary-900)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.5px' }}>
            Ready to Begin Your Journey at Alshifa University?
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto 28px', color: '#1e293b', fontWeight: 500 }}>
            Applications for the 2026-27 Academic Session are currently open. Explore your eligibility or schedule a guided campus tour today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={onOpenApply} className="btn btn-navy btn-lg" style={{ boxShadow: 'var(--shadow-md)' }}>
              Apply for Admission Now <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate('contact')} className="btn btn-white btn-lg">
              Contact Admissions Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
