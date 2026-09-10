import React from 'react';
import { Calendar, Clock, ArrowRight, AlertTriangle } from 'lucide-react';

export function NewsCard({ newsItem, onReadMore }) {
  return (
    <div className="card" style={{ height: '100%' }}>
      <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header Tags */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            padding: '3px 8px',
            borderRadius: '4px',
            background: 'rgba(37, 99, 235, 0.08)',
            color: 'var(--primary-600)'
          }}>
            {newsItem.category}
          </span>
          {newsItem.urgent && (
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '4px',
              background: '#fee2e2',
              color: '#dc2626',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <AlertTriangle size={11} /> Important
            </span>
          )}
        </div>

        {/* Date & Read Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '10px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={13} /> {newsItem.date}
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={13} /> {newsItem.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '10px', lineHeight: 1.4 }}>
          {newsItem.title}
        </h3>

        {/* Excerpt */}
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px', flexGrow: 1 }}>
          {newsItem.excerpt}
        </p>

        {/* Footer */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
          <button
            onClick={() => onReadMore(newsItem)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary-600)',
              fontWeight: 600,
              fontSize: '0.86rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: 0
            }}
          >
            Read Full Circular <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
