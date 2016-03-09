import React, { Component, PropTypes } from 'react'
import TextInput from './TextInput'

export const STATUS = {
  GOOD : "Good",
  BAD : "Bad",
  WARN: "Warn",
  SCAN: "Scan",
  EMPTY: "Empty"
}

export default class ValidatedInput extends Component {
  constructor(props) {
    super(props)
    this.state = {value:"",status:"",required:""};
  }

  isValid(){return this.state.status === STATUS.GOOD;}

  componentWillMount() {
    this.handleChange = this.handleChange.bind(this);
    this.checkFormat(this.props.value);
  }

  componentWillUnmount() {
    /* No Op */
  }

  checkFormat( value ) {
    var val = value || "";
    var status = "";
    var required = this.props.required;
    var min = this.props.minLength || 0;
    var max = this.props.maxLength || val.length;

    if (val.length==0) {
      status = STATUS.EMPTY;
    } else if (val.length < min) {
      status = STATUS.WARN;
    } else if (val.length <= max) {
      status = STATUS.GOOD;
    } else {
      status = STATUS.BAD;
    }
    required = this.props.required && status !== STATUS.GOOD;

    this.setState({value: val, status: status, required: required});
  }

  handleChange( e ) {
    this.checkFormat( e.target.value );
  }

  render() {
    return (
      <TextInput className={"Status"+this.state.status}
            onChange={this.handleChange}
            {...this.props}
            required={this.state.required} />
  ); }
}
