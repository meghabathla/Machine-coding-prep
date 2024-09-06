import React, { act, useMemo, useState } from "react";
import { getRandomColor } from "../utilis";
import _ from "lodash";
import Box from "./Box";
import GameOver from "./GameOver";

const Game = ({ total }) => {
  const [activeColors, setActiveColors] = useState([]);
  const [revealedColors, setRevealedColors] = useState(new Set());
  const [roundCount, setRoundCount] = useState(0);

  const boxes = useMemo(() => {
    // create no of boxes
    const colors = getRandomColor(total / 2); //generate random 6 colors
    const pairedColors = _.shuffle([...colors, ...colors]); // 2 box have paired color total 12 colors

    return pairedColors.map((color, id) => {
      return {
        id,
        bgColor: color,
      };
    });
  }, [total]);

  const handleClick = (currentSelectedColor) => {
    if (activeColors.length === 0) {
      // setting the first color
      setActiveColors([currentSelectedColor]);
      return;
    }
    if (activeColors[0] === currentSelectedColor) {
      setRevealedColors((prev) => new Set(prev.add(currentSelectedColor))); // create a new Set for immutability
      setActiveColors([]); // reset active colors
    } else {
      setTimeout(() => {
        setActiveColors([]); // clear active colors after a wrong guess
      }, 400);
    }
    setRoundCount((prev) => prev + 1); // increment round count
  };
  const handleReset = () => {
    setActiveColors([]);
    setRevealedColors(new Set());
    setRoundCount(0);
  };

  return (
    <div className="container">
      {revealedColors.size === total / 2 ? (
        <GameOver roundCount={roundCount} onClick={handleReset} />
      ) : (
        <div className="boxes">
          {boxes.map((box) => (
            <Box
              key={box.id}
              onClick={handleClick}
              revealedColors={revealedColors}
              activeColors={activeColors}
              {...box}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Game;
