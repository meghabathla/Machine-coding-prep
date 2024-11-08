import React from "react";
import { FileRenderer } from "./FileReneder";
import { FileAndFolderData } from "../constants/data";

interface ExplorerData {
  data: FileAndFolderData;
}

const FileExplorer: React.FC = ({ data }: ExplorerData) => {
  const renderFilesAndFolders = (array: FileAndFolderData[]) => {
    return array.map((element) => (
      <FileRenderer key={element.id} element={element} />
    ));
  };

  return <div>{renderFilesAndFolders(data)}</div>;
};

export default FileExplorer;
