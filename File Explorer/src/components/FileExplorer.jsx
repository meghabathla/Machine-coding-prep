import React, { useState } from "react";

function getHasChildren(element) {
  const hasChildren =
    element.children &&
    Array.isArray(element.children) &&
    element.children.length > 0;

  return hasChildren; // returning true/false
}
const FileExplorer = ({ data }) => {
  const [isExpand, setIsExpand] = useState(false);
  console.log(isExpand);
  const handleExpand = () => {
    setIsExpand((prevExpandValue) => !prevExpandValue);
  };

  const renderFilesAndFolders = (array) => {
    return array.map((element) => {
      if (element.type === "directory")
        return (
          <div key={element.id} className="folder">
            <button onClick={handleExpand} className="folder-h4">
              📁{element.name}
            </button>
            {getHasChildren(element)
              ? renderFilesAndFolders(element.children)
              : null}
          </div>
        );
      if (isExpand) {
        return (
          <div key={element.id} className="file">
            {element.name}
          </div>
        );
      }
    });
  };

  return <div>{renderFilesAndFolders(data)}</div>;
};

export default FileExplorer;
