import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debource } from '../utils/utils.js';

export default class Rect extends Component {
  static propTypes = {
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    mask: PropTypes.string.isRequired
  }

  state = {
    maskShow: false
  }

  time = null

  handleOnMouseEnter = () => {
    const stateChange = debource(
      this.setState({
        maskShow: false
      }), 1000
    );
    stateChange();
  }

  handleOnMouseLeave = () => {
    const stateChange = debource(
      this.setState({
        maskShow: true
      }), 1000
    );
    stateChange();
  }

  render() {
    const { name, pic, count, mask } = this.props;
    const { maskShow } = this.state;
    return (
      <div className="musicRect">
        <div className="mask" style={{'display': maskShow ? 'none' : 'block' }}>{Math.round(count)}</div>
        <div className="make_tips" style={{'display': maskShow ? 'block' : 'none' }}>
          {mask}
        </div>
        <div
          className="wrap"
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}>
          <img src={pic} alt=""/>
        </div>
        <div className="rect_title">{name}</div>
      </div>
    );
  }
}
