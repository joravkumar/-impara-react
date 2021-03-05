import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  Addition = () => {
    this.setState({
        counter: this.state.counter + 1,
    });
    // console.log('this.Addition')
  };
  
  Subtraction = () => {
    this.setState({
        counter: this.state.counter - 1,
    });
    // console.log('subtraction')
  }
  render() {
    return (
      <div>
        <p>Counter = {this.state.counter}</p>
        <button onClick={this.Addition}>+</button>
        <button onClick={this.Subtraction}>-</button>
      </div>
    );
  }
}

export default Counter;
