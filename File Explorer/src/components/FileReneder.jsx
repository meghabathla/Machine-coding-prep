import React, { useState } from "react";
import { FILE_TYPE_TO_ICON_MAP, TYPE } from "../constants/data";

function getHasChildren(element) {
  const hasChildren =
    element.children &&
    Array.isArray(element.children) &&
    element.children.length > 0;

  return hasChildren; // returning true/false
}

export const FileRenderer = ({ element }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    setIsExpanded((prevExpandedValue) => !prevExpandedValue);
  };

  if (element.type === TYPE.DIRECTORY) {
    return (
      <div key={element.id} className="folder">
        <button onClick={handleExpand} className="folder-h4">
          {FILE_TYPE_TO_ICON_MAP[element.type]}
          {element.name}
        </button>
        {getHasChildren(element) && isExpanded
          ? element.children.map((child) => (
              <FileRenderer key={child.id} element={child} />
            ))
          : null}
      </div>
    );
  }

  return (
    <div key={element.id} className="file">
      {FILE_TYPE_TO_ICON_MAP[element.type]} {element.name}
    </div>
  );
};
