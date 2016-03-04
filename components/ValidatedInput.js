import React, { Component, PropTypes } from 'react'
import TextInput from './TextInput'

export default class ValidatedInput extends TextInput {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TextInput className="StatusGood" id={this.props.id} value={this.props.value} {...this.props}/>
  ); }
}

ValidatedInput.propTypes = {
  required: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.string.isRequired
}

ValidatedInput.defaultProps = {
  scanprefix: "="
}
