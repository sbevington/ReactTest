import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import merge from 'lodash/merge'
import {reduxForm} from 'redux-form';
export const fields = ['firstName', 'lastName'];

//import { loadDINs } from '../actions'
// import DIN from '../components/DIN'

class SimpleForm extends Component {

  render() {
    const {
      fields: {firstName, lastName},
      handleSubmit,
      resetForm,
      submitting
      } = this.props;
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...firstName}/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type="text" placeholder="Last Name" {...lastName}/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

SimpleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};


export default reduxForm({
  form: 'simple',
  fields
})(SimpleForm);
