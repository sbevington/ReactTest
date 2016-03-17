import React, { Component, PropTypes } from 'react'

export default class DINList extends Component {
  render() {
    const {
      isFetching, items, renderItem, loadingLabel
    } = this.props

    const isEmpty = !items || !Array.isArray( items ) || items.length === 0 
    if (isEmpty && isFetching) {
      return <h2><i>{loadingLabel}</i></h2>
    }

    if (isEmpty && !isFetching) {
      return <h1><i>Nothing here!</i></h1>
    }

    return (
      <div>
        {items.map(renderItem)}
      </div>
    )
  }
}

DINList.propTypes = {
  loadingLabel: PropTypes.string.isRequired,
  renderItem: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

DINList.defaultProps = {
  isFetching: true,
  loadingLabel: 'Loading...'
}
