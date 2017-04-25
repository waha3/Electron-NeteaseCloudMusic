import React, { Component } from 'react';
import Slider from './slider.js';

export default class PlayBar extends Component {
  render() {
    return (
      <div className="playbar">
        <div className="left">
          <div className="previousBtn">A</div>
          <div className="startBtn">O</div>
          <div className="nextBtn">B</div>
        </div>
        <div className="middle">
          <span>04:33</span>
          <Slider />
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
