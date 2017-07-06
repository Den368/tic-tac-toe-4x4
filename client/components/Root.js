import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Styles
import style from './style.css'

export default class Root extends Component {
  render () {
    return (
      <div className={style.normal}>
        {this.props.children}
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.node
}
