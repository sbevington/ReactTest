import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import merge from 'lodash/merge'
import { loadDINs } from '../actions'
import DIN from '../components/DIN'
import PCode from '../components/PCode'
import DINList from '../components/DINList'

function loadData(props) {
  props.loadDINs()
}

class DINsPage extends Component {
  constructor(props) {
    super(props)
    this.renderDIN = this.renderDIN.bind(this)
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    loadData(nextProps)
  }

  renderDIN(din) {
    return (
      <div key={din.din+din.dinflag}>
      <DIN din={din.din} dinflag={din.dinflag} />
      <PCode pcode={din.pcode} />
      </div>
    )
  }

  render() {
    const { dins } = this.props
    return (
      <div>
        <DINList renderItem={this.renderDIN}
              items={dins}
              loadingLabel={`Loading DINs...`} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { entities: { dins } } = state
  return merge({}, ownProps, {dins: dins})
}

export default connect(mapStateToProps, {
  loadDINs
})(DINsPage)
