import _ from 'lodash';
import {observable, action, autorun} from 'mobx';
import autoBind from 'react-autobind';
import userService from '../services/userService';

export default class UserStore {
  @observable user;

  constructor() {
    autoBind(this);
    this.user = null;
  }

}