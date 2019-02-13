"use strict";

var app = {
  title: "Visibility Toggle"
};

var appRoot = document.getElementById('app');

var visible = false;

var setVisible = function setVisible(e) {
  e.preventDefault();
  visible = !visible;
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
      visible ? "Hide Deets" : "Hide Deets"
    ),
    visible ? React.createElement(
      "p",
      null,
      "These are your deets!"
    ) : ''
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
