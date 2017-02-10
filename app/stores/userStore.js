import _ from 'lodash';
import {observable, action, autorun, reaction} from 'mobx';
import autoBind from 'react-autobind';
import userService from '../services/userService';
import utils from '../utils/helpers';

export default class UserStore {
  @observable user;

  constructor() {
    autoBind(this);
    this.user   = null;
    this.userId = null;

    this.userId = sessionStorage.getItem('userId');
    if (!this.userId) {
      console.log('no user id here');
    } else {
      userService.getUser(this.userId)
        .then(response => {
          if (_.isError(response) || response.status !== 200) {
            utils.changeRoute('/');
          } else {
            this.user   = response.data;
            this.userId = response.data._id;
          }
        })
        .catch(err => {
          console.log('err -->', err);
          utils.changeRoute('/');
        })
    }
  }

  @action
  verify() {
    userService.verifyUser()
      .then(response => {
        console.log('verify user ---> ', response);
        if (_.isError(response) || !response.success) {
          utils.changeRoute('/');
          sessionStorage.clear();
        }
      })
      .catch(err => {
        console.log('err', err);
        utils.changeRoute('/');
        sessionStorage.clear();
      })
  }
}