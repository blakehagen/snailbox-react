import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'mobx-react';
import App from 'components/App';

ReactDOM.render(
  <div>
    <Provider>
      <Router history={hashHistory}>
        <Route path='/' component={App}/>
      </Router>
    </Provider>
  </div>, document.getElementById('app')
);
