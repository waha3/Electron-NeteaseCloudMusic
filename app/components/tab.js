import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TabPane extends Component {
  render() {
    return (
      <div className="tabpane"></div>
    );
  }
}

export class Tabs extends Component {
  static propTypes = {
    chidren: PropTypes.object.isRequired
  }

  render() {
    const { chidren } = this.props;
    return (
      <div className="tabs">
        {chidren}
      </div>
    );
  }
}
