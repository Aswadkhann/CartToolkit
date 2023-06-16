import React from 'react';

const Progressbar = ({ progress,time }) => {
  const borderThickness = 1;
  const progressBarThickness = 8;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg
        className="absolute top-0 left-0 w-full h-full transform rotate-90"
        width="100%"
        height="100%"
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <circle
          className="text-purple-500"
          stroke="currentColor"
          strokeWidth={borderThickness}
          fill="transparent"
          r={radius - borderThickness}
          cx={radius}
          cy={radius}
        />
        <circle
          className="text-purple-700"
          stroke="currentColor"
          strokeWidth={progressBarThickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          r={radius - borderThickness - progressBarThickness / 2}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full">
        <span className="text-purple-600 text-xs">{progress}{time}</span>
      </div>
    </div>
  );
};

export default Progressbar;
