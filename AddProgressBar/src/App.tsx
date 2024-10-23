import { useState } from "react";
import "./App.css";
import AutoProgressBar from "./components/AutoProgressBar";

function App(): React.FC {
  const [progressBars, setProgressBars] = useState([]);

  const handleAddProgressBar = () => {
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
        return <AutoProgressBar key={bar} />;
      })}
    </div>
  );
}

export default App;

// only add button showing--
//clicking on Add button progress button will show and start filling
