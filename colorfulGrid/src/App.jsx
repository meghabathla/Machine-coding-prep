import { useState } from "react";
import Game from "./components/Game";

const TOTAL_BOXES = 12;
function App() {
  return (
    <>
      <Game total={TOTAL_BOXES} />
    </>
  );
}

export default App;
