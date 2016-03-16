import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import TextInput from '../components/TextInput'
import DINInput from '../components/DINInput'
import DINsPage from '../containers/DINsPage'
import ValidatedInput from '../components/ValidatedInput'
import { resetErrorMessage } from '../actions'
import { Link } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`)
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    const { children, inputValue } = this.props
    return (
      <div>
      <Link to="/dinlist">DIN List</Link>
      <TextInput id="test1" label="Label Sepa" />
      <DINInput id="test2" label="DIN Test" required={true}/>
      <ValidatedInput id="test3" minLength="5" label="ValidInput" required={false} />
      <br />
        {this.renderErrorMessage()}
      <br />
        {children}
      </div>
    )
  }
}
/*
<ValidatedInput id="test4" minLength="5" size="10" label="Test Label">
  <ValidatedInput id="test6" minLength="5" size="10" />
  <ValidatedInput id="test7" minLength="5" size="10" />
</ValidatedInput>
*/
App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1)
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)
