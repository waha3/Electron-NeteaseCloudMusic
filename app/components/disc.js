import React, { Component } from 'react';
// import PropTypes from 'prop-types';


export default class Disc extends Component {
  render() {
    return (
      <div className="disc">
        <div className="discPlate">
          <img src="./static/image/icon.png" alt=""/>
        </div>
        <div className="btns">
          <button>喜欢</button>
          <button>收藏</button>
          <button>下载</button>
          <button>分享</button>
        </div>
      </div>
    );
  }
}
