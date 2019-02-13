const app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer!!!",
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options.</p>}
    <ol>
      <li>This is item one.</li>
      <li>This is item two.</li>
    </ol>
  </div>
);

let count = 0;

const addOne = () => {
  console.log('addOne');
};

const minusOne = () => {
  console.log('minusOne');
};

const reset = () => {
  console.log('reset');
};

const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>RESET</button>
  </div>
);



const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
