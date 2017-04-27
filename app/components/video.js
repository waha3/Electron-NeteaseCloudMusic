
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Video extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired
  }

  render() {
    const { source } = this.props;
    return (
        <video
          style={{'display': 'none'}}
          className="video"
          autoPlay
          loop={false}
          controls
          width="300"
          height="20"
          src={source}>
        </video>
    );
  }
}
