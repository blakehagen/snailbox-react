import _ from 'lodash';
import React from 'react';
import {observer, inject} from 'mobx-react';
import autoBind from 'react-autobind';
import userService from '../../services/userService';
import utils from '../../utils/helpers';

@inject('userStore')
@observer
export default class TestRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.userStore = this.props.userStore;
    this.userStore.verify();
  }

  render() {
    let user = _.get(this.userStore, 'user');
    if (!user) {
      this.userStore.getUser();
      return null;
    }

    if (user) {
      if (this.props.routeParams.userId !== user._id) {
        utils.changeRoute('/');
        return null;
      }
    }

    return (
      <div>
        <p>THIS IS THE testRoute</p>
        <p>{user.firstName} {user.lastName}</p>
        <p>{user.address.city} {user.address.state}</p>
      </div>
    )
  }
}