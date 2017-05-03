import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSong } from '../actions/songs.js';
import { getLyric } from '../actions/lyric.js';
import { getSongDetail } from '../actions/songdetail.js';
import Disc from '../components/disc.js';
import Lyric from '../components/lyric.js';

class SongDetail extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    albumPic: PropTypes.string.isRequired,
    songName: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    const songId = params.id;
    dispatch(getSong(songId));
    dispatch(getLyric(songId));
    dispatch(getSongDetail(songId));
  }

  render() {
    const { albumPic, albumName, songName, singer } = this.props;
    return (
      <div className="songDetail">
        <div className="content">
          <div className="wrap">
            <div>
              <Disc
                albumPic={albumPic}
              />
            </div>
            <div>
              <Lyric
                albumName={albumName}
                songName={songName}
                singer={singer}
              />
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="title">听友评论</div>
        </div>
      </div>
    );
  }
}

function filter(store) {
  return Object.assign({}, {
    url: '',
    albumPic: '',
    albumName: '',
    songName: '',
    singer: ''
  }, store.songs, store.songdetail);
}

export default connect(filter)(SongDetail);
