import React, { Component} from 'react';
import Slick from '../components/slick.js';
import PropTypes from 'prop-types';

export default class PrivateFM extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    const { children } = this.props;
    return (
      <div className="privateFM">
        {
          children ? children :
          <div>
            <Slick />
          </div>
        }
      </div>
    );
  }
}
