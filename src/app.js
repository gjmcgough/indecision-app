var app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer!!!",
  options: ['One', 'Two']
}

var template = (
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

function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>;
  }
}

var user = {
  name: "John Jacob Jingleheimer Schmitt",
  age: 30,
  location: "Nicaragua"
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Unknown'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
