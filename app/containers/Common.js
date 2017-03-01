import React, { Component, PropTypes } from 'react';
import Header from '../components/header.js';
import SideBar from '../components/sidebar.js';
import PlayBar from '../components/playbar.js';

export default class Common extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <div className="common">
        <Header />
        <div className="container">
          <SideBar />
            <div className="main">
              {children}
            </div>
        </div>
        <PlayBar />
      </div>
    );
  }
}
