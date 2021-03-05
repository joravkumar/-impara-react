import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          This is {this.props.name} and I am {this.props.age} years old.
        </h2>
        <h3>{this.props.counter}</h3>
      </div>
    );
  }
}

export default UserInfo;
