import React, { Component, PropTypes } from 'react'


export default class Label extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label id={"lbl"+this.props.for} htmlFor={this.props.for} className={this.props.required==true?"required":""}>{this.props.children}: </label>
  ); }
}

Label.propTypes = {
  required: PropTypes.bool,
  for: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Label.defaultProps = {
  required: false
}
