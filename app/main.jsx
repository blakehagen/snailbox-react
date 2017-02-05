import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import {Provider} from 'mobx-react';
import UserStore from './stores/UserStore';
import App from 'components/App';
import TestRoute from 'components/TestRoute';
import styles from './main.scss';
import utils from './utils/helpers';

const userStore = new UserStore();

ReactDOM.render(
  <div className={styles.appBody}>
    <Provider userStore={userStore}>
      <Router history={hashHistory} onUpdate={verifyUserId}>
        <Route path='/' component={App}/>
        <Route path='/testRoute/:userId' component={TestRoute}/>
        <Route path="*" component={App}>
          <IndexRedirect to="/"/>
        </Route>
      </Router>
    </Provider>
  </div>, document.getElementById('app')
);

function verifyUserId() {
  if (_.includes(window.location.hash, 'testRoute') && !_.includes(window.location.hash, userStore.userId)) {
    utils.changeRoute('/');
  }
}
