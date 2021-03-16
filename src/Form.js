import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      isSingle: false,
      phoneNumber: "",
      address: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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

  handleCheckbox = (e) => {
    this.setState({
      isSingle: e.target.checked,
    });
  };

  handleAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  handlePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter name Here..."
            value={this.state.name}
            onChange={this.handleName}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter age Here..."
            value={this.state.age}
            onChange={this.handleAge}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={this.state.isSingle}
            onChange={this.handleCheckbox}
          />{" "}
          Are you Single ?
        </div>
        <div>
          <select
            value={this.state.phoneNumber}
            onChange={this.handlePhoneNumber}
          >
            <option value="">Select your phone number</option>
            <option value="901239">901239</option>
            <option value="9012393">9012393</option>
            <option value="9012339">9012339</option>
            <option value="90123239">90123239</option>
          </select>
        </div>
        <div>
          <textarea
            value={this.state.address}
            onChange={this.handleAddress}
            rows="10"
            cols="20"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        <div>Name: {this.state.name}</div>
      </form>
    );
  }
}
