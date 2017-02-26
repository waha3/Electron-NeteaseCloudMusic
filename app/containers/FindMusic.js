import React, { Component} from 'react';
import { nativeImage } from 'electron';

export default class FindMusic extends Component {
  // static propTypes = {
  //   musicList: PropTypes.array.isRequired
  // }

  imageBufferHandle() {
    const image = nativeImage.createFromDataURL('http://wx1.sinaimg.cn/mw600/006g34NHgy1fd3ynqv2qnj30jg0t6mzf.jpg');
    console.log(image);
  }

  render() {
    return (
      <div className="findmusic">
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
        <div className="banner">
          <image src={this.imageBufferHandle()} />
        </div>
        <div className="recommendMusicList row">
          <div className="title">推荐歌单</div>
          <div className="content">
            {
              [1, 2, 3, 4, 5, 6].map((v, i) => (
                <div key={i} className="wrap">
                  <div className="top">77万</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
