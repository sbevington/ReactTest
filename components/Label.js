import React, { Component, PropTypes } from 'react'

export default class Label extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label id={this.props.id} className={this.props.required==="true"?"required":""}>{this.props.text}: </label>
    );
  }
}

Label.propTypes = {
  required: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string.isRequired
}
