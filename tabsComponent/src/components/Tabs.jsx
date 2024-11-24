import React, { useState } from "react";

const Tabs = (props) => {
  console.log(props.tabs); //array
  const [state, setState] = useState("");

  const handleClick = (value) => {
    setState(value);
  };

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

      {props.tabs.filter((tab) => {
        if (tab.value === state) tab.content;
      })}
    </div>
  );
};

export default Tabs;
