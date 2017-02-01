import React from 'react';
import {observer, inject} from 'mobx-react';
import autoBind from 'react-autobind';

@inject('userStore')
@observer
export default class TestRoute extends React.Component {
  constructor(props) {
    console.log('props', props);
    super(props);
    autoBind(this);
    let localUser = JSON.parse(localStorage.getItem('user'));
    this.user = this.props.userStore.user ? this.props.userStore.user : localUser;
    console.log('this.user', this.user);
  }

  render() {
    return (
      <div>
        <p>THIS IS THE testRoute</p>
        <p>{this.user.firstName} {this.user.lastName}</p>
        {/*<p>{this.user.address.city} {this.user.address.state}</p>*/}
      </div>
    )
  }
}