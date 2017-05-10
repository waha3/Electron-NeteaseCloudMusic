import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getRecommendPlaylist } from '../actions/recommendplaylist.js';
import { getBanner } from '../actions/banner.js';
import PropTypes from 'prop-types';
import Banner from '../components/banner.js';
import Nav from '../components/nav.js';
import Rect from '../components/rect.js';

class FindMusic extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    banners: PropTypes.array.isRequired,
    recommendplaylist: PropTypes.array.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRecommendPlaylist());
    dispatch(getBanner());
  }

  render() {
    const { banners, recommendplaylist } = this.props;
    return (
      <div className="findmusic">
        <Nav />
        <div className="banner row">
          <Banner
            banners={banners}
          />
        </div>
        <div className="recommendMusicList row">
          <div className="title">推荐歌单</div>
          <div className="content">
            {
              recommendplaylist.map((v, i) => (
                <Link
                  to={`/playlist/${v.id}`}
                  key={i}>
                  <Rect
                    count={v.playCount}
                    pic={v.picUrl}
                    name={v.name}
                    mask={v.copywriter}
                  />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

function filter(state) {
  return {
    recommendplaylist: state.recommendplaylist.result || [],
    banners: state.banner.banners
  };
}

export default connect(filter)(FindMusic);
