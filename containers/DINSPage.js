import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import merge from 'lodash/merge'
import { loadDINs } from '../actions'
import DINHtml from '../components/DINHtml'
import PCodeHtml from '../components/PCodeHtml'
import DINList from '../components/DINList'

function loadData(props) {
  props.loadDINs()
}
var x = 0

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
      <div>
      <DINHtml din={din.din} dinflag={din.dinflag} />
      <PCodeHtml pcode={din.pcode} />
      </div>
    )
  }

  render() {
    const { dins } = this.props
    console.log("DINsPage")
    console.dir( this.props )
    console.dir( dins )
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
  x+=1
  console.log("map")
  console.dir( state )
  console.dir( dins )
  console.dir( merge({}, ownProps, {dins: dins}) )
  if ( x > 10 ) return null
  return merge({}, ownProps, {dins: dins})
}

export default connect(mapStateToProps, {
  loadDINs
})(DINsPage)
