import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li className="active">个性推荐</li>
          <li>歌单</li>
          <li>主播电台</li>
          <li>排行榜</li>
          <li>歌手</li>
          <li>最新音乐</li>
        </ul>
      </div>
    );
  }
}
