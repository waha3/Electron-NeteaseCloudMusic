import React, { Component } from 'react';
import { remote, ipcRenderer } from 'electron';
import { Link } from 'react-router';
const app = remote.app;

export default class Header extends Component {
  state = {
    placeholder: '搜索音乐，歌手，歌词，用户',
    backBtnDisabled: false,
    forwardDisabled: false
  }

  componentWillMount() {
    if (window.history.length) {
      this.setState({
        backBtnDisabled: true,
        forwardDisabled: true
      });
    }
  }

  focusHandle = () => this.setState({placeholder: ''});

  blurHandle = () => this.setState({placeholder: '搜索音乐，歌手，歌词，用户'});

  quitHandle = () => app.quit();

  minsizeHandle = () => ipcRenderer.send('minsize');

  maxsizeHandle = () => ipcRenderer.send('maxsize');

  backRouterHandle = () => {
    if (window.history.length) {
      window.history.back();
    }
  }

  nextRouterHandle = () => window.history.forward();

  render() {
    return (
      <div className="header">
        <Link to="/" className="header_link"></Link>
        <div className="left">
          <div className="navigation">
            <span onClick={this.backRouterHandle}>{'<'}</span>
            <span onClick={this.nextRouterHandle}>{'>'}</span>
          </div>
          <input
            type="text"
            placeholder={this.state.placeholder}
            onFocus={this.focusHandle}
            onBlur={this.blurHandle}
          />
        </div>
        <div className="right">
          <div className="header_action">
            <span className="resize" onClick={this.resizeHandle}><img src="static/image/resize.png" alt=""/></span>
            <span className="small" onClick={this.minsizeHandle}><img src="static/image/small.png" alt=""/></span>
            <span className="large" onClick={this.maxsizeHandle}><img src="static/image/large.png" alt=""/></span>
            <span className="quit" onClick={this.quitHandle}><img src="static/image/quit.png" alt=""/></span>
          </div>
        </div>
      </div>
    );
  }
}
