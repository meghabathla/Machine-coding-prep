import "./App.css";
import Tabs from "./components/tabs";

const tabs = [
  {
    value: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "CSS",
    content:
      "CSS (Cascading Style Sheets) is used to style and lay out web pages, including the design, colors, and fonts.",
  },
  {
    value: "Javascript",
    content:
      "JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.",
  },
];

function App() {
  const parentTabs = [
    {
      value: "vertical",
      content: (
        <div>
          <h4>Vertical Tabs</h4>
          <Tabs tabs={tabs} isVertical />
        </div>
      ),
    },
    {
      value: "horizontal",
      content: (
        <div>
          <h4>Horizontal Tabs</h4>
          <Tabs tabs={tabs} />
        </div>
      ),
    },
  ];

  return <Tabs tabs={parentTabs} />;
}

export default App;
