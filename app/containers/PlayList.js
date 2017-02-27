import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPlaylist } from '../actions/playlist.js';

class PlayList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(getPlaylist(params.id));
  }

  render() {
    return (
      <div className="playlist">
        <div>ssss</div>
      </div>
    );
  }
}

export default connect()(PlayList);
