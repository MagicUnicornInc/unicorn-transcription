import React, { useState } from 'react';

    const CollapsibleSection = ({ title, icon, children }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div className="collapsible-section">
          <button 
            className={`collapsible-header ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="section-icon">{icon}</span>
            <span className="section-title">{title}</span>
            <span className="toggle-icon">{isOpen ? '↑' : '↓'}</span>
          </button>
          {isOpen && (
            <div className="collapsible-content">
              {children}
            </div>
          )}
        </div>
      );
    };

    export default CollapsibleSection;
