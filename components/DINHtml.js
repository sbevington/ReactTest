import React, { Component, PropTypes } from 'react'
import ValidatedInput, {STATUS} from './ValidatedInput'
import TextInput from './TextInput'
import classNames from 'classnames';

export default class DINHtml extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {din} = this.props
    return (
      <span>{din}</span>
  ); }
}

DINHtml.propTypes = {
  din: PropTypes.string.isRequired
}
