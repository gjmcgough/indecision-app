const app = {
  title: "Visibility Toggle"
}

let appRoot = document.getElementById('app');

let visible = 0;
const setVisible = (e) => {
  e.preventDefault();
  (visible === 0) ? visible = 1 : visible = 0;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={setVisible}>
        {(visible === 0 ) ? "Show Deets" : "Hide Deets" }
      </button>
      {
        (visible === 0) ? '' : <p>These are your deets!</p>
      }
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
