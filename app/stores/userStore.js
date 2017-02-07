import _ from 'lodash';
import {observable, action, autorun, reaction} from 'mobx';
import autoBind from 'react-autobind';
import userService from '../services/userService';
import utils from '../utils/helpers';

export default class UserStore {
  @observable user;
  @observable loading = false;

  constructor() {
    autoBind(this);
    this.user   = null;
    this.userId = null;
    // this.loading = false;
    reaction(() => this.loading, () => {
      console.log('this.loading', this.loading);
    });
  }

  @action
  getUser() {
    this.userId = sessionStorage.getItem('userId');
    userService.getUser(this.userId)
      .then(response => {
        if (_.isError(response) || response.status !== 200) {
          utils.changeRoute('/');
        } else {
          this.user = response.data;
        }
      })
      .catch(err => {
        console.log('err -->', err);
      })
  }
}