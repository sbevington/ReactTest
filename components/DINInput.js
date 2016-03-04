import React, { Component, PropTypes } from 'react'
import FormInput from './FormInput'

export default class DINInput extends FormInput {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Label for={this.props.id} id={"lbl"+this.props.id} required={this.props.required}>{this.props.label}</Label>
      <TextInput id={this.props.id} value={this.props.value} {...this.props}/>
      </div>
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
