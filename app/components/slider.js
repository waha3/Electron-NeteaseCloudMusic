import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class Slider extends Component {
  state = {
    initPageX: null,
    initPageY: null,
    isDraging: false,
    offsetValue: 0
  }

  _handleMouseDown = (event) => {
    event.preventDefault();
    event.persist();

    this._dragStart(event);
    // when mousedown bind two events
    window.addEventListener('mousemove', this._handleDraging);
    window.addEventListener('mouseup', this._handleDragEnd);
  }

  _handleDraging = (event) => {
    const { isDraging } = this.state;
    if (isDraging) {
      this._setPostion(event);
    }
  }

  _handleDragEnd = () => {
    window.removeEventListener('mousemove', this._handleDraging);
    window.removeEventListener('mouseup', this._handleDragEnd);
    this.setState({
      isDraging: false
    });
  }

  _dragStart = (event) => {
    this.setState({
      initPageX: event.pageX,
      initPageY: event.pageY,
      isDraging: true
    });
  }

  _setPostion = (event) => {
    let diff, currentX, currentY;
    currentX = event.pageX;
    currentY = event.pageY;
    const { initPageX, initPageY, isDraging } = this.state;
    if (isDraging) {
      diff = currentX - initPageX;
      // console.log(diff);
      this.setState({
        offsetValue: diff
      });
    }
  }

  impackCheck() {}

  render() {
    const { offsetValue } = this.state;
    return (
      <div className="slider">
        <button
          style={{'left': offsetValue}}
          className="sliderBtn"
          onMouseDown={this._handleMouseDown}
          ref={_button => {this.btn = _button;}}
        />
      </div>
    );
  }
}
