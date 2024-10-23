import React from "react";

interface ProgressProps {
  value: number;
  max: number;
}

const ProgressBar = ({ value, max }: ProgressProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className="parent">
      <div className="progressbar">
        <div
          className="progressbar-process"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
