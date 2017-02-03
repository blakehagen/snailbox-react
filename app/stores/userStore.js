import _ from 'lodash';
import {observable, action, autorun} from 'mobx';
import autoBind from 'react-autobind';
import userService from '../services/userService';

export default class UserStore {
  @observable user;
  @observable userId;


  constructor() {
    autoBind(this);
    this.user      = null;
    this.userToken = null;
    this.userId    = null;
  }

  @action
  loginUser(loginData) {
    return userService.login(loginData)
      .then(response => {
        console.log('response on userStore loginUser function --> ', response);
        this.user      = response.user;
        this.userId    = response.user._id;
        console.log(this.userId);
        this.userToken = response.token;
        return response.user;
      })
      .catch(err => {
        return err;
      })
  }

  @action
  getUser() {
    userService.getUser(this.userId, this.userToken)
      .then(response => {
        console.log('response on userStore getUser function--> ', response);
        this.user      = response.user;
        this.userId    = response.user._id;
        this.userToken = response.token;
        console.log('this.userId', this.userId);
      })
      .catch(err => {
        return err;
      })
  }
}