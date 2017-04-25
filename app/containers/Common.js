import React, { Component, PropTypes } from 'react';
import Header from '../components/header.js';
import SideBar from '../components/sidebar.js';
import PlayBar from '../components/playbar.js';

const childrenName = 'Connect(SongDetail)';

export default class Common extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props;
    const { props: { route } } = children;
    return (
      <div className="common">
        <Header />
        <div className="container">
          <SideBar />
          <div className="main">
            {route.component.displayName === childrenName ? '' : children}
          </div>
          {route.component.displayName === childrenName ? children : '' }
        </div>
        <PlayBar />
      </div>
    );
  }
}
