import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import merge from 'lodash/merge'
import SimpleForm from './SimpleForm'

const submit = ( values, dispatch ) => {
  console.dir( values );
  console.dir( dispatch );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!['john', 'paul', 'george', 'ringo'].includes(values.firstName)) {
        reject({firstName: 'Bad First Name', _error: 'Bad Name!'});
      } else if (!['starr', 'bob'].includes(values.firstName)) {
        reject({firstName: 'Bad Last Name', _error: 'Bad Name!'});
      } else {
        //dispatch(showResults(values));
        resolve();
      }
    }, 1000); // simulate server latency
  })
};

class SimpleFormPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dins, firstName, lastName } = this.props
    const sub = new submit()
    return (
      <div>
      <SimpleForm handleSubmit={submit}/>
      </div>
    )
  }
}
export default SimpleFormPage

function mapStateToProps(state, ownProps) {
  return merge({}, ownProps)
}

export default connect(mapStateToProps, {
})(SimpleFormPage)
