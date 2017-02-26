import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">
          <input type="text" placeholder="搜索音乐，歌手，歌词，用户"/>
        </div>
        <div className="right">
          <div className="user">
            <image src="../app/static/image/icon.png" />
            <span>nirvanal</span>
          </div>
        </div>
      </div>
    );
  }
}
