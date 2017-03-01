import React, { Component, PropTypes } from 'react';
import MusicList from './components/musiclist.js';

export default class Comments extends Component {
  static propTypes = {
    playlist: PropTypes.object.isRequired
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
              <li className={this.state.tabsActive[0] ? 'active' : ''} onClick={() => this.tabsHandle(0)}>歌曲列表</li>
              <li className={this.state.tabsActive[1] ? 'active' : ''} onClick={() => this.tabsHandle(1)}>评论({commentCount})</li>
              <li className={this.state.tabsActive[2] ? 'active' : ''} onClick={() => this.tabsHandle(2)}>收藏者</li>
            </ul>
          </div>
          <div className="tabContent">
            <div className={this.state.tabsActive[0] ? 'active' : ''}>
              <MusicList
                lists={tracks}
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
