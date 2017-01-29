import React from 'react';
import autoBind from 'react-autobind';
import styles from './login.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
      </div>
    )
  }
}