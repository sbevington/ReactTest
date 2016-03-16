import React, { Component, PropTypes } from 'react'

export default class DINHtml extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {din, dinflag} = this.props
    return (
      <span className="dinhtml">
      <span className="din">{din}</span>
      <span className="dinflag">{dinflag}</span>
      </span>
  ); }
}

DINHtml.propTypes = {
  din: PropTypes.string.isRequired,
  dinflag: PropTypes.string
}
