import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export function Breadcrumb({ pageTitle, onNavigate }) {
  return (
    <div className="breadcrumb-wrap">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <span className="breadcrumb-link" onClick={() => onNavigate('home')}>
              <Home size={14} /> Home
            </span>
          </li>
          <li>
            <ChevronRight size={14} />
          </li>
          <li className="breadcrumb-current">
            {pageTitle}
          </li>
        </ul>
      </div>
    </div>
  );
}
