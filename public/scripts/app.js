"use strict";

var app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer!!!",
  options: ['One', 'Two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    "p",
    null,
    app.subTitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "No options."
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
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
