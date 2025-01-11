import React, { useRef, useEffect } from 'react';

    const AudioVisualizer = ({ isRecording }) => {
      const canvasRef = useRef(null);

      useEffect(() => {
        if (!isRecording) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        
        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Create rainbow wave effect
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          gradient.addColorStop(0, '#FF61D8');
          gradient.addColorStop(0.5, '#4A90E2');
          gradient.addColorStop(1, '#FFD700');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          
          for (let i = 0; i < canvas.width; i++) {
            const y = (Math.sin(i * 0.05 + Date.now() * 0.01) * 20) + canvas.height / 2;
            if (i === 0) {
              ctx.moveTo(i, y);
            } else {
              ctx.lineTo(i, y);
            }
          }
          
          ctx.stroke();
          animationId = requestAnimationFrame(draw);
        };
        
        draw();
        return () => cancelAnimationFrame(animationId);
      }, [isRecording]);

      return (
        <canvas
          ref={canvasRef}
          className="audio-visualizer"
          width="600"
          height="100"
        />
      );
    };

    export default AudioVisualizer;
