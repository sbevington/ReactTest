import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadDINs } from '../actions'
import DINHtml from '../components/DINHtml'
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
      <DINHtml din={din} />
    )
  }

  render() {
    const { dins } = this.props
    console.dir( this.props )
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
  const { dins } = state

  return { dins }
}

export default connect(mapStateToProps, {
  loadDINs
})(DINsPage)
