import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal  from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick = () => {
    this.setState(() => {
      const randNum = (Math.floor(Math.random() * this.state.options.length));
      return (
        alert(this.state.options[randNum])
      );
    });
  }
  handleAddOption = (option) => {
    if(!option) {
      return 'enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1){
      return 'this option exists already';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e){

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  };
  render() {
    const subtitle = "Put your life in the hands of a Computer!";
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
          options={this.state.options}
        />
        <OptionModal />
      </div>
    )
  }
}
