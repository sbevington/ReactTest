import React, { Component, PropTypes } from 'react'
import {reduxForm} from 'redux-form';
export const fields = [ 'firstName', 'lastName' ];

class SimpleForm extends Component {

  render() {
    const {
      fields: {firstName, lastName},
      handleSubmit
      } = this.props;
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="Firstsss Name" {...firstName} />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type="text" placeholder="Last Name" {...lastName}  />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

SimpleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'simple',
  fields
})(SimpleForm);
