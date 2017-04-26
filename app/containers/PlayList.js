import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { getPlaylist } from '../actions/playlist.js';
import { getComments } from '../actions/comments.js';
import MusicList from '../components/musiclist.js';

class PlayList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    playlist: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  }

  state = {
    tabsActive: [true, false, false]
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(getPlaylist(params.id));
  }

  tabsHandle(index) {
    const { dispatch, params } = this.props;
    switch (index) {
      case 0:
        this.setState({
          tabsActive: [true, false, false]
        });
        break;
      case 1:
        this.setState({
          tabsActive: [false, true, false]
        });
        dispatch(getComments(params.id));
        break;
      case 2:
        this.setState({
          tabsActive: [false, false, true]
        });
        break;
      default:
        return;
    }
  }

  doubleClick = (id) => {
    const { router } = this.props;
    router.push({
      pathname: `/songdetail/${id}`
    });
  }

  render() {
    const {
      name,
      // coverImgId,
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
            <img src={''} alt=""/>
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
              <li className={this.state.tabsActive[0] ? 'active' : ''} onClick={() => this.tabsHandle(0)}>歌曲列表</li>
              <li className={this.state.tabsActive[1] ? 'active' : ''} onClick={() => this.tabsHandle(1)}>评论({commentCount})</li>
              <li className={this.state.tabsActive[2] ? 'active' : ''} onClick={() => this.tabsHandle(2)}>收藏者</li>
            </ul>
          </div>
          <div className="tabContent">
            <div className={this.state.tabsActive[0] ? 'active' : ''}>
              <MusicList
                lists={tracks}
                doubleClick={this.doubleClick}
              />
            </div>
            <div className={this.state.tabsActive[1] ? 'active' : ''}>2</div>
            <div className={this.state.tabsActive[2] ? 'active' : ''}>3</div>
          </div>
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
