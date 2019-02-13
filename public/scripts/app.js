"use strict";

var app = {
  title: "Visibility Toggle"
};

var appRoot = document.getElementById('app');

var visible = 0;
var setVisible = function setVisible(e) {
  e.preventDefault();
  visible === 0 ? visible = 1 : visible = 0;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "button",
      { onClick: setVisible },
      visible === 0 ? "Show Deets" : "Hide Deets"
    ),
    visible === 0 ? '' : React.createElement(
      "p",
      null,
      "These are your deets!"
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
