import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getRecommendPlaylist } from '../actions/recommendplaylist.js';
import PropTypes from 'prop-types';

class FindMusic extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  state = {
    imageUrl: 'http://wx1.sinaimg.cn/mw600/006GlaT2ly1fd3lc43k07j30ia0rfwie.jpg',
    bannerUrl: 'http://p3.music.126.net/q1Ta11Cmfd8gy56mvQnTTQ==/18929192183792474.jpg',
    playlistId: 6212327
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRecommendPlaylist());
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
          <img src={this.state.bannerUrl} />
        </div>
        <div className="recommendMusicList row">
          <div className="title">推荐歌单</div>
          <div className="content">
            <Link to={`/playlist/${this.state.playlistId}`}>
              <div className="wrap">
                <div className="top">77万</div>
                <img src={this.state.imageUrl} alt=""/>
                <div className="row_title">每日歌曲推荐飒飒飒飒飒飒撒飒飒飒飒</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function filter(state) {
  console.log(state);
  return {
    recommendplaylist: state.recommendplaylist.result
  };
}

export default connect(filter)(FindMusic);
