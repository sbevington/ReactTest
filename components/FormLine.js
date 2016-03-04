import React, { Component, PropTypes } from 'react'
import Label from './Label'
import TextInput from './TextInput'

export default class FormLine extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Label for={this.props.for} id={"lbl"+this.props.for} required={this.props.required}>{this.props.label}</Label>
      {this.props.children}
      </div>
  ); }
}

FormLine.propTypes = {
  required: PropTypes.string,
  id: PropTypes.string,
}

FormLine.defaultProps = {
  required: "false"
}
