import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SlickItem extends Component {
  render() {
    return (
      <div className="slick-item">
        {}
      </div>
    );
  }
}

export default class Slick extends Component {
  state = {
    activeIndex: 1,
    items: [1, 2, 3]
  }

  render() {
    const { items } = this.state;
    return (
      <div className="slick">
        <div className="slick-wrap">
          {
            items.map((v, i) => (
              <SlickItem />
            ))
          }
        </div>
      </div>
    );
  }
}
