import React, { Component, PropTypes } from 'react'
import TextInput from './TextInput'

export default class DINInput extends TextInput {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TextInput className="StatusGood" id={this.props.id} value={this.props.value} {...this.props}/>
  ); }
}

DINInput.propTypes = {
  required: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.string.isRequired
}

DINInput.defaultProps = {
  scanprefix: "="
}
