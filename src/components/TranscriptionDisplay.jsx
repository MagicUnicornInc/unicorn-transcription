import React from 'react';

    const TranscriptionDisplay = ({ text, isProcessing }) => (
      <div className="transcription-display glass-card">
        <div className="transcription-content">
          {isProcessing ? (
            <div className="processing-indicator">
              <span className="sparkle">✨</span> Transcribing magic...
            </div>
          ) : (
            <pre className="transcription-text">{text || 'Your magical words will appear here... ✨'}</pre>
          )}
        </div>
      </div>
    );

    export default TranscriptionDisplay;
