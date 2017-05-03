import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Lyric extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    albumPic: PropTypes.string.isRequired,
    songName: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired
  }

  render() {
    const { albumName, songName, singer } = this.props;
    return (
      <div className="lyric">
        <div className="title">
          <h2>{songName}<span>128K</span></h2>
        </div>
        <div className="albumdetail">
          <div>专辑：{albumName}</div>
          <div>歌手： {singer}</div>
          <div>来源：沧桑xxx</div>
        </div>
        <div className="lyricdetail">
          <div className="main"></div>
          <div className="bar"></div>
        </div>
      </div>
    );
  }
}
