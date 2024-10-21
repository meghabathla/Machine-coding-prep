import React, { useState } from "react";
import useCustomEffect from "../Hooks/use-custom-effect";

const Counter = () => {
  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log("custom useEffect render");
  });
  console.log("outside the useEffect");

  const handleIncrement = () => {
    setCount((prevcount) => prevcount + 1);
  };

  const handleDecrement = () => {
    setCount((prevcount) => prevcount - 1);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decreement</button>
    </div>
  );
};

export default Counter;
