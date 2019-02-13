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

// const numbers = [55,101,1000];

const onMakeDecision = () => {
  const randomNum = (Math.floor(Math.random() * app.options.length));
  const option = app.options[randomNum];
  alert(option);
};

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options.'}</p>
      <button disabled={app.options.length <= 0} onClick={onMakeDecision}>Where should I eat?</button><br/><br/>
      <button onClick={resetForm}>Reset options</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>Option: {option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderIndecisionApp();
