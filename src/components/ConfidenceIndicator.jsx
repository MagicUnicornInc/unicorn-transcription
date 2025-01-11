import React from 'react';

    const ConfidenceIndicator = ({ confidence }) => (
      <div className="confidence-indicator">
        <div className="confidence-bar" style={{ width: `${confidence}%` }}>
          <span className="confidence-label">
            {confidence >= 90 ? '✨ Magical!' : 
             confidence >= 70 ? '🦄 Pretty Good!' : 
             confidence >= 50 ? '🌈 Getting There!' : '🎯 Working on it!'}
          </span>
        </div>
      </div>
    );

    export default ConfidenceIndicator;
