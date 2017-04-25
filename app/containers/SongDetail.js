import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Disc from '../components/disc.js';
import Lyric from '../components/lyric.js';
import { getSong } from '../actions/songs.js';

class SongDetail extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    const songId = params.id;
    dispatch(getSong(songId));
  }

  render() {
    return (
      <div className="songDetail">
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
  return {
    ...store.songs
  };
}

export default connect(filter)(SongDetail);
