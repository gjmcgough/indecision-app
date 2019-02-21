class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a Computer!";
    const options = ["Thing 1", "Thing 2", "Thing 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    console.log(this.subtitle);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render(){
    return <p>Option: {this.props.optionText}</p>;
  }
}

class AddOption extends React.Component {
  render() {
    return <p>AddOption Component</p>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
