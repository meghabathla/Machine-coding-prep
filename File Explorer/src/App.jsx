import { useState } from "react";
import "./App.css";
import { data } from "./constants/data";
import FileExplorer from "./components/FileExplorer";

function App() {
  console.log(data);
  return (
    <div className=" parent">
      <FileExplorer data={data} />
    </div>
  );
}

export default App;
//
// styling to file and directory
//array--> loop check type?
//file-- file styling/directory styling
