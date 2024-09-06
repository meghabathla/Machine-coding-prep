import React from "react";

const EmployeeList = () => {
  return (
    <div className="flex flex-col">
      <div className="text-xl pb-3">Employee List</div>
      <div className=" flex flex-row justify-between gap-3 items-center p-2 bg-slate-300 border rounded-lg">
        <div className="mx-2">Megha Bathla</div>
        <div className="mx-2">❌</div>
      </div>
    </div>
  );
};

export default EmployeeList;
