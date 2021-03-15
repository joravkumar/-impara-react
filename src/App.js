import React, { Component } from "react";
import Welcome from "./Welcome";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: ["Jorav"],
    };
  }
  render() {
    const element = this.state.users.map((user) => <Welcome name={user} key={user} />);
    if (this.state.users.length === 0) {
      return <div>No user Found</div>
    } else return <div>{element}</div>;
  }
}
