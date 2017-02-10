import _ from 'lodash';
import React from 'react';
import {reaction} from 'mobx';
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
    this.userStore.verify();
    this.state = {
      user: _.get(this.userStore, 'user', null)
    }
  }

  componentDidMount() {
    reaction(() => this.userStore.user, user => {
      if (!_.isUndefined(user)) {
        console.log('user in reaction ---> ', user);
        this.setState({
          user: user
        });
      }
    }, true);
  }

  render() {
    let user = this.state.user;
    if (!user) {
      return null;
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