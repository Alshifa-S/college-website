import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { eventsAndNewsData } from '../data/collegeData';
import { NewsCard } from '../components/NewsCard';
import { Calendar, Clock, MapPin, Search, Bell, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export function EventsNews({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvent, setRegisteredEvent] = useState(null);

  const categories = [
    { id: 'all', label: 'All Updates' },
    { id: 'Workshops', label: 'Workshops' },
    { id: 'Seminars', label: 'Seminars' },
    { id: 'Cultural programs', label: 'Cultural & Fests' },
    { id: 'Sports events', label: 'Sports Events' },
    { id: 'announcements', label: 'Announcements / Circulars' }
  ];

  const filteredEvents = eventsAndNewsData.events.filter(e => {
    const matchesTab = activeTab === 'all' || e.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const filteredNews = eventsAndNewsData.news.filter(n => {
    const matchesTab = activeTab === 'all' || activeTab === 'announcements';
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          n.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleRegister = (event) => {
    setRegisteredEvent(event.title);
    setTimeout(() => {
      setRegisteredEvent(null);
      setSelectedEvent(null);
    }, 2500);
  };

  return (
    <div>
      <Breadcrumb pageTitle="Events & News" onNavigate={onNavigate} />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.18)', border: '1px solid var(--accent-gold)', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
            <Calendar size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold-light)' }}>
              Campus Life, Conclaves & Circulars
            </span>
          </div>
          <h1 className="page-banner-title font-serif">Events & Latest News</h1>
          <p className="page-banner-desc">
            Discover upcoming hackathons, guest seminars by world leaders, annual cultural extravaganzas, and official university circulars.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ padding: '36px 0 20px', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', width: '300px', maxWidth: '100%' }}>
              <Search size={18} color="var(--text-light)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search events or news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Main Content Area */}
      <section style={{ padding: '60px 0 90px', background: 'var(--bg-main)' }}>
        <div className="container">
          {/* Official Notices / Circulars Section */}
          {(activeTab === 'all' || activeTab === 'announcements') && filteredNews.length > 0 && (
            <div style={{ marginBottom: '60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Bell size={22} color="var(--primary-700)" />
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                  Official Bulletins & Circulars
                </h2>
              </div>
              <div className="grid-3">
                {filteredNews.map(item => (
                  <NewsCard
                    key={item.id}
                    newsItem={item}
                    onReadMore={(news) => setSelectedEvent({
                      title: news.title,
                      category: news.category,
                      date: news.date,
                      venue: "University Registrar & Official Portal",
                      description: news.excerpt + " Full statutory notification signed by the Registrar's Office. Circular reference: ASAU/CIRC/2026/09.",
                      isCircular: true
                    })}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Campus Events & Seminars Section */}
          {activeTab !== 'announcements' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Calendar size={22} color="var(--accent-gold-dark)" />
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                  Upcoming Campus Events, Fests & Seminars
                </h2>
              </div>

              {filteredEvents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '50px 20px', background: '#ffffff', borderRadius: 'var(--radius-md)' }}>
                  <Calendar size={48} color="var(--text-light)" style={{ margin: '0 auto 12px' }} />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-900)' }}>No scheduled events found for this filter.</h3>
                </div>
              ) : (
                <div className="grid-3">
                  {filteredEvents.map(event => (
                    <div key={event.id} className="card" style={{ height: '100%' }}>
                      <div className="card-img-wrap" style={{ height: '180px' }}>
                        <img src={event.image} alt={event.title} className="card-img" />
                        <span className="card-tag">{event.category}</span>
                      </div>

                      <div className="card-body">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-700)', fontWeight: 600 }}>
                            <Calendar size={14} /> {event.date}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Clock size={14} /> {event.time}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <MapPin size={14} /> {event.venue}
                          </div>
                        </div>

                        <h3 className="card-title" style={{ fontSize: '1.15rem' }}>
                          {event.title}
                        </h3>

                        <p className="card-desc">
                          {event.description}
                        </p>

                        <div className="card-footer">
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--success)' }}>
                            ● {event.status}
                          </span>
                          <button
                            onClick={() => setSelectedEvent(event)}
                            className="btn btn-navy btn-sm"
                          >
                            Details & RSVP <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Event Details / RSVP Modal */}
      {selectedEvent && (
        <div className="modal-backdrop" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <div>
                <span style={{ fontSize: '0.76rem', color: 'var(--primary-600)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {selectedEvent.category}
                </span>
                <h3 className="modal-title" style={{ fontSize: '1.25rem', marginTop: '4px' }}>
                  {selectedEvent.title}
                </h3>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedEvent(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {registeredEvent ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <CheckCircle2 size={48} color="var(--success)" style={{ margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-900)', fontWeight: 800, marginBottom: '6px' }}>
                    RSVP Confirmed!
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    You have successfully registered for <strong>{selectedEvent.title}</strong>. An admission badge has been assigned.
                  </p>
                </div>
              ) : (
                <div>
                  <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div><strong>Date & Time:</strong> {selectedEvent.date} {selectedEvent.time ? `(${selectedEvent.time})` : ''}</div>
                    <div><strong>Venue:</strong> {selectedEvent.venue}</div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    {selectedEvent.description}
                  </p>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setSelectedEvent(null)} className="btn btn-outline-navy" style={{ flex: 1 }}>
                      Close
                    </button>
                    {!selectedEvent.isCircular && (
                      <button onClick={() => handleRegister(selectedEvent)} className="btn btn-primary" style={{ flex: 1 }}>
                        Confirm Free Registration
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
