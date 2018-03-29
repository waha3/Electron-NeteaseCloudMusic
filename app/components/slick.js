import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlickItem extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired
  }

  render() {
    const { item } = this.props;
    return (
      <div className="slick-item">
        <h>{item}</h>
      </div>
    );
  }
}

export default class Slick extends Component {
  state = {
    activeIndex: 1,
    items: ['A', 'B', 'C', 'D', 'E', 'F']
  }

  handleNext = () => {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: activeIndex + 1
    });
  }

  handlePrev = () => {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: activeIndex - 1
    });
  }

  isInStage(index, activeIndex) {
    const length = this.state.items;
    if (index !== length || index !== 0) {
      if (index - 1 === activeIndex || index === activeIndex || index + 1 === activeIndex || index) {
        return true;
      }
    } else if (index === 0 && index + 1 === activeIndex && activeIndex === length) {
      return true;
    } else if (index === length && index - 1 === activeIndex && activeIndex === 0) {
      return true;
    }
    return false;
  }

  render() {
    const { items, activeIndex } = this.state;
    return (
      <div className="slick">
        <div className="slick-wrap">
          {
            items.map((item, index) => (
              <div
                key={index}
                className={this.isInStage(index, activeIndex) ? 'is-instage' : ''}
              >
                <SlickItem
                  item={item}
                />
              </div>
            ))
          }
        </div>
        <button
          className="prev"
          onClick={this.handlePrev}>
          prev
        </button>
        <button
          className="next"
          onClick={this.handleNext}>
          next
        </button>
      </div>
    );
  }
}
