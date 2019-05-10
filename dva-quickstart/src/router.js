import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import CounterPage from './pages/CounterPage';
import UserPage from './pages/UserPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/counter" exact component={CounterPage} />
          <Route path="/user" exact component={UserPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
