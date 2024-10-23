import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

interface TimeDelayProps {
  delay: number;
}

const AutoProgressBar = ({ delay = 1000 }: TimeDelayProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let timer;

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
