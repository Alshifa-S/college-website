import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { studentPortalMock } from '../data/collegeData';
import { 
  User, CheckCircle2, Clock, BookOpen, Calendar, FileText, 
  CreditCard, Bell, Download, Award, Check, Send 
} from 'lucide-react';

export function StudentPortal({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [assignmentSuccess, setAssignmentSuccess] = useState('');
  const [hallTicketDownloaded, setHallTicketDownloaded] = useState(false);
  const [receiptDownloaded, setReceiptDownloaded] = useState(false);

  const { profile, attendance, grades, currentMarks, timetable, assignments, announcements, exams, fees } = studentPortalMock;

  const handleAssignmentSubmit = (asgTitle) => {
    setAssignmentSuccess(`Assignment "${asgTitle}" uploaded and timestamped successfully!`);
    setTimeout(() => setAssignmentSuccess(''), 3500);
  };

  const portalNav = [
    { id: 'overview', label: 'Overview', icon: <User size={18} /> },
    { id: 'attendance', label: 'Attendance', icon: <Clock size={18} /> },
    { id: 'marks', label: 'Marks & Grades', icon: <Award size={18} /> },
    { id: 'timetable', label: 'Timetable', icon: <Calendar size={18} /> },
    { id: 'assignments', label: 'Assignments', icon: <FileText size={18} /> },
    { id: 'exams', label: 'Exams & Hall Ticket', icon: <BookOpen size={18} /> },
    { id: 'fees', label: 'Fee Ledger', icon: <CreditCard size={18} /> }
  ];

  return (
    <div>
      <Breadcrumb pageTitle="Student Portal Dashboard" onNavigate={onNavigate} />

      {/* Top Welcome Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #102a4e 100%)',
        color: '#ffffff',
        padding: '36px 0',
        borderBottom: '4px solid var(--accent-gold)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img
                src={profile.avatar}
                alt={profile.name}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-gold)' }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                    Welcome, {profile.name}
                  </h1>
                  <span style={{ fontSize: '0.74rem', background: '#10b981', color: '#ffffff', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                    Active
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-gold-light)' }}>
                  {profile.rollNo} • {profile.program}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '2px' }}>
                  {profile.semester} • Section: {profile.section} • Advisor: {profile.advisor}
                </div>
              </div>
            </div>

            {/* Quick Metrics Header */}
            <div style={{ display: 'flex', gap: '20px', background: 'rgba(255, 255, 255, 0.08)', padding: '14px 22px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>{profile.cgpa}</div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>Overall CGPA</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>{profile.overallAttendance}</div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>Attendance</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>{profile.bloodGroup}</div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>Blood Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portal Dashboard Content */}
      <section style={{ padding: '40px 0 80px', background: 'var(--bg-main)' }}>
        <div className="container">
          {assignmentSuccess && (
            <div style={{ background: '#ecfdf5', border: '1px solid #10b981', color: '#065f46', padding: '12px 20px', borderRadius: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
              <CheckCircle2 size={18} color="var(--success)" />
              <span>{assignmentSuccess}</span>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '30px' }}>
            {/* Sidebar Navigation */}
            <div>
              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', padding: '12px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-light)', fontWeight: 700, padding: '8px 12px 4px' }}>
                  Student Workspace
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {portalNav.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '11px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: 'none',
                        background: activeTab === item.id ? 'var(--primary-800)' : 'transparent',
                        color: activeTab === item.id ? '#ffffff' : 'var(--text-main)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Helpdesk Notice */}
              <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 'var(--radius-md)', padding: '18px', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1e40af', fontWeight: 700, fontSize: '0.9rem' }}>
                  <Bell size={16} /> Academic Helpdesk
                </div>
                <p style={{ fontSize: '0.82rem', color: '#3b82f6', lineHeight: 1.5, marginBottom: '10px' }}>
                  Need help with hall tickets, course credits, or hostel allotment? Contact student services:
                </p>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1e40af' }}>
                  helpdesk@alshifa-university.edu
                </div>
              </div>
            </div>

            {/* Main Content Panels */}
            <div>
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div>
                  {/* Summary Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '28px' }}>
                    <div className="card" style={{ padding: '22px' }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 600 }}>Cumulative GPA</div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-900)', marginTop: '4px' }}>9.14 / 10.0</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--success)', marginTop: '4px' }}>First Class with Distinction</div>
                    </div>

                    <div className="card" style={{ padding: '22px' }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 600 }}>Semester Attendance</div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981', marginTop: '4px' }}>89.2%</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '4px' }}>Requirement: Min 75%</div>
                    </div>

                    <div className="card" style={{ padding: '22px' }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 600 }}>Pending Tasks</div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold-dark)', marginTop: '4px' }}>2 Due</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '4px' }}>DevOps & ML Assignments</div>
                    </div>
                  </div>

                  {/* Announcements Card */}
                  <div className="card" style={{ padding: '24px', marginBottom: '28px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Bell size={18} color="var(--primary-600)" /> Student Notice Board
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {announcements.map(ann => (
                        <div key={ann.id} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                          <span style={{ fontSize: '0.78rem', background: 'var(--bg-subtle)', padding: '3px 8px', borderRadius: '4px', fontWeight: 700, color: 'var(--primary-700)', flexShrink: 0 }}>
                            {ann.date}
                          </span>
                          <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                            {ann.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Today's Timetable Preview */}
                  <div className="card" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={18} color="var(--accent-gold-dark)" /> Today's Lecture Schedule (Monday)
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
                      {timetable[0].slots.map((slot, idx) => (
                        <div key={idx} style={{ background: 'var(--bg-subtle)', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                          <div style={{ fontSize: '0.78rem', color: 'var(--primary-600)', fontWeight: 700 }}>{slot.time}</div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)', margin: '4px 0' }}>{slot.subject}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Room: {slot.room}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>{slot.faculty}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ATTENDANCE */}
              {activeTab === 'attendance' && (
                <div className="card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                        Subject-Wise Attendance Ledger
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        Academic Year 2026-27 • Semester 6 • Mandatory Minimum: 75%
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>89.2%</span>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>Overall Average</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {attendance.map((att, idx) => (
                      <div key={idx} style={{ background: 'var(--bg-subtle)', padding: '18px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <div>
                            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--primary-600)', background: '#eff6ff', padding: '2px 8px', borderRadius: '4px' }}>
                              {att.code}
                            </span>
                            <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-900)', marginLeft: '10px' }}>
                              {att.subject}
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                              Attended: <strong>{att.attended}</strong> / {att.total} hrs
                            </span>
                            <span style={{ fontSize: '1.05rem', fontWeight: 800, color: att.pct >= 85 ? '#10b981' : 'var(--primary-700)' }}>
                              {att.pct}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: `${att.pct}%`, height: '100%', background: att.pct >= 90 ? '#10b981' : att.pct >= 80 ? 'var(--primary-600)' : 'var(--warning)', borderRadius: '4px', transition: 'width 0.5s ease' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: MARKS & GRADES */}
              {activeTab === 'marks' && (
                <div className="card" style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                    Academic Grade Sheet & Marks
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Continuous Internal Assessment (CIA) & Semester Performance
                  </p>

                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem', marginBottom: '32px' }}>
                    <thead>
                      <tr style={{ background: 'var(--primary-800)', color: '#ffffff' }}>
                        <th style={{ padding: '12px 14px' }}>Subject</th>
                        <th style={{ padding: '12px 14px' }}>Internal (30)</th>
                        <th style={{ padding: '12px 14px' }}>Mid-Term (40)</th>
                        <th style={{ padding: '12px 14px' }}>Lab/Practical (30)</th>
                        <th style={{ padding: '12px 14px' }}>Total (100)</th>
                        <th style={{ padding: '12px 14px' }}>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMarks.map((m, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)', background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                          <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--primary-900)' }}>{m.subject}</td>
                          <td style={{ padding: '12px 14px' }}>{m.internal}</td>
                          <td style={{ padding: '12px 14px' }}>{m.midTerm}</td>
                          <td style={{ padding: '12px 14px' }}>{m.practical}</td>
                          <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--primary-800)' }}>{m.total}</td>
                          <td style={{ padding: '12px 14px', fontWeight: 800, color: m.grade === 'O' ? '#10b981' : 'var(--primary-600)' }}>{m.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '12px' }}>
                    Past Semester GPA History
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
                    {grades.map((g, i) => (
                      <div key={i} style={{ background: 'var(--bg-subtle)', padding: '14px', borderRadius: '8px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>{g.sem}</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-900)', margin: '4px 0' }}>{g.sgpa}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--success)' }}>{g.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: TIMETABLE */}
              {activeTab === 'timetable' && (
                <div className="card" style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                    Weekly Lecture Timetable
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    B.Tech CSE - Semester 6 - Section A
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {timetable.map((dayPlan, i) => (
                      <div key={i} style={{ border: '1px solid var(--border-subtle)', borderRadius: '8px', overflow: 'hidden' }}>
                        <div style={{ background: 'var(--primary-800)', color: '#ffffff', padding: '10px 16px', fontWeight: 700, fontSize: '0.95rem' }}>
                          {dayPlan.day}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${dayPlan.slots.length}, 1fr)`, gap: '1px', background: '#e2e8f0' }}>
                          {dayPlan.slots.map((s, idx) => (
                            <div key={idx} style={{ background: '#ffffff', padding: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <div style={{ fontSize: '0.78rem', color: 'var(--primary-600)', fontWeight: 700 }}>{s.time}</div>
                              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--primary-900)' }}>{s.subject}</div>
                              <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>Room: {s.room}</div>
                              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>{s.faculty}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: ASSIGNMENTS */}
              {activeTab === 'assignments' && (
                <div className="card" style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '6px' }}>
                    Coursework & Project Submissions
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Submit labs and problem sets before statutory due dates to avoid penalty.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {assignments.map(asg => (
                      <div key={asg.id} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                            <span style={{ fontSize: '0.76rem', background: '#eff6ff', color: 'var(--primary-700)', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                              {asg.subject}
                            </span>
                            <span style={{
                              fontSize: '0.74rem',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontWeight: 700,
                              background: asg.status === 'Graded' ? '#dcfce7' : asg.status === 'Submitted' ? '#e0e7ff' : '#fef3c7',
                              color: asg.status === 'Graded' ? '#15803d' : asg.status === 'Submitted' ? '#3730a3' : '#b45309'
                            }}>
                              {asg.status}
                            </span>
                          </div>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
                            {asg.title}
                          </h4>
                          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                            Due Date: <strong>{asg.dueDate}</strong> • Max Points: {asg.maxMarks} • Evaluation: <strong>{asg.grade}</strong>
                          </div>
                        </div>

                        <div>
                          {asg.status === 'In Progress' ? (
                            <button
                              onClick={() => handleAssignmentSubmit(asg.title)}
                              className="btn btn-primary btn-sm"
                            >
                              <Send size={14} /> Submit Solution
                            </button>
                          ) : (
                            <button
                              disabled
                              className="btn btn-white btn-sm"
                              style={{ opacity: 0.7, cursor: 'default' }}
                            >
                              <Check size={14} /> Submitted
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: EXAMS & HALL TICKET */}
              {activeTab === 'exams' && (
                <div className="card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                        {exams.upcoming}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        Examination Venue: <strong>{exams.center}</strong>
                      </p>
                    </div>

                    <button
                      onClick={() => setHallTicketDownloaded(true)}
                      className="btn btn-navy btn-sm"
                    >
                      <Download size={15} /> {hallTicketDownloaded ? 'Downloaded (PDF)' : 'Download Hall Ticket'}
                    </button>
                  </div>

                  {hallTicketDownloaded && (
                    <div style={{ background: '#eff6ff', border: '1px solid #93c5fd', padding: '12px 16px', borderRadius: '8px', color: '#1e40af', fontSize: '0.85rem', marginBottom: '20px' }}>
                      ✓ Hall ticket PDF file generated and validated for Roll No: <strong>{profile.rollNo}</strong>. Please bring a printed copy with your student ID.
                    </div>
                  )}

                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--primary-800)', color: '#ffffff' }}>
                        <th style={{ padding: '12px 14px' }}>Date</th>
                        <th style={{ padding: '12px 14px' }}>Time</th>
                        <th style={{ padding: '12px 14px' }}>Course Code</th>
                        <th style={{ padding: '12px 14px' }}>Subject Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exams.schedule.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)', background: idx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                          <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--primary-900)' }}>{item.date}</td>
                          <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>{item.time}</td>
                          <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--primary-600)' }}>{item.code}</td>
                          <td style={{ padding: '12px 14px', fontWeight: 600 }}>{item.subject}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TAB 7: FEES */}
              {activeTab === 'fees' && (
                <div className="card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                        Annual Fee Statement & Payment Receipts
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        Session: {fees.academicYear} • Status: <strong style={{ color: 'var(--success)' }}>{fees.paymentStatus}</strong>
                      </p>
                    </div>

                    <button
                      onClick={() => setReceiptDownloaded(true)}
                      className="btn btn-outline-navy btn-sm"
                    >
                      <Download size={15} /> {receiptDownloaded ? 'Receipt Saved' : 'Download Tax Receipt'}
                    </button>
                  </div>

                  {/* Fee Breakdown Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
                    <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>Tuition Fee</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)' }}>{fees.tuitionFee}</div>
                    </div>
                    <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>Lab & Equipment</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)' }}>{fees.labFee}</div>
                    </div>
                    <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>Hostel & Mess</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-900)' }}>{fees.hostelFee}</div>
                    </div>
                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '8px', border: '1px solid #10b981' }}>
                      <div style={{ fontSize: '0.78rem', color: '#065f46', fontWeight: 600 }}>Balance Due</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#10b981' }}>{fees.balanceDue}</div>
                    </div>
                  </div>

                  {/* Payment History */}
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '12px' }}>
                    Transaction Ledger
                  </h4>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--primary-800)', color: '#ffffff' }}>
                        <th style={{ padding: '10px 14px' }}>Txn ID</th>
                        <th style={{ padding: '10px 14px' }}>Date</th>
                        <th style={{ padding: '10px 14px' }}>Particulars</th>
                        <th style={{ padding: '10px 14px' }}>Amount</th>
                        <th style={{ padding: '10px 14px' }}>Mode</th>
                        <th style={{ padding: '10px 14px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fees.transactions.map((tx, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                          <td style={{ padding: '10px 14px', fontFamily: 'monospace', fontWeight: 600 }}>{tx.id}</td>
                          <td style={{ padding: '10px 14px' }}>{tx.date}</td>
                          <td style={{ padding: '10px 14px' }}>{tx.desc}</td>
                          <td style={{ padding: '10px 14px', fontWeight: 700, color: 'var(--primary-900)' }}>{tx.amount}</td>
                          <td style={{ padding: '10px 14px' }}>{tx.mode}</td>
                          <td style={{ padding: '10px 14px', color: 'var(--success)', fontWeight: 700 }}>{tx.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
