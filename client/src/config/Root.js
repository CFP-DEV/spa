import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../templates/main/index';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Root;