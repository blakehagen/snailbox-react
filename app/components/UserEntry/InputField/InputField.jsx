import React from 'react';
import styles from './inputField.scss';

export default class InputField extends React.Component {
  render() {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder}/>
    )
  }
}