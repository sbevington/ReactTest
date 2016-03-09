import React, { Component, PropTypes } from 'react'
import ValidatedInput, {STATUS} from './ValidatedInput'
import TextInput from './TextInput'
import classNames from 'classnames';

export default class DINInput extends ValidatedInput {
  constructor(props) {
    super(props)
    var self = this;
  }

/*  checkFormat( value ) {
    return STATUS.EMPTY;
  } */
  render() {
    return (
      <TextInput className={classNames("Status"+this.state.status,"DIN")}
            onChange={this.handleChange}
            {...this.props}
            required={this.state.required}>
        <TextInput className={"Status"+this.state.status}
              id={this.props.id + "flag"}
              size="2"
              required={this.state.required} />
      </TextInput>
  ); }
}

DINInput.defaultProps = {
  scanprefix: "="
}
