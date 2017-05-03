import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Disc extends Component {
  static propTypes = {
    albumPic: PropTypes.string.isRequired
  }

  render() {
    const { albumPic } = this.props;
    return (
      <div className="disc">
        <div className="discPlate disc_animation">
          <img src={albumPic} alt=""/>
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
