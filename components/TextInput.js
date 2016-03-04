import React, { Component, PropTypes } from 'react'


export default class TextInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input {...this.props} />
  ); }
}

TextInput.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
}

TextInput.defaultProps = {
  type: "text",
  value: "",
  className: ""
}
