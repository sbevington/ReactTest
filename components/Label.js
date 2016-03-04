import React, { Component, PropTypes } from 'react'


export default class Label extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label id={this.props.id} htmlFor={this.props.for} className={this.props.required==="true"?"required":""}>{this.props.children}: </label>
  ); }
}

Label.propTypes = {
  required: PropTypes.string,
  id: PropTypes.string,
  for: PropTypes.string,
  children: PropTypes.string.isRequired
}

Label.defaultProps = {
  required: "false"
}
