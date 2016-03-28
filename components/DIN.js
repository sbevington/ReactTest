import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class DIN extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {din, dinflag, link} = this.props
    const fin = din.substring(0, 5)
    const year = din.substring(5, 7)
    const series = din.substring(7, 13)
    const check = din.substring(13, 14)
    const route = "/din/" + din
    return (
      <span className="din">
      <DinLink to={route} link={link}>
        <span className="din_fin">{fin}</span>
        <span className="din_year">{year}</span>
        <span className="din_series">{series}</span>
        <span className="din_flag">{dinflag}</span>
        <span className="din_c">{check}</span>
      </DinLink>
      </span>
    ); }
}

DIN.propTypes = {
  din: PropTypes.string.isRequired,
  dinflag: PropTypes.string,
  link: PropTypes.bool
}

DIN.defaultProps = {
  link: true
}


class DinLink extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {to, link, children} = this.props

    if (link)
      return ( <Link to={to}>{children}</Link> )
    else
      return ( <span>{children}</span> )
  }
}
