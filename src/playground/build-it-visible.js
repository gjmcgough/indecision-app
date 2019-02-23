class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visible: true
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
        <button onClick={this.handleVisibilityToggle}>Toggle Visibility</button>
        {
          (this.state.visible) ? <p>These are the toggled deets</p> : ''
        }
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//   title: "Visibility Toggle"
// }
//
// let appRoot = document.getElementById('app');
//
// let visible = false;
//
// const setVisible = (e) => {
//   e.preventDefault();
//   visible = !visible;
//   renderApp();
// }
//
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={setVisible}>
//         {(visible) ? "Hide Deets" : "Hide Deets" }
//       </button>
//       {
//         (visible) ? <p>These are your deets!</p> : ''
//       }
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// }
//
// renderApp();
