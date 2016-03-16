import React, { Component, PropTypes } from 'react'

export default class PCodeHtml extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {pcode} = this.props
    const code = pcode.substring(0,5)
    const iu = pcode.substring(5,6)
    const split = pcode.substring(6,8)
    return (
      <span className="pcode">
      <span className="pcode_code">{code}</span>
      <span className="pcode_iu">{iu}</span>
      <span className="pcode_split">{split}</span>
      </span>
  ); }
}

PCodeHtml.propTypes = {
  pcode: PropTypes.string.isRequired
}
