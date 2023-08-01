import  { useState, useRef } from "react";

function CircularSlider() {
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef();

  function handleMouseDown() {
    setIsDragging(true);
  }

  function handleMouseMove(event) {
    if (isDragging) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cx = svgRect.left + svgRect.width / 2;
      const cy = svgRect.top + svgRect.height / 2;
      const x = event.clientX - cx;
      const y = event.clientY - cy;
      const angle = (Math.atan2(y, x) * 180) / Math.PI + 90;
      setValue(Math.round((angle / 360) * 100));
    }
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (value / 100);

  return (
    <svg
      ref={svgRef}
      width="200"
      height="200"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="transparent"
        stroke="#ccc"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        onMouseDown={handleMouseDown}
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central">
        {value}
      </text>
    </svg>
  );
}

export default CircularSlider;
