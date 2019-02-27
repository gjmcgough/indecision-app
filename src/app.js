// install > import > use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor(){
    this.name = "mike";
  }
  getGreeting() {
    return `Hi ${this.name}`;
  }
}

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// const getGreeting = oldSyntax.getGreeting();
// console.log(oldSyntax.getGreeting());


//--------------------------------------

class NewSyntax {
  name = 'Jen';
  getGreeting = () => {
    return `Hi ${this.name}`;
  }
}
const newSyntax = new NewSyntax();
// console.log(newSyntax);
const newgetGreeting = newSyntax.getGreeting;
console.log(newgetGreeting());
