import React, { useState } from 'react';

    const SummarizerTool = ({ text, onSummarize }) => {
      const [summaryLength, setSummaryLength] = useState('medium');
      const [focusArea, setFocusArea] = useState('key-points');

      return (
        <div className="summarizer-tool glass-card">
          <div className="summarizer-controls">
            <div className="control-group">
              <select 
                className="input-magical"
                value={summaryLength} 
                onChange={(e) => setSummaryLength(e.target.value)}
              >
                <option value="short">✨ Short & Sweet</option>
                <option value="medium">🌟 Balanced Magic</option>
                <option value="long">🌠 Full Enchantment</option>
              </select>
            </div>
            
            <div className="control-group">
              <select 
                className="input-magical"
                value={focusArea} 
                onChange={(e) => setFocusArea(e.target.value)}
              >
                <option value="key-points">🎯 Key Points</option>
                <option value="action-items">📋 Action Items</option>
                <option value="timeline">⏳ Timeline</option>
                <option value="custom">✨ Custom Magic</option>
              </select>
            </div>

            <button 
              className="button-magical glow-magical"
              onClick={() => onSummarize({ summaryLength, focusArea })}
            >
              Transform ✨
            </button>
          </div>
        </div>
      );
    };

    export default SummarizerTool;
