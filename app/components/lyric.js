import React, { Component } from 'react';
// import PropTypes from 'prop-types';


export default class Lyric extends Component {
  render() {
    return (
      <div className="lyric">
        <div className="title">
          <h1>Hey Jude</h1>
          <span>MV</span>
          <span>128K</span>
        </div>
        <div className="albumdetail">
          <div>专辑：Ten New Songs</div>
          <div>歌手： The beatles</div>
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
