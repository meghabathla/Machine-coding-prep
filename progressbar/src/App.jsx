import ProgressBar from "./components/ProgressBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0); // time - 1337
  const [isStarted, setIsStarted] = useState(false);
  const [timer, setTimer] = useState(null);
  const [counter, setCounter] = useState(0);

  const startTimer = () => {
    setValue(0); // Reset progress to 0
    setCounter(0); // Reset the counter
    setIsStarted(true);
    const incrementBy = 100 / time;

    const interval = setInterval(() => {
      setValue((val) => {
        if (val >= 100) {
          clearInterval(interval);
          setIsStarted(false);

          setCounter(0);
          return 100;
        } else {
          const result = val + incrementBy;
          setCounter((counter) => counter + 1);

          return result;
        }
      });
    }, 1000);
    setTimer(interval);
  };

  const stopTimer = () => {
    setIsStarted(false);
    clearInterval(timer);
  };

  const handleTime = (e) => {
    setTime(Number(e.target.value));
  };

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
        {isStarted && <label>Time left: {time - counter}seconds</label>}
        <label>Enter the time in seconds:</label>
        <input
          type="number"
          value={time}
          min="1"
          placeholder="1000"
          disabled={isStarted}
          onChange={handleTime}
        />
        {isStarted ? (
          <button onClick={stopTimer}>Stop timer</button>
        ) : (
          <button disabled={!time} onClick={startTimer}>
            Start timer
          </button>
        )}
      </div>
    </>
  );
}

export default App;

//false - enable
