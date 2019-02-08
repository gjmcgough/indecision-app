"use strict";

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

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

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
    user.name ? user.name : 'Unknown'
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
