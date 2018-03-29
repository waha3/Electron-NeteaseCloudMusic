import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Transition extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number,
    component: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    duration: 300
  }

  render() {
    const { children, name, duration, component, className, style } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName={name}
        transitionEnterTimeout={Number(duration)}
        component={component}
        className={className}
        style={style}
      >
        {children}
      </ReactCSSTransitionGroup>
    );
  }
}
