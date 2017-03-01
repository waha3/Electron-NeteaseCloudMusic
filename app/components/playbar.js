import React, { Component } from 'react';

export default class PlayBar extends Component {
  render() {
    return (
      <div className="playbar">
        <div className="left">
          <div className="previousBtn">prev</div>
          <div className="startBtn">start</div>
          <div className="nextBtn">next</div>
        </div>
        <div className="middle">
          <span>04:33</span>
          <div>{''}</div>
          <span>06:00</span>
        </div>
        <div className="right">
          <span>sound</span>
          <span>播放模式</span>
          <span>词</span>
          <span>100</span>
        </div>
      </div>
    );
  }
}
