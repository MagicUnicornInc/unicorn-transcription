import React, { useState } from 'react';
    import CollapsibleSection from './CollapsibleSection';
    import TranscriptionStats from './TranscriptionStats';
    import SummarizerTool from './SummarizerTool';
    import TranscriptionDisplay from './TranscriptionDisplay';

    const TranscriptionSections = ({ 
      fullTranscription, 
      topicalTranscription,
      summaries,
      onSummarize 
    }) => {
      const [activeTab, setActiveTab] = useState('full');

      return (
        <div className="transcription-sections">
          <div className="section-magical glow-magical">
            <div className="section-header">
              <span className="icon">✨</span>
              <h2 className="title text-gradient">Magical Transcription</h2>
            </div>
            <TranscriptionDisplay 
              text={topicalTranscription}
              isProcessing={false}
            />
          </div>

          <div className="border-magical">
            <div className="section-magical">
              <div className="section-header">
                <span className="icon">📝</span>
                <h2 className="title text-gradient">Full Transcription</h2>
              </div>
              <TranscriptionStats text={fullTranscription} />
              <div className="transcription-content glass-card">
                <pre>{fullTranscription}</pre>
                <button className="button-magical">
                  Download Transcription ✨
                </button>
              </div>
            </div>
          </div>

          <div className="section-magical float-magical">
            <div className="section-header">
              <span className="icon">🎯</span>
              <h2 className="title text-gradient">Magic Summarizer</h2>
            </div>
            <SummarizerTool 
              text={activeTab === 'full' ? fullTranscription : topicalTranscription}
              onSummarize={onSummarize}
            />
          </div>
        </div>
      );
    };

    export default TranscriptionSections;
