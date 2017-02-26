import React, { Component } from 'react';
// import { nativeImage } from 'electron';
// import { readFileSync } from 'fs';

export default class Header extends Component {
  state = {
    placeholder: '搜索音乐，歌手，歌词，用户',
    imageUrl: 'http://ww1.sinaimg.cn/mw600/005Suejwjw1fd3vzpdhbij30ci0gogo7.jpg'
  }

  focusHandle = () => this.setState({placeholder: ''});

  blurHandle = () => this.setState({placeholder: '搜索音乐，歌手，歌词，用户'});

  render() {
    return (
      <div className="header">
        <div className="left">
          <input
            type="text"
            placeholder={this.state.placeholder}
            onFocus={this.focusHandle}
            onBlur={this.blurHandle}
            />
        </div>
        <div className="right">
          <div className="user">
            <image src={this.state.imageUrl} />
            <span>nirvanal</span>
          </div>
        </div>
      </div>
    );
  }
}
