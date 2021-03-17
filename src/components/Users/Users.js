import React, { Component } from "react";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  fetchUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        this.setState({
          users: body,
        });
      });
  };
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          return (
            <div key={user.id}>
              {user.name} - {user.email}
            </div>
          );
        })}
      </div>
    );
  }
}
