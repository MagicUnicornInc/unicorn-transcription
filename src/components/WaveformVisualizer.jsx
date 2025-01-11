import React, { useRef, useEffect } from 'react';

    const WaveformVisualizer = ({ isRecording }) => {
      const canvasRef = useRef(null);
      const audioContextRef = useRef(null);
      const analyserRef = useRef(null);
      const dataArrayRef = useRef(null);
      const animationFrameRef = useRef(null);

      useEffect(() => {
        if (isRecording) {
          startVisualization();
        } else {
          stopVisualization();
        }

        return () => stopVisualization();
      }, [isRecording]);

      const startVisualization = async () => {
        try {
          if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            analyserRef.current = audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize = 2048;
          }

          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const source = audioContextRef.current.createMediaStreamSource(stream);
          source.connect(analyserRef.current);

          const bufferLength = analyserRef.current.frequencyBinCount;
          dataArrayRef.current = new Uint8Array(bufferLength);

          draw();
        } catch (error) {
          console.error('Error accessing microphone:', error);
        }
      };

      const stopVisualization = () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (audioContextRef.current) {
          audioContextRef.current.close();
          audioContextRef.current = null;
        }
      };

      const draw = () => {
        if (!canvasRef.current || !analyserRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        analyserRef.current.getByteTimeDomainData(dataArrayRef.current);

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, '#FF61D8');
        gradient.addColorStop(0.5, '#4A90E2');
        gradient.addColorStop(1, '#FFD700');

        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = gradient;
        ctx.beginPath();

        const sliceWidth = width / dataArrayRef.current.length;
        let x = 0;

        for (let i = 0; i < dataArrayRef.current.length; i++) {
          const v = dataArrayRef.current[i] / 128.0;
          const y = (v * height) / 2;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          x += sliceWidth;
        }

        ctx.lineTo(width, height / 2);
        ctx.stroke();

        animationFrameRef.current = requestAnimationFrame(draw);
      };

      return (
        <canvas
          ref={canvasRef}
          className="waveform-visualizer"
          width="600"
          height="100"
        />
      );
    };

    export default WaveformVisualizer;
