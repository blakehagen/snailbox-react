import React from 'react';
import autoBind from 'react-autobind';
import ActionButton from '../ActionButton';
import styles from './login.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.setEmail    = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.loginGo     = this.loginGo.bind(this);
  }

  render() {
    return (
      <div>
        <input onChange={this.setEmail} value={this.state.email} type="text" placeholder="Email"/>
        <input onChange={this.setPassword} value={this.state.password} type="password" placeholder="Password"/>
        <ActionButton buttonAction="Login" onClick={this.loginGo}/>
      </div>
    )
  }

  setEmail(e) {
    this.setState({email: e.target.value});
  }

  setPassword(e) {
    this.setState({password: e.target.value});
  }

  loginGo() {
    let loginPackage = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({email: '', password: ''});
    console.log('loginPackage --> ', loginPackage);
    // window.location.href = '#/testRoute';
  }
}