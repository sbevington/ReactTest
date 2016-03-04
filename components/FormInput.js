import React, { Component, PropTypes } from 'react'
import Label from './Label'
import TextInput from './TextInput'

export default class FormInput extends Component {
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

FormInput.propTypes = {
  required: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.string.isRequired
}

FormInput.defaultProps = {
  required: "false"
}
