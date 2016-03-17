import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import merge from 'lodash/merge'

import TextInput from '../components/TextInput'
import DINInput from '../components/DINInput'
import ValidatedInput from '../components/ValidatedInput'

class InputTestPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dins } = this.props
    return (
      <div>
        <TextInput id="test1" label="Label Sepa" />
        <DINInput id="test2" label="DIN Test" required={true}/>
        <ValidatedInput id="test3" minLength="5" label="ValidInput" required={false} />
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
})(InputTestPage)
