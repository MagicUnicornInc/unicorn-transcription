import React, { useState } from 'react';
    import Logo from './components/Logo';
    import TopicSelector from './components/TopicSelector';
    import WaveformVisualizer from './components/WaveformVisualizer';
    import ExportPanel from './components/ExportPanel';

    function App() {
      const [isRecording, setIsRecording] = useState(false);
      const [selectedTopic, setSelectedTopic] = useState('general');
      const [transcription, setTranscription] = useState('');
      const [isProcessing, setIsProcessing] = useState(false);

      const handleAudioCapture = () => {
        setIsRecording(!isRecording);
        setIsProcessing(!isRecording);
      };

      const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file?.type.startsWith('audio/')) {
          handleFileUpload(file);
        }
      };

      const handleFileUpload = (file) => {
        setIsProcessing(true);
        console.log('Processing file:', file.name);
      };

      return (
        <div className="app-container">
          <div className="rainbow-border">
            <div className="container">
              <Logo />
              
              <TopicSelector 
                selectedTopic={selectedTopic}
                onTopicChange={setSelectedTopic}
              />

              <div className="audio-controls">
                <button 
                  className="button-magical"
                  onClick={handleAudioCapture}
                >
                  {isRecording ? '🎤 Stop Listening' : '🎤 Live Listen'}
                </button>

                <div 
                  className="upload-zone glass-card"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <p>🦄 Drop your audio file here or</p>
                  <input 
                    type="file"
                    accept="audio/*"
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                    id="file-upload"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="file-upload" className="button-magical">
                    Choose File 📁
                  </label>
                </div>

                <WaveformVisualizer isRecording={isRecording} />
              </div>

              <div className="section-magical">
                <div className="section-header">
                  <span className="icon">✨</span>
                  <h2 className="title text-gradient">Live Transcription</h2>
                </div>
                <div className="transcription-display glass-card">
                  <div className="transcription-content">
                    {isProcessing ? (
                      <div className="processing-indicator">
                        <span className="sparkle">✨</span> Transcribing magic...
                      </div>
                    ) : (
                      <pre className="transcription-text">
                        {transcription || 'Your magical words will appear here... ✨'}
                      </pre>
                    )}
                  </div>
                </div>
              </div>

              <ExportPanel onExport={(format) => console.log('Exporting as:', format)} />
            </div>
          </div>
        </div>
      );
    }

    export default App;
