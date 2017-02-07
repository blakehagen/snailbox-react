import _ from 'lodash';
import React from 'react';
import {observer, inject} from 'mobx-react';
import autoBind from 'react-autobind';
import ActionButton from '../ActionButton';
import Spinner from '../../Common/Spinner';
import utils from '../../../utils/helpers';
import userService from '../../../services/userService';
import styles from './register.scss';

@inject('userStore')
@observer
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state     = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false
    };
    this.userStore = this.props.userStore;
    this.user      = this.props.userStore.user;
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Spinner/> : (
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
          )}
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

  validateInputs() {
    if (_.isEmpty(this.state.firstName) || _.isEmpty(this.state.lastName) || _.isEmpty(this.state.email) || _.isEmpty(this.state.password) || _.isEmpty(this.state.confirmPassword)) {
      console.log('all fields required');
      return false;
    }
    if (this.state.password !== this.state.confirmPassword) {
      console.log('passwords do not match');
      return false;
    }
    return true;
  }

  registerGo() {
    if (!this.validateInputs()) {
      return false;
    }

    this.setState({loading: true});

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
        console.log('response', response);
        if (_.isError(response)) {
          console.log('error');
          this.setState({loading: false});
          return false;
        } else {
          this.userStore.user = response.user;
          utils.changeRoute(`#/testRoute/${this.userStore.user._id}`);
        }
      })
  }


}