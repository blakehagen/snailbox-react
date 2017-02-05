import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import {Provider} from 'mobx-react';
import UserStore from './stores/UserStore';
import App from 'components/App';
import TestRoute from 'components/TestRoute';
import styles from './main.scss';

const userStore = new UserStore();

ReactDOM.render(
<div className={styles.appBody}>
    <Provider userStore={userStore}>
      <Router history={hashHistory}>
        <Route path='/' component={App}/>
        <Route path='/testRoute/:userId' component={TestRoute}/>
        <Route path="*" component={App}>
          <IndexRedirect to="/"/>
        </Route>
      </Router>
    </Provider>
  </div>, document.getElementById('app')
);