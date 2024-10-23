import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

interface TimeDelayProps {
  delay: number;
}

const AutoProgressBar: React.FC<TimeDelayProps> = ({ delay = 1000 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let timer: number;

    timer = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 1;
        }
        clearInterval(timer);
        return 100;
      });
    }, delay);
  }, []);

  return <ProgressBar value={value} max={100} />;
};

export default AutoProgressBar;
