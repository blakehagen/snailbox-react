import _ from 'lodash';
import React from 'react';
import {observer, inject} from 'mobx-react';
import autoBind from 'react-autobind';
import utils from '../../utils/helpers';


@inject('userStore')
@observer
export default class TestRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.userStore = this.props.userStore;
    this.user      = this.userStore.user ? this.userStore.user : JSON.parse(sessionStorage.getItem('user'));
  }

  render() {
    if (!this.user) {
      utils.changeRoute('/');
      return null;
    }

    return (
      <div>
        <p>THIS IS THE testRoute</p>
        <p>{this.user.firstName} {this.user.lastName}</p>
        <p>{this.user.address.city} {this.user.address.state}</p>
      </div>
    )
  }
}