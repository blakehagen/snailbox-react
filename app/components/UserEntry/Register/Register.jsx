import React from 'react';
import autoBind from 'react-autobind';
import ActionButton from '../ActionButton';
import userService from '../../../services/userService';
import utils from '../../../utils/helpers';
import styles from './register.scss';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
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
        <input onChange={this.setFirstName} value={this.state.firstName} type="text" placeholder="First Name"/>
        <input onChange={this.setLastName} value={this.state.lastName} type="text" placeholder="Last Name"/>
        <input onChange={this.setEmail} value={this.state.email} type="text" placeholder="Email"/>
        <input onChange={this.setPassword} value={this.state.password} type="password" placeholder="Password"/>
        <input onChange={this.setConfirmPassword} value={this.state.confirmPassword} type="password"
               placeholder="Confirm Password"/>
        <ActionButton buttonAction="Register" onClick={this.registerGo}/>
        <div className={styles.actionLabel} onClick={this.props.toggleEntry}>
          <p>Login</p>
        </div>
      </div>
    )
  }

  setFirstName(e) {
    this.setState({firstName: e.target.value});
  }

  setLastName(e) {
    this.setState({lastName: e.target.value});
  }

  setEmail(e) {
    this.setState({email: e.target.value});
  }

  setPassword(e) {
    this.setState({password: e.target.value});
  }

  setConfirmPassword(e) {
    this.setState({confirmPassword: e.target.value});
  }

  registerGo() {
    let registerData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    userService.register(registerData)
      .then(response => {
        console.log('response on register component', response);
        utils.changeRoute('#/testRoute');
      });
  }


}