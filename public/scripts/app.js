"use strict";

console.log("app.js!!!!");

var app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer!!!"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subTitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "This is item one."
    ),
    React.createElement(
      "li",
      null,
      "This is item two."
    )
  )
);

var user = {
  name: "John Jacob Jingleheimer Schmitt",
  age: 30,
  location: "Nicaragua"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
