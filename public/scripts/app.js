"use strict";

var app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer!!!",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

var resetForm = function resetForm(e) {
  e.preventDefault();
  app.options = [];
  renderIndecisionApp();
};

var appRoot = document.getElementById('app');

var renderIndecisionApp = function renderIndecisionApp() {
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
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options.'
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: resetForm },
      "Reset"
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
      ),
      React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add Option"
        )
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
