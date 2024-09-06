import React from "react";
import users from "../constant/data";

const EmployeeInfo = () => {
  return (
    <div className="flex flex-col">
      <div className="text-xl pb-3">EmployeeInfo </div>
      <div className=" flex flex-col justify-between gap-3 items-center">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div>{user.imageUrl}</div>
            </div>
          );
        })}
        <div>User Image</div>
        <div className="mx-2">Megha Bathla</div>
        <div className="mx-2">Address8</div>
        <div>bathlamegha@gmail.com</div>
        <div>mobile</div>
        <div>DOB</div>
      </div>
    </div>
  );
};

export default EmployeeInfo;
