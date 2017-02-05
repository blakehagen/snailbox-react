import _ from 'lodash';
import React from 'react';
import {observer, inject} from 'mobx-react';
import autoBind from 'react-autobind';
import ActionButton from '../ActionButton';
import utils from '../../../utils/helpers';
import userService from '../../../services/userService';
import styles from './login.scss';

@inject('userStore')
@observer
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state     = {
      email: '',
      password: ''
    };
    this.userStore = this.props.userStore;
    this.user      = this.props.userStore.user;
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
    let loginData = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({email: '', password: ''});

    return userService.login(loginData)
      .then(response => {
        if (_.isError(response)) {
          console.log('error');
          return false;
        } else {
          this.userStore.user = response.user;
          utils.changeRoute(`#/testRoute/${this.userStore.user._id}`)
        }
      })
  }

}