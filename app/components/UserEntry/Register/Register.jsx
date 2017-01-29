import React from 'react';
import autoBind from 'react-autobind';
import styles from './register.scss';

export default class UserEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password"/>
      </div>
    )
  }

}