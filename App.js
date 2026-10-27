const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!",
);

// Nested
/*
<div id="parent">
  <div id='child'>
    <h1>"tag 1"</h1>
  </div>
</div>
*/

const nested = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "tag1"),
  ),
);

// Sibling
/*
<div id="parent">
  <div id='child'>
    <h1>"tag 1"</h1>
    <h1>"tag 2"</h1>
  </div>
</div>
*/

const sibling = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Tag 1"),
    React.createElement("h2", {}, "Tag 2"),
  ]),
);

//Nested Sibling
/*
<div id="parent">
  <div id='child'>
    <h1>"tag 1"</h1>
    <h1>"tag 2"</h1>
  </div>
</div>
<div id="parent">
  <div id='child'>
    <h1>"tag 1"</h1>
    <h1>"tag 2"</h1>
  </div>
</div>
*/

const nestedSibling = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Tag 1"),
    React.createElement("h2", {}, "Tag 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Tag 1"),
    React.createElement("h2", {}, "Tag 2"),
  ]),
]);

//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedSibling);
