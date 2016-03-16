import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadDINs } from '../actions/ibbis'
import DINHtml from '../components/DINHtml'
import DINList from '../components/DINList'

function loadData(props) {
  props.loadDINs()
}

class DINPage extends Component {
  constructor(props) {
    super(props)
    this.renderDINs = this.renderDINs.bind(this)
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fullName !== this.props.fullName) {
      loadData(nextProps)
    }
  }

  renderDINs(din) {
    return (
      <DINHtml din={din} />
    )
  }

  render() {
    const { dins } = this.props
    return (
      <div>
        <DINList renderItem={this.renderDINs}
              items={dins}
              loadingLabel={`Loading DINs...`} />
      </div>
    )
  }
}

DINPage.propTypes = {
  repo: PropTypes.object,
  fullName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.object,
  stargazers: PropTypes.array.isRequired,
  stargazersPagination: PropTypes.object,
  loadRepo: PropTypes.func.isRequired,
  loadStargazers: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  const { login, name } = ownProps.params
  const {
    pagination: { stargazersByRepo },
    entities: { users, repos }
  } = state

  const fullName = `${login}/${name}`
  const stargazersPagination = stargazersByRepo[fullName] || { ids: [] }
  const stargazers = stargazersPagination.ids.map(id => users[id])

  return {
    fullName,
    name,
    stargazers,
    stargazersPagination,
    repo: repos[fullName],
    owner: users[login]
  }
}

export default connect(mapStateToProps, {
  loadDINs
})(DINPage)
