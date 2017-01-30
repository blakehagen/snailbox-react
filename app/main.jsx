import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'mobx-react';
import App from 'components/App';
import TestRoute from 'components/TestRoute';
import styles from './main.scss';

ReactDOM.render(
  <div className={styles.appBody}>
    <Provider>
      <Router history={hashHistory}>
        <Route path='/' component={App}/>
        <Route path='/testRoute' component={TestRoute}/>
      </Router>
    </Provider>
  </div>, document.getElementById('app')
);
