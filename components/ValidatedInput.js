import React, { Component, PropTypes } from 'react'
import TextInput from './TextInput'

export const STATUS = {
  GOOD : "Good",
  BAD : "Bad",
  WARN: "Warn",
  SCAN: "Scan",
  EMPTY: "Empty"
}

export default class ValidatedInput extends TextInput {
  constructor(props) {
    super(props)
//    this.setState({ status: checkFormat( props.value ) });
  }

  componentWillReceiveProps(nextProps) {
  //  this.setState({ status: checkFormat( nextProps.value ) });
  }

  handleChange() {

  }
  checkFormat( value ) {
      return STATUS.GOOD;
  }

  render() {
    return (
      <TextInput id={this.props.id} value={this.props.value} {...this.props}/>
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
