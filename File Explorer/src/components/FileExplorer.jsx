import React from "react";
import { FileRenderer } from "./FileReneder";

const FileExplorer = ({ data }) => {
  const renderFilesAndFolders = (array) => {
    return array.map((element) => (
      <FileRenderer key={element.id} element={element} />
    ));
  };

  return <div>{renderFilesAndFolders(data)}</div>;
};

export default FileExplorer;
