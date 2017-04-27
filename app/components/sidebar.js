import React, { Component } from 'react';
import { IndexLink } from 'react-router';

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="wrap recommend">
          <div className="title">推荐</div>
          <ul>
            <IndexLink to="/" activeClassName="active"><li>发现音乐</li></IndexLink>
            <IndexLink to="/privateFM" activeClassName="active"><li>私人FM</li></IndexLink>
            <li>MV</li>
            <li>朋友</li>
          </ul>
        </div>
        <div className="wrap mymusic">
          <div className="title">我的音乐</div>
          <ul>
            <li>本地音乐</li>
            <li>下载管理</li>
            <li>我的音乐云盘</li>
            <li>我的歌手</li>
            <li>我的MV</li>
            <li>我的电台</li>
          </ul>
        </div>
      </div>
    );
  }
}
