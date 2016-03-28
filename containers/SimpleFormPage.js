import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import merge from 'lodash/merge'
import SimpleForm from '../components/SimpleForm'

import TextInput from '../components/TextInput'
import DINInput from '../components/DINInput'
import ValidatedInput from '../components/ValidatedInput'
import store from '../containers/App'
/*
const submit = ( values, dispatch ) => {
  return new Promise((resolve, reject) => {
    
  })
};
*/
class SimpleFormPage extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this);
  }

  render() {
    const { dins, firstName, lastName } = this.props
    const { submit } = this
    return (
      <div>
      <SimpleForm
        onSubmit={this.submit}
        />
      <div>{lastName}, {firstName}</div>
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

function mapStateToProps(state, ownProps) {
  return merge({}, ownProps)
}

export default connect(mapStateToProps, {
})(SimpleFormPage)
