const app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer!!!",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

const resetForm = (e) => {
  e.preventDefault();
  app.options = [];
  renderIndecisionApp();
};

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options.'}</p>
      <p>{app.options.length}</p>
      <button onClick={resetForm}>Reset</button>
      <ol>
        <li>This is item one.</li>
        <li>This is item two.</li>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </ol>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderIndecisionApp();
