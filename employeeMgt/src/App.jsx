import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import EmployeeInfo from "./components/EmployeeInfo";

function App() {
  return (
    <>
      <div className="flex flex-row justify-between items-center mx-auto ">
        <h2 className="text-3xl font-bold">Employee Database Management </h2>
        <AddEmployee />
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <EmployeeList />
        <EmployeeInfo />
      </div>
    </>
  );
}

export default App;
