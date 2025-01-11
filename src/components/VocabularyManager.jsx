import React, { useState } from 'react';

    const VocabularyManager = ({ onAddTerm }) => {
      const [terms, setTerms] = useState([]);
      const [newTerm, setNewTerm] = useState('');

      const addTerm = () => {
        if (newTerm.trim()) {
          setTerms([...terms, newTerm.trim()]);
          onAddTerm(newTerm.trim());
          setNewTerm('');
        }
      };

      return (
        <div className="vocabulary-manager">
          <h3>✨ Custom Magic Words ✨</h3>
          <div className="term-input">
            <input
              type="text"
              value={newTerm}
              onChange={(e) => setNewTerm(e.target.value)}
              placeholder="Add special terms..."
            />
            <button onClick={addTerm}>Add ✨</button>
          </div>
          <div className="terms-list">
            {terms.map((term, index) => (
              <span key={index} className="term-chip">
                {term} <button onClick={() => setTerms(terms.filter((_, i) => i !== index))}>×</button>
              </span>
            ))}
          </div>
        </div>
      );
    };

    export default VocabularyManager;
