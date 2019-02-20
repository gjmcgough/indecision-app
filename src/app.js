class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a Computer!</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
        <p>OptionS component</p>
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render(){
    return <p>Option Component</p>;
  }
}

class AddOption extends React.Component {
  render() {
    return <p>AddOption Component</p>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
