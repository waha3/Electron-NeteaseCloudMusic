import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSong } from '../actions/songs.js';
import Disc from '../components/disc.js';
import Lyric from '../components/lyric.js';
import Video from '../components/video.js';

class SongDetail extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    const songId = params.id;
    dispatch(getSong(songId));
  }

  render() {
    const { url } = this.props;
    return (
      <div className="songDetail">
        <Video source={url}/>
        <div className="content">
          <div>
            <Disc />
          </div>
          <div>
            <Lyric />
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
    url: ''
  }, store.songs);
}

export default connect(filter)(SongDetail);
