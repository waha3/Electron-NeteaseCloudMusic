import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class Slider extends Component {
  state = {
    pageX: null,
    pageY: null,
    isDrag: false
  }

  _handleMouseDown = (event) => {
    event.preventDefault();
    event.persist();

    this.setState({
      pageX: event.pageX,
      pageY: event.pageY,
      isDrag: true
    });

    // when mousedown bind two events
    window.addEventListener('mousemove', this._handleDraging);
    window.addEventListener('mouseup', this._handleDragEnd);
  }

  _handleDraging = () => {
    console.log('draging');
  }

  _handleDragEnd = () => {
    console.log('end');
  }


  render() {
    return (
      <div className="slider">
        <button
          className="sliderBtn"
          onMouseDown={this._handleMouseDown}
          ref={_button => {this.btn = _button;}}
        />
      </div>
    );
  }
}
