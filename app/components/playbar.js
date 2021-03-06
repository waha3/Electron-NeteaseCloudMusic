import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import Slider from './slider.js';
import Video from '../components/video.js';
import PropTypes from 'prop-types';

class PlayBar extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  }

  handlePreviousSong = () => {

  }

  handleStartOrPause = () => {
    const videoDOM = findDOMNode(this.videovirtualDOM);
    if (videoDOM.paused) {
      videoDOM.play();
    } else {
      videoDOM.pause();
    }
  }

  handleNextSong = () => {}

  render() {
    const { url } = this.props;
    return (
      <div className="playbar">
        <div className="left">
          <div>
            <div className="previousBtn" onClick={this.handlePreviousSong}>A</div>
            <div className="startBtn" onClick={this.handleStartOrPause}>O</div>
            <div className="nextBtn" onClick={this.handleNextSong}>B</div>
          </div>
        </div>
        <div className="middle">
          <span className="beginTime">04:33</span>
          <Slider />
          <span className="endTime">06:00</span>
        </div>
        <div className="right">
          <div>
            <Slider />
          </div>
        </div>
        <Video
          source={url}
          ref={video => {this.videovirtualDOM = video;}}
        />
      </div>
    );
  }
}

function filter(store) {
  return Object.assign({}, {
    url: ''
  }, store.songs);
}

export default connect(filter)(PlayBar);
