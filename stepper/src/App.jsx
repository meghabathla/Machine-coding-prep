import { useState } from "react";
import "./App.css";
import Checkout from "./component/Checkout";
import { CHECKOUT_STEPS } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>checkout</h2>
      <Checkout steps={CHECKOUT_STEPS} />
    </>
  );
}

export default App;
