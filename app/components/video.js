import React, { Component, PropTypes } from 'react';

export default class Video extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired
  }

  render() {
    const { source } = this.props;
    return (
      <div className="video" style={{'display': 'block'}}>
        <video
          autoPlay
          loop={false}
          controls
          width="100"
          height="20"
          src={source}>
        </video>
      </div>
    );
  }
}
