import React from 'react';

    const TopicSelector = ({ selectedTopic, onTopicChange }) => {
      const topics = [
        { id: 'general', name: 'General', icon: '🌈' },
        { id: 'medical', name: 'Medical', icon: '⚕️' },
        { id: 'legal', name: 'Legal', icon: '⚖️' },
        { id: 'technical', name: 'Technical', icon: '💻' }
      ];

      return (
        <div className="topic-selector">
          <h3 className="text-gradient">Choose Your Magic Topic ✨</h3>
          <div className="topic-buttons">
            {topics.map(topic => (
              <button
                key={topic.id}
                className={`topic-button ${selectedTopic === topic.id ? 'active' : ''}`}
                onClick={() => onTopicChange(topic.id)}
              >
                <span className="topic-icon">{topic.icon}</span>
                <span>{topic.name}</span>
              </button>
            ))}
          </div>
        </div>
      );
    };

    export default TopicSelector;
