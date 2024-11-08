import { useState } from "react";
import "./App.css";
import { data } from "./constants/data";
import FileExplorer from "./components/FileExplorer";

const App: React.FC = () => {
  return (
    <div className=" parent">
      <FileExplorer data={data} />
    </div>
  );
};

export default App;
