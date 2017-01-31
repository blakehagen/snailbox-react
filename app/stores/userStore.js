import {observable, action} from 'mobx';
import autoBind from 'react-autobind';

export default class UserStore {
  @observable user;

  constructor() {
    autoBind(this);
    this.user = {};
  }
}