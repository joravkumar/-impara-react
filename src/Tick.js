import React, { Component } from "react";

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
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          This is {this.state.name} and I am {this.state.age} years old.
        </h2>
      </div>
    );
  }
}

export default Tick;
