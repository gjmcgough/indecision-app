const app = {
  title: "Visibility Toggle"
}

let appRoot = document.getElementById('app');

let visible = false;

const setVisible = (e) => {
  e.preventDefault();
  visible = !visible;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={setVisible}>
        {(visible) ? "Hide Deets" : "Hide Deets" }
      </button>
      {
        (visible) ? <p>These are your deets!</p> : ''
      }
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
