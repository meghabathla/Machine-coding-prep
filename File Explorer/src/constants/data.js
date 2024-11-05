export const TYPE = {
  FILE: "FILE",
  DIRECTORY: "DIRECTORY",
};

export const FILE_TYPE_TO_ICON_MAP = {
  [TYPE.FILE]: "📄",
  [TYPE.DIRECTORY]: "📁",
};

export const data = [
  {
    id: "1",
    name: "README.md",
    type: TYPE.FILE,
  },
  {
    id: "2",
    name: "Documents",
    type: TYPE.DIRECTORY,

    children: [
      {
        id: "3",
        name: "Word.doc",
        type: TYPE.FILE,
      },
      {
        id: "4",
        name: "Powerpoint.ppt",
        type: TYPE.FILE,
      },
    ],
  },
  {
    id: " 5",
    name: "Downloads",
    type: TYPE.DIRECTORY,

    children: [
      {
        id: "6",
        name: "unnamed.txt",
        type: TYPE.FILE,
      },
      {
        id: "7",
        name: "Misc",
        type: TYPE.DIRECTORY,
        children: [
          {
            id: "8",
            name: "foo.txt",
            type: TYPE.FILE,
          },
          {
            id: "9",
            name: "bar.txt",
            type: TYPE.FILE,
          },
        ],
      },
    ],
  },
];

// constant object
