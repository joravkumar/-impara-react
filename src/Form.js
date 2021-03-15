import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.age);
    this.clearFormFields();
  };

  clearFormFields = () => {
    this.setState({
      name: "",
      age: "",
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter name Here..."
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          type="number"
          placeholder="Enter age Here..."
          value={this.state.age}
          onChange={this.handleAge}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
