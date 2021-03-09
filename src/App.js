import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfile: {
        name: "jorav",
        age: 23,
        gender: "female",
      },
    };
  }
  render() {
    return (
      <div>
        <h1>Username: {this.state.userProfile.name}</h1>
        <h1>Age: {this.state.userProfile.age}</h1>
        <h1>Gender: {this.state.userProfile.gender} {this.state.userProfile.gender === 'male' ? "👲": "👩‍💻"} </h1>
      </div>
    );
  }
}
