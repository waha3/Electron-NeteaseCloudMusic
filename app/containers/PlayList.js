import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getPlaylist } from '../actions/playlist.js';
import MusicList from '../components/musiclist.js';

class PlayList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    playlist: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(getPlaylist(params.id));
  }

  render() {
    const {
      name,
      coverImgId,
      creator,
      createTime,
      shareCount,
      subscribedCount,
      commentCount,
      tags,
      description,
      tracks
    } = this.props.playlist;
    return (
      <div className="playlist">
        <div className="top">
          <div>
            <img src={`http://p3.music.126.net/VybpJPeaTBHcYYxnAMwrsg==/${coverImgId}.jpg?param=200y200`} alt=""/>
          </div>
          <div>
            <div className="_top">
              <span>歌单</span>
              <div className="title">{name}</div>
            </div>
            <div className="_middle">
              <img className="avator" src={creator.avatarUrl} alt=""/>
              <div className="name">{creator.nickname}</div>
              <div className="create_at">{moment(createTime).format('YYYY-MM-DD')}创建</div>
            </div>
            <div className="_middle_bottom">
              <div>
                <span>播放全部</span>
                <span>+</span>
              </div>
              <div>收藏({subscribedCount})</div>
              <div>分享({shareCount})</div>
              <div>下载全部</div>
            </div>
            <div className="_bottom">
              <div className="tags">标签：{tags.join(' / ')}</div>
              <div className="summary">简介：{description}</div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="tabs">
            <ul>
              <li className="active">歌曲列表</li>
              <li>评论({commentCount})</li>
              <li>收藏者</li>
            </ul>
          </div>
          <MusicList
           lists={tracks} />
        </div>
      </div>
    );
  }
}

function filter(state) {
  return {
    playlist: Object.assign({}, {
      name: '',
      coverImgId: '',
      creator: {
        avatarUrl: '',
        nickname: ''
      },
      createTime: '',
      shareCount: '',
      subscribedCount: '',
      commentCount: '',
      tags: [],
      description: '',
      tracks: []
    }, state.playlist.playlist)
  };
}

export default connect(filter)(PlayList);
