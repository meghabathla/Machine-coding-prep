import React, { useEffect, useState } from "react";

const DEFAULT_COLOR = "#ffffff";

const Box = ({ bgColor, onClick, revealedColors, activeColors }) => {
  const isRevealed = revealedColors.has(bgColor);
  const [backgroundColor, setBackgroundColor] = useState(
    isRevealed ? bgColor : DEFAULT_COLOR
  );

  const handleClick = () => {
    if (backgroundColor !== DEFAULT_COLOR) {
      return;
    }
    setBackgroundColor(bgColor);
    onClick(bgColor);
  };

  useEffect(() => {
    if (!isRevealed && activeColors.length === 0) {
      setBackgroundColor(DEFAULT_COLOR);
    }
  }, [isRevealed, activeColors]);
  return (
    <div className="box" style={{ backgroundColor }} onClick={handleClick} />
  );
};

export default Box;
