import _ from 'lodash';
import React from 'react';
import {observer, inject} from 'mobx-react';
import autoBind from 'react-autobind';

@inject('userStore')
@observer
export default class TestRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.userStore = this.props.userStore;
  }

  render() {
    let user = _.get(this.userStore, 'user');

    if (!user) {
      this.userStore.getUser();
      return null;
    }

    return (
      <div>
        <p>THIS IS THE testRoute</p>
        <p>{user.firstName} {user.lastName}</p>
        {/*<p>{this.user.address.city} {this.user.address.state}</p>*/}
      </div>
    )
  }
}