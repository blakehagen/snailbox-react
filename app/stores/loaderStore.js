import _ from 'lodash';
import {observable} from 'mobx';
import autoBind from 'react-autobind';

export default class LoaderStore {
  @observable loading;

  constructor() {
    autoBind(this);
    this.loading = false;
  }
}