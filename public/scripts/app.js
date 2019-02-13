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

var count = 0;

var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "RESET"
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
