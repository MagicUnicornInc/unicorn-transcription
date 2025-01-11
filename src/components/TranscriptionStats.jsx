import React from 'react';

    const TranscriptionStats = ({ text }) => {
      const wordCount = text.trim().split(/\s+/).length;
      const charCount = text.length;
      const readingTime = Math.ceil(wordCount / 200); // Average reading speed

      return (
        <div className="transcription-stats">
          <div className="stat-item">
            <span className="stat-icon">📝</span>
            <span className="stat-value">{wordCount}</span>
            <span className="stat-label">words</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">📊</span>
            <span className="stat-value">{charCount}</span>
            <span className="stat-label">characters</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⏱️</span>
            <span className="stat-value">{readingTime}</span>
            <span className="stat-label">min read</span>
          </div>
        </div>
      );
    };

    export default TranscriptionStats;
