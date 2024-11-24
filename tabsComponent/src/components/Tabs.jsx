import React, { useState } from "react";

const Tabs = (props) => {
  console.log(props.tabs); //array
  const [state, setState] = useState("");

  const handleClick = (value) => {
    setState(value);
  };
  const filteredArray = props.tabs.filter((tab) => {
    return tab.value === state;
  });

  return (
    <div>
      {props.tabs.map((tab) => {
        return (
          <button
            key={tab.value}
            onClick={() => handleClick(tab.value)}
            className={state === tab.value ? tab.value : null}
          >
            {tab.value}
          </button>
        );
      })}

      <p>{filteredArray[0]?.content}</p>
    </div>
  );
};

export default Tabs;
