import React, { Component } from "react";
import UserInfo from "./UserInfo";

// function Tick() {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

class Tick extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jorav",
      age: 23,
      counter: 0,
    };
    // setInterval(() => {
    //   this.setState({
    //     counter: this.state.counter + 1,
    //   });
    // }, 1000);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      name: "Booom Boom",
      age: "26",
    });
  };

  render() {
    return (
      <div>
        <UserInfo
          name={this.state.name}
          age={this.state.age}
          counter={this.state.counter}
        />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Tick;
