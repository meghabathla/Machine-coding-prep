import { useState } from "react";
import "./App.css";
import AutoProgressBar from "./components/AutoProgressBar";

const App: React.FC = () => {
  const [progressBars, setProgressBars] = useState<number[]>([]);

  const handleAddProgressBar = (): void => {
    setProgressBars((prev) => {
      if (prev.length === 0) return [1];
      const newBar = prev[prev.length - 1] + 1;
      return [...prev, newBar];
    });
  };
  return (
    <div className="parent">
      <button onClick={handleAddProgressBar}>Add Progress bar</button>
      <br />
      {progressBars.map((bar) => {
        return <AutoProgressBar key={bar} delay={1000} />;
      })}
    </div>
  );
};

export default App;
