import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

export default class Banner extends Component {
  static propTypes = {
    banners: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      banners: [{
        url: '',
        pic: ''
      }]
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps
    });
  }

  settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '120px',
    slidesToShow: 1,
    slidesToScroll: 2,
    speed: 500
  };

  render() {
    const { banners } = this.state;
    return (
      <div className="slick">
        <Slider {...this.settings}>
          {
            banners.map((v, i) => (
              <div key={i}>
                <a href={v.url}>
                  <img src={v.pic} alt=""/>
                </a>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}
