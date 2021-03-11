import React, { Component } from "react";
import Welcome from "./Welcome";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: ["Jorav", "Pallavi", "Gaurav", "Taaj"],
    };
  }
  render() {
    const element = this.state.users.map((user) => <Welcome name={user} key={user} />);
    return <div>{element}</div>;
  }
}
