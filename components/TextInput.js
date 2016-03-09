import React, { Component, PropTypes } from 'react'
import Label from './Label'
import except from 'except'

export default function addPassthroughMethod(component) {
  // TODO: define this as a getter instead of as a fn
  component.prototype.other = function passthrough() {
    const omit = Object.keys(component.propTypes || {}).concat('children')
    return except(this.props, omit)
  }
}

export default class TextInput extends Component {
  constructor(props) {
    super(props)
  }

  passthrough() {
    const omit = Object.keys(this.propTypes || {}).concat('children')
    return except(this.props, omit)
  }

  handleChange(e) {
    /* No Op */
  }

  render() {

    let label= (this.props.label !== "") ?
      <Label for={this.props.id} required={this.props.required}>{this.props.label}</Label> : "";
    var w = (this.props.label !== "") ? "block" : "inline";

    return (
      <span onChange={this.handleChange} style={{display: w}}>
      {label}
      <input {...this.passthrough()} />{this.props.children}
      </span>
  ); }
}

addPassthroughMethod(TextInput);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool.isRequired
}

TextInput.defaultProps = {
  type: "text",
  label: "",
  required: false
}
