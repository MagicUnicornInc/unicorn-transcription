import React from 'react';

    const ExportPanel = ({ onExport }) => (
      <div className="export-panel glass-card">
        <div className="export-buttons">
          <button onClick={() => onExport('txt')} className="button-magical">
            Text File 📝
          </button>
          <button onClick={() => onExport('pdf')} className="button-magical">
            PDF 📄
          </button>
          <button onClick={() => onExport('json')} className="button-magical">
            JSON 🔮
          </button>
        </div>
      </div>
    );

    export default ExportPanel;
