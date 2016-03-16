import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class DIN extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {din, dinflag} = this.props
    return (
      <span className="dinhtml">
      <Link to={'/din/' + din}>
      <span className="din">{din}</span>
      <span className="dinflag">{dinflag}</span>
      </Link>
      </span>
  ); }
}

DIN.propTypes = {
  din: PropTypes.string.isRequired,
  dinflag: PropTypes.string
}
