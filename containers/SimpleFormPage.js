import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import merge from 'lodash/merge'
import SimpleForm from '../components/SimpleForm'

import TextInput from '../components/TextInput'
import DINInput from '../components/DINInput'
import ValidatedInput from '../components/ValidatedInput'
import store from '../containers/App'

class SimpleFormPage extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this);
  }

  submit() {
    console.dir(this);
  }

  render() {
    const { dins } = this.props
    const { submit } = this
    return (
      <SimpleForm
        onSubmit={this.submit}
        />
    )
  }
}
/*
<ValidatedInput id="test4" minLength="5" size="10" label="Test Label">
  <ValidatedInput id="test6" minLength="5" size="10" />
  <ValidatedInput id="test7" minLength="5" size="10" />
</ValidatedInput>
*/

function mapStateToProps(state, ownProps) {
  return merge({}, ownProps)
}

export default connect(mapStateToProps, {
})(SimpleFormPage)
