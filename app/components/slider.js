import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    // when init these value is valued 0
    this.sliderWidth = 0;
    this.oldOffsetValue = 0;
  }

  state = {
    initPageX: null,
    isDraging: false,
    offsetValue: 0,
  }

  componentDidMount() {
    const sliderDOM = findDOMNode(this.sliderVDOM);
    const btnDOM = findDOMNode(this.btnVDOM);
    this.sliderWidth = sliderDOM.clientWidth;
    this.oldOffsetValue = btnDOM.offsetLeft;
  }

  _handleMouseDown = (event) => {
    event.preventDefault();
    event.persist();

    this._dragStart(event);
    // when mousedown bind two events
    window.addEventListener('mousemove', this._handleDraging);
    window.addEventListener('mouseup', this._handleDragEnd);
  }

  _dragStart = (event) => {
    this.setState({
      initPageX: event.pageX,
      isDraging: true
    });
  }

  _handleDraging = (event) => {
    const { isDraging } = this.state;
    if (isDraging) {
      this._setPostion(event);
    }
  }

  _setPostion = (event) => {
    let diff, currentX;
    currentX = event.pageX;
    const { initPageX, isDraging } = this.state;
    if (isDraging) {
      diff = currentX - initPageX;
      if (diff + this.oldOffsetValue >= this.sliderWidth) {
        diff = this.sliderWidth - this.oldOffsetValue;
      } else if (diff + this.oldOffsetValue <= 0) {
        diff = - this.oldOffsetValue;
      }
      this.setState({
        offsetValue: diff
      });
    }
  }

  _handleDragEnd = () => {
    const { isDraging } = this.state;
    const btnDOM = findDOMNode(this.btnVDOM);
    if (isDraging) {
      window.removeEventListener('mousemove', this._handleDraging);
      window.removeEventListener('mouseup', this._handleDragEnd);
      this.oldOffsetValue = btnDOM.offsetLeft;
      this.setState({
        isDraging: false,
        offsetValue: 0
      });
    }
  }

  impackCheck() {
    if (this.oldOffsetValue + this.state.offsetValue < 0) {
      this.offsetValue = 0;
    }
    if (this.oldOffsetValue + this.state.offsetValue > this.sliderWidth) {
      this.offsetValue = this.sliderWidth;
    }
  }

  render() {
    const { offsetValue } = this.state;
    return (
      <div className="slider"
        ref={slider => {this.sliderVDOM = slider;}}>
        <button
          ref={btn => {this.btnVDOM = btn;}}
          style={{'left': offsetValue + this.oldOffsetValue}}
          className="sliderBtn"
          onMouseDown={this._handleMouseDown}
        />
      </div>
    );
  }
}
