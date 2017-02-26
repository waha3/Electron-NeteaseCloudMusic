import React, { Component} from 'react';

export default class FindMusic extends Component {
  // static propTypes = {
  //   musicList: PropTypes.array.isRequired
  // }

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
          <image src="../static/image/banner.jpg" />
        </div>
        <div className="recommendMusicList">
          <div className="title">推荐歌单</div>
          <div className="content">
            {
              [1, 2, 3, 4, 5].map((v, i) =>
                <div key={i} className="wrap">
                  <div className="top">77万</div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
