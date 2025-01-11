import React from 'react';

    const TranscriptionWord = ({ word, confidence, timestamp, isActive }) => (
      <span 
        className={`transcription-word ${isActive ? 'active' : ''}`}
        style={{
          backgroundColor: `rgba(255, 97, 216, ${confidence / 100 * 0.2})`,
          cursor: 'pointer'
        }}
        title={`Confidence: ${confidence}% - Time: ${timestamp}`}
      >
        {word}{' '}
      </span>
    );

    export default TranscriptionWord;
