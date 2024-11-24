import React, { useState } from "react";
import "../styles.css";

const Tabs = ({ tabs = [], isVertical = false }) => {
  const [activeTabValue, setActiveTabValue] = useState("");

  const handleClick = (value) => {
    setActiveTabValue(value);
  };

  const renderContent = () => {
    const filteredArray = tabs.filter((tab) => tab.value === activeTabValue);
    const content = filteredArray[0].content;

    return content;
  };

  return (
    <div className={`${isVertical ? "vertical" : null}`}>
      <div className={`tabsContainer ${isVertical ? "verticalTab" : ""}`}>
        {tabs.map((tab) => {
          const isActive = activeTabValue === tab.value; // boolean

          return (
            <button
              key={tab.value}
              onClick={() => handleClick(tab.value)}
              className={`tabButton ${isActive ? "active" : "inactive"}`}
            >
              {tab.value}
            </button>
          );
        })}
      </div>
      <div className="contentContainer">
        {activeTabValue ? <div>{renderContent()}</div> : null}
      </div>
    </div>
  );
};

export default Tabs;
