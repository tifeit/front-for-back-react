import React, { Component } from 'react'
import styles from './Btn.styl'
import PropTypes from 'prop-types'

export default class Btn extends Component {
  render() {
    const { className, secondary, ...otherProps } = this.props
    return (
      <button
        {...otherProps}
        className={`${secondary ? styles.secondary : styles.primary} ${className} shadow`}
      >
        {this.props.children}
      </button>
    )
  }
}

Btn.propTypes = { secondary: PropTypes.bool }
Btn.defaultProps = { secondary: false }
