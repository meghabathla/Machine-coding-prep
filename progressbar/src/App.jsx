import ProgressBar from "./components/ProgressBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <>
      <div className="app">
        <span>Progress Bar</span>
        <ProgressBar
          value={value}
          onRenderLabel={(percentage) => {
            return percentage === 100 ? "Completed" : "Loading...";
          }}
        />
      </div>
    </>
  );
}

export default App;
