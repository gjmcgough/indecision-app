class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visible: false
    }
  }
  handleVisibilityToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }
  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityToggle}>
          { this.state.visible ? 'Hide details' : 'Show details'}
        </button>
        {
          (this.state.visible) ? <p>These are the toggled deets</p> : ''
        }
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
