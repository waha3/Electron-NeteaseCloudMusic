// @flow
import React, { Component } from 'react';
import GitHub from 'github-api';

export default class App extends Component {
  static github = new GitHub()

  componentDidMount() {

  }

  async hello() {
    let res = await setTimeout(() => 1000, 2000);
  }

  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
}
