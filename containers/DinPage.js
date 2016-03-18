import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import merge from 'lodash/merge'
import { loadDINs } from '../actions'
import DIN from '../components/DIN'

class DINPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { din } = this.props.params
    return (
      <DIN din={din} />
    )
  }
}

export default DINPage
