import React from "react";
import ReactDOM from "react-dom/client";

const nestedSibling = React.createElement(
  "div",
  { id: "parent", key: "parent" },
  [
    React.createElement("div", { id: "child1", key: "child1" }, [
      React.createElement("h1", { key: "h1" }, "Ayush Jain"),
      React.createElement("h2", { key: "h2" }, "Tag 2"),
    ]),
    React.createElement("div", { id: "child2", key: "child2" }, [
      React.createElement("h1", { key: "h1" }, "Tag 1"),
      React.createElement("h2", { key: "h2" }, "Tag 2"),
    ]),
  ],
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedSibling);
